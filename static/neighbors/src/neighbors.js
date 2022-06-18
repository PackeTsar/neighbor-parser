const split = require('./split_detect')
const getAttrib = require('./attribs')

function getNeighbors (block) {
  const result = []
  const blockObjs = split.cleanArray(split.splitDetect(block))
  for (let i = 0; i < blockObjs.length; i++) {
    const data = blockObjs[i].data
    const type = blockObjs[i].type
    result.push({
      type, // Shorthand for "type: type"
      localIntf: getAttrib.funcMap[type].localIntf(data),
      sysName: getAttrib.funcMap[type].sysName(data),
      remoteIntf: getAttrib.funcMap[type].remoteIntf(data),
      remoteIntfId: getAttrib.funcMap[type].remoteIntfId(data),
      platform: getAttrib.funcMap[type].platform(data),
      description: getAttrib.funcMap[type].description(data),
      ttl: getAttrib.funcMap[type].ttl(data),
      sysId: getAttrib.funcMap[type].sysId(data),
      sysCap: getAttrib.funcMap[type].sysCap(data),
      addresses: getAttrib.funcMap[type].addresses(data)
    })
  };
  return result
};

module.exports = { getNeighbors }
