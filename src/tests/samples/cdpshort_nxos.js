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

module.exports = { sample }
