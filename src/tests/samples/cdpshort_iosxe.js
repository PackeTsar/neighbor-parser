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

module.exports = { sample }
