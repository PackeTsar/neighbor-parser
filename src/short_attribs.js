const split = require('./split_detect')

/******************************************************************************
CDP/LLDP "SHORT" FUNCTIONS
******************************************************************************/

function trimTable (block) {
  /*
  Trim the table down to just header, data, footer... and remove line returns
    from the rows
  */
  // Trim top and bottom excess off of table
  let trimmed = split.getShortBlocks(block)[0]
  // Remove line-wrapped rows and make each row equal one device
  trimmed = trimmed.replace(/\n[ ]{4}/gs, '')
  // Remove header row
  trimmed = trimmed.replace(/Device( |-)ID.*?Port ID\n/gs, '')
  // Remove trailing data
  trimmed = trimmed.replace(/[\n]*Total (cdp )?entries displayed.*/gs, '')
  return trimmed
}

function cdpParseTable (block) {
  /*
  Parse an UNTRIMMED CDP table into a list of neighbors with attribs in each
  */
  const result = []
  const trimmed = trimTable(block)
  const blockArray = trimmed.split('\n')
  blockArray.forEach(function (row) {
    // Grab the sysName and clean it from the row
    const sysName = row.match(/^\S*/)
    let cleanedRow = row.replace(sysName[0], '')
    // Grab the localIntf and clean it from the row
    const localIntf = cleanedRow.match(/^[ ]*(\S*\s\S*)/)
    cleanedRow = cleanedRow.replace(localIntf[0], '')
    // Grab the ttl and clean it from the row
    const ttl = cleanedRow.match(/^[ ]*([0-9]*)/)
    cleanedRow = cleanedRow.replace(ttl[0], '')
    // Grab the sysCap and clean it from the row
    const sysCapObj = cleanedRow.match(/^[ ]*([A-Za-z] )+/g) // letter followed by a space
    if (sysCapObj) { // It's possible there are no capabilities listed
      const sysCapLong = sysCapObj[0] // '       A B C d'
      const sysCapTrimmed = sysCapLong.trim() // 'A B C d'
      var sysCap = sysCapTrimmed.split(' ') // Create the array ['A', 'B'...]
      cleanedRow = cleanedRow.replace(sysCapLong, '')
    } else {
      sysCap = []
    }
    // Grab the localIntf and clean it from the row
    const platform = cleanedRow.match(/^[ ]*(\S*)/)
    cleanedRow = cleanedRow.replace(platform[0], '')
    // Add this neighbor to the result
    result.push({
      sysName: sysName[0],
      localIntf: localIntf[1].trim(),
      ttl: ttl[1].trim(),
      sysCap,
      platform: platform[1],
      remoteIntf: cleanedRow.trim(),
      remoteIntfId: null,
      description: null,
      sysId: null,
      addresses: []
    })
  })
  return result
}

function lldpParseTable (block) {
  /*
  Parse an UNTRIMMED LLDP table into a list of neighbors with attribs in each
  */
  const result = []
  // Trim the top and bottom off of the table
  const topBottomTrimmed = split.getShortBlocks(block)[0]
  // If the rows DO NOT wrap and overflow to the next line
  if (!topBottomTrimmed.match(/\n[ ]{4}/)) {
    // Grab the header from the table
    const header = block.match(/Device ID.*?Port ID/)[0]
    // Check how many characters before the "Local Intf" columns starts
    const localIntfOffset = header.match(/Local/).index
    // Grab a fully trimmed version of the table (no header or footer)
    const trimmed = trimTable(block)
    const rowArray = [] // Will write modified rows to this array
    // For each row in the table
    trimmed.split('\n').forEach(function (row) {
      // Insert four spaces inbetween the merged sysName and localIntf values
      //     This will be used to detect transitions between columns
      rowArray.push(row.slice(0, localIntfOffset) + '    ' + row.slice(localIntfOffset))
    })
    var trimmedBlock = rowArray.join('\n')
  } else { // If the lines DO wrap and overflow to the next line, treat regular
    trimmedBlock = trimTable(block)
  }
  const blockArray = trimmedBlock.split('\n')
  blockArray.forEach(function (row) {
    // Grab the sysName and clean it from the row
    const sysName = row.match(/^\S*/)
    let cleanedRow = row.replace(sysName[0], '')
    // Grab the localIntf and clean it from the row
    const localIntf = cleanedRow.match(/^[ ]*(\S*)/)
    cleanedRow = cleanedRow.replace(localIntf[0], '')
    // Grab the ttl and clean it from the row
    const ttl = cleanedRow.match(/^[ ]*([0-9]*)/)
    cleanedRow = cleanedRow.replace(ttl[0], '')
    // Grab the sysCap and clean it from the row
    const sysCapObj = cleanedRow.match(/^[ ]*([A-Za-z,]+)/)
    if (sysCapObj) { // It's possible there are no capabilities listed
      const sysCapLong = sysCapObj[0] // '       A,B,C,d' or '    ABCd'
      const sysCapTrimmed = sysCapLong.trim() // 'A,B,C,d' or 'ABCd'
      const sysCapCommas = sysCapTrimmed.split('') // Create the array ['A', 'B'...]
      var sysCap = sysCapCommas.filter(a => a !== ',') // Remove comma entries in the array
      cleanedRow = cleanedRow.replace(sysCapLong, '')
    } else {
      sysCap = []
    }
    // Add this neighbor to the result
    result.push({
      sysName: sysName[0],
      localIntf: localIntf[1].trim(),
      ttl: ttl[1].trim(),
      sysCap,
      remoteIntf: cleanedRow.trim(),
      remoteIntfId: null,
      platform: null,
      description: null,
      sysId: null,
      addresses: []
    })
  })
  return result
}

const funcMap = {
  'CDP-SHORT': cdpParseTable,
  'LLDP-SHORT': lldpParseTable
}

module.exports = {
  trimTable,
  cdpParseTable,
  lldpParseTable,
  funcMap
}
