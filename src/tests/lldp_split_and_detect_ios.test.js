const split = require('../split_detect')
const sample = require('./samples/lldp_ios_multiple_various')

test('Split sample LLDP output into blocks and detect each block type', () => {
  // Split the blocks and check the length of the result "blocks" array
  const blocks = split.split(sample.sample)
  expect(blocks.length).toBe(8)
  // Map the array of blocks to an array of detected types and check the result
  const types = blocks.map(block => split.detect(block))
  expect(types).toStrictEqual([
    null, 'lldp', 'lldp',
    'lldp', 'lldp', 'lldp',
    'lldp', null
  ])
})
