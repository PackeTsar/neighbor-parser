const sample = `
SW2#show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
CAM1                Gi1/0/40       120                        0
CORE1.subdomain.examTe1/1/3        120        B,R             Ethernet1/41
CAM2                Gi1/0/10       120                        0
FW1                 Gi1/0/1        120        R               0
WAP1                Gi1/0/9        120        B               0
WAP2                Gi1/0/48       120        B               0
CORE2.subdomain.examTe1/1/4        120        B,R             Ethernet1/41

Total entries displayed: 7

SW2#
`

const structured = [
  {
    sysName: 'CAM1',
    localIntf: 'Gi1/0/40',
    ttl: '120',
    sysCap: [],
    remoteIntf: '0'
  },
  {
    sysName: 'CORE1.subdomain.exam',
    localIntf: 'Te1/1/3',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'Ethernet1/41'
  },
  {
    sysName: 'CAM2',
    localIntf: 'Gi1/0/10',
    ttl: '120',
    sysCap: [],
    remoteIntf: '0'
  },
  {
    sysName: 'FW1',
    localIntf: 'Gi1/0/1',
    ttl: '120',
    sysCap: ['R'],
    remoteIntf: '0'
  },
  {
    sysName: 'WAP1',
    localIntf: 'Gi1/0/9',
    ttl: '120',
    sysCap: ['B'],
    remoteIntf: '0'
  },
  {
    sysName: 'WAP2',
    localIntf: 'Gi1/0/48',
    ttl: '120',
    sysCap: ['B'],
    remoteIntf: '0'
  },
  {
    sysName: 'CORE2.subdomain.exam',
    localIntf: 'Te1/1/4',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'Ethernet1/41'
  }
]

module.exports = { sample, structured }
