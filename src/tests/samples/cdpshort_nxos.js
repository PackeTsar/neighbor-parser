const sample = `
CORE1# show cdp neighbors
Capability Codes: R - Router, T - Trans-Bridge, B - Source-Route-Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater,
                  V - VoIP-Phone, D - Remotely-Managed-Device,
                  s - Supports-STP-Dispute

Device-ID          Local Intrfce  Hldtme Capability  Platform      Port ID
WLC                 Eth1/1         160    H         AIR-CTVM-K9   Gig0/0/1
ESX9.example.com
                    Eth1/5         179    S         VMware ESXi   vmnic2
SW2.example.com
                    Eth1/41        136    S I       WS-C3850-48U  Ten1/1/3
INT1.example.com
                    Eth1/42        140    R I       ASR1001-X     Gig0/0/2
INT2.example.com
                    Eth1/43        172    R I       ASR1001-X     Gig0/0/2
SW1.example.com
                    Eth1/46        166    S I       WS-C2960X-48F Ten1/0/1
CORE2.example.com(SERIALNUM)
                    Eth1/47        179    R S s     N9K-C93180YC- Eth1/47
CORE2.example.com(SERIALNUM)
                    Eth1/48        179    R S s     N9K-C93180YC- Eth1/48
CUMULUS_SWITCH1
                    Eth1/49        97     R S       Linux         swp53
CUMULUS_SWITCH2
                    Eth1/50        106    R S       Linux         swp53
CUMULUS_SWITCH3
                    Eth1/51        91     R S       Linux         swp53
CORE2.example.com(SERIALNUM)
                    Eth1/53        139    R S I s   N9K-C93180YC- Eth1/53

Total entries displayed: 12
CORE1#
`

const structured = [
  {
    sysName: 'WLC',
    localIntf: 'Eth1/1',
    ttl: '160',
    sysCap: ['H'],
    platform: 'AIR-CTVM-K9',
    remoteIntf: 'Gig0/0/1',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'ESX9.example.com',
    localIntf: 'Eth1/5',
    ttl: '179',
    sysCap: ['S'],
    platform: 'VMware',
    remoteIntf: 'ESXi   vmnic2',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'SW2.example.com',
    localIntf: 'Eth1/41',
    ttl: '136',
    sysCap: ['S', 'I'],
    platform: 'WS-C3850-48U',
    remoteIntf: 'Ten1/1/3',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'INT1.example.com',
    localIntf: 'Eth1/42',
    ttl: '140',
    sysCap: ['R', 'I'],
    platform: 'ASR1001-X',
    remoteIntf: 'Gig0/0/2',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'INT2.example.com',
    localIntf: 'Eth1/43',
    ttl: '172',
    sysCap: ['R', 'I'],
    platform: 'ASR1001-X',
    remoteIntf: 'Gig0/0/2',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'SW1.example.com',
    localIntf: 'Eth1/46',
    ttl: '166',
    sysCap: ['S', 'I'],
    platform: 'WS-C2960X-48F',
    remoteIntf: 'Ten1/0/1',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CORE2.example.com(SERIALNUM)',
    localIntf: 'Eth1/47',
    ttl: '179',
    sysCap: ['R', 'S', 's'],
    platform: 'N9K-C93180YC-',
    remoteIntf: 'Eth1/47',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CORE2.example.com(SERIALNUM)',
    localIntf: 'Eth1/48',
    ttl: '179',
    sysCap: ['R', 'S', 's'],
    platform: 'N9K-C93180YC-',
    remoteIntf: 'Eth1/48',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CUMULUS_SWITCH1',
    localIntf: 'Eth1/49',
    ttl: '97',
    sysCap: ['R', 'S'],
    platform: 'Linux',
    remoteIntf: 'swp53',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CUMULUS_SWITCH2',
    localIntf: 'Eth1/50',
    ttl: '106',
    sysCap: ['R', 'S'],
    platform: 'Linux',
    remoteIntf: 'swp53',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CUMULUS_SWITCH3',
    localIntf: 'Eth1/51',
    ttl: '91',
    sysCap: ['R', 'S'],
    platform: 'Linux',
    remoteIntf: 'swp53',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  },
  {
    sysName: 'CORE2.example.com(SERIALNUM)',
    localIntf: 'Eth1/53',
    ttl: '139',
    sysCap: ['R', 'S', 'I', 's'],
    platform: 'N9K-C93180YC-',
    remoteIntf: 'Eth1/53',
    remoteIntfId: null,
    description: null,
    sysId: null,
    addresses: []
  }
]

module.exports = { sample, structured }
