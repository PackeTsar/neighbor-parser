const getAttrib = require('../attribs')
const sample = require('./samples/cdp_ios_wap')

test('Get addresses from WAP block', () => {
  expect(getAttrib.cdpAddresses(sample.sample)).toStrictEqual([
    '10.10.10.10',
    '2001::1',
    'FE80::42D2'
  ])
})
