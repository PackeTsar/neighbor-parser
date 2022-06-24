const split = require('../split_detect')
const sample = require('./samples/cdp_ios_empty_blocks')

test('Split four CDP blocks and count', () => {
  expect(split.split(sample.fourBlocks).length).toBe(4)
})

test('Split six CDP blocks and count', () => {
  expect(split.split(sample.sixBlocks).length).toBe(6)
})
