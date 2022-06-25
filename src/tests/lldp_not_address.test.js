const getAttrib = require('../attribs')
const sample = require('./samples/lldp_nxos_not_address')

test('Get addresses from block', () => {
  expect(getAttrib.lldpAddresses(sample.sample)).toStrictEqual(['10.0.0.1'])
})
