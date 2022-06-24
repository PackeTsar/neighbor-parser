const getAttrib = require('../attribs')
const sample = require('./samples/cdp_ios_wap')

test('Get localintf from WAP block', () => {
  expect(getAttrib.cdpLocalIntf(sample.sample)).toBe('GigabitEthernet1/0/1')
})

test('Get sysname from WAP block', () => {
  expect(getAttrib.cdpSysName(sample.sample)).toBe('WAPNAME')
})

test('Get remoteintf from WAP block', () => {
  expect(getAttrib.cdpRemoteIntf(sample.sample)).toBe('GigabitEthernet0')
})

test('Get remoteintfid from WAP block', () => {
  expect(getAttrib.cdpRemoteIntfId(sample.sample)).toBe(null)
})

test('Get platform from WAP block', () => {
  expect(getAttrib.cdpPlatform(sample.sample)).toBe('cisco AIR-AP3802I-B-K9')
})

test('Get description from WAP block', () => {
  expect(getAttrib.cdpDescription(sample.sample)).toBe(
`Cisco AP Software, ap3g3-k9w8 Version: 8.10.151.0
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 2014-2015 by Cisco Systems, Inc.`
  )
})

test('Get ttl from WAP block', () => {
  expect(getAttrib.cdpTtl(sample.sample)).toBe('10 sec')
})

test('Get sysid from WAP block', () => {
  expect(getAttrib.cdpSysId(sample.sample)).toBe(null)
})

test('Get syscap from WAP block', () => {
  expect(getAttrib.cdpSysCap(sample.sample)).toBe('Router Trans-Bridge')
})

test('Get addresses from WAP block', () => {
  expect(getAttrib.cdpAddresses(sample.sample)).toStrictEqual([
    '10.10.10.10',
    '2001::1',
    'FE80::42D2',
    '10.10.10.10'
  ])
})
