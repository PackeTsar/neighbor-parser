const split = require('./split_detect')
const getAttrib = require('./attribs')
const getShortAttrib = require('./short_attribs')

function shorten (intfName) {
  /*
  Create a shortened name for an interface by truncating the alpha characters
  */
  if (intfName.length < 6) { // If the name is already 5 chars or less
    return intfName // Use it, no need to shorten
  }
  // Grab the beginining alpha characters
  const fullAlpha = intfName.match(/^([A-Za-z ]+)/)
  // Swap out the full alpha with just the first two characters
  const result = intfName.replace(fullAlpha[0], fullAlpha[0].slice(0, 2))
  return result
}

function getNeighbors (block) {
  let result = []
  const blockObjs = split.cleanArray(split.splitDetect(block))
  blockObjs.forEach(function (blockObj) {
    const data = blockObj.data
    const type = blockObj.type
    if (type.includes('SHORT')) {
      const neighborArray = getShortAttrib.funcMap[type](data)
      neighborArray.forEach(function (n) {
        n.type = type
        n.localIntfShort = shorten(n.localIntf)
        n.remoteIntfShort = shorten(n.remoteIntf)
      })
      result = result.concat(neighborArray)
    } else {
      result.push({
        type, // Shorthand for "type: type"
        localIntf: getAttrib.funcMap[type].localIntf(data),
        localIntfShort: shorten(getAttrib.funcMap[type].localIntf(data)),
        sysName: getAttrib.funcMap[type].sysName(data),
        remoteIntf: getAttrib.funcMap[type].remoteIntf(data),
        remoteIntfShort: shorten(getAttrib.funcMap[type].remoteIntf(data)),
        remoteIntfId: getAttrib.funcMap[type].remoteIntfId(data),
        platform: getAttrib.funcMap[type].platform(data),
        description: getAttrib.funcMap[type].description(data),
        ttl: getAttrib.funcMap[type].ttl(data),
        sysId: getAttrib.funcMap[type].sysId(data),
        sysCap: getAttrib.funcMap[type].sysCap(data),
        addresses: getAttrib.funcMap[type].addresses(data)
      })
    }
  })
  return result
};

module.exports = { getNeighbors, shorten }
