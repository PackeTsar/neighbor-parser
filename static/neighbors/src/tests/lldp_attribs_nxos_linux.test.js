const getAttrib = require('../attribs')
const sample = require('./samples/lldp_nxos_linux')

test('Get localintf from block', () => {
  expect(getAttrib.lldpLocalIntf(sample.sample)).toBe('Eth1/1')
})

test('Get sysname from block', () => {
  expect(getAttrib.lldpSysName(sample.sample)).toBe('CUMULUSBOX')
})

test('Get remoteintf from block', () => {
  expect(getAttrib.lldpRemoteIntf(sample.sample)).toBe('swp1')
})

test('Get remoteintfid from block', () => {
  expect(getAttrib.lldpRemoteIntfId(sample.sample)).toBe('swp1')
})

test('Get platform from block', () => {
  expect(getAttrib.lldpPlatform(sample.sample)).toBe(null)
})

test('Get description from block', () => {
  expect(getAttrib.lldpDescription(sample.sample)).toBe('Cumulus Linux version 4.3.0 running on DELL S4048ON')
})

test('Get ttl from block', () => {
  expect(getAttrib.lldpTtl(sample.sample)).toBe('110 seconds')
})

test('Get sysid from block', () => {
  expect(getAttrib.lldpSysId(sample.sample)).toBe('0000.0000.0001')
})

test('Get syscap from block', () => {
  expect(getAttrib.lldpSysCap(sample.sample)).toBe('B, R')
})

test('Get sysid from block', () => {
  expect(getAttrib.lldpAddresses(sample.sample)).toStrictEqual([
    '10.0.0.1',
    'fe80::1'
  ])
})
