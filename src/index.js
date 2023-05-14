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
  // ########## Diagram Initialization
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
  //
  //
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
  //
  //
  // ########## Diagram Settings
  $('.modal-dialog').draggable() // Set the modal as draggable
  // Set triggers for clicks on the diagram zoom in/out buttons
  $('.zoom-in').click(function () {
    const currentScale = paper.scale()
    paper.scale(currentScale.sx * 1.1, currentScale.sy * 1.1)
    $('#current_zoom').html(Math.round(paper.scale().sx * 100))
    this.blur() // Remove focus on button
  })
  $('.zoom-out').click(function () {
    const currentScale = paper.scale()
    paper.scale(currentScale.sx * 0.9, currentScale.sy * 0.9)
    $('#current_zoom').html(Math.round(paper.scale().sx * 100))
    this.blur() // Unfocus from button
  })
  // Grab the new zoom setting element
  const newZoom = $('#new_zoom')
  // Set triggers for clicks on the diagram settings zoom buttons
  $('.zoom-in-stage').click(function () {
    newZoom.html(Math.round(newZoom.html() * 1.1))
    this.blur() // Remove focus on button
  })
  $('.zoom-out-stage').click(function () {
    newZoom.html(Math.round(newZoom.html() * 0.9))
    this.blur() // Unfocus from button
  })
  $('.zoom-reset-current-stage').click(function () {
    newZoom.html($('#current_zoom').html())
    this.blur() // Unfocus from button
  })
  $('.zoom-reset-100-stage').click(function () {
    newZoom.html('100')
    this.blur() // Unfocus from button
  })
  // Set triggers for clicks on the diagram zoom reset button
  $('.zoom-reset').click(function () {
    paper.scale(1, 1) // Set the default 100%
    $('#current_zoom').html(Math.round(paper.scale().sx * 100))
    this.blur()
  })
  // Set trigger for settings apply button
  $('#apply_diagram_settings').click(function () {
    // Scale the paper from the #new_zoom element
    paper.scale(parseInt(newZoom.html()) / 100, parseInt(newZoom.html()) / 100)
    // Update the #current_zoom element
    $('#current_zoom').html(Math.round(paper.scale().sx * 100))
    diagram.layout(graph, paper)
  })
  // Set up sync between sliders and their displayed settings
  const rankSeparation = $('#rank_separation')
  const rankSeparationSlider = $('#rank_separation_slider')
  rankSeparationSlider.val(rankSeparation.html())
  rankSeparationSlider.on('input', function () {
    rankSeparation.html($(this).val())
  })
  const localLabel = $('#local_label')
  const localLabelSlider = $('#local_label_slider')
  localLabelSlider.val(localLabel.html())
  localLabelSlider.on('input', function () {
    localLabel.html($(this).val())
  })
  const remoteLabel = $('#remote_label')
  const remoteLabelSlider = $('#remote_label_slider')
  remoteLabelSlider.val(remoteLabel.html())
  remoteLabelSlider.on('input', function () {
    remoteLabel.html($(this).val())
  })
  //
  //
  // ########## Lastly
  // Draw the default neighbors
  drawNeighbors(graph, paper, defaultNeighbors.NEIGHBORS)
})
