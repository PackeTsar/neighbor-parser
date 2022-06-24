const sample = `
Device ID:HOSTNAME.example.com

Interface address(es): 3
    IPv4 Address: 10.10.10.1
    IPv6 Address: 2601::1
    IPv6 Address: fe80::1
Platform: cisco WS-C2960X-48FPD-L, Capabilities: Switch IGMP Filtering
Interface: Ethernet1/1, Port ID (outgoing port): TenGigabitEthernet1/0/1
Holdtime: 179 sec

Version:
Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(7)E4, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2021 by Cisco Systems, Inc.
Compiled Mon 08-Mar-21 11:26 by prod_rel_team

Advertisement Version: 2

Native VLAN: 1
Duplex: full
Mgmt address(es):
    IPv4 Address: 10.10.10.2
Local Interface MAC: 00:00:00:00:00:01
Remote Interface MAC: 00:00:00:00:00:00
`

module.exports = { sample }
