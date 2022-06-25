
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
  split,
  detect,
  splitDetect,
  cleanArray
}
