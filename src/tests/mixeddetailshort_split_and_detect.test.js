const split = require('../split_detect')
const cdpIos = require('./samples/cdpshort_ios')
const cdpIosxe = require('./samples/cdpshort_iosxe')
const cdpNxos = require('./samples/cdpshort_nxos')
const lldpIos = require('./samples/lldpshort_ios')
const lldpIosxe = require('./samples/lldpshort_iosxe')
const lldpNxos = require('./samples/lldpshort_nxos')
const lldpNxosWS = require('./samples/lldpshort_nxos_whitespace')
const cdpDetail = require('./samples/cdp_ios_multiple_various')
const lldpDetail = require('./samples/lldp_ios_multiple_various')

const sampleArray = [
  cdpIos, //     +1  CDP-SHORT
  cdpIosxe, //   +1  CDP-SHORT
  cdpNxos, //    +1  CDP-SHORT
  cdpDetail, //  +11 CDP
  lldpDetail, // +6  LLDP
  lldpIos, //    +1  LLDP-SHORT
  lldpIosxe, //  +1  LLDP-SHORT
  lldpNxos, //     +1  LLDP-SHORT
  lldpNxosWS //   +1  LLDP
]

let appendedSample = ''
sampleArray.forEach(function (sample) {
  appendedSample = appendedSample + sample.sample
})

test('Split and detect mixed short and details samples', () => {
  const blocks = split.split(appendedSample)
  expect(blocks.length).toBe(27)
  const types = blocks.map(block => split.detect(block))
  expect(types).toStrictEqual([
    null,
    'CDP-SHORT', 'CDP-SHORT', 'CDP-SHORT',
    'CDP', 'CDP', 'CDP',
    'CDP', 'CDP', 'CDP',
    'CDP', 'CDP', 'CDP',
    'CDP', 'CDP',
    null,
    'LLDP', 'LLDP', 'LLDP',
    'LLDP', 'LLDP', 'LLDP',
    null,
    'LLDP-SHORT', 'LLDP-SHORT', 'LLDP-SHORT',
    'LLDP-SHORT'
  ])
})
