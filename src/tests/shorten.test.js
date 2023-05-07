const neighbors = require('../neighbors')

const VALUES = [
  {
    original: 'GigabitEthernet1/0/1',
    short: 'Gi1/0/1'
  },
  {
    original: 'TenGigabitEthernet1/0/1',
    short: 'Te1/0/1'
  },
  {
    original: 'mgmt0',
    short: 'mgmt0'
  },
  // Leading integers will be ignored and not abbreviated
  {
    original: '1234 mgmt0',
    short: '1234 mgmt0'
  }
]

test('Test interface name shortener', () => {
  VALUES.forEach(function (value) {
    expect(neighbors.shorten(value.original)).toBe(value.short)
  })
})
