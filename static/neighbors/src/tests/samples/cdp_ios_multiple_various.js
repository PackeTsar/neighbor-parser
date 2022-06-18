const sample = `
SWITCH#show cdp neighbors detail
-------------------------
Device ID: INT2.example.com
Entry address(es):
  IP address: 10.0.0.14
Platform: cisco ASR1001-X,  Capabilities: Router IGMP
Interface: GigabitEthernet2/0/10,  Port ID (outgoing port): GigabitEthernet0
Holdtime : 131 sec

Version :
Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Wed 20-Mar-19 08:02 by mcpre

advertisement version: 2
Duplex: full
Management address(es):
  IP address: 10.0.0.14

-------------------------
Device ID: INT1.example.com
Entry address(es):
  IP address: 10.0.0.13
Platform: cisco ASR1001-X,  Capabilities: Router IGMP
Interface: GigabitEthernet1/0/10,  Port ID (outgoing port): GigabitEthernet0
Holdtime : 150 sec

Version :
Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Wed 20-Mar-19 08:02 by mcpre

advertisement version: 2
Duplex: full
Management address(es):
  IP address: 10.0.0.13

-------------------------
Device ID: CORE2.example.com(SERIAL)
Entry address(es):
  IP address: 10.0.16.3
Platform: N9K-C93180YC-EX,  Capabilities: Router Switch IGMP CVTA phone port
Interface: TenGigabitEthernet2/0/1,  Port ID (outgoing port): Ethernet1/46
Holdtime : 147 sec

Version :
Cisco Nexus Operating System (NX-OS) Software, Version 9.3(8)

advertisement version: 2
Native VLAN: 1
Duplex: full

-------------------------
Device ID: ESX9.example.com
Entry address(es):
Platform: VMware ESXi,  Capabilities: Switch
Interface: GigabitEthernet1/0/13,  Port ID (outgoing port): vmnic0
Holdtime : 127 sec

Version :
Releasebuild-19482537

advertisement version: 2
VTP Management Domain: ''
Duplex: full

-------------------------
Device ID: ESX9.example.com
Entry address(es):
Platform: VMware ESXi,  Capabilities: Switch
Interface: GigabitEthernet2/0/13,  Port ID (outgoing port): vmnic1
Holdtime : 127 sec

Version :
Releasebuild-19482537

advertisement version: 2
VTP Management Domain: ''
Duplex: full

-------------------------
Device ID: CORE1.example.com(SERIAL)
Entry address(es):
  IP address: 10.0.16.2
Platform: N9K-C93180YC-EX,  Capabilities: Router Switch IGMP CVTA phone port
Interface: TenGigabitEthernet1/0/1,  Port ID (outgoing port): Ethernet1/46
Holdtime : 147 sec

Version :
Cisco Nexus Operating System (NX-OS) Software, Version 9.3(8)

advertisement version: 2
Native VLAN: 1
Duplex: full

-------------------------
Device ID: ROUTER1.example.com
Entry address(es):
  IP address: 10.0.0.20
  IPv6 address: 2001:0DB8:0:6400::20  (global unicast)
  IPv6 address: FE80::5250  (link-local)
Platform: Cisco CISCO2901/K9,  Capabilities: Router Source-Route-Bridge Switch
Interface: GigabitEthernet1/0/17,  Port ID (outgoing port): GigabitEthernet0/0
Holdtime : 177 sec

Version :
Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.7(3)M5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Fri 27-Sep-19 05:10 by prod_rel_team

advertisement version: 2
VTP Management Domain: ''
Duplex: full
Management address(es):
  IP address: 10.0.0.20

-------------------------
Device ID: ROUTER2.example.com
Entry address(es):
  IP address: 10.0.0.26
  IPv6 address: 2001:0DB8:0:6400::26  (global unicast)
  IPv6 address: FE80::AC30  (link-local)
Platform: Cisco CISCO2901/K9,  Capabilities: Router Source-Route-Bridge Switch
Interface: GigabitEthernet2/0/17,  Port ID (outgoing port): GigabitEthernet0/0
Holdtime : 165 sec

Version :
Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.7(3)M7, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2020 by Cisco Systems, Inc.
Compiled Tue 01-Sep-20 15:17 by prod_rel_team

advertisement version: 2
VTP Management Domain: ''
Duplex: full
Management address(es):
  IP address: 10.0.0.26

-------------------------
Device ID: ROUTER3.example.com
Entry address(es):
  IP address: 10.0.0.19
  IPv6 address: 2001:0DB8:0:6400::19  (global unicast)
  IPv6 address: FE80::7350  (link-local)
Platform: Cisco CISCO2901/K9,  Capabilities: Router Source-Route-Bridge Switch
Interface: GigabitEthernet1/0/14,  Port ID (outgoing port): GigabitEthernet0/0
Holdtime : 160 sec

Version :
Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.7(3)M5, RELEASE SOFTWARE (fc1)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Fri 27-Sep-19 05:10 by prod_rel_team

advertisement version: 2
VTP Management Domain: ''
Duplex: full
Management address(es):
  IP address: 10.0.0.19

-------------------------
Device ID: MDS1.example.com(SERIAL)
Entry address(es):
  IP address: 10.0.0.68
Platform: DS-C9148-16P-K9,  Capabilities: Router Switch CVTA phone port
Interface: GigabitEthernet1/0/11,  Port ID (outgoing port): mgmt0
Holdtime : 149 sec

Version :
Cisco Nexus Operating System (NX-OS) Software, Version 6.2(1)

advertisement version: 2
Duplex: full
Management address(es):
  IP address: 10.0.0.68

-------------------------
Device ID: MDS2.example.com(SERIAL)
Entry address(es):
  IP address: 10.0.0.69
Platform: DS-C9148-16P-K9,  Capabilities: Router Switch CVTA phone port
Interface: GigabitEthernet2/0/11,  Port ID (outgoing port): mgmt0
Holdtime : 133 sec

Version :
Cisco Nexus Operating System (NX-OS) Software, Version 6.2(1)

advertisement version: 2
Duplex: full
Management address(es):
  IP address: 10.0.0.69


Total cdp entries displayed : 11
SWITCH#
`

module.exports = { sample }
