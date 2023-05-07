const attribs = require('../short_attribs')
const cdpIos = require('./samples/cdpshort_ios')
const cdpIosxe = require('./samples/cdpshort_iosxe')
const cdpNxos = require('./samples/cdpshort_nxos')
const lldpIos = require('./samples/lldpshort_ios')
const lldpIosxe = require('./samples/lldpshort_iosxe')
const lldpNxos = require('./samples/lldpshort_nxos')
const cdpIosNoBottom = require('./samples/cdpshort_ios_no_bottom')

const sampleArray = [
  cdpIos,
  cdpIosNoBottom,
  cdpIosxe,
  cdpNxos,
  lldpIos,
  lldpIosxe,
  lldpNxos
]

function hasTopExtra (block) {
  if (block.match(/show (cdp|lldp) neighbors/)) {
    return true
  } else {
    return false
  }
}

function hasBottomExtra (block) {
  if (block.match(/(displayed[ ]?: [0-9]+|\S+(#|>))/)) {
    return true
  } else {
    return false
  }
}

test('Trim and check a short CDP table', () => {
  sampleArray.forEach(function (sample) {
    expect(hasTopExtra(sample.sample)).toBe(true)
    expect(hasBottomExtra(sample.sample)).toBe(true)
    const trimmed = attribs.trimTable(sample.sample)
    expect(hasTopExtra(trimmed)).toBe(false)
    expect(hasBottomExtra(trimmed)).toBe(false)
  })
})

test('Trim and parse CDP tables', () => {
  sampleArray.slice(0, 4).forEach(function (sample) {
    const neighbors = attribs.cdpParseTable(sample.sample)
    expect(neighbors).toStrictEqual(sample.structured)
  })
})

test('Trim and parse LLDP tables', () => {
  sampleArray.slice(4).forEach(function (sample) {
    const neighbors = attribs.lldpParseTable(sample.sample)
    expect(neighbors).toStrictEqual(sample.structured)
  })
})
