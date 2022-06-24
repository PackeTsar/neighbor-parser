const split = require('../split_detect')
const sample = require('./samples/cdp_ios_wap')

test('Detect CDP WAP block', () => {
  expect(split.detect(sample.sample)).toBe('cdp')
})
