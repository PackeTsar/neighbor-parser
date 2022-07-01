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

module.exports = { sample }
