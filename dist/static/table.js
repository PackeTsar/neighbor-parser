/* global $ */
$(document).ready(function () {
  var table = $('#neighborTable').DataTable({
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
          var style = 'danger'
          if (data === 'CDP') {
            style = 'primary'
          } else if (data === 'LLDP') {
            style = 'success'
          }
          return '<span class="badge bg-' + style + '">' + data + '</span>'
        }
      },
      { data: 'localIntf' },
      { data: 'sysName' },
      { data: 'remoteIntf' },
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
  table.row.add({
    num: '1',
    type: 'CDP',
    localIntf: 'GigabitEthernet1/0/1',
    sysName: 'WAP1',
    remoteIntf: 'GigabitEthernet0',
    remoteIntfId: null,
    platform: 'AIR-AP3802I-B-K9',
    description: 'Cisco AP Software, ap3g3-k9w8 Version: 8.10.151.0',
    ttl: '100 sec',
    sysId: null,
    sysCap: null,
    addresses: ['10.10.10.11', 'FE80::11']
  })
  table.row.add({
    num: '2',
    type: 'LLDP',
    localIntf: 'Gi1/0/2',
    sysName: 'WAP2',
    remoteIntf: 'eth0',
    remoteIntfId: '0',
    platform: null,
    description: 'Cisco AP Software, ap3g3-k9w8 Version: 8.10.151.0',
    ttl: '100 seconds',
    sysId: '0000.0000.0002',
    sysCap: 'B',
    addresses: ['10.10.10.12', 'FE80::12']
  })
  table.draw()
  $('#neighbor_search').on('keyup', function () {
    table.search($(this).val()).draw()
  })
})
