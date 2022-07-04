const sample = `
SW1#show lldp neighbors
Capability codes:
    (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
    (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other

Device ID           Local Intf     Hold-time  Capability      Port ID
CORE1.subdomain.examTe1/0/1        120        B,R             Ethernet1/46
INT1.subdomain.exampGi1/0/10       120        R               Gi0
INT2.subdomain.exampGi2/0/10       120        R               Gi0
CORE2.subdomain.examTe2/0/1        120        B,R             Ethernet1/46

Total entries displayed: 4

SW1#
`

const structured = [
  {
    sysName: 'CORE1.subdomain.exam',
    localIntf: 'Te1/0/1',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'Ethernet1/46'
  },
  {
    sysName: 'INT1.subdomain.examp',
    localIntf: 'Gi1/0/10',
    ttl: '120',
    sysCap: ['R'],
    remoteIntf: 'Gi0'
  },
  {
    sysName: 'INT2.subdomain.examp',
    localIntf: 'Gi2/0/10',
    ttl: '120',
    sysCap: ['R'],
    remoteIntf: 'Gi0'
  },
  {
    sysName: 'CORE2.subdomain.exam',
    localIntf: 'Te2/0/1',
    ttl: '120',
    sysCap: ['B', 'R'],
    remoteIntf: 'Ethernet1/46'
  }
]

module.exports = { sample, structured }
