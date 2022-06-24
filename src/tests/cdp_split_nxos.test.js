const split = require('../split_detect')
const sample = require('./samples/cdp_nxos_empty_blocks')

test('Split thirteen CDP blocks and count', () => {
  expect(split.split(sample.thirteenBlocks).length).toBe(13)
})

test('Check split block content', () => {
  expect(split.split(sample.thirteenBlocks)[3]).toBe('\n...content... (block 4)\n')
})
