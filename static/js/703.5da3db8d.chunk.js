"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{174:function(e,t,n){n.d(t,{O:function(){return g}});var o,r,a,i,s=n(689),c=n(168),u=n(444),l=n(87),d=u.ZP.ul(o||(o=(0,c.Z)(["\n  list-style-type: square;\n"]))),f=u.ZP.li(r||(r=(0,c.Z)(["\n  color: black;\n"]))),p=(0,u.ZP)(l.rU)(a||(a=(0,c.Z)(["\n  color: darkblue;\n"]))),m=u.ZP.h3(i||(i=(0,c.Z)(["\n  padding: 5px;\n  margin-top: 0px;\n  margin-bottom: 0;\n"]))),v=n(184),g=function(e){var t=e.movies,n=(0,s.TH)();return(0,v.jsx)(d,{children:t.map((function(e){return(0,v.jsx)(f,{children:(0,v.jsx)(p,{to:"/movies/".concat(e.id),state:{from:n},children:(0,v.jsx)(m,{children:e.title})})},e.id)}))})}},703:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var o=n(439),r=n(791),a=n(87);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=n(433);function d(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var f=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=d(e))&&(o&&(o+=" "),o+=t);return o},p=["theme","type"],m=["delay","staleId"],v=function(e){return"number"==typeof e&&!isNaN(e)},g=function(e){return"string"==typeof e},h=function(e){return"function"==typeof e},y=function(e){return g(e)||h(e)?e:null},b=function(e){return(0,r.isValidElement)(e)||g(e)||h(e)||v(e)};function E(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(i):t,v=a?"".concat(n,"--").concat(i):n,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,l.Z)(n)))};(e=t.classList).add.apply(e,(0,l.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,r.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,u):d()};p||(c?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),r.createElement(r.Fragment,null,o)}}function T(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var O={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,l.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},C=function(e){var t=e.theme,n=e.type,o=u(e,p);return r.createElement("svg",c({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},x={info:function(e){return r.createElement(C,c({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(C,c({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(C,c({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(C,c({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function _(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,r.useState)([]),i=(0,o.Z)(a,2),s=i[0],d=i[1],f=(0,r.useRef)(null),p=(0,r.useRef)(new Map).current,E=function(e){return-1!==s.indexOf(e)},C=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:E,getToast:function(e){return p.get(e)}}).current;function _(e){var t=e.containerId;!C.props.limit||t&&C.containerId!==t||(C.count-=C.queue.length,C.queue=[])}function I(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=C.queue.shift();P(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var a=t.delay,i=t.staleId,s=u(t,m);if(b(e)&&!function(e){return!f.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||p.has(e.toastId)&&null==e.updateId}(s)){var l=s.toastId,d=s.updateId,E=s.data,_=C.props,L=function(){return I(l)},k=null==d;k&&C.count++;var N,R,j=c(c(c({},_),{},{style:_.toastStyle,key:C.toastKey++},Object.fromEntries(Object.entries(s).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:l,updateId:d,data:E,closeToast:L,isIn:!1,className:y(s.className||_.toastClassName),bodyClassName:y(s.bodyClassName||_.bodyClassName),progressClassName:y(s.progressClassName||_.progressClassName),autoClose:!s.isLoading&&(N=s.autoClose,R=_.autoClose,!1===N||v(N)&&N>0?N:R),deleteToast:function(){var e=T(p.get(l),"removed");p.delete(l),O.emit(4,e);var t=C.queue.length;if(C.count=null==l?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),t>0){var o=null==l?C.props.limit:1;if(1===t||1===o)C.displayedToast++,w();else{var r=o>t?t:o;C.displayedToast=r;for(var a=0;a<r;a++)w()}}else n()}});j.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(h(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):g(a)||v(a)?i=a:o?i=x.spinner():function(e){return e in x}(n)&&(i=x[n](s))),i}(j),h(s.onOpen)&&(j.onOpen=s.onOpen),h(s.onClose)&&(j.onClose=s.onClose),j.closeButton=_.closeButton,!1===s.closeButton||b(s.closeButton)?j.closeButton=s.closeButton:!0===s.closeButton&&(j.closeButton=!b(_.closeButton)||_.closeButton);var Z=e;(0,r.isValidElement)(e)&&!g(e.type)?Z=(0,r.cloneElement)(e,{closeToast:L,toastProps:j,data:E}):h(e)&&(Z=e({closeToast:L,toastProps:j,data:E})),_.limit&&_.limit>0&&C.count>_.limit&&k?C.queue.push({toastContent:Z,toastProps:j,staleId:i}):v(a)?setTimeout((function(){P(Z,j,i)}),a):P(Z,j,i)}}function P(e,t,n){var o=t.toastId;n&&p.delete(n);var r={content:e,props:t};p.set(o,r),d((function(e){return[].concat((0,l.Z)(e),[o]).filter((function(e){return e!==n}))})),O.emit(4,T(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return C.containerId=e.containerId,O.cancelEmit(3).on(0,L).on(1,(function(e){return f.current&&I(e)})).on(5,_).emit(2,C),function(){p.clear(),O.emit(3,C)}}),[]),(0,r.useEffect)((function(){C.props=e,C.isToastActive=E,C.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:f,isToastActive:E}}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){var t=(0,r.useState)(!1),n=(0,o.Z)(t,2),a=n[0],i=n[1],s=(0,r.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,b=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",_),document.addEventListener("touchmove",x),document.addEventListener("touchend",_);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=I(t.nativeEvent),f.y=w(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?C():O()}}function O(){i(!0)}function C(){i(!1)}function x(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&C(),f.x=I(t),f.y=w(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function _(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",_);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",O,{once:!0}),h(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;h(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",O),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:E,onTouchStart:E,onMouseUp:T,onTouchEnd:T};return m&&v&&(L.onMouseEnter=C,L.onMouseLeave=O),b&&(L.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:O,pauseToast:C,isRunning:a,preventExitTransition:u,toastRef:d,eventHandlers:L}}function P(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function k(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,s=void 0===a?"default":a,u=e.hide,l=e.className,d=e.style,p=e.controlledProgress,m=e.progress,v=e.rtl,g=e.isIn,y=e.theme,b=u||p&&0===m,E=c(c({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:b?0:1});p&&(E.transform="scaleX(".concat(m,")"));var T=f("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":v}),O=h(l)?l({rtl:v,type:s,defaultClassName:T}):f(T,l);return r.createElement("div",i({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:O,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){g&&o()}))}var N=function(e){var t=L(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,u=e.children,l=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,b=e.className,E=e.style,T=e.bodyClassName,O=e.bodyStyle,C=e.progressClassName,x=e.progressStyle,_=e.updateId,I=e.role,w=e.progress,N=e.rtl,R=e.toastId,j=e.deleteToast,Z=e.isIn,M=e.isLoading,D=e.iconOut,B=e.closeOnClick,A=e.theme,S=f("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":B}),z=h(b)?b({rtl:N,position:y,type:p,defaultClassName:S}):f(S,b),q=!!w||!l,F={closeToast:v,type:p,theme:A},H=null;return!1===s||(H=h(s)?s(F):(0,r.isValidElement)(s)?(0,r.cloneElement)(s,F):P(F)),r.createElement(g,{isIn:Z,done:j,position:y,preventExitTransition:o,nodeRef:a},r.createElement("div",c(c({id:R,onClick:d,className:z},i),{},{style:E,ref:a}),r.createElement("div",c(c({},Z&&{role:I}),{},{className:h(T)?T({type:p}):f("Toastify__toast-body",T),style:O}),null!=D&&r.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},D),r.createElement("div",null,u)),H,r.createElement(k,c(c({},_&&!q?{key:"pb-".concat(_)}:{}),{},{rtl:N,theme:A,delay:l,isRunning:n,isIn:Z,closeToast:v,hide:m,type:p,style:x,className:C,controlledProgress:q,progress:w||0}))))},R=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},j=E(R("bounce",!0)),Z=(E(R("slide",!0)),E(R("zoom")),E(R("flip")),(0,r.forwardRef)((function(e,t){var n=_(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,u=e.style,l=e.rtl,d=e.containerId;function p(e){var t=f("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return h(s)?s({position:e,rtl:l,defaultClassName:t}):f(t,y(s))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:d},o((function(e,t){var n=t.length?c({},u):c(c({},u),{},{pointerEvents:"none"});return r.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(N,c(c({},a),{},{isIn:i(a.toastId),style:c(c({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));Z.displayName="ToastContainer",Z.defaultProps={position:"top-right",transition:j,autoClose:5e3,closeButton:P,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,D=new Map,B=[],A=1;function S(){return""+A++}function z(e){return e&&(g(e.toastId)||v(e.toastId))?e.toastId:S()}function q(e,t){return D.size>0?O.emit(0,e,t):B.push({content:e,options:t}),t.toastId}function F(e,t){return c(c({},t),{},{type:t&&t.type||e,toastId:z(t)})}function H(e){return function(t,n){return q(t,F(e,n))}}function Q(e,t){return q(e,F("default",t))}Q.loading=function(e,t){return q(e,F("default",c({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Q.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=g(r)?Q.loading(r,n):Q.loading(r.render,c(c({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,r){if(null!=t){var a=c(c(c({type:e},s),n),{},{data:r}),i=g(t)?{render:t}:t;return o?Q.update(o,c(c({},a),i)):Q(i.render,c(c({},a),i)),r}Q.dismiss(o)},l=h(e)?e():e;return l.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",a,e)})),l},Q.success=H("success"),Q.info=H("info"),Q.error=H("error"),Q.warning=H("warning"),Q.warn=Q.warning,Q.dark=function(e,t){return q(e,F("default",c({theme:"dark"},t)))},Q.dismiss=function(e){D.size>0?O.emit(1,e):B=B.filter((function(t){return null!=e&&t.options.toastId!==e}))},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),O.emit(5,e)},Q.isActive=function(e){var t=!1;return D.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=D.get(n||M);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=c(c(c({delay:100},o),t),{},{toastId:t.toastId||e,updateId:S()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,q(i,a)}}),0)},Q.done=function(e){Q.update(e,{progress:1})},Q.onChange=function(e){return O.on(4,e),function(){O.off(4,e)}},Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},O.on(2,(function(e){M=e.containerId||e,D.set(M,e),B.forEach((function(e){O.emit(0,e.content,e.options)})),B=[]})).on(3,(function(e){D.delete(e.containerId||e),0===D.size&&O.off(0).off(1).off(5)}));var V,U,G,W,X=n(168),Y=n(444),K=n(728),J=Y.ZP.div(V||(V=(0,X.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),$=Y.ZP.input(U||(U=(0,X.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 10px;\n  font: inherit;\n  border: 1px gray dotted;\n"]))),ee=(0,Y.ZP)(K.Vph)(G||(G=(0,X.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 4px;\n  bottom: 2px;\n"]))),te=Y.ZP.button(W||(W=(0,X.Z)(["\n  width: 30px;\n  height: 25px;\n  border: transparent;\n  border-left: 1px solid grey;\n  border-radius: 5px;\n  background-color: transparent;\n  position: absolute;\n  right: 4px;\n  &:hover {\n    cursor: pointer;\n  }\n  &:active {\n    border-right: 1px solid lightgrey;\n  }\n"]))),ne=n(184),oe=function(e){var t=e.value,n=e.onChange,o=e.onClick;return(0,ne.jsxs)(J,{children:[(0,ne.jsx)($,{type:"text",placeholder:"Enter movie name",value:t,onChange:function(e){n(e.target.value)}}),(0,ne.jsx)(te,{type:"button",onClick:o,children:(0,ne.jsx)(ee,{})})]})},re=n(174),ae=n(861),ie=n(757),se=n.n(ie),ce=n(243);function ue(){return(ue=(0,ae.Z)(se().mark((function e(t){var n,o,r,a;return se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,o=t.page,e.prev=1,e.next=4,ce.Z.get("https://api.themoviedb.org/3/search/movie?api_key=b5dbc40d665affe8ed0bac71106b3fa8&language=en-US&query=".concat(n,"&page=").concat(o,"&include_adult=true"));case 4:return r=e.sent,a=r.data.results,e.abrupt("return",a.map((function(e){return{title:e.title,id:e.id}})));case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var le=function(){var e,t=(0,r.useState)(""),n=(0,o.Z)(t,2),i=n[0],s=n[1],c=(0,r.useState)([]),u=(0,o.Z)(c,2),l=u[0],d=u[1],f=(0,a.lr)(),p=(0,o.Z)(f,2),m=p[0],v=p[1],g=null!==(e=m.get("query"))&&void 0!==e?e:"";(0,r.useEffect)((function(){""!==g&&function(e){return ue.apply(this,arguments)}({query:g,page:1}).then((function(e){d(e)})),d("")}),[g]);var h=function(e){v(""!==e?{query:e}:{})};return(0,ne.jsxs)("main",{children:[(0,ne.jsx)(oe,{value:i,onChange:s,onClick:function(){if(""===i)return Q.info("Sorry, nothing was found for your search");h(i),s("")}}),(0,ne.jsx)(Z,{autoClose:2500}),l.length>0?(0,ne.jsx)(re.O,{movies:l}):(0,ne.jsx)("div",{children:"No movies..."})]})}}}]);
//# sourceMappingURL=703.5da3db8d.chunk.js.map