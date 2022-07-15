const iosSample = require('./lldpshort_ios')
const iosxeSample = require('./lldpshort_iosxe')
const nxosSample = require('./lldpshort_nxos')

// Combine the CDP and LLDP samples
const appendedSample = iosSample.sample + iosxeSample.sample + nxosSample.sample

module.exports = { appendedSample }
