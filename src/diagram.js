/* global $ */
/* global _ */
/* global V */
/* global joint */

/******************************************************************************
FUNCTIONS FOR BUILDING DIAGRAM ELEMENTS
******************************************************************************/

// Import functions for handling multiple links between elements
const multipleLinks = require('./multiple-links')

// Create a custom Device shape which extends a standard Rectangle
joint.shapes.standard.Rectangle.define('shapes.Device', {
  attrs: {
    '.': {
      // Add tooltip attributes so tooltips will work
      'data-bs-title': 'My Shape',
      'data-bs-placement': 'top',
      'data-bs-toggle': 'diagram-tooltip',
      'data-bs-html': 'true'
    }
  }
}, {}, {})

function measureLabelWidth (label) {
  /*
  Calculate the proper length of a diagram element by measuring its label
  */
  // Create a SVG, just to be used for the measurement
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  // Add the SVG to the main document
  document.body.appendChild(svg)
  // Create a text label
  const vText = V('text').attr({ fontSize: label.fontSize }).text(label.text)
  vText.appendTo(svg)
  // Get the size and position of the label on the SVG
  const bbox = vText.getBBox()
  // Delete the label and SVG
  vText.remove()
  svg.remove()
  // Return the label size unless it's smaller than 25
  if (bbox.width < 25) {
    return 25
  } else {
    return bbox.width
  }
}

function makeTooltipHTML (neighborObj) {
  /*
  Create a HTML tooltip from the neighbor's attributes
  */
  // Start an array of lines, each line is an attribute
  const lines = []
  // Add each attribute as a HTML line if the attribute exists
  if (neighborObj.type) {
    lines.push(`<b>Type:</b> ${neighborObj.type}`)
  }
  if (neighborObj.sysId) {
    lines.push(`<b>System ID:</b> ${neighborObj.sysId}`)
  }
  if (neighborObj.platform) {
    lines.push(`<b>Platform:</b> ${neighborObj.platform}`)
  }
  if (neighborObj.addresses.length) {
    lines.push(`<b>Addresses:</b> ${neighborObj.addresses.join(', ')}`)
  }
  if (neighborObj.sysCap) {
    lines.push(`<b>Capabilities:</b> ${neighborObj.sysCap}`)
  }
  if (neighborObj.description) {
    lines.push(`<b>Description:</b> ${neighborObj.description}`)
  }
  // Join the lines and wrap in a paragraph tag
  return `<p>${lines.join('<br>')}</p>`
}

function makePaper (element) {
  /*
  Create the graph and paper for the diagram document
  */
  const namespace = joint.shapes
  const graph = new joint.dia.Graph({}, { cellNamespace: namespace })
  // Create the underlying JointJS paper object
  const paper = new joint.dia.Paper({
    el: document.getElementById('diagram'),
    model: graph,
    width: '100%', // Set to 100% of the container width
    height: 250, // Set initial height at 250px
    gridSize: 1,
    drawGrid: true,
    cellViewNamespace: namespace,
    restrictTranslate: true, // Don't allow elements to move outside the paper
    // Make link labels draggable
    snapLabels: true,
    interactive: {
      linkMove: false,
      labelMove: true,
      arrowheadMove: false,
      vertexMove: false,
      vertexAdd: false,
      vertexRemove: false,
      useLinkTools: false
    }
  })
  // ########## Add paper panning functionality
  let dragStartPosition = null // Initialize the drag position
  // When mouse clicks on empty area (not a cell)
  paper.on('blank:pointerdown', function (evt, x, y) {
    // Set the start position for dragging/translating the paper
    const scale = paper.scale()
    dragStartPosition = { x: x * scale.sx, y: y * scale.sy }
  })
  // When the mouse click lets up, reset the drag position
  paper.on('cell:pointerup blank:pointerup', function (cellView, x, y) {
    dragStartPosition = null
  })
  // When the mouse moves across the paper
  $('#diagram').on('mousemove touchmove', function (event) {
    // If the drag position has been set, then mouse is clicked on and
    //     holding a blank area of the paper.
    if (dragStartPosition != null) {
      // The target element needs to be detected so if a touchmove event moves
      //     outside the svg element, it will not break the diagram.
      // Initialize the target element tag as a SVG type
      let targetElementTag = 'svg'
      // If this was a touchmove event, then user is touching screen, not
      //    clicking mouse.
      if (event.type === 'touchmove') {
        // Grab the Touch() object
        const touch = event.touches[0] || event.changedTouches[0]
        // Get the current element being touched
        const realTarget = document.elementFromPoint(
          touch.clientX,
          touch.clientY
        )
        if (realTarget) { // If the realTarget is not null
          // Set the tag name. If the user moves touch off of the SVG, this
          //     will help detect when the user drags outside of the SVG
          //     element.
          targetElementTag = realTarget.tagName
          // Set the offset attributes so they can be used like this was a
          //     mousemove event.
          event.offsetX = touch.clientX - realTarget.getBoundingClientRect().x
          event.offsetY = touch.clientY - realTarget.getBoundingClientRect().y
        } else { // If the realTarget is null
          // Nullify the targetElementTag so paper translation won't happen
          targetElementTag = null
        }
      }
      // Only when the element being touched (if this is a touch event) is the
      //     svg.
      if (targetElementTag === 'svg') {
        // Move the paper in relation to the dragStartPosition
        paper.translate(
          event.offsetX - dragStartPosition.x,
          event.offsetY - dragStartPosition.y
        )
      }
    }
  })
  // Create a adjustGraphVertices() function to wrap the
  //   multipleLinks.adjustVertices function.
  // The new adjustGraphVertices() function automatically passes in the graph
  //   object, so it only requires the link or cell (element) for the second
  //   argument.
  const adjustGraphVertices = _.partial(multipleLinks.adjustVertices, graph)
  // Adjust vertices when a cell is removed or its source/target was changed
  graph.on('add remove change:source change:target', adjustGraphVertices)
  // Adjust vertices when the user stops interacting with an element
  paper.on('cell:pointerup', adjustGraphVertices)
  // Save the function to the graph for use later in another part of code
  graph.adjustGraphVertices = adjustGraphVertices
  // Initialize a list of neighbors. They will be keyed by their name string
  graph.neighbors = {}
  return [graph, paper]
}

function layout (graph, paper) {
  /*
  Automatically adjust the layout of the elements on the paper
  */
  // Get the rank direction setting
  const rankDir = $('#rank_direction').val()
  // Get the rank separation setting
  const rankSepSetting = parseInt($('#rank_separation').html()) / 100
  // Get a distance for the rank seperation of the graph by calculating N% of
  //   the width of the wrapper container.
  const rankSep = $('#diagram_wrapper').width() * rankSepSetting
  // Perform a directed graph layout
  joint.layout.DirectedGraph.layout(graph, {
    marginX: 10,
    marginY: 10,
    rankSep, // Set the seperation of the ranks
    rankDir // Set the ranking ranking
  })
  // Adjust the paper size to the current content
  paper.fitToContent()
  // Reset the paper's width to 100% of the container. Add 50 pixels of height
  //   to the paper for a little extra space.
  paper.setDimensions('100%', paper.options.height + 50)
  // Center the content inside the paper
  const paperArea = paper.getArea()
  const contentArea = paper.getContentArea()
  paper.translate(
    (paperArea.width - contentArea.width) / 2,
    (paperArea.height - contentArea.height) / 2
  )
  // Get an array of links connected to the selfNeighbor (original device)
  const outboundLinks = graph.getConnectedLinks(
    graph.selfNeighbor,
    { outbound: true }
  )
  // Get the values of the label distance sliders
  const localLabelDistance = parseInt($('#local_label').html()) / 100
  const remoteLabelDistance = parseInt($('#remote_label').html()) / 100
  // Iterate each link to:
  //     1. Set the label distances from the local/remote devices
  //     2. Find siblings and separate them appropriately using the
  //            multipleLinks.adjustVertices function.
  outboundLinks.forEach((link) => {
    // Loop once for each link label on this link, use an index because in
    //     order to update the labels, we have to call link.label(n, {}) to
    //     set the label attributes and have them take effect.
    for (let i = 0; i < link.labels().length; i++) {
      let distance = 0.5 // Start with a centered distance
      // If this is the label for the local interface
      if (link.label(i).device === 'local') {
        distance = localLabelDistance
      } else { // Otherwise, this is the label for the remote interface
        distance = remoteLabelDistance
      }
      // Set the distance attribute
      link.label(i, { position: { distance } })
    }
    // Detect and adjust the sibling interfaces
    graph.adjustGraphVertices(link)
  })
}

function drawSelfNeighbor (graph) {
  /*
  Draw the original reference device on the paper. All links connect back to
    this neighbor.
  */
  // Use a circuit instead of a Rectangle for the selfNeighbor
  const selfNeighbor = new joint.shapes.standard.Circle()
  selfNeighbor.resize(50, 50)
  selfNeighbor.attr({
    body: {
      fill: 'Gray'
    }
  })
  selfNeighbor.addTo(graph)
  // Save the selfNeighbor to the graph so it can be easily referenced later
  graph.selfNeighbor = selfNeighbor
  return selfNeighbor
}

function drawNeighbor (graph, selfNeighbor, neighborObj) {
  /*
  Draw a new neighbor onto the paper using its neighbor attributes
  */
  let neighbor // Initialize an empty neighbor
  // If we have already drawn this neighbor, then reuse it (for multiple links
  //   between the selfNeighbor and this neighbor).
  if (neighborObj.sysName in graph.neighbors) {
    neighbor = graph.neighbors[neighborObj.sysName]
  } else { // If we haven't drawn this neighbor yet
    // Use a default red color in case we can't detect the neighbor's type
    let color = 'red'
    if (neighborObj.type.includes('CDP')) {
      color = '#0d6efd' // Bootstrap blue for CDP neighbors
    } else if (neighborObj.type.includes('LLDP')) {
      color = '#198754' // Bootstrap green for LLDP neighbors
    }
    // Create the neighbor from the template
    neighbor = new joint.shapes.shapes.Device()
    neighbor.position(100, 30) // Set an initial position
    neighbor.resize(100, 40) // Set an initial size, width will get changed.
    // Put together the neighbor's label attributes
    const labelAttrs = {
      // If the sysName is the string 'null', then use the sysId
      text: (neighborObj.sysName !== 'null')
        ? neighborObj.sysName
        : neighborObj.sysId,
      // Set text attributes
      fill: 'white',
      fontSize: 14
    }
    // Set the neighbor's attributes
    neighbor.attr({
      body: {
        fill: color,
        rx: 10 // add a corner radius
      },
      label: labelAttrs
    })
    // Create the tooltip HTML and set it in the neighbor's attributes
    neighbor.attr('./data-bs-title', makeTooltipHTML(neighborObj))
    // Meausure the width of the neighbor's label
    const labelWidth = measureLabelWidth(neighbor.attributes.attrs.label)
    // Set the width of the neighbor box
    neighbor.attributes.size.width = labelWidth
    // Add this neighbor to the list of neighbors on the graph so it can be
    //   reused if there is another link to it.
    graph.neighbors[neighborObj.sysName] = neighbor
  }
  // Create the link between the selfNeighbor and the new neighbor
  const link = new joint.shapes.standard.Link()
  // Remove the arrowhead from the link line
  link.attr({
    line: {
      sourceMarker: {
        d: ''
      },
      targetMarker: {
        d: ''
      }
    }
  })
  // Add a local interface label to the link 65% away from the selfNeighbor
  link.appendLabel({
    attrs: {
      text: {
        text: neighborObj.localIntfShort
      }
    },
    position: {
      distance: 0.65
    },
    device: 'local' // Tag for label settings later
  })
  // Add a remote interface label to the link 85% away from the selfNeighbor
  link.appendLabel({
    attrs: {
      text: {
        // If the remoteIntfShort is the string 'null', then use remoteIntfId
        text: (neighborObj.remoteIntfShort !== 'null')
          ? neighborObj.remoteIntfShort
          : neighborObj.remoteIntfId
      }
    },
    position: {
      distance: 0.85
    },
    device: 'remote'
  })
  // Set the source and target of the link
  link.source(selfNeighbor)
  link.target(neighbor)
  // Set the line to use the smooth style
  link.connector('smooth')
  // Add the neighbor and link to the graph
  neighbor.addTo(graph)
  link.addTo(graph)
  return neighbor
}

module.exports = { makePaper, layout, drawSelfNeighbor, drawNeighbor }
