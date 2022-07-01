/* global $ */
/* global bootstrap */

$(document).ready(function () {
  // Grab array of all elements with 'data-bs-toggle="tooltip"' set
  var tooltipToggled = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  // Add the buttons in the control_buttons div to the array
  const tooltipTriggerList = tooltipToggled.concat($('#control_buttons').find(':button').toArray())
  // Activate tooltips on all elements in the array
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})
