(()=>{var t={868:t=>{function e(t,e){const n=new RegExp(t).exec(e);return n?n[2]:null}function n(t,e,n){const r=t.exec(n);return r?r[e]:null}function r(t){return e("(Interface: *)(.*),",t)}function o(t){return n(/(Local (Intf|Port id): *)(.*)/,3,t)}function s(t){return e("(Device ID: *)(.*)",t)}function a(t){return e("(System Name: *)(.*)",t)}function i(t){return e("(Port ID \\(outgoing port\\): *)(.*)",t)}function c(t){return e("(Port Description: *)(.*)",t)}function l(t){return null}function d(t){return e("(Port id: *)(.*)",t)}function u(t){return e("(Platform: *)(.*),",t)}function p(t){return null}function f(t){return n(/Version *:\n(.*?)(?=\n\n)/s,1,t)}function m(t){return t.match(/System Description:[\s]*\n/)?n(/System Description:[\s]*\n(.*?)(?=\n\n)/s,1,t):e("(System Description: )(.*)",t)}function h(t){return e("(Holdtime *: )(.*)",t)}function I(t){return e("(Time remaining: )(.*)",t)}function g(t){return null}function y(t){return e("(Chassis id: )(.*)",t)}function b(t){return e("(Capabilities: )(.*)",t)}function S(t){return e("(System Capabilities: )(.*)",t)}function D(t,e){if(t){const n=[];for(const r of t)n.push(r[e]);return[...new Set(n)]}return[]}function P(t){return D(t.matchAll(/(IP|IPv4|IPv6) (A|a)ddress: ([0-9a-fA-F:]\S*)/gm),3)}function v(t){return D(t.matchAll(/((Management Address|IP|IPV6): )([0-9a-fA-F:]\S*)/gm),3)}const w={CDP:{localIntf:r,sysName:s,remoteIntf:i,remoteIntfId:l,platform:u,description:f,ttl:h,sysId:g,sysCap:b,addresses:P},LLDP:{localIntf:o,sysName:a,remoteIntf:c,remoteIntfId:d,platform:p,description:m,ttl:I,sysId:y,sysCap:S,addresses:v}};t.exports={cdpLocalIntf:r,lldpLocalIntf:o,cdpSysName:s,lldpSysName:a,cdpRemoteIntf:i,lldpRemoteIntf:c,cdpRemoteIntfId:l,lldpRemoteIntfId:d,cdpPlatform:u,lldpPlatform:p,cdpDescription:f,lldpDescription:m,cdpTtl:h,lldpTtl:I,cdpSysId:g,lldpSysId:y,cdpSysCap:b,lldpSysCap:S,cdpAddresses:P,lldpAddresses:v,funcMap:w}},506:t=>{t.exports={NEIGHBORS:[{num:"1",type:"CDP",localIntf:"GigabitEthernet1/0/1",localIntfShort:"Gi1/0/1",sysName:"WAP1",remoteIntf:"GigabitEthernet0",remoteIntfShort:"Gi0",remoteIntfId:null,platform:"AIR-AP3802I-B-K9",description:"Cisco AP Software, ap3g3-k9w8 Version: 8.10.151.0",ttl:"100 sec",sysId:null,sysCap:null,addresses:["10.10.10.11","FE80::11"]},{num:"2",type:"LLDP",localIntf:"Gi1/0/2",localIntfShort:"Gi1/0/2",sysName:"WAP2",remoteIntf:"eth0",remoteIntfShort:"eth0",remoteIntfId:"0",platform:null,description:"Cisco AP Software, ap3g3-k9w8 Version: 8.10.151.0",ttl:"100 seconds",sysId:"0000.0000.0002",sysCap:"B",addresses:["10.10.10.12","FE80::12"]}]}},508:(t,e,n)=>{const r=n(127);joint.shapes.standard.Rectangle.define("shapes.Device",{attrs:{".":{"data-bs-title":"My Shape","data-bs-placement":"top","data-bs-toggle":"diagram-tooltip","data-bs-html":"true"}}},{},{}),t.exports={makePaper:function(t){const e=joint.shapes,n=new joint.dia.Graph({},{cellNamespace:e}),o=new joint.dia.Paper({el:document.getElementById("diagram"),model:n,width:"100%",height:250,gridSize:1,drawGrid:!0,cellViewNamespace:e,restrictTranslate:!0,snapLabels:!0,interactive:{linkMove:!1,labelMove:!0,arrowheadMove:!1,vertexMove:!1,vertexAdd:!1,vertexRemove:!1,useLinkTools:!1}}),s=_.partial(r.adjustVertices,n);return n.on("add remove change:source change:target",s),o.on("cell:pointerup",s),n.adjustGraphVertices=s,n.neighbors={},[n,o]},layout:function(t,e){const n=.65*$("#diagram_wrapper").width();joint.layout.DirectedGraph.layout(t,{marginX:10,marginY:10,rankSep:n,rankDir:"LR"}),e.fitToContent(),e.setDimensions("100%",e.options.height+50);const r=e.getArea(),o=e.getContentArea();e.translate((r.width-o.width)/2,(r.height-o.height)/2),t.getConnectedLinks(t.selfNeighbor,{outbound:!0}).forEach((e=>{t.adjustGraphVertices(e)}))},drawSelfNeighbor:function(t){const e=new joint.shapes.standard.Circle;return e.resize(50,50),e.attr({body:{fill:"Gray"}}),e.addTo(t),t.selfNeighbor=e,e},drawNeighbor:function(t,e,n){let r;if(n.sysName in t.neighbors)r=t.neighbors[n.sysName];else{let e="red";n.type.includes("CDP")?e="#0d6efd":n.type.includes("LLDP")&&(e="#198754"),r=new joint.shapes.shapes.Device,r.position(100,30),r.resize(100,40);const o={text:"null"!==n.sysName?n.sysName:n.sysId,fill:"white",fontSize:14};r.attr({body:{fill:e,rx:10},label:o}),r.attr("./data-bs-title",function(t){const e=[];return t.type&&e.push(`<b>Type:</b> ${t.type}`),t.sysId&&e.push(`<b>System ID:</b> ${t.sysId}`),t.platform&&e.push(`<b>Platform:</b> ${t.platform}`),t.addresses.length&&e.push(`<b>Addresses:</b> ${t.addresses.join(", ")}`),t.sysCap&&e.push(`<b>Capabilities:</b> ${t.sysCap}`),t.description&&e.push(`<b>Description:</b> ${t.description}`),`<p>${e.join("<br>")}</p>`}(n));const s=function(t){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");document.body.appendChild(e);const n=V("text").attr({fontSize:t.fontSize}).text(t.text);n.appendTo(e);const r=n.getBBox();return n.remove(),e.remove(),r.width<25?25:r.width}(r.attributes.attrs.label);r.attributes.size.width=s,t.neighbors[n.sysName]=r}const o=new joint.shapes.standard.Link;return o.attr({line:{sourceMarker:{d:""},targetMarker:{d:""}}}),o.appendLabel({attrs:{text:{text:n.localIntfShort}},position:{distance:.65}}),o.appendLabel({attrs:{text:{text:"null"!==n.remoteIntfShort?n.remoteIntfShort:n.remoteIntfId}},position:{distance:.85}}),o.source(e),o.target(r),o.connector("smooth"),r.addTo(t),o.addTo(t),r}}},127:t=>{t.exports={adjustVertices:function t(e,n){if((n=n.model||n)instanceof joint.dia.Element)return void _.chain(e.getConnectedLinks(n)).groupBy((function(t){return _.omit([t.source().id,t.target().id],n.id)[0]})).each((function(n,r){"undefined"!==r&&t(e,_.first(n))})).value();const r=n.get("source").id||n.previous("source").id,o=n.get("target").id||n.previous("target").id;if(!r||!o)return;const s=_.filter(e.getLinks(),(function(t){const e=t.source().id,n=t.target().id;return e===r&&n===o||e===o&&n===r})),a=s.length;switch(a){case 0:break;case 1:n.unset("vertices");break;default:{const t=e.getCell(r).getBBox().center(),n=e.getCell(o).getBBox().center(),i=g.Line(t,n).midpoint(),c=t.theta(n),l=30;_.each(s,(function(t,e){let n=l*Math.ceil(e/2);const r=e%2?1:-1;a%2==0&&(n-=l/2*r);const o=c<180?1:-1,s=g.toRad(c+r*o*90),d=g.Point.fromPolar(n,s,i);t.vertices([d])}))}}}}},529:(t,e,n)=>{const r=n(561),o=n(868),s=n(632);function a(t){if(!t)return t;if(t.length<6)return t;const e=t.match(/^([A-Za-z ]+)/);return e?t.replace(e[0],e[0].slice(0,2)):t}t.exports={getNeighbors:function(t){let e=[];return r.cleanArray(r.splitDetect(t)).forEach((function(t){const n=t.data,r=t.type;if(r.includes("SHORT")){const t=s.funcMap[r](n);t.forEach((function(t){t.type=r,t.localIntfShort=a(t.localIntf),t.remoteIntfShort=a(t.remoteIntf)})),e=e.concat(t)}else e.push({type:r,localIntf:o.funcMap[r].localIntf(n),localIntfShort:a(o.funcMap[r].localIntf(n)),sysName:o.funcMap[r].sysName(n),remoteIntf:o.funcMap[r].remoteIntf(n),remoteIntfShort:a(o.funcMap[r].remoteIntf(n)),remoteIntfId:o.funcMap[r].remoteIntfId(n),platform:o.funcMap[r].platform(n),description:o.funcMap[r].description(n),ttl:o.funcMap[r].ttl(n),sysId:o.funcMap[r].sysId(n),sysCap:o.funcMap[r].sysCap(n),addresses:o.funcMap[r].addresses(n)})})),e},shorten:a}},632:(t,e,n)=>{const r=n(561);function o(t){let e=r.getShortBlocks(t)[0];return e=e.replace(/\n[ ]{4}/gs,""),e=e.replace(/Device( |-)ID.*?Port ID\n/gs,""),e=e.replace(/[\n]*(Total (cdp )?entries displayed|\S+(#|>)).*/gs,""),e}function s(t){const e=[];return o(t).split("\n").forEach((function(t){let n=[];const r=t.match(/^\S*/);let o=t.replace(r[0],"");const s=o.match(/^[ ]*(\S*\s\S*)/);o=o.replace(s[0],"");const a=o.match(/^[ ]*([0-9]*)/);o=o.replace(a[0],"");const i=o.match(/^[ ]*([A-Za-z] )+/g);if(i){const t=i[0];n=t.trim().split(" "),o=o.replace(t,"")}const c=o.match(/^[ ]*(\S*)/);o=o.replace(c[0],""),e.push({sysName:r[0],localIntf:s[1].trim(),ttl:a[1].trim(),sysCap:n,platform:c[1],remoteIntf:o.trim(),remoteIntfId:null,description:null,sysId:null,addresses:[]})})),e}function a(t){let e="";const n=[];if(r.getShortBlocks(t)[0].match(/\n[ ]{4}/))e=o(t);else{const n=t.match(/Device ID.*?Port ID/)[0].match(/Local/).index,r=o(t),s=[];r.split("\n").forEach((function(t){s.push(t.slice(0,n)+"    "+t.slice(n))})),e=s.join("\n")}const s=e.split("\n");let a=[];return s.forEach((function(t){const e=t.match(/^\S*/);let r=t.replace(e[0],"");const o=r.match(/^[ ]*(\S*)/);r=r.replace(o[0],"");const s=r.match(/^[ ]*([0-9]*)/);r=r.replace(s[0],"");const i=r.match(/^[ ]*([A-Za-z,]+)/);if(i){const t=i[0],e=t.trim().split("");a=e.filter((t=>","!==t)),r=r.replace(t,"")}else a=[];n.push({sysName:e[0],localIntf:o[1].trim(),ttl:s[1].trim(),sysCap:a,remoteIntf:r.trim(),remoteIntfId:null,platform:null,description:null,sysId:null,addresses:[]})})),n}const i={"CDP-SHORT":s,"LLDP-SHORT":a};t.exports={trimTable:o,cdpParseTable:s,lldpParseTable:a,funcMap:i}},561:t=>{function e(t){return t.match(/Device( |-)ID[ ]*Local Int(r)?f(ce)?[^\n]*?Port ID[ ]*\n[^\n].*?(Total (cdp )?entries displayed|\S+(#|>))/gs)}function n(t){return t.replace(/(\nDevice( |-)ID[ ]*Local Int(r)?f(ce)?)/gs,"--------$1")}function r(t){return(t=n(t)).split(/-----*|\n\n\n/)}function o(t){return e(t)?t.match(/Platform /)?"CDP-SHORT":t.match(/Local Intf /)?"LLDP-SHORT":null:t.match(/Platform:/)?"CDP":t.match(/System Name:/)?"LLDP":null}t.exports={getShortBlocks:e,insertDelineators:n,split:r,detect:o,splitDetect:function(t){return r(t).map((t=>({type:o(t),data:t})))},cleanArray:function(t){const e=[];for(let n=0;n<t.length;n++)t[n].type&&e.push(t[n]);return e}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}(()=>{const t=n(529),e=n(508),r=n(506);function o(n,r,o){n.clear(),n.neighbors={};const s=e.drawSelfNeighbor(n),a=$("#neighborTable").DataTable({retrieve:!0}),i=$("#neighborData");let c;a.clear().draw(),c=o||t.getNeighbors(i.val());for(let t=0;t<c.length;t++)c[t].num=t+1,a.row.add(c[t]),e.drawNeighbor(n,s,c[t]);a.draw(),e.layout(n,r),$('[data-bs-toggle="diagram-tooltip"]').tooltip()}$(document).ready((function(){const t=$("#diagram_wrapper")[0],[n,s]=e.makePaper(t);new ResizeObserver((t=>{for(const e of t)s.setDimensions(s.options.width,e.contentRect.height)})).observe(t),$("#neighborData").keyup((function(){o(n,s)})),$("#parseNeighbors").click((function(){o(n,s),$("#neighbor_search").focus()})),$("#clearNeighborData").click((function(){const t=$("#neighborData")[0];t.value="",o(n,s),t.focus()})),$("#zoom_in").click((function(){const t=s.scale();s.scale(1.1*t.sx,1.1*t.sy),this.blur()})),$("#zoom_out").click((function(){const t=s.scale();s.scale(.9*t.sx,.9*t.sy),this.blur()})),o(n,s,r.NEIGHBORS)}))})()})();