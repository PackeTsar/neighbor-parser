const split = require('../split_detect')
const sample = require('./samples/mixed_ios_multiple')

test('Split sample appended CDP+LLDP output into blocks and detect each block type', () => {
  // Split the blocks and check the length of the result "blocks" array
  const blocks = split.split(sample.appendedSample)
  expect(blocks.length).toBe(20)
  // Map the array of blocks to an array of detected types and check the result
  const types = blocks.map(block => split.detect(block))
  expect(types).toStrictEqual([
    null, 'CDP', 'CDP',
    'CDP', 'CDP', 'CDP',
    'CDP', 'CDP', 'CDP',
    'CDP', 'CDP', 'CDP',
    null, 'LLDP', 'LLDP',
    'LLDP', 'LLDP', 'LLDP',
    'LLDP', null
  ])
})

test('Split sample interspersed CDP+LLDP output into blocks and detect each block type', () => {
  // Split the blocks and check the length of the result "blocks" array
  const blocks = split.split(sample.interspersedSample)
  expect(blocks.length).toBe(39)
  // Map the array of blocks to an array of detected types and check the result
  const types = blocks.map(block => split.detect(block))
  expect(types).toStrictEqual([
    null, 'LLDP', 'LLDP',
    'LLDP', 'LLDP', 'LLDP',
    'LLDP', null, 'CDP',
    'CDP', 'CDP', 'CDP',
    'CDP', 'CDP', 'CDP',
    'CDP', 'CDP', 'CDP',
    'CDP', null, 'LLDP',
    'LLDP', 'LLDP', 'LLDP',
    'LLDP', 'LLDP', null,
    'CDP', 'CDP', 'CDP',
    'CDP', 'CDP', 'CDP',
    'CDP', 'CDP', 'CDP',
    'CDP', 'CDP', null
  ])
})

test('Split and detect to array of objects', () => {
  const result = split.cleanArray(split.splitDetect(sample.appendedSample))
  expect(result[0].type).toBe('CDP')
  expect(result[15].type).toBe('LLDP')
})
