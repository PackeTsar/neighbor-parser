const cdpSample = require('./cdp_ios_multiple_various')
const lldpSample = require('./lldp_ios_multiple_various')

// Combine the CDP and LLDP samples
const appendedSample = cdpSample.sample + lldpSample.sample
const interspersedSample = lldpSample.sample + cdpSample.sample + lldpSample.sample + cdpSample.sample

module.exports = { appendedSample, interspersedSample }

/*
Fully parsed should be:

[
  {
    type: 'lldp',
    localIntf: 'Te1/0/1',
    sysName: 'CORE1.example.com',
    remoteIntf: 'SW1:Te1/0/1',
    remoteIntfId: 'Ethernet1/46',
    platform: null,
    description: 'Cisco Nexus Operating System (NX-OS) Software 9.3(8)\n' +
      'TAC support: http://www.cisco.com/tac\n' +
      'Copyright (c) 2002-2021, Cisco Systems, Inc. All rights reserved.',
    ttl: '111 seconds',
    sysId: '0000.0000.0001',
    sysCap: 'B,R',
    addresses: null
  },
  {
    type: 'lldp',
    localIntf: 'Gi1/0/10',
    sysName: 'INT1.example.com',
    remoteIntf: 'OOB Management Link',
    remoteIntfId: 'Gi0',
    platform: null,
    description: 'Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Wed 20-Mar-19 08:02 by mcpre',
    ttl: '116 seconds',
    sysId: '0000.0000.0002',
    sysCap: 'B,R',
    addresses: [ '10.0.0.13', '2001:0DB8::1' ]
  },
  {
    type: 'lldp',
    localIntf: 'Gi2/0/2',
    sysName: 'STOR02-ct1',
    remoteIntf: 'eth1',
    remoteIntfId: '0000.0000.1003',
    platform: null,
    description: 'FlashArray FA-m20r2 STOR02-ct1 202000000000+asdfasdf-53x',
    ttl: '3 seconds',
    sysId: '0000.0000.0003',
    sysCap: 'B,W,R,S',
    addresses: null
  },
  {
    type: 'lldp',
    localIntf: 'Gi2/0/1',
    sysName: 'STOR02-ct1',
    remoteIntf: 'eth0',
    remoteIntfId: '0000.0000.1004',
    platform: null,
    description: 'FlashArray FA-m20r2 STOR02-ct1 202000000000+asdfasdf-53x',
    ttl: '3 seconds',
    sysId: '0000.0000.0004',
    sysCap: 'B,W,R,S',
    addresses: null
  },
  {
    type: 'lldp',
    localIntf: 'Gi2/0/10',
    sysName: 'INT2.example.com',
    remoteIntf: 'OOB Management Link',
    remoteIntfId: 'Gi0',
    platform: null,
    description: 'Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Wed 20-Mar-19 08:02 by mcpre',
    ttl: '103 seconds',
    sysId: '0000.0000.0005',
    sysCap: 'B,R',
    addresses: [ '10.0.0.14', '2001:0DB8::2' ]
  },
  {
    type: 'lldp',
    localIntf: 'Te2/0/1',
    sysName: 'CORE2.example.com',
    remoteIntf: 'SW1:Te1/0/2',
    remoteIntfId: 'Ethernet1/46',
    platform: null,
    description: 'Cisco Nexus Operating System (NX-OS) Software 9.3(8)\n' +
      'TAC support: http://www.cisco.com/tac\n' +
      'Copyright (c) 2002-2021, Cisco Systems, Inc. All rights reserved.',
    ttl: '96 seconds',
    sysId: '0000.0000.0006',
    sysCap: 'B,R',
    addresses: null
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet2/0/10',
    sysName: 'INT2.example.com',
    remoteIntf: 'GigabitEthernet0',
    remoteIntfId: null,
    platform: 'cisco ASR1001-X',
    description: 'Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Wed 20-Mar-19 08:02 by mcpre',
    ttl: '131 sec',
    sysId: null,
    sysCap: 'Router IGMP',
    addresses: [ '10.0.0.14', '10.0.0.14' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet1/0/10',
    sysName: 'INT1.example.com',
    remoteIntf: 'GigabitEthernet0',
    remoteIntfId: null,
    platform: 'cisco ASR1001-X',
    description: 'Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Wed 20-Mar-19 08:02 by mcpre',
    ttl: '150 sec',
    sysId: null,
    sysCap: 'Router IGMP',
    addresses: [ '10.0.0.13', '10.0.0.13' ]
  },
  {
    type: 'cdp',
    localIntf: 'TenGigabitEthernet2/0/1',
    sysName: 'CORE2.example.com(SERIAL)',
    remoteIntf: 'Ethernet1/46',
    remoteIntfId: null,
    platform: 'N9K-C93180YC-EX',
    description: 'Cisco Nexus Operating System (NX-OS) Software, Version 9.3(8)',
    ttl: '147 sec',
    sysId: null,
    sysCap: 'Router Switch IGMP CVTA phone port',
    addresses: [ '10.0.16.3' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet1/0/13',
    sysName: 'ESX9.example.com',
    remoteIntf: 'vmnic0',
    remoteIntfId: null,
    platform: 'VMware ESXi',
    description: 'Releasebuild-19482537',
    ttl: '127 sec',
    sysId: null,
    sysCap: 'Switch',
    addresses: null
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet2/0/13',
    sysName: 'ESX9.example.com',
    remoteIntf: 'vmnic1',
    remoteIntfId: null,
    platform: 'VMware ESXi',
    description: 'Releasebuild-19482537',
    ttl: '127 sec',
    sysId: null,
    sysCap: 'Switch',
    addresses: null
  },
  {
    type: 'cdp',
    localIntf: 'TenGigabitEthernet1/0/1',
    sysName: 'CORE1.example.com(SERIAL)',
    remoteIntf: 'Ethernet1/46',
    remoteIntfId: null,
    platform: 'N9K-C93180YC-EX',
    description: 'Cisco Nexus Operating System (NX-OS) Software, Version 9.3(8)',
    ttl: '147 sec',
    sysId: null,
    sysCap: 'Router Switch IGMP CVTA phone port',
    addresses: [ '10.0.16.2' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet1/0/17',
    sysName: 'ROUTER1.example.com',
    remoteIntf: 'GigabitEthernet0/0',
    remoteIntfId: null,
    platform: 'Cisco CISCO2901/K9',
    description: 'Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.7(3)M5, RELEASE SOFTWARE (fc1)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Fri 27-Sep-19 05:10 by prod_rel_team',
    ttl: '177 sec',
    sysId: null,
    sysCap: 'Router Source-Route-Bridge Switch',
    addresses: [ '10.0.0.20', '2001:0DB8:0:6400::20', 'FE80::5250', '10.0.0.20' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet2/0/17',
    sysName: 'ROUTER2.example.com',
    remoteIntf: 'GigabitEthernet0/0',
    remoteIntfId: null,
    platform: 'Cisco CISCO2901/K9',
    description: 'Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.7(3)M7, RELEASE SOFTWARE (fc1)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2020 by Cisco Systems, Inc.\n' +
      'Compiled Tue 01-Sep-20 15:17 by prod_rel_team',
    ttl: '165 sec',
    sysId: null,
    sysCap: 'Router Source-Route-Bridge Switch',
    addresses: [ '10.0.0.26', '2001:0DB8:0:6400::26', 'FE80::AC30', '10.0.0.26' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet1/0/14',
    sysName: 'ROUTER3.example.com',
    remoteIntf: 'GigabitEthernet0/0',
    remoteIntfId: null,
    platform: 'Cisco CISCO2901/K9',
    description: 'Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.7(3)M5, RELEASE SOFTWARE (fc1)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Fri 27-Sep-19 05:10 by prod_rel_team',
    ttl: '160 sec',
    sysId: null,
    sysCap: 'Router Source-Route-Bridge Switch',
    addresses: [ '10.0.0.19', '2001:0DB8:0:6400::19', 'FE80::7350', '10.0.0.19' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet1/0/11',
    sysName: 'MDS1.example.com(SERIAL)',
    remoteIntf: 'mgmt0',
    remoteIntfId: null,
    platform: 'DS-C9148-16P-K9',
    description: 'Cisco Nexus Operating System (NX-OS) Software, Version 6.2(1)',
    ttl: '149 sec',
    sysId: null,
    sysCap: 'Router Switch CVTA phone port',
    addresses: [ '10.0.0.68', '10.0.0.68' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet2/0/11',
    sysName: 'MDS2.example.com(SERIAL)',
    remoteIntf: 'mgmt0',
    remoteIntfId: null,
    platform: 'DS-C9148-16P-K9',
    description: 'Cisco Nexus Operating System (NX-OS) Software, Version 6.2(1)',
    ttl: '133 sec',
    sysId: null,
    sysCap: 'Router Switch CVTA phone port',
    addresses: [ '10.0.0.69', '10.0.0.69' ]
  },
  {
    type: 'lldp',
    localIntf: 'Te1/0/1',
    sysName: 'CORE1.example.com',
    remoteIntf: 'SW1:Te1/0/1',
    remoteIntfId: 'Ethernet1/46',
    platform: null,
    description: 'Cisco Nexus Operating System (NX-OS) Software 9.3(8)\n' +
      'TAC support: http://www.cisco.com/tac\n' +
      'Copyright (c) 2002-2021, Cisco Systems, Inc. All rights reserved.',
    ttl: '111 seconds',
    sysId: '0000.0000.0001',
    sysCap: 'B,R',
    addresses: null
  },
  {
    type: 'lldp',
    localIntf: 'Gi1/0/10',
    sysName: 'INT1.example.com',
    remoteIntf: 'OOB Management Link',
    remoteIntfId: 'Gi0',
    platform: null,
    description: 'Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Wed 20-Mar-19 08:02 by mcpre',
    ttl: '116 seconds',
    sysId: '0000.0000.0002',
    sysCap: 'B,R',
    addresses: [ '10.0.0.13', '2001:0DB8::1' ]
  },
  {
    type: 'lldp',
    localIntf: 'Gi2/0/2',
    sysName: 'STOR02-ct1',
    remoteIntf: 'eth1',
    remoteIntfId: '0000.0000.1003',
    platform: null,
    description: 'FlashArray FA-m20r2 STOR02-ct1 202000000000+asdfasdf-53x',
    ttl: '3 seconds',
    sysId: '0000.0000.0003',
    sysCap: 'B,W,R,S',
    addresses: null
  },
  {
    type: 'lldp',
    localIntf: 'Gi2/0/1',
    sysName: 'STOR02-ct1',
    remoteIntf: 'eth0',
    remoteIntfId: '0000.0000.1004',
    platform: null,
    description: 'FlashArray FA-m20r2 STOR02-ct1 202000000000+asdfasdf-53x',
    ttl: '3 seconds',
    sysId: '0000.0000.0004',
    sysCap: 'B,W,R,S',
    addresses: null
  },
  {
    type: 'lldp',
    localIntf: 'Gi2/0/10',
    sysName: 'INT2.example.com',
    remoteIntf: 'OOB Management Link',
    remoteIntfId: 'Gi0',
    platform: null,
    description: 'Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Wed 20-Mar-19 08:02 by mcpre',
    ttl: '103 seconds',
    sysId: '0000.0000.0005',
    sysCap: 'B,R',
    addresses: [ '10.0.0.14', '2001:0DB8::2' ]
  },
  {
    type: 'lldp',
    localIntf: 'Te2/0/1',
    sysName: 'CORE2.example.com',
    remoteIntf: 'SW1:Te1/0/2',
    remoteIntfId: 'Ethernet1/46',
    platform: null,
    description: 'Cisco Nexus Operating System (NX-OS) Software 9.3(8)\n' +
      'TAC support: http://www.cisco.com/tac\n' +
      'Copyright (c) 2002-2021, Cisco Systems, Inc. All rights reserved.',
    ttl: '96 seconds',
    sysId: '0000.0000.0006',
    sysCap: 'B,R',
    addresses: null
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet2/0/10',
    sysName: 'INT2.example.com',
    remoteIntf: 'GigabitEthernet0',
    remoteIntfId: null,
    platform: 'cisco ASR1001-X',
    description: 'Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Wed 20-Mar-19 08:02 by mcpre',
    ttl: '131 sec',
    sysId: null,
    sysCap: 'Router IGMP',
    addresses: [ '10.0.0.14', '10.0.0.14' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet1/0/10',
    sysName: 'INT1.example.com',
    remoteIntf: 'GigabitEthernet0',
    remoteIntfId: null,
    platform: 'cisco ASR1001-X',
    description: 'Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Wed 20-Mar-19 08:02 by mcpre',
    ttl: '150 sec',
    sysId: null,
    sysCap: 'Router IGMP',
    addresses: [ '10.0.0.13', '10.0.0.13' ]
  },
  {
    type: 'cdp',
    localIntf: 'TenGigabitEthernet2/0/1',
    sysName: 'CORE2.example.com(SERIAL)',
    remoteIntf: 'Ethernet1/46',
    remoteIntfId: null,
    platform: 'N9K-C93180YC-EX',
    description: 'Cisco Nexus Operating System (NX-OS) Software, Version 9.3(8)',
    ttl: '147 sec',
    sysId: null,
    sysCap: 'Router Switch IGMP CVTA phone port',
    addresses: [ '10.0.16.3' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet1/0/13',
    sysName: 'ESX9.example.com',
    remoteIntf: 'vmnic0',
    remoteIntfId: null,
    platform: 'VMware ESXi',
    description: 'Releasebuild-19482537',
    ttl: '127 sec',
    sysId: null,
    sysCap: 'Switch',
    addresses: null
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet2/0/13',
    sysName: 'ESX9.example.com',
    remoteIntf: 'vmnic1',
    remoteIntfId: null,
    platform: 'VMware ESXi',
    description: 'Releasebuild-19482537',
    ttl: '127 sec',
    sysId: null,
    sysCap: 'Switch',
    addresses: null
  },
  {
    type: 'cdp',
    localIntf: 'TenGigabitEthernet1/0/1',
    sysName: 'CORE1.example.com(SERIAL)',
    remoteIntf: 'Ethernet1/46',
    remoteIntfId: null,
    platform: 'N9K-C93180YC-EX',
    description: 'Cisco Nexus Operating System (NX-OS) Software, Version 9.3(8)',
    ttl: '147 sec',
    sysId: null,
    sysCap: 'Router Switch IGMP CVTA phone port',
    addresses: [ '10.0.16.2' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet1/0/17',
    sysName: 'ROUTER1.example.com',
    remoteIntf: 'GigabitEthernet0/0',
    remoteIntfId: null,
    platform: 'Cisco CISCO2901/K9',
    description: 'Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.7(3)M5, RELEASE SOFTWARE (fc1)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Fri 27-Sep-19 05:10 by prod_rel_team',
    ttl: '177 sec',
    sysId: null,
    sysCap: 'Router Source-Route-Bridge Switch',
    addresses: [ '10.0.0.20', '2001:0DB8:0:6400::20', 'FE80::5250', '10.0.0.20' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet2/0/17',
    sysName: 'ROUTER2.example.com',
    remoteIntf: 'GigabitEthernet0/0',
    remoteIntfId: null,
    platform: 'Cisco CISCO2901/K9',
    description: 'Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.7(3)M7, RELEASE SOFTWARE (fc1)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2020 by Cisco Systems, Inc.\n' +
      'Compiled Tue 01-Sep-20 15:17 by prod_rel_team',
    ttl: '165 sec',
    sysId: null,
    sysCap: 'Router Source-Route-Bridge Switch',
    addresses: [ '10.0.0.26', '2001:0DB8:0:6400::26', 'FE80::AC30', '10.0.0.26' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet1/0/14',
    sysName: 'ROUTER3.example.com',
    remoteIntf: 'GigabitEthernet0/0',
    remoteIntfId: null,
    platform: 'Cisco CISCO2901/K9',
    description: 'Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.7(3)M5, RELEASE SOFTWARE (fc1)\n' +
      'Technical Support: http://www.cisco.com/techsupport\n' +
      'Copyright (c) 1986-2019 by Cisco Systems, Inc.\n' +
      'Compiled Fri 27-Sep-19 05:10 by prod_rel_team',
    ttl: '160 sec',
    sysId: null,
    sysCap: 'Router Source-Route-Bridge Switch',
    addresses: [ '10.0.0.19', '2001:0DB8:0:6400::19', 'FE80::7350', '10.0.0.19' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet1/0/11',
    sysName: 'MDS1.example.com(SERIAL)',
    remoteIntf: 'mgmt0',
    remoteIntfId: null,
    platform: 'DS-C9148-16P-K9',
    description: 'Cisco Nexus Operating System (NX-OS) Software, Version 6.2(1)',
    ttl: '149 sec',
    sysId: null,
    sysCap: 'Router Switch CVTA phone port',
    addresses: [ '10.0.0.68', '10.0.0.68' ]
  },
  {
    type: 'cdp',
    localIntf: 'GigabitEthernet2/0/11',
    sysName: 'MDS2.example.com(SERIAL)',
    remoteIntf: 'mgmt0',
    remoteIntfId: null,
    platform: 'DS-C9148-16P-K9',
    description: 'Cisco Nexus Operating System (NX-OS) Software, Version 6.2(1)',
    ttl: '133 sec',
    sysId: null,
    sysCap: 'Router Switch CVTA phone port',
    addresses: [ '10.0.0.69', '10.0.0.69' ]
  }
]

*/
