/* global $ */
const neighbors = require('./neighbors')

function drawNeighbors () {
  const table = $('#neighborTable').DataTable({ retrieve: true })
  const neighborData = $('#neighborData')
  table.clear().draw()
  const neighborObjs = neighbors.getNeighbors(neighborData.val())
  for (let i = 0; i < neighborObjs.length; i++) {
    neighborObjs[i].num = i + 1
    table.row.add(neighborObjs[i])
  };
  table.draw()
};

$(document).ready(function () {
  // Set a trigger for keyup on the neighborData field
  $('#neighborData').keyup(function () {
    drawNeighbors()
  })
  // Set a trigger for clicking on the "Parse" button
  $('#parseNeighbors').click(function () {
    drawNeighbors()
    $('#neighbor_search').focus()
  })
  // Set a trigger for a click on the "Clear" button
  $('#clearNeighborData').click(function () {
    const neighborData = $('#neighborData')[0]
    neighborData.value = ''
    drawNeighbors()
    neighborData.focus()
  })
})
