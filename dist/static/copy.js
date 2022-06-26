/* global $ */

// Complicated copy function, but overcomes copying line breaks
const copyToClipboard = str => {
  const el = document.createElement('textarea') // Create a <textarea> element
  el.value = str // Set its value to the string that you want copied
  el.setAttribute('readonly', '') // Make it readonly to be tamper-proof
  el.style.position = 'absolute'
  el.style.left = '-9999px' // Move outside the screen to make it invisible
  document.body.appendChild(el) // Append the <textarea> element to the HTML document
  const selected = document.getSelection().rangeCount > 0 // Check if there is any content selected previously
    ? document.getSelection().getRangeAt(0) // Store selection if found
    : false // Mark as false to know no selection existed before
  el.select() // Select the <textarea> content
  document.execCommand('copy') // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el) // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges() // Unselect everything on the HTML document
    document.getSelection().addRange(selected) // Restore the original selection
  }
}

// Function to copy the text and change the clipboard button icon
function handleCopyClick (evt) {
  // Grab the parent div for the code block
  const parentDiv = evt.target.closest('div')
  // Grab the clipboard button
  const copyButton = $(parentDiv).children('button')[0]
  // Grab the text from the code block
  const codeText = $(parentDiv).children('textarea')[0].value
  // Copy all of the code to the clipboard
  copyToClipboard(codeText)
  // Set inside text to let user know copy was done
  copyButton.innerHTML = '<i class="fa fa-check fa-lg text-success"></i>'
  // Set a timer to reset the button text.
  setTimeout(function () {
    copyButton.innerHTML = '<i class="fa fa-clone fa-lg"></i>'
  }, 1500)
}

// ### Add a clipboard button for .highlight code blocks.
$(document).ready(function () {
  // Get the list of all highlight code blocks
  const highlights = document.querySelectorAll('div.highlight')
  highlights.forEach(div => {
    // Create the copy button
    const copy = document.createElement('button')
    // Set the icon inside the button
    copy.innerHTML = '<i class="fa fa-clone fa-lg"></i>'
    // Set button type to prevent default form 'submit' action
    copy.setAttribute('type', 'button')
    // Add the event listener to each click
    copy.addEventListener('click', handleCopyClick)
    // Append the copy button to each code block
    div.append(copy)
  })
})
