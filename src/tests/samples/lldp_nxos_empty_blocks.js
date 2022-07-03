const sample = `
SWITCH#
SWITCH# show lldp neighbors detail
Capability codes:
  (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device
  (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other
Device ID            Local Intf      Hold-time  Capability  Port ID

...content... (block 1)


...content... (block 2)


...content... (block 3)


...content... (block 4)


...content... (block 5)


...content... (block 6)


...content... (block 7)


...content... (block 8)


...content... (block 9)


...content... (block 10)


...content... (block 11)


...content... (block 12)


...content... (block 13)


...content... (block 14)

Total entries displayed: 14
SWITCH#
SWITCH# `

module.exports = { sample }
