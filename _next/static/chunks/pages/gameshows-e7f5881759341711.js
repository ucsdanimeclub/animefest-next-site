(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[630],{4721:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gameshows",function(){return r(6283)}])},1526:function(e,t,r){"use strict";r.d(t,{Z:function(){return c},_:function(){return o}});var n=r(5893),a=r(5147);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function o(e){var t=Number(e.slice(0,2)),r="";return r=t<12?"AM":"PM",0===(t%=12)&&(t=12),t+":"+e.slice(-2)+" "+r}function c(e){var t=e.data,r=e.location,c=void 0===r?"":r,l=i(e,["data","location"]),u=l.className,d=i(l,["className"]),h="border-stroke";u&&(h=h+" "+u);var m=t;""!==c&&(m=m.filter((function(e){return e.location===c})));var p=m.sort((function(e,t){return e.start.localeCompare(t.start)}));return(0,n.jsxs)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({striped:!0,bordered:!0,hover:!0,responsive:!0,className:h},d,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{width:"40%",children:"Time"}),(0,n.jsx)("th",{children:"Event"})]})}),(0,n.jsx)("tbody",{children:p.map((function(e,t){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:o(e.start)+" - "+o(e.end)}),(0,n.jsx)("td",{children:e.topic})]},t)}))})]}))}},4067:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893),a=r(880);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function o(e){var t=e.children,r=e.src,o=i(e,["children","src"]),c=(0,a.useRouter)(),l={backgroundImage:"url('".concat(c.basePath,"/").concat(r,"')")};return(0,n.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({style:l},o,{children:t}))}},6283:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),a=r(682),s=r(1608),i=r(1555),o=r(4067),c=r(7068),l=r(1526),u=JSON.parse('{"O":[{"start":"15:30","end":"16:00","panelist":"Anime & Manga Enthusiasts","type":"game","topic":"Kahoot!","description":"Compete in a game of Kahoot against other attendees to see who knows more anime trivia!","location":"pctheatre"},{"start":"11:30","end":"12:30","topic":"Jeopardy! 1","panelist":"Anime & Manga Enthusiasts","type":"game","description":"Play a game of Jeopardy (with an anime spin) with other attendees!","location":"marshall"},{"start":"13:00","end":"14:00","topic":"Jeopardy! 2","panelist":"Anime & Manga Enthusiasts","type":"game","description":"Play a game of Jeopardy (with an anime spin) with other attendees!","location":"marshall"},{"start":"16:30","end":"18:30","topic":"Anisong Karuta","panelist":"Anime & Manga Enthusiasts","type":"game","description":"A Japanese card game of Karuta with a twist with anime songs.","location":"marshall"}]}');function d(){var e=u.O.sort((function(e,t){return e.start.localeCompare(t.start)})).filter((function(e){return"game"===e.type}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{fluid:!0,className:"p-0 text-center",children:(0,n.jsx)(o.Z,{src:"images/header_2024.png",className:"landing p-5",children:(0,n.jsx)("h1",{className:"display-4 mb-0 text-light",children:"GAME SHOWS"})})}),(0,n.jsxs)(a.Z,{fluid:!0,className:"p-3 section",children:[(0,n.jsx)("h4",{className:"text-left mb-4 display-text",children:"ABOUT"}),(0,n.jsx)("p",{children:"The Game Shows will be held in the Marshall Room in Price Center, and at the Price Center Theatre."}),(0,n.jsx)("p",{className:"mb-4",children:"Do you wanna test your anime knowledge? Come participate in our Jeopardy, Kahoot and Anisong Karuta game shows!"}),(0,n.jsx)("p",{children:"If anything catches your eye, stop by our rooms 11AM-6:30PM!"})]}),(0,n.jsxs)(a.Z,{fluid:!0,className:"p-3 section mt-4",children:[(0,n.jsx)("h4",{className:"text-left mb-4 display-text",children:"SCHEDULE"}),(0,n.jsxs)(s.Z,{className:"mb-4",children:[(0,n.jsx)(i.Z,{xs:0,md:3}),(0,n.jsxs)(i.Z,{xs:12,md:3,className:"mb-2",children:[(0,n.jsx)("h4",{className:"text-left title-text text-center",children:"Thurgood Marshall"}),(0,n.jsx)(l.Z,{data:u.O,location:"marshall"})]}),(0,n.jsxs)(i.Z,{xs:12,md:3,children:[(0,n.jsx)("h4",{className:"text-left title-text text-center",children:"Price Center Theatre"}),(0,n.jsx)(l.Z,{data:u.O,location:"pctheatre"})]}),(0,n.jsx)(i.Z,{xs:0,md:1})]}),(0,n.jsx)("h4",{className:"text-left title-text mb-4",children:"Game Show Descriptions"}),e.map((function(e,t){return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-left highlight mb-1",children:e.topic}),(0,n.jsx)("p",{className:"caption-text mb-2 ms-4",children:"By "+e.panelist}),(0,n.jsx)("p",{className:"mb-4 ms-4",children:e.description})]},t)})),(0,n.jsxs)(s.Z,{className:"mb-4",children:[(0,n.jsx)(i.Z,{xs:0,md:2,lg:4}),(0,n.jsx)(i.Z,{xs:12,md:8,lg:4,children:(0,n.jsx)(c.Z,{src:"images/karuta2023.jpg",alt:"karuta photo",className:"mw-100 border-stroke mx-auto d-block"})}),(0,n.jsx)(i.Z,{xs:0,md:2,lg:4})]})]})]})}},5147:function(e,t,r){"use strict";var n=r(4036),a=r.n(n),s=r(7294),i=r(6792),o=r(5893);const c=s.forwardRef((({bsPrefix:e,className:t,striped:r,bordered:n,borderless:s,hover:c,size:l,variant:u,responsive:d,...h},m)=>{const p=(0,i.vE)(e,"table"),f=a()(t,p,u&&`${p}-${u}`,l&&`${p}-${l}`,r&&`${p}-striped`,n&&`${p}-bordered`,s&&`${p}-borderless`,c&&`${p}-hover`),x=(0,o.jsx)("table",{...h,className:f,ref:m});if(d){let e=`${p}-responsive`;return"string"===typeof d&&(e=`${e}-${d}`),(0,o.jsx)("div",{className:e,children:x})}return x}));t.Z=c}},function(e){e.O(0,[774,888,179],(function(){return t=4721,e(e.s=t);var t}));var t=e.O();_N_E=t}]);