const getAttrib = require('../attribs')
const sample = require('./samples/cdp_vmware_no_addresses')

test('Get addresses from block', () => {
  expect(getAttrib.cdpAddresses(sample.sample)).toStrictEqual([])
})
