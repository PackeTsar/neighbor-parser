(()=>{var t={868:t=>{function n(t,n){const e=new RegExp(t).exec(n);return e?e[2]:null}function e(t,n,e){const r=t.exec(e);return r?r[n]:null}function r(t){return n("(Interface: *)(.*),",t)}function o(t){return e(/(Local (Intf|Port id): *)(.*)/,3,t)}function s(t){return n("(Device ID: *)(.*)",t)}function c(t){return n("(System Name: *)(.*)",t)}function a(t){return n("(Port ID \\(outgoing port\\): *)(.*)",t)}function u(t){return n("(Port Description: *)(.*)",t)}function i(t){return null}function l(t){return n("(Port id: *)(.*)",t)}function f(t){return n("(Platform: *)(.*),",t)}function p(t){return null}function d(t){return e(/Version *:\n(.*?)(?=\n\n)/s,1,t)}function m(t){return t.match(/System Description:[\s]*\n/)?e(/System Description:[\s]*\n(.*?)(?=\n\n)/s,1,t):n("(System Description: )(.*)",t)}function I(t){return n("(Holdtime *: )(.*)",t)}function y(t){return n("(Time remaining: )(.*)",t)}function g(t){return null}function D(t){return n("(Chassis id: )(.*)",t)}function P(t){return n("(Capabilities: )(.*)",t)}function h(t){return n("(System Capabilities: )(.*)",t)}function S(t){const n=t.match(/(?<=(IP|IPv4|IPv6) (A|a)ddress: )([0-9a-fA-F:]\S*)/gm);return n?[...new Set(n)]:[]}function M(t){const n=t.match(/(?<=(Management Address|IP|IPV6): )([0-9a-fA-F:]\S*)/gm);return n?[...new Set(n)]:[]}const C={CDP:{localIntf:r,sysName:s,remoteIntf:a,remoteIntfId:i,platform:f,description:d,ttl:I,sysId:g,sysCap:P,addresses:S},LLDP:{localIntf:o,sysName:c,remoteIntf:u,remoteIntfId:l,platform:p,description:m,ttl:y,sysId:D,sysCap:h,addresses:M}};t.exports={cdpLocalIntf:r,lldpLocalIntf:o,cdpSysName:s,lldpSysName:c,cdpRemoteIntf:a,lldpRemoteIntf:u,cdpRemoteIntfId:i,lldpRemoteIntfId:l,cdpPlatform:f,lldpPlatform:p,cdpDescription:d,lldpDescription:m,cdpTtl:I,lldpTtl:y,cdpSysId:g,lldpSysId:D,cdpSysCap:P,lldpSysCap:h,cdpAddresses:S,lldpAddresses:M,funcMap:C}},529:(t,n,e)=>{const r=e(561),o=e(868);t.exports={getNeighbors:function(t){const n=[],e=r.cleanArray(r.splitDetect(t));for(let t=0;t<e.length;t++){const r=e[t].data,s=e[t].type;n.push({type:s,localIntf:o.funcMap[s].localIntf(r),sysName:o.funcMap[s].sysName(r),remoteIntf:o.funcMap[s].remoteIntf(r),remoteIntfId:o.funcMap[s].remoteIntfId(r),platform:o.funcMap[s].platform(r),description:o.funcMap[s].description(r),ttl:o.funcMap[s].ttl(r),sysId:o.funcMap[s].sysId(r),sysCap:o.funcMap[s].sysCap(r),addresses:o.funcMap[s].addresses(r)})}return n}}},561:t=>{function n(t){return t.split(/-----*|\n\n\n/)}function e(t){return t.match(/Platform:/)?"CDP":t.match(/System Name:/)?"LLDP":null}t.exports={split:n,detect:e,splitDetect:function(t){return n(t).map((t=>({type:e(t),data:t})))},cleanArray:function(t){const n=[];for(let e=0;e<t.length;e++)t[e].type&&n.push(t[e]);return n}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var s=n[r]={exports:{}};return t[r](s,s.exports,e),s.exports}(()=>{const t=e(529);$(document).ready((function(){const n=$("#neighborTable").DataTable({retrieve:!0});$("#neighborData").keyup((function(){n.clear().draw();const e=t.getNeighbors($(this).val());for(let t=0;t<e.length;t++)e[t].num=t+1,console.log(e[t]),n.row.add(e[t]);n.draw()}))}))})()})();