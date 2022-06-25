function simpleSearch (regex, block) {
  const re = new RegExp(regex)
  const match = re.exec(block)
  if (match) {
    return match[2]
  } else {
    return null
  }
};

function customSearch (re, index, block) {
  const match = re.exec(block) /* c8 ignore next */
  if (match) {
    return match[index]
  } else {
    return null
  }
};

// Local Interface
function cdpLocalIntf (block) {
  return simpleSearch('(Interface: *)(.*),', block) /* c8 ignore next */
};

function lldpLocalIntf (block) {
  const re = /(Local (Intf|Port id): *)(.*)/
  return customSearch(re, 3, block)
};

// System Name
function cdpSysName (block) {
  return simpleSearch('(Device ID: *)(.*)', block)
};

function lldpSysName (block) {
  return simpleSearch('(System Name: *)(.*)', block)
};

// Remote Interface Name
function cdpRemoteIntf (block) {
  return simpleSearch('(Port ID \\(outgoing port\\): *)(.*)', block)
};

function lldpRemoteIntf (block) {
  return simpleSearch('(Port Description: *)(.*)', block)
};

// Remote Interface ID (LLDP Only)
function cdpRemoteIntfId (block) {
  return null
};

function lldpRemoteIntfId (block) {
  return simpleSearch('(Port id: *)(.*)', block)
};

// Platform / Model (CDP Only)
function cdpPlatform (block) {
  return simpleSearch('(Platform: *)(.*),', block)
};

function lldpPlatform (block) {
  return null
};

// System Description
function cdpDescription (block) {
  const re = /Version *:\n(.*?)(?=\n\n)/s
  return customSearch(re, 1, block)
};

function lldpDescription (block) {
  // If there is a line return directly after "System Description:"
  if (block.match(/System Description:\n/)) {
    const re = /System Description:\n(.*?)(?=\n\n)/s
    return customSearch(re, 1, block)
  } else {
    return simpleSearch('(System Description: )(.*)', block)
  };
};

// Time to Live
function cdpTtl (block) {
  return simpleSearch('(Holdtime *: )(.*)', block)
};

function lldpTtl (block) {
  return simpleSearch('(Time remaining: )(.*)', block)
};

// System ID / MAC Address (LLDP Only)
function cdpSysId (block) {
  return null
};

function lldpSysId (block) {
  return simpleSearch('(Chassis id: )(.*)', block)
};

// System Capabilities
function cdpSysCap (block) {
  return simpleSearch('(Capabilities: )(.*)', block)
};

function lldpSysCap (block) {
  return simpleSearch('(System Capabilities: )(.*)', block)
};

// Addresses
function cdpAddresses (block) {
  const match = block.match(/(?<=(IP|IPv4|IPv6) (A|a)ddress: )(\S*)/gm)
  if (match) {
    return [...new Set(match)] // Dedupe and return the array
  } else {
    return []
  }
};

function lldpAddresses (block) {
  const match = block.match(/(?<=(Management Address|IP|IPV6): )(\S*)/gm)
  if (match) {
    return [...new Set(match)] // Dedupe and return the array
  } else {
    return []
  }
};

const funcMap = {
  cdp: {
    localIntf: cdpLocalIntf,
    sysName: cdpSysName,
    remoteIntf: cdpRemoteIntf,
    remoteIntfId: cdpRemoteIntfId,
    platform: cdpPlatform,
    description: cdpDescription,
    ttl: cdpTtl,
    sysId: cdpSysId,
    sysCap: cdpSysCap,
    addresses: cdpAddresses
  },
  lldp: {
    localIntf: lldpLocalIntf,
    sysName: lldpSysName,
    remoteIntf: lldpRemoteIntf,
    remoteIntfId: lldpRemoteIntfId,
    platform: lldpPlatform,
    description: lldpDescription,
    ttl: lldpTtl,
    sysId: lldpSysId,
    sysCap: lldpSysCap,
    addresses: lldpAddresses
  }
}

module.exports = {
  cdpLocalIntf,
  lldpLocalIntf,
  cdpSysName,
  lldpSysName,
  cdpRemoteIntf,
  lldpRemoteIntf,
  cdpRemoteIntfId,
  lldpRemoteIntfId,
  cdpPlatform,
  lldpPlatform,
  cdpDescription,
  lldpDescription,
  cdpTtl,
  lldpTtl,
  cdpSysId,
  lldpSysId,
  cdpSysCap,
  lldpSysCap,
  cdpAddresses,
  lldpAddresses,
  funcMap
}
