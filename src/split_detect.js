
function getShortBlocks (block) {
  /*
  Regex to match "show cdp neighbors" or "show lldp neighbors" output, but not
  the "detail" output.

  Explanation:
    Commands without the "detail" keyword produce headers like
    ("Device ID      Local Interfce...") for the table data which can be
    matched. BUT, on NXOS, the output of "show lldp neighbors detail" ALSO
    produces a stupid header for no obvious reason, so I have to exclude that
    type of output in the regex. Luckily, the NXOS LLDP "detail" output
    includes an empty line right after the useless header. This regex exploits
    that extra empty line and excludes any output which has it.

  Regex Breakdown:
    - Match "Device ID" or "Device-ID"
    - Match an unknown number of spaces between "ID" and "Local"
    - Match "Intf" or "Intrfce" right after "Local"
    - Match (non-greedy) anything except a new line up until "Port ID"
      - "Port ID" is the last column in the header
    - Match a single newline after "Port ID", then next character must be
        something other than a newline
    - Non-greedily match all characters until either:
      1. "Total entries displayed" is encountered, or
      2. "Total cdp entries displayed" is encountered
  */
  return block.match(/Device( |-)ID[ ]*Local Int(r)?f(ce)?[^\n]*?Port ID[ ]*\n[^\n].*?Total (cdp )?entries displayed/gs)
};

function insertDelineators (block) {
  /*
  Insert delineation strings into the block where "short" tables are detected.
    Also insert where the NXOS LLDP detail block exists to ensure it splits
    off from a short block. Notice the absense of the '[^\n]*?Port ID...'
     qualifier which will exclude any NXOS LLDP detail block.
  */
  return block.replace(/(\nDevice( |-)ID[ ]*Local Int(r)?f(ce)?)/gs, '--------$1')
}

function split (block) {
  /*
  Split blocks of neighbors apart from each other using hyphens or double
    blank lines.
  */
  // Insert delineators before headers of "short" blocks so they split properly
  block = insertDelineators(block)
  // Use this regex to perform the split (split consumes the matched content)
  const re = /-----*|\n\n\n/
  // Return an array of blocks split in the delineators
  return block.split(re)
};

function detect (block) {
  /*
  Detect the type of block being processed.
  */
  if (getShortBlocks(block)) {
    if (block.match(/Platform /)) {
      return 'CDP-SHORT'
    } else if (block.match(/Local Intf /)) {
      return 'LLDP-SHORT'
    } else {
      return null
    }
  } else if (block.match(/Platform:/)) {
    return 'CDP' /* c8 ignore next */
  } else if (block.match(/System Name:/)) {
    return 'LLDP'
  } else {
    return null
  };
};

function splitDetect (block) {
  /*
  Split the source block into an array of blocks, then detect the type of each
    block in the array.
  */
  const blocks = split(block)
  // Map the blocks array to an array of objects like [{type: "CDP", data: ...}]
  return blocks.map(block => ({ type: detect(block), data: block }))
};

function cleanArray (blockObjArray) {
  /*
  Clean an array returned from the splitDetect() function by removing any
    objects in it which have a null type.
  */
  const result = []
  for (let i = 0; i < blockObjArray.length; i++) {
    if (blockObjArray[i].type) {
      result.push(blockObjArray[i])
    }
  };
  return result
};

module.exports = {
  getShortBlocks,
  insertDelineators,
  split,
  detect,
  splitDetect,
  cleanArray
}
