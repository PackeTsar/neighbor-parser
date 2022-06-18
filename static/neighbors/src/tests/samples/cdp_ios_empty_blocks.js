const fourBlocks = `
SWITCH#show cdp nei detail (block 1)
-------------------------
...content... (block 2)

-------------------------
...content... (block 3)

-------------------------
...content... (block 4)

Total cdp entries displayed : 3
SWITCH#`

const sixBlocks = `(block 1)-------------------------
...content... (block 2)

-------------------------
...content... (block 3)

-------------------------
...content... (block 4)

-------------------------
...content... (block 5)

-------------------------
...content... (block 6)

Total cdp entries displayed : 5
SWITCH#`

module.exports = { fourBlocks, sixBlocks }
