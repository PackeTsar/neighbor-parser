(()=>{var t={868:t=>{function n(t,n){const e=new RegExp(t).exec(n);return e?e[2]:null}function e(t,n,e){const r=t.exec(e);return r?r[n]:null}function r(t){return n("(Interface: *)(.*),",t)}function o(t){return e(/(Local (Intf|Port id): *)(.*)/,3,t)}function s(t){return n("(Device ID: *)(.*)",t)}function c(t){return n("(System Name: *)(.*)",t)}function a(t){return n("(Port ID \\(outgoing port\\): *)(.*)",t)}function u(t){return n("(Port Description: *)(.*)",t)}function i(t){return null}function f(t){return n("(Port id: *)(.*)",t)}function l(t){return n("(Platform: *)(.*),",t)}function p(t){return null}function d(t){return e(/Version *:\n(.*?)(?=\n\n)/s,1,t)}function m(t){return t.match(/System Description:[\s]*\n/)?e(/System Description:[\s]*\n(.*?)(?=\n\n)/s,1,t):n("(System Description: )(.*)",t)}function I(t){return n("(Holdtime *: )(.*)",t)}function y(t){return n("(Time remaining: )(.*)",t)}function h(t){return null}function g(t){return n("(Chassis id: )(.*)",t)}function D(t){return n("(Capabilities: )(.*)",t)}function P(t){return n("(System Capabilities: )(.*)",t)}function S(t,n){if(t){const e=[];for(const r of t)e.push(r[n]);return[...new Set(e)]}return[]}function b(t){return S(t.matchAll(/(IP|IPv4|IPv6) (A|a)ddress: ([0-9a-fA-F:]\S*)/gm),3)}function M(t){return S(t.matchAll(/((Management Address|IP|IPV6): )([0-9a-fA-F:]\S*)/gm),3)}const N={CDP:{localIntf:r,sysName:s,remoteIntf:a,remoteIntfId:i,platform:l,description:d,ttl:I,sysId:h,sysCap:D,addresses:b},LLDP:{localIntf:o,sysName:c,remoteIntf:u,remoteIntfId:f,platform:p,description:m,ttl:y,sysId:g,sysCap:P,addresses:M}};t.exports={cdpLocalIntf:r,lldpLocalIntf:o,cdpSysName:s,lldpSysName:c,cdpRemoteIntf:a,lldpRemoteIntf:u,cdpRemoteIntfId:i,lldpRemoteIntfId:f,cdpPlatform:l,lldpPlatform:p,cdpDescription:d,lldpDescription:m,cdpTtl:I,lldpTtl:y,cdpSysId:h,lldpSysId:g,cdpSysCap:D,lldpSysCap:P,cdpAddresses:b,lldpAddresses:M,funcMap:N}},529:(t,n,e)=>{const r=e(561),o=e(868);t.exports={getNeighbors:function(t){const n=[],e=r.cleanArray(r.splitDetect(t));for(let t=0;t<e.length;t++){const r=e[t].data,s=e[t].type;n.push({type:s,localIntf:o.funcMap[s].localIntf(r),sysName:o.funcMap[s].sysName(r),remoteIntf:o.funcMap[s].remoteIntf(r),remoteIntfId:o.funcMap[s].remoteIntfId(r),platform:o.funcMap[s].platform(r),description:o.funcMap[s].description(r),ttl:o.funcMap[s].ttl(r),sysId:o.funcMap[s].sysId(r),sysCap:o.funcMap[s].sysCap(r),addresses:o.funcMap[s].addresses(r)})}return n}}},561:t=>{function n(t){return t.split(/-----*|\n\n\n/)}function e(t){return t.match(/Platform:/)?"CDP":t.match(/System Name:/)?"LLDP":null}t.exports={split:n,detect:e,splitDetect:function(t){return n(t).map((t=>({type:e(t),data:t})))},cleanArray:function(t){const n=[];for(let e=0;e<t.length;e++)t[e].type&&n.push(t[e]);return n}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var s=n[r]={exports:{}};return t[r](s,s.exports,e),s.exports}(()=>{const t=e(529);function n(){const n=$("#neighborTable").DataTable({retrieve:!0}),e=$("#neighborData");n.clear().draw();const r=t.getNeighbors(e.val());for(let t=0;t<r.length;t++)r[t].num=t+1,n.row.add(r[t]);n.draw()}$(document).ready((function(){$("#neighborData").keyup((function(){n()})),$("#parseNeighbors").click((function(){n(),$("#neighbor_search").focus()})),$("#clearNeighborData").click((function(){const t=$("#neighborData")[0];t.value="",n(),t.focus()}))}))})()})();