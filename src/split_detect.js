
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
  return block.match(/Device( |-)ID[ ]*Local Int(r)?f(ce)?[^\n]*?Port ID\n[^\n].*?Total (cdp )?entries displayed/gs)
};

function split (block) {
  const re = /-----*|\n\n\n/
  return block.split(re)
};

function detect (block) {
  if (block.match(/Platform:/)) {
    return 'CDP'
  } else if (block.match(/System Name:/)) {
    return 'LLDP'
  } else {
    return null
  };
};

function splitDetect (block) {
  const blocks = split(block)
  // Map the blocks array to an array of objects like [{type: "CDP", data: ...}]
  return blocks.map(block => ({ type: detect(block), data: block }))
};

/*
Clean an array returned from the splitDetect() function by removing any objects
  in it which have a null type.
*/
function cleanArray (blockObjArray) {
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
  split,
  detect,
  splitDetect,
  cleanArray
}
