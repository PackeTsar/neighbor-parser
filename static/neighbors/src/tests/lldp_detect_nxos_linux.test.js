const split = require('../split_detect')
const sample = require('./samples/lldp_nxos_linux')

test('Detect CDP Linux block', () => {
  expect(split.detect(sample.sample)).toBe('lldp')
})
