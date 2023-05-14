/* global $ */
/* global _ */
/* global joint */
/* global g */

/******************************************************************************
Function for seperating multiple links between elements on the diagram

Code taken from
  https://resources.jointjs.com/tutorial/multiple-links-between-elements and
  slightly modified for linting purposes.
******************************************************************************/

function adjustVertices (graph, cell) {
  // if `cell` is a view, find its model
  cell = cell.model || cell

  if (cell instanceof joint.dia.Element) {
    // `cell` is an element
    _.chain(graph.getConnectedLinks(cell))
      .groupBy(function (link) {
        // the key of the group is the model id of the link's source or target
        // cell id is omitted
        return _.omit([link.source().id, link.target().id], cell.id)[0]
      })
      .each(function (group, key) {
        // if the member of the group has both source and target model
        // then adjust vertices
        if (key !== 'undefined') adjustVertices(graph, _.first(group))
      })
      .value()
    return
  }

  // `cell` is a link
  // get its source and target model IDs
  const sourceId = cell.get('source').id || cell.previous('source').id
  const targetId = cell.get('target').id || cell.previous('target').id

  // if one of the ends is not a model
  // (if the link is pinned to paper at a point)
  // the link is interpreted as having no siblings
  if (!sourceId || !targetId) return

  // identify link siblings
  const siblings = _.filter(graph.getLinks(), function (sibling) {
    const siblingSourceId = sibling.source().id
    const siblingTargetId = sibling.target().id
    // if source and target are the same
    // or if source and target are reversed
    return ((siblingSourceId === sourceId) && (siblingTargetId === targetId)) ||
        ((siblingSourceId === targetId) && (siblingTargetId === sourceId))
  })

  const numSiblings = siblings.length
  switch (numSiblings) {
    case 0: {
      // the link has no siblings
      break
    } case 1: {
      // there is only one link
      // no vertices needed
      cell.unset('vertices')
      break
    } default: {
      // there are multiple siblings
      // we need to create vertices
      // find the middle point of the link
      const sourceCenter = graph.getCell(sourceId).getBBox().center()
      const targetCenter = graph.getCell(targetId).getBBox().center()
      const midPoint = g.Line(sourceCenter, targetCenter).midpoint()
      // find the angle of the link
      const theta = sourceCenter.theta(targetCenter)
      // constant
      // the maximum distance between two sibling links
      // Should be an integer like 30
      const GAP = parseInt($('#sibling_gap').html())
      _.each(siblings, function (sibling, index) {
        // we want offset values to be calculated as 0, 20, 20, 40, 40, 60, 60 ...
        let offset = GAP * Math.ceil(index / 2)
        // place the vertices at points which are `offset` pixels perpendicularly away
        // from the first link
        //
        // as index goes up, alternate left and right
        //
        //  ^  odd indices
        //  |
        //  |---->  index 0 sibling - centerline (between source and target centers)
        //  |
        //  v  even indices
        const sign = ((index % 2) ? 1 : -1)
        // to assure symmetry, if there is an even number of siblings
        // shift all vertices leftward perpendicularly away from the centerline
        if ((numSiblings % 2) === 0) {
          offset -= ((GAP / 2) * sign)
        }
        // make reverse links count the same as non-reverse
        const reverse = ((theta < 180) ? 1 : -1)
        // we found the vertex
        const angle = g.toRad(theta + (sign * reverse * 90))
        const vertex = g.Point.fromPolar(offset, angle, midPoint)
        // replace vertices array with `vertex`
        sibling.vertices([vertex])
      })
    }
  }
}

module.exports = { adjustVertices }
