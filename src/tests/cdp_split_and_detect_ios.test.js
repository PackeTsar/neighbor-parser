const split = require('../split_detect')
const sample = require('./samples/cdp_ios_multiple_various')

test('Split sample CDP output into blocks and detect each block type', () => {
  // Split the blocks and check the length of the result "blocks" array
  const blocks = split.split(sample.sample)
  expect(blocks.length).toBe(13)
  // Map the array of blocks to an array of detected types and check the result
  const types = blocks.map(block => split.detect(block))
  expect(types).toStrictEqual([
    null, 'cdp', 'cdp',
    'cdp', 'cdp', 'cdp',
    'cdp', 'cdp', 'cdp',
    'cdp', 'cdp', 'cdp',
    null
  ])
})
