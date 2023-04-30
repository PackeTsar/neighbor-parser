/* global $ */
const neighbors = require('./neighbors')
const diagram = require('./diagram')
const defaultNeighbors = require('./default_neighbors')

function drawNeighbors (graph, paper, useNeighbors) {
  graph.clear() // Clear the diagram content
  graph.neighbors = {} // Clear the cached neighbors
  // Draw the reference neighbor device
  const selfNeighbor = diagram.drawSelfNeighbor(graph)
  // Get the DataTable object
  const table = $('#neighborTable').DataTable({ retrieve: true })
  // grab the neighbor data text field
  const neighborData = $('#neighborData')
  table.clear().draw() // Clear out the DataTable data
  let neighborObjs
  // If neighbor objects were passed in when drawNeighbors() was called
  if (useNeighbors) {
    // Use the passed in objects
    neighborObjs = useNeighbors
  } else {
    // Otherwise, parse the text data to build the list of neighbors
    neighborObjs = neighbors.getNeighbors(neighborData.val())
  }
  // Iterate the list of neighbors
  for (let i = 0; i < neighborObjs.length; i++) {
    // And add each neighbor to the table along with an index number
    neighborObjs[i].num = i + 1
    table.row.add(neighborObjs[i])
    // Add the neighbor to the diagram
    diagram.drawNeighbor(graph, selfNeighbor, neighborObjs[i])
  }
  table.draw() // Draw the DataTable now that the rows are added
  // Adjust the layout of the content in the diagram
  diagram.layout(graph, paper)
  // Activate the tooltips on the neighbor elements
  const tooltipToggled = $('[data-bs-toggle="diagram-tooltip"]')
  tooltipToggled.tooltip()
};

$(document).ready(function () {
  // ########## Diagram
  // Grab the wrapper for the diagram
  const diagramDiv = $('#diagram_wrapper')[0]
  // Build the graph and paper objects
  const [graph, paper] = diagram.makePaper(diagramDiv)
  // // Build the selfNeighbor reference element
  // const selfNeighbor = diagram.drawSelfNeighbor(graph)
  // // Adjust the layout of the content in the diagram
  // diagram.layout(graph, paper)
  // Set the paper to resize as the card size changes (used when card is
  //   dragged to become taller or shorter).
  const ro = new ResizeObserver(entries => {
    for (const entry of entries) {
      paper.setDimensions(paper.options.width, entry.contentRect.height)
    }
  })
  ro.observe(diagramDiv)
  // ########## Bindings
  // Set a trigger for keyup on the neighborData field
  $('#neighborData').keyup(function () {
    drawNeighbors(graph, paper)
  })
  // Set a trigger for clicking on the "Parse" button
  $('#parseNeighbors').click(function () {
    drawNeighbors(graph, paper)
    $('#neighbor_search').focus()
  })
  // Set a trigger for a click on the "Clear" button
  $('#clearNeighborData').click(function () {
    const neighborData = $('#neighborData')[0]
    neighborData.value = ''
    drawNeighbors(graph, paper)
    neighborData.focus()
  })
  drawNeighbors(graph, paper, defaultNeighbors.NEIGHBORS)
})
