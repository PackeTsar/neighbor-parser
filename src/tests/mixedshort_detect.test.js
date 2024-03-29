const split = require('../split_detect')
const cdpIos = require('./samples/cdpshort_ios')
const cdpIosxe = require('./samples/cdpshort_iosxe')
const cdpNxos = require('./samples/cdpshort_nxos')
const lldpIos = require('./samples/lldpshort_ios')
const lldpIosxe = require('./samples/lldpshort_iosxe')
const lldpNxos = require('./samples/lldpshort_nxos')
const lldpNxosWS = require('./samples/lldpshort_nxos_whitespace')
const nxosDetail = require('./samples/lldp_nxos_empty_blocks')
const cdpIosNoBottom = require('./samples/cdpshort_ios_no_bottom')

const sampleArray = [
  cdpIos,
  cdpIosxe,
  cdpNxos,
  lldpIos,
  lldpIosxe,
  lldpNxos,
  lldpNxosWS,
  nxosDetail
]

let appendedSample = ''
sampleArray.forEach(function (sample) {
  appendedSample = appendedSample + sample.sample
})

test('Perform detect on all short samples and a detail one', () => {
  const blocks = split.split(appendedSample)
  // 7 short blocks, + 14 blocks from the NXOS detail block
  expect(blocks.length).toBe(7 + 14 + 1)
  const types = blocks.map(block => split.detect(block))
  expect(types).toStrictEqual([
    null,
    'CDP-SHORT', 'CDP-SHORT', 'CDP-SHORT',
    'LLDP-SHORT', 'LLDP-SHORT', 'LLDP-SHORT',
    'LLDP-SHORT',
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null
  ])
})

test('Perform detect on old style CDP table with no bottom', () => {
  const blocks = split.split(cdpIosNoBottom.sample)
  expect(blocks.length).toBe(2)
  const types = blocks.map(block => split.detect(block))
  expect(types).toStrictEqual([null, 'CDP-SHORT'])
})
