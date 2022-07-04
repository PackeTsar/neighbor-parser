const sample = `
SW2#show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
000000000001     Gig 1/0/10        114                    Meraki MV Port 0
WAP1             Gig 1/0/9         149              R T   AIR-AP380 Gig 0
CORE2.example.com(SERIALNUM)
                 Ten 1/1/4         152            R S I C N9K-C9318 Eth 1/41
CORE1.example.com(SERIALNUM)
                 Ten 1/1/3         152            R S I C N9K-C9318 Eth 1/41
WAP2             Gig 1/0/48        161              R T   Unknown   Gig 0
000000000002     Gig 1/0/40        179                    Meraki MV Port 0
ROUTER1.example.com
                 Gig 1/0/44        159             R B S  CISCO2901 Gig 0/0

Total cdp entries displayed : 7
SW2#
`

const structured = [
  {
    sysName: '000000000001',
    localIntf: 'Gig 1/0/10',
    ttl: '114',
    sysCap: [],
    platform: 'Meraki',
    remoteIntf: 'MV Port 0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'WAP1',
    localIntf: 'Gig 1/0/9',
    ttl: '149',
    sysCap: ['R', 'T'],
    platform: 'AIR-AP380',
    remoteIntf: 'Gig 0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CORE2.example.com(SERIALNUM)',
    localIntf: 'Ten 1/1/4',
    ttl: '152',
    sysCap: ['R', 'S', 'I', 'C'],
    platform: 'N9K-C9318',
    remoteIntf: 'Eth 1/41',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CORE1.example.com(SERIALNUM)',
    localIntf: 'Ten 1/1/3',
    ttl: '152',
    sysCap: ['R', 'S', 'I', 'C'],
    platform: 'N9K-C9318',
    remoteIntf: 'Eth 1/41',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'WAP2',
    localIntf: 'Gig 1/0/48',
    ttl: '161',
    sysCap: ['R', 'T'],
    platform: 'Unknown',
    remoteIntf: 'Gig 0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: '000000000002',
    localIntf: 'Gig 1/0/40',
    ttl: '179',
    sysCap: [],
    platform: 'Meraki',
    remoteIntf: 'MV Port 0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'ROUTER1.example.com',
    localIntf: 'Gig 1/0/44',
    ttl: '159',
    sysCap: ['R', 'B', 'S'],
    platform: 'CISCO2901',
    remoteIntf: 'Gig 0/0',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  }
]

module.exports = { sample, structured }
