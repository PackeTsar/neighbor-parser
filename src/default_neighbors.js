
const NEIGHBORS = [
  {
    num: '1',
    type: 'CDP',
    localIntf: 'GigabitEthernet1/0/1',
    localIntfShort: 'Gi1/0/1',
    sysName: 'WAP1',
    remoteIntf: 'GigabitEthernet0',
    remoteIntfShort: 'Gi0',
    remoteIntfId: null,
    platform: 'AIR-AP3802I-B-K9',
    description: 'Cisco AP Software, ap3g3-k9w8 Version: 8.10.151.0',
    ttl: '100 sec',
    sysId: null,
    sysCap: null,
    addresses: ['10.10.10.11', 'FE80::11']
  },
  {
    num: '2',
    type: 'LLDP',
    localIntf: 'Gi1/0/2',
    localIntfShort: 'Gi1/0/2',
    sysName: 'WAP2',
    remoteIntf: 'eth0',
    remoteIntfShort: 'eth0',
    remoteIntfId: '0',
    platform: null,
    description: 'Cisco AP Software, ap3g3-k9w8 Version: 8.10.151.0',
    ttl: '100 seconds',
    sysId: '0000.0000.0002',
    sysCap: 'B',
    addresses: ['10.10.10.12', 'FE80::12']
  }
]

module.exports = { NEIGHBORS }
