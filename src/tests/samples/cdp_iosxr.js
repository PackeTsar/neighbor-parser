const sample = `
!
!
-------------------------
Device ID: SW1
SysName : 
Entry address(es): 
  IPv4 address: 10.10.20.11
Platform: cisco WS-C3560X-24,  Capabilities: Switch IGMP 
Interface: MgmtEth0/RSP0/CPU0/0
Port ID (outgoing port): GigabitEthernet0/9
Holdtime : 169 sec

Version :
Cisco IOS Software, C3560E Software (C3560E-UNIVERSALK9-M),
Version 15.0(2)SE7, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2014 by Cisco Systems, Inc.
Compiled Thu 23-Oct-14 13:27 by prod_rel_team

advertisement version: 2
Protocol Hello:  OUI=0x00000C, Protocol ID=0x0112; payload len=27, value=00000000FFFFFFFF010221FF000000000000ACF2C58A8E00FF00004A0011C000
VTP Management Domain: 'TTT'
Native VLAN: 1700
Duplex: full

-------------------------
!
!
`

module.exports = { sample }
