const iosSample = require('./cdpshort_ios')
const iosxeSample = require('./cdpshort_iosxe')
const nxosSample = require('./cdpshort_nxos')

// Combine the CDP and LLDP samples
const appendedSample = iosSample.sample + iosxeSample.sample + nxosSample.sample

module.exports = { appendedSample }
