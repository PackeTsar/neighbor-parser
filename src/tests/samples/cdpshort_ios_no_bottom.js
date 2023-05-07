const sample = `
SW1#show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
INT2.example.com
                 Gig 2/0/10        142              R I   ASR1001-X Gig 0
INT1.example.com
                 Gig 1/0/10        146              R I   ASR1001-X Gig 0
CORE2.example.com(SERIALNUM)
                 Ten 2/0/1         134            R S I C N9K-C9318 Eth 1/46
ESX9.example.com
                 Gig 1/0/13        173               S    VMware ES vmnic0
ESX9.example.com
                 Gig 2/0/13        173               S    VMware ES vmnic1
CORE1.example.com(SERIALNUM)
                 Ten 1/0/1         134            R S I C N9K-C9318 Eth 1/46
ROUTER4.example.com
                 Gig 1/0/17        135             R B S  CISCO2901 Gig 0/0
ROUTER5.example.com
                 Gig 2/0/17        131             R B S  CISCO2901 Gig 0/0
ROUTER3.example.com
                 Gig 1/0/14        133             R B S  CISCO2901 Gig 0/0
MDS1.example.com(SERIALNUM)
                 Gig 1/0/11        167             R S C  DS-C9148- mgmt0
MDS2.example.com(SERIALNUM)
                 Gig 2/0/11        148             R S C  DS-C9148- mgmt0
SW1#
`

const structured = [
  {
    sysName: 'INT2.example.com',
    localIntf: 'Gig 2/0/10',
    ttl: '142',
    sysCap: ['R', 'I'],
    platform: 'ASR1001-X',
    remoteIntf: 'Gig 0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'INT1.example.com',
    localIntf: 'Gig 1/0/10',
    ttl: '146',
    sysCap: ['R', 'I'],
    platform: 'ASR1001-X',
    remoteIntf: 'Gig 0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CORE2.example.com(SERIALNUM)',
    localIntf: 'Ten 2/0/1',
    ttl: '134',
    sysCap: ['R', 'S', 'I', 'C'],
    platform: 'N9K-C9318',
    remoteIntf: 'Eth 1/46',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'ESX9.example.com',
    localIntf: 'Gig 1/0/13',
    ttl: '173',
    sysCap: ['S'],
    platform: 'VMware',
    remoteIntf: 'ES vmnic0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'ESX9.example.com',
    localIntf: 'Gig 2/0/13',
    ttl: '173',
    sysCap: ['S'],
    platform: 'VMware',
    remoteIntf: 'ES vmnic1',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CORE1.example.com(SERIALNUM)',
    localIntf: 'Ten 1/0/1',
    ttl: '134',
    sysCap: ['R', 'S', 'I', 'C'],
    platform: 'N9K-C9318',
    remoteIntf: 'Eth 1/46',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'ROUTER4.example.com',
    localIntf: 'Gig 1/0/17',
    ttl: '135',
    sysCap: ['R', 'B', 'S'],
    platform: 'CISCO2901',
    remoteIntf: 'Gig 0/0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'ROUTER5.example.com',
    localIntf: 'Gig 2/0/17',
    ttl: '131',
    sysCap: ['R', 'B', 'S'],
    platform: 'CISCO2901',
    remoteIntf: 'Gig 0/0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'ROUTER3.example.com',
    localIntf: 'Gig 1/0/14',
    ttl: '133',
    sysCap: ['R', 'B', 'S'],
    platform: 'CISCO2901',
    remoteIntf: 'Gig 0/0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'MDS1.example.com(SERIALNUM)',
    localIntf: 'Gig 1/0/11',
    ttl: '167',
    sysCap: ['R', 'S', 'C'],
    platform: 'DS-C9148-',
    remoteIntf: 'mgmt0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'MDS2.example.com(SERIALNUM)',
    localIntf: 'Gig 2/0/11',
    ttl: '148',
    sysCap: ['R', 'S', 'C'],
    platform: 'DS-C9148-',
    remoteIntf: 'mgmt0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  }
]

module.exports = { sample, structured }
