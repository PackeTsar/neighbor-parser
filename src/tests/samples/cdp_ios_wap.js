const sample = `
Device ID: WAPNAME
Entry address(es):
  IP address: 10.10.10.10
  IPv6 address: 2001::1  (global unicast)
  IPv6 address: FE80::42D2  (link-local)
Platform: cisco AIR-AP3802I-B-K9,  Capabilities: Router Trans-Bridge
Interface: GigabitEthernet1/0/1,  Port ID (outgoing port): GigabitEthernet0
Holdtime : 10 sec

Version :
Cisco AP Software, ap3g3-k9w8 Version: 8.10.151.0
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 2014-2015 by Cisco Systems, Inc.

advertisement version: 2
Duplex: full
Power drawn: 29.900 Watts
Power request id: 10082, Power management id: 2
Power request levels are:29900 15400 0 0 0
Management address(es):
  IP address: 10.10.10.10
`

module.exports = { sample }
