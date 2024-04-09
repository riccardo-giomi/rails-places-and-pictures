import*as h from"leaflet";function e(){return e=Object.assign?Object.assign.bind():function(h){for(var p=1;p<arguments.length;p++){var f=arguments[p];for(var v in f)Object.prototype.hasOwnProperty.call(f,v)&&(h[v]=f[v])}return h},e.apply(this,arguments)}function r(h,p){h.prototype=Object.create(p.prototype),h.prototype.constructor=h,n(h,p)}function n(h,p){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,p){return h.__proto__=p,h},n(h,p)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(h){return!1}}function i(h,p,f){return i=o()?Reflect.construct.bind():function(h,p,f){var v=[null];v.push.apply(v,p);var m=new(Function.bind.apply(h,v));return f&&n(m,f.prototype),m},i.apply(null,arguments)}function s(h,p,f,v){void 0===p&&(p=""),void 0===v&&(v={});var m=document.createElement(h);return p&&(m.className=p),Object.keys(v).forEach((function(h){if("function"==typeof v[h]){var p=0===h.indexOf("on")?h.substr(2).toLowerCase():h;m.addEventListener(p,v[h])}else"html"===h?m.innerHTML=v[h]:"text"===h?m.innerText=v[h]:m.setAttribute(h,v[h])})),f&&f.appendChild(m),m}function a(h){h.preventDefault(),h.stopPropagation()}var l=function(){return[].slice.call(arguments).filter(Boolean).join(" ").trim()};function c(h,p){h&&h.classList&&(Array.isArray(p)?p:[p]).forEach((function(p){h.classList.contains(p)||h.classList.add(p)}))}function u(h,p){h&&h.classList&&(Array.isArray(p)?p:[p]).forEach((function(p){h.classList.contains(p)&&h.classList.remove(p)}))}var p,f=13,v=40,m=38,g=[f,27,v,m,37,39],y=function(){function t(h){var p=this,f=h.handleSubmit,v=h.searchLabel,m=h.classNames,g=void 0===m?{}:m;this.container=void 0,this.form=void 0,this.input=void 0,this.handleSubmit=void 0,this.hasError=!1,this.container=s("div",l("geosearch",g.container)),this.form=s("form",["",g.form].join(" "),this.container,{autocomplete:"none",onClick:a,onDblClick:a,touchStart:a,touchEnd:a}),this.input=s("input",["glass",g.input].join(" "),this.form,{type:"text",placeholder:v||"search",onInput:this.onInput,onKeyUp:function(h){return p.onKeyUp(h)},onKeyPress:function(h){return p.onKeyPress(h)},onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(){p.input.focus(),p.input.dispatchEvent(new Event("focus"))}}),this.handleSubmit=f}var h=t.prototype;return h.onFocus=function(){c(this.form,"active")},h.onBlur=function(){u(this.form,"active")},h.onSubmit=function(h){try{var p=this;return a(h),u(f=p.container,"error"),c(f,"pending"),Promise.resolve(p.handleSubmit({query:p.input.value})).then((function(){u(p.container,"pending")}))}catch(h){return Promise.reject(h)}var f},h.onInput=function(){this.hasError&&(u(this.container,"error"),this.hasError=!1)},h.onKeyUp=function(h){27===h.keyCode&&(u(this.container,["pending","active"]),this.input.value="",document.body.focus(),document.body.blur())},h.onKeyPress=function(h){h.keyCode===f&&this.onSubmit(h)},h.setQuery=function(h){this.input.value=h},t}(),b=function(){function t(h){var p=this,f=h.handleClick,v=h.classNames,m=void 0===v?{}:v,g=h.notFoundMessage;this.handleClick=void 0,this.selected=-1,this.results=[],this.container=void 0,this.resultItem=void 0,this.notFoundMessage=void 0,this.onClick=function(h){if("function"==typeof p.handleClick){var f=h.target;if(f&&p.container.contains(f)&&f.hasAttribute("data-key")){var v=Number(f.getAttribute("data-key"));p.handleClick({result:p.results[v]})}}},this.handleClick=f,this.notFoundMessage=g?s("div",l(m.notfound),void 0,{html:g}):void 0,this.container=s("div",l("results",m.resultlist)),this.container.addEventListener("click",this.onClick,!0),this.resultItem=s("div",l(m.item))}var h=t.prototype;return h.render=function(h,p){var f=this;void 0===h&&(h=[]),this.clear(),h.forEach((function(h,v){var m=f.resultItem.cloneNode(!0);m.setAttribute("data-key",""+v),m.innerHTML=p({result:h}),f.container.appendChild(m)})),h.length>0?(c(this.container.parentElement,"open"),c(this.container,"active")):this.notFoundMessage&&(this.container.appendChild(this.notFoundMessage),c(this.container.parentElement,"open")),this.results=h},h.select=function(h){return Array.from(this.container.children).forEach((function(p,f){return f===h?c(p,"active"):u(p,"active")})),this.selected=h,this.results[h]},h.count=function(){return this.results?this.results.length:0},h.clear=function(){for(this.selected=-1;this.container.lastChild;)this.container.removeChild(this.container.lastChild);u(this.container.parentElement,"open"),u(this.container,"active")},t}(),E={position:"topleft",style:"button",showMarker:!0,showPopup:!1,popupFormat:function(h){return""+h.result.label},resultFormat:function(h){return""+h.result.label},marker:{icon:h&&h.Icon?new h.Icon.Default:void 0,draggable:!1},maxMarkers:1,maxSuggestions:5,retainZoomLevel:!1,animateZoom:!0,searchLabel:"Enter address",clearSearchLabel:"Clear search",notFoundMessage:"",messageHideDelay:3e3,zoomLevel:18,classNames:{container:"leaflet-bar leaflet-control leaflet-control-geosearch",button:"leaflet-bar-part leaflet-bar-part-single",resetButton:"reset",msgbox:"leaflet-bar message",form:"",input:"",resultlist:"",item:"",notfound:"leaflet-bar-notfound"},autoComplete:!0,autoCompleteDelay:250,autoClose:!1,keepResult:!1,updateMap:!0},x="Leaflet must be loaded before instantiating the GeoSearch control",L={options:e({},E),classNames:e({},E.classNames),initialize:function(p){var f,v,m,g,L=this;if(!h)throw new Error(x);if(!p.provider)throw new Error("Provider is missing from options");this.options=e({},E,p),this.classNames=e({},this.classNames,p.classNames),this.markers=new h.FeatureGroup,this.classNames.container+=" leaflet-geosearch-"+this.options.style,this.searchElement=new y({searchLabel:this.options.searchLabel,classNames:{container:this.classNames.container,form:this.classNames.form,input:this.classNames.input},handleSubmit:function(h){return L.onSubmit(h)}}),this.button=s("a",this.classNames.button,this.searchElement.container,{title:this.options.searchLabel,href:"#",onClick:function(h){return L.onClick(h)}}),h.DomEvent.disableClickPropagation(this.button),this.resetButton=s("button",this.classNames.resetButton,this.searchElement.form,{text:"×","aria-label":this.options.clearSearchLabel,onClick:function(){""===L.searchElement.input.value?L.close():L.clearResults(null,!0)}}),h.DomEvent.disableClickPropagation(this.resetButton),this.options.autoComplete&&(this.resultList=new b({handleClick:function(h){var p=h.result;L.searchElement.input.value=p.label,L.onSubmit({query:p.label,data:p})},classNames:{resultlist:this.classNames.resultlist,item:this.classNames.item,notfound:this.classNames.notfound},notFoundMessage:this.options.notFoundMessage}),this.searchElement.form.appendChild(this.resultList.container),this.searchElement.input.addEventListener("keyup",(f=function(h){return L.autoSearch(h)},void 0===(v=this.options.autoCompleteDelay)&&(v=250),void 0===m&&(m=!1),function(){var h=[].slice.call(arguments);g&&clearTimeout(g),g=setTimeout((function(){g=null,m||f.apply(void 0,h)}),v),m&&!g&&f.apply(void 0,h)}),!0),this.searchElement.input.addEventListener("keydown",(function(h){return L.selectResult(h)}),!0),this.searchElement.input.addEventListener("keydown",(function(h){return L.clearResults(h,!0)}),!0)),this.searchElement.form.addEventListener("click",(function(h){h.preventDefault()}),!1)},onAdd:function(p){var f=this.options,v=f.showMarker,m=f.style;if(this.map=p,v&&this.markers.addTo(p),"bar"===m){var g=p.getContainer().querySelector(".leaflet-control-container");this.container=s("div","leaflet-control-geosearch leaflet-geosearch-bar"),this.container.appendChild(this.searchElement.form),g.appendChild(this.container)}return h.DomEvent.disableClickPropagation(this.searchElement.form),this.searchElement.container},onRemove:function(){var h;return null==(h=this.container)||h.remove(),this},open:function(){var h=this.searchElement,p=h.input;c(h.container,"active"),p.focus()},close:function(){u(this.searchElement.container,"active"),this.clearResults()},onClick:function(h){h.preventDefault(),h.stopPropagation(),this.searchElement.container.classList.contains("active")?this.close():this.open()},selectResult:function(h){if(-1!==[f,v,m].indexOf(h.keyCode))if(h.preventDefault(),h.keyCode!==f){var p=this.resultList.count()-1;if(!(p<0)){var g=this.resultList.selected,y=h.keyCode===v?g+1:g-1,b=this.resultList.select(y<0?p:y>p?0:y);this.searchElement.input.value=b.label}}else{var E=this.resultList.select(this.resultList.selected);this.onSubmit({query:this.searchElement.input.value,data:E})}},clearResults:function(h,p){if(void 0===p&&(p=!1),!h||27===h.keyCode){var f=this.options,v=f.autoComplete;!p&&f.keepResult||(this.searchElement.input.value="",this.markers.clearLayers()),v&&this.resultList.clear()}},autoSearch:function(h){try{var p=this;if(g.indexOf(h.keyCode)>-1)return Promise.resolve();var f=h.target.value,v=p.options.provider,m=function(){if(f.length)return Promise.resolve(v.search({query:f})).then((function(h){h=h.slice(0,p.options.maxSuggestions),p.resultList.render(h,p.options.resultFormat)}));p.resultList.clear()}();return Promise.resolve(m&&m.then?m.then((function(){})):void 0)}catch(h){return Promise.reject(h)}},onSubmit:function(h){try{var p=this;return p.resultList.clear(),Promise.resolve(p.options.provider.search(h)).then((function(f){f&&f.length>0&&p.showResult(f[0],h)}))}catch(h){return Promise.reject(h)}},showResult:function(h,p){var f=this.options,v=f.autoClose,m=f.updateMap,g=this.markers.getLayers();g.length>=this.options.maxMarkers&&this.markers.removeLayer(g[0]);var y=this.addMarker(h,p);m&&this.centerMap(h),this.map.fireEvent("geosearch/showlocation",{location:h,marker:y}),v&&this.closeResults()},closeResults:function(){var h=this.searchElement.container;h.classList.contains("active")&&u(h,"active"),this.clearResults()},addMarker:function(p,f){var v=this,m=this.options,g=m.marker,y=m.showPopup,b=m.popupFormat,E=new h.Marker([p.y,p.x],g),x=p.label;return"function"==typeof b&&(x=b({query:f,result:p})),E.bindPopup(x),this.markers.addLayer(E),y&&E.openPopup(),g.draggable&&E.on("dragend",(function(h){v.map.fireEvent("geosearch/marker/dragend",{location:E.getLatLng(),event:h})})),E},centerMap:function(p){var f=this.options,v=f.retainZoomLevel,m=f.animateZoom,g=p.bounds?new h.LatLngBounds(p.bounds):new h.LatLng(p.y,p.x).toBounds(10),y=g.isValid()?g:this.markers.getBounds();!v&&g.isValid()&&!p.bounds||v||!g.isValid()?this.map.setView(y.getCenter(),this.getZoom(),{animate:m}):this.map.fitBounds(y,{animate:m})},getZoom:function(){var h=this.options,p=h.zoomLevel;return h.retainZoomLevel?this.map.getZoom():p}};function w(){if(!h)throw new Error(x);var p=h.Control.extend(L);return i(p,[].slice.call(arguments))}!function(h){h[h.SEARCH=0]="SEARCH",h[h.REVERSE=1]="REVERSE"}(p||(p={}));var k=function(){function t(h){void 0===h&&(h={}),this.options=void 0,this.options=h}var h=t.prototype;return h.getParamString=function(h){void 0===h&&(h={});var p=e({},this.options.params,h);return Object.keys(p).map((function(h){return encodeURIComponent(h)+"="+encodeURIComponent(p[h])})).join("&")},h.getUrl=function(h,p){return h+"?"+this.getParamString(p)},h.search=function(h){try{var f=this,v=f.endpoint({query:h.query,type:p.SEARCH});return Promise.resolve(fetch(v)).then((function(h){return Promise.resolve(h.json()).then((function(h){return f.parse({data:h})}))}))}catch(h){return Promise.reject(h)}},t}(),S=function(h){function n(){return h.apply(this,arguments)||this}r(n,h);var p=n.prototype;return p.endpoint=function(){return"https://places-dsn.algolia.net/1/places/query"},p.findBestMatchLevelIndex=function(h){var p=h.find((function(h){return"full"===h.matchLevel}))||h.find((function(h){return"partial"===h.matchLevel}));return p?h.indexOf(p):0},p.getLabel=function(h){var p,f,v,m;return[null==(p=h.locale_names)?void 0:p.default[this.findBestMatchLevelIndex(h._highlightResult.locale_names.default)],null==(f=h.city)?void 0:f.default[this.findBestMatchLevelIndex(h._highlightResult.city.default)],h.administrative[this.findBestMatchLevelIndex(h._highlightResult.administrative)],null==(v=h.postcode)?void 0:v[this.findBestMatchLevelIndex(h._highlightResult.postcode)],null==(m=h.country)?void 0:m.default].filter(Boolean).join(", ")},p.parse=function(h){var p=this;return h.data.hits.map((function(h){return{x:h._geoloc.lng,y:h._geoloc.lat,label:p.getLabel(h),bounds:null,raw:h}}))},p.search=function(h){var p=h.query;try{var f=this,v="string"==typeof p?{query:p}:p;return Promise.resolve(fetch(f.endpoint(),{method:"POST",body:JSON.stringify(e({},f.options.params,v))})).then((function(h){return Promise.resolve(h.json()).then((function(h){return f.parse({data:h})}))}))}catch(h){return Promise.reject(h)}},n}(k),U=function(h){function e(){for(var p,f=arguments.length,v=new Array(f),m=0;m<f;m++)v[m]=arguments[m];return(p=h.call.apply(h,[this].concat(v))||this).searchUrl="https://dev.virtualearth.net/REST/v1/Locations",p}r(e,h);var p=e.prototype;return p.endpoint=function(h){var p=h.query,f="string"==typeof p?{q:p}:p;return f.jsonp=h.jsonp,this.getUrl(this.searchUrl,f)},p.parse=function(h){return 0===h.data.resourceSets.length?[]:h.data.resourceSets[0].resources.map((function(h){return{x:h.point.coordinates[1],y:h.point.coordinates[0],label:h.address.formattedAddress,bounds:[[h.bbox[0],h.bbox[1]],[h.bbox[2],h.bbox[3]]],raw:h}}))},p.search=function(h){var p,f,v,m=h.query;try{var g=this,y="BING_JSONP_CB_"+Date.now();return Promise.resolve((p=g.endpoint({query:m,jsonp:y}),f=y,v=s("script",null,document.body),v.setAttribute("type","text/javascript"),new Promise((function(h){window[f]=function(p){v.remove(),delete window[f],h(p)},v.setAttribute("src",p)})))).then((function(h){return g.parse({data:h})}))}catch(h){return Promise.reject(h)}},e}(k),C=function(h){function e(){for(var p,f=arguments.length,v=new Array(f),m=0;m<f;m++)v[m]=arguments[m];return(p=h.call.apply(h,[this].concat(v))||this).searchUrl="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find",p}r(e,h);var p=e.prototype;return p.endpoint=function(h){var p=h.query,f="string"==typeof p?{text:p}:p;return f.f="json",this.getUrl(this.searchUrl,f)},p.parse=function(h){return h.data.locations.map((function(h){return{x:h.feature.geometry.x,y:h.feature.geometry.y,label:h.name,bounds:[[h.extent.ymin,h.extent.xmin],[h.extent.ymax,h.extent.xmax]],raw:h}}))},e}(k),R=function(h){function e(p){var f;return void 0===p&&(p={}),(f=h.call(this,p)||this).host=void 0,f.host=p.host||"http://localhost:4000",f}r(e,h);var f=e.prototype;return f.endpoint=function(h){var f=h.query;return h.type===p.REVERSE?this.getUrl(this.host+"/v1/reverse","string"==typeof f?{}:f):this.getUrl(this.host+"/v1/autocomplete","string"==typeof f?{text:f}:f)},f.parse=function(h){return h.data.features.map((function(h){var p={x:h.geometry.coordinates[0],y:h.geometry.coordinates[1],label:h.properties.label,bounds:null,raw:h};return Array.isArray(h.bbox)&&4===h.bbox.length&&(p.bounds=[[h.bbox[1],h.bbox[0]],[h.bbox[3],h.bbox[2]]]),p}))},e}(k),I=function(h){function e(p){return void 0===p&&(p={}),p.host="https://api.geocode.earth",h.call(this,p)||this}return r(e,h),e}(R);function P(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}"function"==typeof SuppressedError&&SuppressedError;var A,N=P((function t(h,p){if(h===p)return!0;if(h&&p&&"object"==typeof h&&"object"==typeof p){if(h.constructor!==p.constructor)return!1;var f,v,m;if(Array.isArray(h)){if((f=h.length)!=p.length)return!1;for(v=f;0!=v--;)if(!t(h[v],p[v]))return!1;return!0}if(h.constructor===RegExp)return h.source===p.source&&h.flags===p.flags;if(h.valueOf!==Object.prototype.valueOf)return h.valueOf()===p.valueOf();if(h.toString!==Object.prototype.toString)return h.toString()===p.toString();if((f=(m=Object.keys(h)).length)!==Object.keys(p).length)return!1;for(v=f;0!=v--;)if(!Object.prototype.hasOwnProperty.call(p,m[v]))return!1;for(v=f;0!=v--;){var g=m[v];if(!t(h[g],p[g]))return!1}return!0}return h!=h&&p!=p}));!function(h){h[h.INITIALIZED=0]="INITIALIZED",h[h.LOADING=1]="LOADING",h[h.SUCCESS=2]="SUCCESS",h[h.FAILURE=3]="FAILURE"}(A||(A={}));class j{constructor({apiKey:h,authReferrerPolicy:p,channel:f,client:v,id:m="__googleMapsScriptId",language:g,libraries:y=[],mapIds:b,nonce:E,region:x,retries:L=3,url:k="https://maps.googleapis.com/maps/api/js",version:S}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=h,this.authReferrerPolicy=p,this.channel=f,this.client=v,this.id=m||"__googleMapsScriptId",this.language=g,this.libraries=y,this.mapIds=b,this.nonce=E,this.region=x,this.retries=L,this.url=k,this.version=S,j.instance){if(!N(this.options,j.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(j.instance.options)}`);return j.instance}j.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?A.FAILURE:this.done?A.SUCCESS:this.loading?A.LOADING:A.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let h=this.url;return h+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(h+=`&key=${this.apiKey}`),this.channel&&(h+=`&channel=${this.channel}`),this.client&&(h+=`&client=${this.client}`),this.libraries.length>0&&(h+=`&libraries=${this.libraries.join(",")}`),this.language&&(h+=`&language=${this.language}`),this.region&&(h+=`&region=${this.region}`),this.version&&(h+=`&v=${this.version}`),this.mapIds&&(h+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(h+=`&auth_referrer_policy=${this.authReferrerPolicy}`),h}deleteScript(){const h=document.getElementById(this.id);h&&h.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((h,p)=>{this.loadCallback((f=>{f?p(f.error):h(window.google)}))}))}importLibrary(h){return this.execute(),google.maps.importLibrary(h)}loadCallback(h){this.callbacks.push(h),this.execute()}setScript(){var h,p;if(document.getElementById(this.id))return void this.callback();const f={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(f).forEach((h=>!f[h]&&delete f[h])),(null===(p=null===(h=null===window||void 0===window?void 0:window.google)||void 0===h?void 0:h.maps)||void 0===p?void 0:p.importLibrary)||(h=>{let p,f,v,m="The Google Maps JavaScript API",g="google",y="importLibrary",b="__ib__",E=document,x=window;x=x[g]||(x[g]={});const L=x.maps||(x.maps={}),k=new Set,S=new URLSearchParams,d=()=>p||(p=new Promise(((y,x)=>{return U=this,R=function*(){var U;for(v in yield f=E.createElement("script"),f.id=this.id,S.set("libraries",[...k]+""),h)S.set(v.replace(/[A-Z]/g,(h=>"_"+h[0].toLowerCase())),h[v]);S.set("callback",g+".maps."+b),f.src=this.url+"?"+S,L[b]=y,f.onerror=()=>p=x(Error(m+" could not load.")),f.nonce=this.nonce||(null===(U=E.querySelector("script[nonce]"))||void 0===U?void 0:U.nonce)||"",E.head.append(f)},new((C=void 0)||(C=Promise))((function(h,p){function r(h){try{o(R.next(h))}catch(h){p(h)}}function n(h){try{o(R.throw(h))}catch(h){p(h)}}function o(p){var f;p.done?h(p.value):(f=p.value,f instanceof C?f:new C((function(h){h(f)}))).then(r,n)}o((R=R.apply(U,[])).next())}));var U,C,R})));L[y]?console.warn(m+" only loads once. Ignoring:",h):L[y]=(h,...p)=>k.add(h)&&d().then((()=>L[y](h,...p)))})(f);const v=this.libraries.map((h=>this.importLibrary(h)));v.length||v.push(this.importLibrary("core")),Promise.all(v).then((()=>this.callback()),(h=>{const p=new ErrorEvent("error",{error:h});this.loadErrorCallback(p)}))}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(h){if(this.errors.push(h),this.errors.length<=this.retries){const h=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${h} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),h)}else this.onerrorEvent=h,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((h=>{h(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setScript())}}}var O=function(h){function e(p){var f;return(f=h.call(this,p)||this).loader=null,f.geocoder=null,"undefined"!=typeof window&&(f.loader=new j(p).load().then((function(h){var p=new h.maps.Geocoder;return f.geocoder=p,p}))),f}r(e,h);var p=e.prototype;return p.endpoint=function(h){throw new Error("Method not implemented.")},p.parse=function(h){return h.data.results.map((function(h){var p=h.geometry.location.toJSON(),f=p.lat,v=p.lng,m=h.geometry.viewport.toJSON();return{x:v,y:f,label:h.formatted_address,bounds:[[m.south,m.west],[m.north,m.east]],raw:h}}))},p.search=function(h){try{var e=function(f){if(!f)throw new Error("GoogleMaps GeoCoder is not loaded. Are you trying to run this server side?");return Promise.resolve(f.geocode({address:h.query},(function(h){return{results:h}})).catch((function(h){return"ZERO_RESULTS"!==h.code&&console.error(h.code+": "+h.message),{results:[]}}))).then((function(h){return p.parse({data:h})}))},p=this,f=p.geocoder;return Promise.resolve(f?e(f):Promise.resolve(p.loader).then(e))}catch(h){return Promise.reject(h)}},e}(k),F=function(h){function e(){for(var p,f=arguments.length,v=new Array(f),m=0;m<f;m++)v[m]=arguments[m];return(p=h.call.apply(h,[this].concat(v))||this).searchUrl="https://maps.googleapis.com/maps/api/geocode/json",p}r(e,h);var p=e.prototype;return p.endpoint=function(h){var p=h.query;return this.getUrl(this.searchUrl,"string"==typeof p?{address:p}:p)},p.parse=function(h){return h.data.results.map((function(h){return{x:h.geometry.location.lng,y:h.geometry.location.lat,label:h.formatted_address,bounds:[[h.geometry.viewport.southwest.lat,h.geometry.viewport.southwest.lng],[h.geometry.viewport.northeast.lat,h.geometry.viewport.northeast.lng]],raw:h}}))},e}(k),M=function(h){function e(){for(var p,f=arguments.length,v=new Array(f),m=0;m<f;m++)v[m]=arguments[m];return(p=h.call.apply(h,[this].concat(v))||this).searchUrl="https://geocode.search.hereapi.com/v1/autosuggest",p}r(e,h);var p=e.prototype;return p.endpoint=function(h){var p=h.query;return this.getUrl(this.searchUrl,"string"==typeof p?{q:p}:p)},p.parse=function(h){return h.data.items.filter((function(h){return void 0!==h.position})).map((function(h){return{x:h.position.lng,y:h.position.lat,label:h.address.label,bounds:null,raw:h}}))},e}(k),_=function(h){function e(p){var f;void 0===p&&(p={}),(f=h.call(this,p)||this).searchUrl=void 0,f.reverseUrl=void 0;var v="https://nominatim.openstreetmap.org";return f.searchUrl=p.searchUrl||v+"/search",f.reverseUrl=p.reverseUrl||v+"/reverse",f}r(e,h);var f=e.prototype;return f.endpoint=function(h){var f=h.query,v=h.type,m="string"==typeof f?{q:f}:f;return m.format="json",this.getUrl(v===p.REVERSE?this.reverseUrl:this.searchUrl,m)},f.parse=function(h){return(Array.isArray(h.data)?h.data:[h.data]).map((function(h){return{x:Number(h.lon),y:Number(h.lat),label:h.display_name,bounds:[[parseFloat(h.boundingbox[0]),parseFloat(h.boundingbox[2])],[parseFloat(h.boundingbox[1]),parseFloat(h.boundingbox[3])]],raw:h}}))},e}(k),q=function(h){function n(p){return h.call(this,e({},p,{searchUrl:"https://locationiq.org/v1/search.php",reverseUrl:"https://locationiq.org/v1/reverse.php"}))||this}return r(n,h),n.prototype.parse=function(p){return p.data.error?[]:h.prototype.parse.call(this,p)},n}(_),B=function(h){function e(){for(var p,f=arguments.length,v=new Array(f),m=0;m<f;m++)v[m]=arguments[m];return(p=h.call.apply(h,[this].concat(v))||this).searchUrl="https://api.opencagedata.com/geocode/v1/json",p}r(e,h);var p=e.prototype;return p.endpoint=function(h){var p=h.query,f="string"==typeof p?{q:p}:p;return f.format="json",this.getUrl(this.searchUrl,f)},p.parse=function(h){return h.data.results.map((function(h){return{x:h.geometry.lng,y:h.geometry.lat,label:h.formatted,bounds:[[h.bounds.southwest.lat,h.bounds.southwest.lng],[h.bounds.northeast.lat,h.bounds.northeast.lng]],raw:h}}))},p.search=function(p){try{return Promise.resolve(p.query.length<2?[]:h.prototype.search.call(this,p))}catch(h){return Promise.reject(h)}},e}(k),D=function(h){function e(p){var f;void 0===p&&(p={}),(f=h.call(this,p)||this).searchUrl=void 0,f.reverseUrl=void 0;var v="https://civildefense.fit.vutbr.cz";return f.searchUrl=p.searchUrl||v+"/search",f.reverseUrl=p.reverseUrl||v+"/reverse",f}r(e,h);var f=e.prototype;return f.endpoint=function(h){var f=h.query,v=h.type,m="string"==typeof f?{q:f}:f;return m.format="json",this.getUrl(v===p.REVERSE?this.reverseUrl:this.searchUrl,m)},f.parse=function(h){return(Array.isArray(h.data)?h.data:[h.data]).map((function(h){return{x:Number(h.lon),y:Number(h.lat),label:h.display_name,bounds:[[parseFloat(h.boundingbox[0]),parseFloat(h.boundingbox[2])],[parseFloat(h.boundingbox[1]),parseFloat(h.boundingbox[3])]],raw:h}}))},e}(k),G=function(h){function e(p){var f;return void 0===p&&(p={}),(f=h.call(this,p)||this).searchUrl=void 0,f.searchUrl=p.searchUrl||"https://a.tiles.mapbox.com/v4/geocode/mapbox.places/",f}r(e,h);var p=e.prototype;return p.endpoint=function(h){return this.getUrl(""+this.searchUrl+h.query+".json")},p.parse=function(h){return(Array.isArray(h.data.features)?h.data.features:[]).map((function(h){var p=null;return h.bbox&&(p=[[parseFloat(h.bbox[1]),parseFloat(h.bbox[0])],[parseFloat(h.bbox[3]),parseFloat(h.bbox[2])]]),{x:Number(h.center[0]),y:Number(h.center[1]),label:h.place_name?h.place_name:h.text,bounds:p,raw:h}}))},e}(k),T=function(h){function e(p){var f;void 0===p&&(p={}),(f=h.call(this,p)||this).searchUrl=void 0,f.reverseUrl=void 0;var v="https://api-adresse.data.gouv.fr";return f.searchUrl=p.searchUrl||v+"/search",f.reverseUrl=p.reverseUrl||v+"/reverse",f}r(e,h);var f=e.prototype;return f.endpoint=function(h){var f=h.query;return this.getUrl(h.type===p.REVERSE?this.reverseUrl:this.searchUrl,"string"==typeof f?{q:f}:f)},f.parse=function(h){return h.data.features.map((function(h){return{x:h.geometry.coordinates[0],y:h.geometry.coordinates[1],label:h.properties.label,bounds:null,raw:h}}))},e}(k),K=function(h){function e(p){var f;void 0===p&&(p={}),(f=h.call(this,p)||this).searchUrl=void 0,f.reverseUrl=void 0;var v="https://api.geoapify.com/v1/geocode";return f.searchUrl=p.searchUrl||v+"/search",f.reverseUrl=p.reverseUrl||v+"/reverse",f}r(e,h);var f=e.prototype;return f.endpoint=function(h){var f=h.query,v=h.type,m="string"==typeof f?{text:f}:f;return m.format="json",this.getUrl(v===p.REVERSE?this.reverseUrl:this.searchUrl,m)},f.parse=function(h){return(Array.isArray(h.data.results)?h.data.results:[h.data.results]).map((function(h){return{x:Number(h.lon),y:Number(h.lat),label:h.formatted,bounds:[[parseFloat(h.bbox.lat1),parseFloat(h.bbox.lon1)],[parseFloat(h.bbox.lat2),parseFloat(h.bbox.lon2)]],raw:h}}))},e}(k);export{S as AlgoliaProvider,U as BingProvider,D as CivilDefenseMapProvider,C as EsriProvider,T as GeoApiFrProvider,w as GeoSearchControl,K as GeoapifyProvider,I as GeocodeEarthProvider,O as GoogleProvider,M as HereProvider,k as JsonProvider,F as LegacyGoogleProvider,q as LocationIQProvider,G as MapBoxProvider,B as OpenCageProvider,_ as OpenStreetMapProvider,R as PeliasProvider,w as SearchControl,y as SearchElement};

