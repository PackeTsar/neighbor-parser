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
  Parse a trimmed CDP table into a list of neighbors with attribs in each
  */
  const result = []
  const blockArray = block.split('\n')
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
      remoteIntf: cleanedRow.trim()
    })
  })
  return result
}

module.exports = {
  trimTable,
  cdpParseTable
}
