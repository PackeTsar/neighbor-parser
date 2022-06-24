const split = require('../split_detect')
const sample = require('./samples/lldp_nxos_empty_blocks')

test('Split fourteen LLDP blocks and count', () => {
  expect(split.split(sample.fourteenBlocks).length).toBe(14)
})

test('Check split block content', () => {
  expect(split.split(sample.fourteenBlocks)[3]).toBe('...content... (block 4)')
})
