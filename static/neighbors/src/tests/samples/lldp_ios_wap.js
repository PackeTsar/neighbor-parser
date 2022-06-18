const sample = `
Local Intf: Gi1/0/1
Chassis id: 0000.0000.0001
Port id: 0
Port Description: eth0
System Name: WAPNAME

System Description:
Cisco AP Software, ap3g3-k9w8 Version: 8.10.151.0
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2021 by Cisco Systems, Inc.
Compiled Thu Mar  4 10:15:59 GMT 2021 by aut

Time remaining: 99 seconds
System Capabilities: B
Enabled Capabilities: B
Management Addresses:
    IP: 10.10.10.10
    IPV6: 2001::1
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    1000baseT(HD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 30
Vlan ID: - not advertised
`

module.exports = { sample }
