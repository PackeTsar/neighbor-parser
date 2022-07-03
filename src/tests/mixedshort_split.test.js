const split = require('../split_detect')
const cdpIos = require('./samples/cdpshort_ios')
const cdpIosxe = require('./samples/cdpshort_iosxe')
const cdpNxos = require('./samples/cdpshort_nxos')
const lldpIos = require('./samples/lldpshort_ios')
const lldpIosxe = require('./samples/lldpshort_iosxe')
const lldpNxos = require('./samples/lldpshort_nxos')
const nxosDetail = require('./samples/lldp_nxos_empty_blocks')

const sampleArray = [
  cdpIos,
  cdpIosxe,
  cdpNxos,
  lldpIos,
  lldpIosxe,
  lldpNxos
]

test('Check insertion of delineators above table headers', () => {
  sampleArray.forEach(function (sample) {
    const modifiedSample = split.insertDelineators(sample.sample)
    expect(modifiedSample.includes('--------\n')).toBe(true)
  })
})

test('Check insertion DOES affect NXOS LLDP detail output', () => {
  const modifiedSample = split.insertDelineators(nxosDetail.sample)
  expect(modifiedSample.includes('--------\n')).toBe(true)
})

test('Check all short samples render only one match', () => {
  sampleArray.forEach(function (sample) {
    expect(split.getShortBlocks(sample.sample).length).toBe(1)
  })
})

test('Check appended samples render a match for each additional', () => {
  let sample = ''
  for (let i = 0; i < sampleArray.length; i++) {
    sample = sample + sampleArray[i].sample
    expect(split.getShortBlocks(sample).length).toBe(i + 1)
  }
})

test('Check that NXOS "show lldp neighbor detail" does not match', () => {
  expect(split.getShortBlocks(nxosDetail.sample)).toBe(null)
})
