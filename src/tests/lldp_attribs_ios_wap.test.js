const getAttrib = require('../attribs')
const sample = require('./samples/lldp_ios_wap')

test('Get localintf from WAP block', () => {
  expect(getAttrib.lldpLocalIntf(sample.sample)).toBe('Gi1/0/1')
})

test('Get sysname from WAP block', () => {
  expect(getAttrib.lldpSysName(sample.sample)).toBe('WAPNAME')
})

test('Get remoteintf from WAP block', () => {
  expect(getAttrib.lldpRemoteIntf(sample.sample)).toBe('eth0')
})

test('Get remoteintfid from WAP block', () => {
  expect(getAttrib.lldpRemoteIntfId(sample.sample)).toBe('0')
})

test('Get platform from WAP block', () => {
  expect(getAttrib.lldpPlatform(sample.sample)).toBe(null)
})

test('Get description from WAP block', () => {
  expect(getAttrib.lldpDescription(sample.sample)).toBe(
`Cisco AP Software, ap3g3-k9w8 Version: 8.10.151.0
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2021 by Cisco Systems, Inc.
Compiled Thu Mar  4 10:15:59 GMT 2021 by aut`
  )
})

test('Get ttl from WAP block', () => {
  expect(getAttrib.lldpTtl(sample.sample)).toBe('99 seconds')
})

test('Get sysid from WAP block', () => {
  expect(getAttrib.lldpSysId(sample.sample)).toBe('0000.0000.0001')
})

test('Get sysid from WAP block', () => {
  expect(getAttrib.lldpSysCap(sample.sample)).toBe('B')
})

test('Get sysid from WAP block', () => {
  expect(getAttrib.lldpAddresses(sample.sample)).toStrictEqual([
    '10.10.10.10',
    '2001::1'
  ])
})
