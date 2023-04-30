/* global $ */
$(document).ready(function () {
  const table = $('#neighborTable').DataTable({
    dom: 'ti',
    searching: true,
    paging: false,
    colReorder: true,
    columns: [
      {
        data: 'num',
        // Render bold text for number column
        render: function (data, type, row, meta) {
          return '<p class="fw-bold">' + data + '</p>'
        }
      },
      {
        data: 'type',
        // Render badges for CDP/LLDP types for visualization
        render: function (data, type, row, meta) {
          let style = 'danger'
          if (data === 'CDP') {
            style = 'primary'
          } else if (data === 'LLDP') {
            style = 'success'
          } else if (data === 'CDP-SHORT') {
            style = 'primary'
          } else if (data === 'LLDP-SHORT') {
            style = 'success'
          }
          return '<span class="badge bg-' + style + '">' + data + '</span>'
        }
      },
      { data: 'localIntf' },
      { data: 'localIntfShort', visible: false },
      { data: 'sysName' },
      { data: 'remoteIntf' },
      { data: 'remoteIntfShort', visible: false },
      { data: 'remoteIntfId', visible: false },
      { data: 'platform' },
      { data: 'description', visible: false },
      { data: 'ttl', visible: false },
      { data: 'sysId', visible: false },
      { data: 'sysCap', visible: false },
      {
        data: 'addresses',
        render: '[, ]'
      }
    ]
  })
  new $.fn.dataTable.Buttons(table, {
    buttons: [
      {
        extend: 'copyHtml5',
        title: null,
        text: '<i class="fa-regular fa-copy"></i>',
        titleAttr: 'Copy table to clipboard'
      },
      {
        extend: 'csvHtml5',
        text: '<i class="fa-solid fa-download"></i>',
        titleAttr: 'Download CSV file of neighbors'
      },
      {
        extend: 'colvis',
        text: '<i class="fa-solid fa-gear"></i>',
        titleAttr: 'Show/hide columns'
      }
    ]
  }).container().appendTo($('#control_buttons'))
  table.draw()
  $('#neighbor_search').on('keyup', function () {
    table.search($(this).val()).draw()
  })
})
