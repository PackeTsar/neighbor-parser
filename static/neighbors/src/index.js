/* global $ */
const neighbors = require('./neighbors')

$(document).ready(function () {
  // const table = $('#neighborTable').DataTable()
  const table = $('#neighborTable').DataTable({ retrieve: true })
  $('#neighborData').keyup(function () {
    table.clear().draw()
    const neighborObjs = neighbors.getNeighbors($(this).val())
    for (let i = 0; i < neighborObjs.length; i++) {
      neighborObjs[i].num = i + 1
      neighborObjs[i].addresses = neighborObjs[i].addresses.join(', ')
      table.row.add(neighborObjs[i])
    };
    table.draw()
  })
})
