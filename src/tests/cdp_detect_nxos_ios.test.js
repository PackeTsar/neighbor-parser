const split = require('../split_detect')
const sample = require('./samples/cdp_nxos_switch')

test('Detect CDP switch block', () => {
  expect(split.detect(sample.sample)).toBe('CDP')
})
