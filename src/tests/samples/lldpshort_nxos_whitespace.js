/*
  Pulled from NX-OS 9.3(10)
  Has two spaces after "Port ID"
*/

const sample = `
CORE1# show lldp neighbors
Capability codes:
  (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
  (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other
Device ID            Local Intf      Hold-time  Capability  Port ID  
CUMULUS_SWITCH_NUMBER_ONE
                     Eth1/1          120        BR          eth0
Total entries displayed: 1
CORE1#
`

const structured = [
  {
    sysName: 'CUMULUS_SWITCH_NUMBER_ONE',
    localIntf: 'Eth1/1',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'eth0',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CUMULUS_SWITCH_NUMBER_TWO',
    localIntf: 'Eth1/2',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'eth0',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CUMULUS_SWITCH_NUMBER_THREE',
    localIntf: 'Eth1/3',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'eth0',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CUMULUS_SWITCH_NUMBER_FOUR',
    localIntf: 'Eth1/4',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'eth0',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CUMULUS_SWITCH_NUMBER_NINE',
    localIntf: 'Eth1/5',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'eth0',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'SW2.subdomain.example.com',
    localIntf: 'Eth1/41',
    ttl: '120',
    sysCap: ['B'],
    remoteIntf: 'Te1/1/3',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'INT1.subdomain.example.com',
    localIntf: 'Eth1/42',
    ttl: '120',
    sysCap: ['R'],
    remoteIntf: 'Gi0/0/2',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'INT2.subdomain.example.com',
    localIntf: 'Eth1/43',
    ttl: '120',
    sysCap: ['R'],
    remoteIntf: 'Gi0/0/2',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'SW1.subdomain.example.com',
    localIntf: 'Eth1/46',
    ttl: '120',
    sysCap: ['B'],
    remoteIntf: 'Te1/0/1',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CORE2.subdomain.example.com',
    localIntf: 'Eth1/47',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'Ethernet1/47',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CORE2.subdomain.example.com',
    localIntf: 'Eth1/48',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'Ethernet1/48',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CUMULUS_SWITCH_NUMBER_FIVE',
    localIntf: 'Eth1/49',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'swp53',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CUMULUS_SWITCH_SIX',
    localIntf: 'Eth1/50',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'swp53',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CUMULUS_SWITCH_SEV',
    localIntf: 'Eth1/51',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'swp53',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CORE2.subdomain.example.com',
    localIntf: 'Eth1/53',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'Ethernet1/53',
    remoteIntfId: null,
    platform: null,
    description: null,
    sysId: null,
    addresses: []
  }
]

module.exports = { sample, structured }
