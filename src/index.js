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

function saveSvg (svgEl, name) {
  /*
  Download the diagram as a SVG file
  */
  // Get the SVG HTML data
  let svgData = svgEl.outerHTML
  // Clean the HTML tootltips out of the SVG HTML
  svgData = svgData.replace(/data-bs-title=".*?"/gm, '')
  // Add XML data for SVG document and create a blob
  const preface = '<?xml version="1.0" standalone="no"?>\r\n'
  const svgBlob = new Blob(
    [preface, svgData],
    { type: 'image/svg+xml;charset=utf-8' }
  )
  // Create a download URL for the SVG file
  const svgUrl = URL.createObjectURL(svgBlob)
  // Create a link for the download
  const downloadLink = document.createElement('a')
  // Set the URL for the download link
  downloadLink.href = svgUrl
  // Set the file name
  downloadLink.download = name
  // Add the download link to the document
  document.body.appendChild(downloadLink)
  // Simulate a click on the link
  downloadLink.click()
  // Remove the link from the document
  document.body.removeChild(downloadLink)
}

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
  $('.modal-dialog').draggable({ // Set the modal as draggable
    handle: '.modal-header'
  })
  // Set triggers for clicks on the diagram zoom in/out buttons
  $('.zoom-in').click(function () {
    const currentScale = paper.scale()
    paper.scale(currentScale.sx * 1.1, currentScale.sy * 1.1)
    $('#current_zoom').html(Math.round(paper.scale().sx * 100))
    $('#new_zoom').html(Math.round(paper.scale().sx * 100))
    this.blur() // Remove focus on button
  })
  $('.zoom-out').click(function () {
    const currentScale = paper.scale()
    paper.scale(currentScale.sx * 0.9, currentScale.sy * 0.9)
    $('#current_zoom').html(Math.round(paper.scale().sx * 100))
    $('#new_zoom').html(Math.round(paper.scale().sx * 100))
    this.blur() // Unfocus from button
  })
  // Set trigger for SVG download
  $('#download_diagram_button').click(function () {
    saveSvg(paper.svg, 'Neighbor Parser.svg')
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
  // Initialize the Rank Separation setting slider
  const rangeSeparationHandle = $('#rank_separation')
  $('#rank_separation_slider').slider({
    min: 0,
    max: 100,
    value: 65, // Initial value for rank separation
    slide: function (event, ui) { // When handles are moved
      rangeSeparationHandle.text(ui.value)
    },
    create: function () { // Set handle text when field created
      rangeSeparationHandle.text($(this).slider('value'))
    }
  })
  // Grab the handles for the Label Positions slider
  const localLabelHandle = $('#local_label')
  const remoteLabelHandle = $('#remote_label')
  // Bring clicked handle to the front when clicked (since they can overlap)
  localLabelHandle.on('mousedown', function () {
    this.style.zIndex = '11'
    remoteLabelHandle[0].style.zIndex = '10'
  })
  remoteLabelHandle.on('mousedown', function () {
    this.style.zIndex = '11'
    localLabelHandle[0].style.zIndex = '10'
  })
  // Initialize the Label Positions setting slider
  $('#label_positions_slider').slider({
    range: true,
    min: 0,
    max: 100,
    values: [65, 85], // Initial values for label positions
    slide: function (event, ui) {
      localLabelHandle.text(ui.values[0])
      remoteLabelHandle.text(ui.values[1])
    },
    create: function () {
      localLabelHandle.text($(this).slider('values')[0])
      remoteLabelHandle.text($(this).slider('values')[1])
    }
  })
  // Initialize the Sibling Gap setting slider
  const siblingGapHandle = $('#sibling_gap')
  $('#sibling_gap_slider').slider({
    min: 0,
    max: 100,
    value: 30, // Initial value for sibling gap
    slide: function (event, ui) {
      siblingGapHandle.text(ui.value)
    },
    create: function () {
      siblingGapHandle.text($(this).slider('value'))
    }
  })
  //
  //
  // ########## Lastly
  // Draw the default neighbors
  drawNeighbors(graph, paper, defaultNeighbors.NEIGHBORS)
})
