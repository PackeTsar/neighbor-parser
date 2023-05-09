const getAttrib = require('../attribs')
const sample = require('./samples/cdp_iosxr')

test('Get localintf from IOSXR block', () => {
  expect(getAttrib.cdpLocalIntf(sample.sample)).toBe('MgmtEth0/RSP0/CPU0/0')
})

test('Get sysname from IOSXR block', () => {
  expect(getAttrib.cdpSysName(sample.sample)).toBe('SW1')
})

test('Get remoteintf from IOSXR block', () => {
  expect(getAttrib.cdpRemoteIntf(sample.sample)).toBe('GigabitEthernet0/9')
})

test('Get remoteintfid from IOSXR block', () => {
  expect(getAttrib.cdpRemoteIntfId(sample.sample)).toBe(null)
})

test('Get platform from IOSXR block', () => {
  expect(getAttrib.cdpPlatform(sample.sample)).toBe('cisco WS-C3560X-24')
})

test('Get description from IOSXR block', () => {
  expect(getAttrib.cdpDescription(sample.sample)).toBe(
`Cisco IOS Software, C3560E Software (C3560E-UNIVERSALK9-M),
Version 15.0(2)SE7, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2014 by Cisco Systems, Inc.
Compiled Thu 23-Oct-14 13:27 by prod_rel_team`
  )
})

test('Get ttl from IOSXR block', () => {
  expect(getAttrib.cdpTtl(sample.sample)).toBe('169 sec')
})

test('Get sysid from IOSXR block', () => {
  expect(getAttrib.cdpSysId(sample.sample)).toBe(null)
})

test('Get syscap from IOSXR block', () => {
  expect(getAttrib.cdpSysCap(sample.sample)).toBe('Switch IGMP ')
})

test('Get addresses from IOSXR block', () => {
  expect(getAttrib.cdpAddresses(sample.sample)).toStrictEqual([
    '10.10.20.11'
  ])
})
