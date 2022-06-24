const getAttrib = require('../attribs')
const sample = require('./samples/cdp_nxos_switch')

test('Get localintf from WAP block', () => {
  expect(getAttrib.cdpLocalIntf(sample.sample)).toBe('Ethernet1/1')
})

test('Get sysname from WAP block', () => {
  expect(getAttrib.cdpSysName(sample.sample)).toBe('HOSTNAME.example.com')
})

test('Get remoteintf from WAP block', () => {
  expect(getAttrib.cdpRemoteIntf(sample.sample)).toBe('TenGigabitEthernet1/0/1')
})

test('Get remoteintfid from WAP block', () => {
  expect(getAttrib.cdpRemoteIntfId(sample.sample)).toBe(null)
})

test('Get platform from WAP block', () => {
  expect(getAttrib.cdpPlatform(sample.sample)).toBe('cisco WS-C2960X-48FPD-L')
})

test('Get description from WAP block', () => {
  expect(getAttrib.cdpDescription(sample.sample)).toBe(
`Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(7)E4, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2021 by Cisco Systems, Inc.
Compiled Mon 08-Mar-21 11:26 by prod_rel_team`
  )
})

test('Get ttl from WAP block', () => {
  expect(getAttrib.cdpTtl(sample.sample)).toBe('179 sec')
})

test('Get sysid from WAP block', () => {
  expect(getAttrib.cdpSysId(sample.sample)).toBe(null)
})

test('Get syscap from WAP block', () => {
  expect(getAttrib.cdpSysCap(sample.sample)).toBe('Switch IGMP Filtering')
})

test('Get addresses from WAP block', () => {
  expect(getAttrib.cdpAddresses(sample.sample)).toStrictEqual([
    '10.10.10.1',
    '2601::1',
    'fe80::1',
    '10.10.10.2'
  ])
})
