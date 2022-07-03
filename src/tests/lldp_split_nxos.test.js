const split = require('../split_detect')
const sample = require('./samples/lldp_nxos_empty_blocks')

test('Split fourteen LLDP blocks and count', () => {
  // Should be 15 instead of 14 because of the delineator insertion above the
  //     useless header.
  expect(split.split(sample.sample).length).toBe(15)
})

test('Check split block content', () => {
  // Offset by 1 beacuse of the extra delineator inserted
  expect(split.split(sample.sample)[3]).toBe('...content... (block 3)')
})
