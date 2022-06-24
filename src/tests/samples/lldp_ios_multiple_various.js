const sample = `
SW1#show lldp neighbors detail
------------------------------------------------
Local Intf: Te1/0/1
Chassis id: 0000.0000.0001
Port id: Ethernet1/46
Port Description: SW1:Te1/0/1
System Name: CORE1.example.com

System Description:
Cisco Nexus Operating System (NX-OS) Software 9.3(8)
TAC support: http://www.cisco.com/tac
Copyright (c) 2002-2021, Cisco Systems, Inc. All rights reserved.

Time remaining: 111 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    Other: 2C FF 00 FF 00 FF 01
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: 1

------------------------------------------------
Local Intf: Gi1/0/10
Chassis id: 0000.0000.0002
Port id: Gi0
Port Description: OOB Management Link
System Name: INT1.example.com

System Description:
Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Wed 20-Mar-19 08:02 by mcpre

Time remaining: 116 seconds
System Capabilities: B,R
Enabled Capabilities: R
Management Addresses:
    IP: 10.0.0.13
    IPV6: 2001:0DB8::1
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi2/0/2
Chassis id: 0000.0000.0003
Port id: 0000.0000.1003
Port Description: eth1
System Name: STOR02-ct1

System Description:
FlashArray FA-m20r2 STOR02-ct1 202000000000+asdfasdf-53x

Time remaining: 3 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: B
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    Pause(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 30
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi2/0/1
Chassis id: 0000.0000.0004
Port id: 0000.0000.1004
Port Description: eth0
System Name: STOR02-ct1

System Description:
FlashArray FA-m20r2 STOR02-ct1 202000000000+asdfasdf-53x

Time remaining: 3 seconds
System Capabilities: B,W,R,S
Enabled Capabilities: B
Management Addresses - not advertised
Auto Negotiation - supported, enabled
Physical media capabilities:
    1000baseT(FD)
    Pause(FD)
    100base-TX(FD)
    100base-TX(HD)
    10base-T(FD)
    10base-T(HD)
Media Attachment Unit type: 30
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Gi2/0/10
Chassis id: 0000.0000.0005
Port id: Gi0
Port Description: OOB Management Link
System Name: INT2.example.com

System Description:
Cisco IOS Software [Fuji], ASR1000 Software (X86_64_LINUX_IOSD-UNIVERSALK9-M), Version 16.9.3, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Copyright (c) 1986-2019 by Cisco Systems, Inc.
Compiled Wed 20-Mar-19 08:02 by mcpre

Time remaining: 103 seconds
System Capabilities: B,R
Enabled Capabilities: R
Management Addresses:
    IP: 10.0.0.14
    IPV6: 2001:0DB8::2
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: - not advertised

------------------------------------------------
Local Intf: Te2/0/1
Chassis id: 0000.0000.0006
Port id: Ethernet1/46
Port Description: SW1:Te1/0/2
System Name: CORE2.example.com

System Description:
Cisco Nexus Operating System (NX-OS) Software 9.3(8)
TAC support: http://www.cisco.com/tac
Copyright (c) 2002-2021, Cisco Systems, Inc. All rights reserved.

Time remaining: 96 seconds
System Capabilities: B,R
Enabled Capabilities: B,R
Management Addresses:
    Other: 2C FF 00 FF 00 FF 06
Auto Negotiation - not supported
Physical media capabilities - not advertised
Media Attachment Unit type - not advertised
Vlan ID: 1


Total entries displayed: 6

SW1#
SW1#
`

module.exports = { sample }
