(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8434)}])},8434:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(5893),a=n(4036),s=n.n(a),i=n(7294),o=n(6792);const c=i.forwardRef((({bsPrefix:e,className:t,children:n,aspectRatio:a,style:c,...l},u)=>{e=(0,o.vE)(e,"ratio");const d="number"===typeof a;return(0,r.jsx)("div",{ref:u,...l,style:{...c,...d&&{"--bs-aspect-ratio":(m=a,m<=0||m>100?"100%":m<1?100*m+"%":`${m}%`)}},className:s()(e,t,!d&&`${e}-${a}`),children:i.Children.only(n)});var m}));c.defaultProps={aspectRatio:"1x1"};var l=c,u=n(682),d=n(4051),m=n(1555),h=n(387);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function v(e){var t=e.children,n=e.src,a=p(e,["children","src"]),s=(0,h.useRouter)(),i={backgroundImage:"url('".concat(s.basePath,"/").concat(n,"')")};return(0,r.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}({style:i},a,{children:t}))}var g=n(8146);var x=function(e,t){var n=(0,i.useRef)(!0);(0,i.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},b=n(2029);function j(e){var t=function(e){var t=(0,i.useRef)(e);return t.current=e,t}(e);(0,i.useEffect)((function(){return function(){return t.current()}}),[])}var y=Math.pow(2,31)-1;function w(e,t,n){var r=n-Date.now();e.current=r<=y?setTimeout(t,r):setTimeout((function(){return w(e,t,n)}),y)}function N(){var e=function(){var e=(0,i.useRef)(!0),t=(0,i.useRef)((function(){return e.current}));return(0,i.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,i.useRef)();return j((function(){return clearTimeout(t.current)})),(0,i.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=y?t.current=setTimeout(r,a):w(t,r,Date.now()+a))},clear:n}}),[])}var k=n(3833),C=n(5446),S=(0,n(6611).Z)("carousel-caption");const O=i.forwardRef((({as:e="div",bsPrefix:t,className:n,...a},i)=>{const c=s()(n,(0,o.vE)(t,"carousel-item"));return(0,r.jsx)(e,{ref:i,...a,className:c})}));O.displayName="CarouselItem";var E=O;function P(e,t){let n=0;return i.Children.map(e,(e=>i.isValidElement(e)?t(e,n++):e))}var R=n(2646),A=n(4509),Z=n(2785);const I={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};const T=i.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:a,slide:c,fade:l,controls:u,indicators:d,indicatorLabels:m,activeIndex:h,onSelect:f,onSlide:p,onSlid:v,interval:j,keyboard:y,onKeyDown:w,pause:S,onMouseOver:O,onMouseOut:E,wrap:I,touch:T,onTouchStart:$,onTouchMove:D,onTouchEnd:M,prevIcon:_,prevLabel:L,nextIcon:F,nextLabel:U,variant:B,className:z,children:W,...G}=(0,C.Ch)(e,{activeIndex:"onSelect"}),J=(0,o.vE)(a,"carousel"),K=(0,o.SC)(),V=(0,i.useRef)(null),[X,H]=(0,i.useState)("next"),[q,Y]=(0,i.useState)(!1),[Q,ee]=(0,i.useState)(!1),[te,ne]=(0,i.useState)(h||0);Q||h===te||(V.current?H(V.current):H((h||0)>te?"next":"prev"),c&&ee(!0),ne(h||0)),(0,i.useEffect)((()=>{V.current&&(V.current=null)}));let re,ae=0;!function(e,t){let n=0;i.Children.forEach(e,(e=>{i.isValidElement(e)&&t(e,n++)}))}(W,((e,t)=>{++ae,t===h&&(re=e.props.interval)}));const se=(0,b.Z)(re),ie=(0,i.useCallback)((e=>{if(Q)return;let t=te-1;if(t<0){if(!I)return;t=ae-1}V.current="prev",null==f||f(t,e)}),[Q,te,f,I,ae]),oe=(0,g.Z)((e=>{if(Q)return;let t=te+1;if(t>=ae){if(!I)return;t=0}V.current="next",null==f||f(t,e)})),ce=(0,i.useRef)();(0,i.useImperativeHandle)(t,(()=>({element:ce.current,prev:ie,next:oe})));const le=(0,g.Z)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ce.current)&&(K?ie():oe())})),ue="next"===X?"start":"end";x((()=>{c||(null==p||p(te,ue),null==v||v(te,ue))}),[te]);const de=`${J}-item-${X}`,me=`${J}-item-${ue}`,he=(0,i.useCallback)((e=>{(0,A.Z)(e),null==p||p(te,ue)}),[p,te,ue]),fe=(0,i.useCallback)((()=>{ee(!1),null==v||v(te,ue)}),[v,te,ue]),pe=(0,i.useCallback)((e=>{if(y&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(K?oe(e):ie(e));case"ArrowRight":return e.preventDefault(),void(K?ie(e):oe(e))}null==w||w(e)}),[y,w,ie,oe,K]),ve=(0,i.useCallback)((e=>{"hover"===S&&Y(!0),null==O||O(e)}),[S,O]),ge=(0,i.useCallback)((e=>{Y(!1),null==E||E(e)}),[E]),xe=(0,i.useRef)(0),be=(0,i.useRef)(0),je=N(),ye=(0,i.useCallback)((e=>{xe.current=e.touches[0].clientX,be.current=0,"hover"===S&&Y(!0),null==$||$(e)}),[S,$]),we=(0,i.useCallback)((e=>{e.touches&&e.touches.length>1?be.current=0:be.current=e.touches[0].clientX-xe.current,null==D||D(e)}),[D]),Ne=(0,i.useCallback)((e=>{if(T){const t=be.current;Math.abs(t)>40&&(t>0?ie(e):oe(e))}"hover"===S&&je.set((()=>{Y(!1)}),j||void 0),null==M||M(e)}),[T,S,ie,oe,je,j,M]),ke=null!=j&&!q&&!Q,Ce=(0,i.useRef)();(0,i.useEffect)((()=>{var e,t;if(!ke)return;const n=K?ie:oe;return Ce.current=window.setInterval(document.visibilityState?le:n,null!=(e=null!=(t=se.current)?t:j)?e:void 0),()=>{null!==Ce.current&&clearInterval(Ce.current)}}),[ke,ie,oe,se,j,le,K]);const Se=(0,i.useMemo)((()=>d&&Array.from({length:ae},((e,t)=>e=>{null==f||f(t,e)}))),[d,ae,f]);return(0,r.jsxs)(n,{ref:ce,...G,onKeyDown:pe,onMouseOver:ve,onMouseOut:ge,onTouchStart:ye,onTouchMove:we,onTouchEnd:Ne,className:s()(z,J,c&&"slide",l&&`${J}-fade`,B&&`${J}-${B}`),children:[d&&(0,r.jsx)("div",{className:`${J}-indicators`,children:P(W,((e,t)=>(0,r.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=m&&m.length?m[t]:`Slide ${t+1}`,className:t===te?"active":void 0,onClick:Se?Se[t]:void 0,"aria-current":t===te},t)))}),(0,r.jsx)("div",{className:`${J}-inner`,children:P(W,((e,t)=>{const n=t===te;return c?(0,r.jsx)(Z.Z,{in:n,onEnter:n?he:void 0,onEntered:n?fe:void 0,addEndListener:R.Z,children:(t,r)=>i.cloneElement(e,{...r,className:s()(e.props.className,n&&"entered"!==t&&de,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&me)})}):i.cloneElement(e,{className:s()(e.props.className,n&&"active")})}))}),u&&(0,r.jsxs)(r.Fragment,{children:[(I||0!==h)&&(0,r.jsxs)(k.Z,{className:`${J}-control-prev`,onClick:ie,children:[_,L&&(0,r.jsx)("span",{className:"visually-hidden",children:L})]}),(I||h!==ae-1)&&(0,r.jsxs)(k.Z,{className:`${J}-control-next`,onClick:oe,children:[F,U&&(0,r.jsx)("span",{className:"visually-hidden",children:U})]})]})]})}));T.displayName="Carousel",T.defaultProps=I;var $=Object.assign(T,{Caption:S,Item:E}),D=JSON.parse('{"O":[{"name":"Main Stage","image":"images/main_stage.jpg","description":"Our annual Cosplay Masquerade and raffles are held on the Main Stage in West Ballroom."},{"name":"Exhibitor Hall","image":"images/exhibitor_hall.jpg","description":"Browse fanmade merchandise drawn or designed by local artists in the Artist Alley, or check out items sold by industry vendors."},{"name":"Showings","image":"images/showings.jpg","description":"Performances and movie showings will be held in the Price Center Theater."},{"name":"Panels","image":"images/panels.jpg","description":"We have informational and interactive panels for your enjoyment run by students, alumni, and professionals. Check them out!"},{"name":"Manga Library","image":"images/manga_library.jpg","description":"Relax and check out a book from Cal Animage Beta\'s library of donated manga."},{"name":"Gaming","image":"images/gaming.jpg","description":"We have a Super Smash Bros Ultimate tournament with prizes, brought to you by Triton Smash!"},{"name":"Featured Activities","image":"images/tabletop.jpg","description":"Learn a craft with the Origami Folders club and try out the Cardfight!! Vanguard card game."}]}'),M=n(8198);function _(){return(0,r.jsx)($,{className:"carousel mt-5 mx-auto border-stroke caption-text glow-text",children:D.O.map((function(e,t){return(0,r.jsxs)($.Item,{children:[(0,r.jsx)(M.Z,{className:"d-block w-100",src:e.image,alt:e.name}),(0,r.jsxs)($.Caption,{children:[(0,r.jsx)("h4",{children:e.name}),(0,r.jsx)("p",{children:e.description})]})]},t)}))})}n(2473);var L=n(1311),F=n(3716),U=n(7126);const B=i.forwardRef((({bsPrefix:e,active:t,disabled:n,eventKey:a,className:i,variant:c,action:l,as:u,...d},m)=>{e=(0,o.vE)(e,"list-group-item");const[h,f]=(0,F.v)({key:(0,U.h)(a,d.href),active:t,...d}),p=(0,g.Z)((e=>{if(n)return e.preventDefault(),void e.stopPropagation();h.onClick(e)}));n&&void 0===d.tabIndex&&(d.tabIndex=-1,d["aria-disabled"]=!0);const v=u||(l?d.href?"a":"button":"div");return(0,r.jsx)(v,{ref:m,...d,...h,onClick:p,className:s()(i,e,f.isActive&&"active",n&&"disabled",c&&`${e}-${c}`,l&&`${e}-action`)})}));B.displayName="ListGroupItem";var z=B;const W=i.forwardRef(((e,t)=>{const{className:n,bsPrefix:a,variant:i,horizontal:c,numbered:l,as:u="div",...d}=(0,C.Ch)(e,{activeKey:"onSelect"}),m=(0,o.vE)(a,"list-group");let h;return c&&(h=!0===c?"horizontal":`horizontal-${c}`),(0,r.jsx)(L.Z,{ref:t,...d,as:u,className:s()(n,m,i&&`${m}-${i}`,h&&`${m}-${h}`,l&&`${m}-numbered`)})}));W.displayName="ListGroup";var G=Object.assign(W,{Item:z}),J=JSON.parse('{"U":[{"name":"Discord","icon":"images/discord.svg","url":"https://discord.gg/Jja4tsVW8q"},{"name":"Twitter","icon":"images/twitter.svg","url":"https://twitter.com/ucsdanimeclub"},{"name":"Facebook","icon":"images/facebook.png","url":"https://www.facebook.com/groups/CALAnimageBeta/"},{"name":"Instagram","icon":"images/instagram.png","url":"https://www.instagram.com/ucsdanimagebeta/"}]}');function K(e){var t=e.children,n=e.height,a=void 0===n?50:n;return(0,r.jsxs)(u.Z,{fluid:!0,className:"p-4 text-center",children:[(0,r.jsx)(G,{horizontal:!0,className:"justify-content-center mb-2",children:J.U.map((function(e,t){return(0,r.jsxs)(G.Item,{className:"bg-transparent",children:[e.url&&(0,r.jsx)("a",{href:e.url,children:(0,r.jsx)(M.Z,{src:e.icon,alt:e.name,height:a})}),!e.url&&(0,r.jsx)(M.Z,{src:e.icon,alt:e.name,height:a})]},t)}))}),t]})}function V(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{fluid:!0,className:"text-center my-1 text-danger",children:"UCSD students and staff must show a green thumb to attend the convention. All other attendees must show a proof of vaccination or a negative COVID-19 test result received within the last 24 hours."}),(0,r.jsx)(u.Z,{fluid:!0,className:"text-center vh-100 p-0",children:(0,r.jsx)(v,{src:"images/landing.jpg",className:"landing",children:(0,r.jsx)(d.Z,{className:"align-items-center h-75 g-0 glow-text",children:(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(M.Z,{src:"images/logo_af.svg",className:"w-75",alt:"Animefest 2022 logo"}),(0,r.jsx)("h4",{children:"February 12 at UC San Diego's Price Center"}),(0,r.jsx)("h5",{children:"Free Admission"})]})})})}),(0,r.jsx)(K,{children:(0,r.jsx)("p",{className:"mb-0 caption-text",children:"Contact us and get live event coverage on our social media!"})}),(0,r.jsxs)(u.Z,{fluid:!0,className:"p-5 section",id:"about",children:[(0,r.jsx)("h1",{className:"text-left mb-4 display-text",children:"ABOUT"}),(0,r.jsx)("p",{children:"Animefest 2022, a time and place where animanga lovers, artists, and entertainers celebrate what we love! On February 12, 2022, participants go to the Price Center at UCSD to attend discussion and workshop panels, buy the best artwork, and check out your favorite manga in our manga library! And of course, there will be cosplays, festival games, and video games\u2014all for some otaku fun."}),(0,r.jsx)("p",{children:"For a taste of the convention, take a look at our recap video of Animefest 2019:"}),(0,r.jsx)(d.Z,{className:"align-items-end",children:(0,r.jsxs)(m.Z,{children:[(0,r.jsx)("div",{className:"video-player mx-auto",children:(0,r.jsx)(l,{aspectRatio:"16x9",children:(0,r.jsx)("iframe",{className:"mt-2 border-stroke",src:"https://www.youtube-nocookie.com/embed/eITsJPrRF4c",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),(0,r.jsx)(_,{})]})})]}),(0,r.jsxs)(u.Z,{fluid:!0,className:"p-5 mt-4 section",id:"map",children:[(0,r.jsx)("h1",{className:"text-left mb-4 display-text",children:"MAP AND SCHEDULE"}),(0,r.jsx)("p",{children:"Animefest is held at the Price Center at UC San Diego. Specifically, it will be at the West Ballroom, Theater, Thurgood Marshall, Eleanor Roosevelt, Roger Revelle, Bear, Red Shoe, and Green Table rooms."}),(0,r.jsx)("p",{children:"All rooms are located on the second floor with the exception of the Theater, which is on the first floor and below the Bear Room."}),(0,r.jsx)("p",{className:"mb-0",children:"Full map and schedule coming soon!"})]}),(0,r.jsxs)(u.Z,{fluid:!0,className:"p-5 mt-4 section",id:"parking",children:[(0,r.jsx)("h1",{className:"text-left mb-4 display-text",children:"PARKING"}),(0,r.jsxs)("p",{children:["Unfortunately, ",(0,r.jsx)("a",{href:"https://transportation.ucsd.edu/visit/visitor/index.html",children:"parking is not free"})," on UCSD's campus. We recommend you find free parking off campus and walking to campus or taking the bus to campus. We apologize for the inconvenience."]}),(0,r.jsxs)("p",{children:["For parking on campus, please take a look at the ",(0,r.jsx)("a",{href:"https://maps.ucsd.edu/map/?id=1005#!ce/17201?ct/36591,27576,20079,18312,18027,35364,29152,36849,42782,43513,45236?mc/32.877341347399,-117.23531663418?z/18?lvl/0",children:"official campus map"})," and select ",(0,r.jsx)("b",{children:"Parking Structure"})," in the menu to see areas where you can park. The Gilman Parking Structure is closest to the convention. You can use the Wayfinding feature or the map below to navigate to Price Center:"]}),(0,r.jsx)("div",{className:"map mx-auto",children:(0,r.jsx)(l,{aspectRatio:"4x3",children:(0,r.jsx)("iframe",{className:"mt-2 border-stroke",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.697394192468!2d-117.2383838856308!3d32.87972498605018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c46a524fb9%3A0x68571efb243bc289!2sPrice%20Center%2C%20La%20Jolla%2C%20CA%2092093!5e0!3m2!1sen!2sus!4v1638064542514!5m2!1sen!2sus",width:"600",height:"450",allowFullScreen:"",loading:"lazy"})})})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);