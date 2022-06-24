const split = require('../split_detect')
const sample = require('./samples/lldp_ios_wap')

test('Detect CDP WAP block', () => {
  expect(split.detect(sample.sample)).toBe('lldp')
})
