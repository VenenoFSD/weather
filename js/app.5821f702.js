(function(t){function e(e){for(var s,c,r=e[0],o=e[1],l=e[2],d=0,h=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&h.push(a[c][0]),a[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,r=1;r<i.length;r++){var o=i[r];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=i[0]))}return t}var s={},a={app:0},n=[];function c(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=s,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(i,s,function(e){return t[e]}.bind(null,s));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},2969:function(t,e,i){"use strict";var s=i("5bf3"),a=i.n(s);a.a},"557e":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"changeCity"},on:{click:t.showCty}},[i("span",[t._v("[切换城市]")])]),i("div",{attrs:{id:"position"}},[t.city.length?i("span",[i("i",{staticClass:"iconfont icon-pos"}),t._v(t._s(t.city))]):i("span",[t._v("正在定位 . . .")])]),i("p",{attrs:{id:"title"}},[t._v("实时天气查询")]),i("div",{attrs:{id:"container"}},[i("div",{staticClass:"left"},[i("div",{staticClass:"cover"},[i("div",{staticClass:"position"},[i("p",{staticClass:"city"},[t._v(t._s(t.city))]),i("p",[t._v("中国")])]),i("div",{staticClass:"date-container"},[i("p",{staticClass:"time"},[t._v(t._s(t.now))]),i("p",{staticClass:"date"},[t._v(t._s((new Date).toDateString()))])]),t.today?i("div",{staticClass:"temperature-container"},[i("p",{staticClass:"temperature"},[t._v(t._s(t.today.tem))]),i("p",[t._v(t._s(t.today.wea))])]):t._e()])]),i("div",{staticClass:"right"},[i("div",{staticClass:"tem-container"},[i("temperature",{attrs:{tem:t.today.wea_img}}),t.today?i("div",{staticClass:"info"},[i("p",[t._v("空气质量："+t._s(t.today.air_level))]),i("p",[t._v("空气指数："+t._s(t.today.air))]),i("p",[t._v("白天温度："+t._s(t.today.tem1))]),i("p",[t._v("夜晚温度："+t._s(t.today.tem2))]),i("p",[t._v("湿度："+t._s(t.today.humidity))]),i("p",[t._v("风速："+t._s(t.today.win_speed))])]):t._e()],1),t.advice.length?i("div",{staticClass:"advice-container"},[i("ul",t._l(t.advice,function(e){return i("li",{staticClass:"advice-list"},[i("p",[i("i",{class:e.className}),t._v(" "+t._s(e.title)+"："+t._s(e.level))]),i("p",{staticClass:"advice"},[t._v("小贴士："+t._s(e.desc))])])}),0)]):t._e(),i("div",{staticClass:"future"},[i("h4",{staticClass:"future-title"},[t._v("未来天气")]),i("ul",{staticClass:"future-list"},t._l(t.future,function(e,s){return i("li",[i("h5",{staticClass:"title"},[t._v(t._s(e.week))]),i("p",{staticClass:"tem"},[t._v(t._s(e.tem2)+"~"+t._s(e.tem1))]),i("p",{staticClass:"wea"},[t._v(t._s(e.wea))]),i("div",{directives:[{name:"show",rawName:"v-show",value:s<3,expression:"index < 3"}],staticClass:"line"})])}),0)])])]),i("select-city",{attrs:{showSelect:t.showWindow},on:{close:t.closeWindow,changeCity:t.changeCity}})],1)},n=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSelect,expression:"showSelect"}],staticClass:"select-city-container"},[i("div",{staticClass:"select-city"},[i("span",{staticClass:"close",on:{click:t.closeSelect}},[t._v("×")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchCity,expression:"searchCity"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入城市名"},domProps:{value:t.searchCity},on:{focus:t.focus,blur:t.blur,input:function(e){e.target.composing||(t.searchCity=e.target.value)}}}),i("div",{staticClass:"hot"},[i("h4",{staticClass:"title"},[t._v("热门城市")]),i("ul",{staticClass:"hot-list"},t._l(t.hot,function(e){return i("li",{on:{click:function(i){return t.changeCity(e)}}},[t._v(t._s(e.location))])}),0)]),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.inputFocus&&t.result.length,expression:"inputFocus && result.length"}],staticClass:"result-list"},t._l(t.result,function(e){return i("li",{on:{click:function(i){return t.changeCity(e)}}},[t._v(t._s(e.location))])}),0)])])])},r=[];function o(t){let e=[];return fetch("https://search.heweather.net/find?key=e32399712c2e4610a92fe312ff544253&group=cn&location="+t).then(t=>t.json()).then(i=>{return i=i.HeWeather6[0],"ok"===i.status?(e=i.basic.filter(e=>e.parent_city.includes(t)&&e.parent_city===e.location),e.length||(e=[{location:"未搜索到结果",cid:null}])):e=[{location:"未搜索到结果",cid:null}],e})}var l={name:"SelectCity",props:{showSelect:{type:Boolean,default:!1}},data(){return{hot:[],searchCity:"",result:[],inputFocus:!1}},methods:{closeSelect(){this.$emit("close")},focus(){this.inputFocus=!0},blur(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.inputFocus=!1},200)},changeCity(t){this.$emit("changeCity",t),this.searchCity="",this.closeSelect()}},created(){fetch("https://search.heweather.net/top?group=cn&key=e32399712c2e4610a92fe312ff544253").then(t=>t.json()).then(t=>{this.hot=t.HeWeather6[0].basic}),this.timer=null},watch:{searchCity(t){t?o(t).then(t=>{this.result=t}):this.result=[]}}},u=l,d=(i("c02e"),i("2877")),h=Object(d["a"])(u,c,r,!1,null,"39ed4d87",null),p=h.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"temperature"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"qing"===t.tem&&"day"===t.dayOrNight,expression:"tem === 'qing' && dayOrNight === 'day'"}],staticClass:"sunny"}),i("div",{directives:[{name:"show",rawName:"v-show",value:"yun"===t.tem||"yin"===t.tem,expression:"tem === 'yun' || tem === 'yin'"}],staticClass:"cloudy"}),i("div",{directives:[{name:"show",rawName:"v-show",value:"shachen"===t.tem,expression:"tem === 'shachen'"}],staticClass:"cloudy sandStorm"}),i("div",{directives:[{name:"show",rawName:"v-show",value:"yu"===t.tem,expression:"tem === 'yu'"}],staticClass:"rainy"}),i("div",{directives:[{name:"show",rawName:"v-show",value:"xue"===t.tem||"bingbao"===t.tem,expression:"tem === 'xue' || tem === 'bingbao'"}],staticClass:"snowy"}),i("div",{directives:[{name:"show",rawName:"v-show",value:"qing"===t.tem&&"night"===t.dayOrNight,expression:"tem === 'qing' && dayOrNight === 'night'"}],staticClass:"starry"}),i("div",{directives:[{name:"show",rawName:"v-show",value:"lei"===t.tem,expression:"tem === 'lei'"}],staticClass:"stormy"})])},f=[],m={name:"Temperature",props:{tem:{type:String,default:""}},computed:{dayOrNight(){let t=(new Date).getHours();return t>4&&t<19?"day":"night"}}},y=m,w=(i("2969"),Object(d["a"])(y,v,f,!1,null,"6e2f3e3d",null)),_=w.exports,C={name:"app",data(){return{now:"00:00:00",today:{},city:"",advice:[],future:[],showWindow:!1,cityId:""}},methods:{formatAdvice(t){return t=t.filter(t=>null!==t.level&&!t.title.includes("血糖")),t.forEach(t=>{t.title.includes("紫外线")?t.className="iconfont icon-sun":t.title.includes("穿衣")?t.className="iconfont icon-clothes":t.title.includes("洗车")?t.className="iconfont icon-car":t.title.includes("空气")&&(t.className="iconfont icon-air")}),t},showCty(){this.showWindow=!0},closeWindow(){this.showWindow=!1},changeCity(t){this.city=t.location+"市",this.cityId=t.cid.slice(2)}},components:{SelectCity:p,Temperature:_},created(){setInterval(()=>{this.now=(new Date).toTimeString().slice(0,8)},1e3),fetch("https://restapi.amap.com/v3/ip?key=c13174ea5cf97b75cf9487b6e53cfd0f").then(t=>t.json()).then(t=>{this.city=t.city,o(t.city.replace("市","")).then(t=>{this.cityId=t[0].cid.slice(2)})})},watch:{cityId(t){t&&fetch("https://www.tianqiapi.com/api/?version=v1&appid=44534963&appsecret=9vB33JgS&cityid="+t).then(t=>t.json()).then(t=>{this.today=t.data[0],this.advice=this.formatAdvice(t.data[0].index),this.future=t.data.slice(1)})}}},g=C,b=(i("dd13"),Object(d["a"])(g,a,n,!1,null,"1de628ac",null)),x=b.exports;i("f771"),i("7003");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(x)}}).$mount("#app")},"5bf3":function(t,e,i){},7003:function(t,e,i){},c02e:function(t,e,i){"use strict";var s=i("557e"),a=i.n(s);a.a},dd13:function(t,e,i){"use strict";var s=i("ff81"),a=i.n(s);a.a},f771:function(t,e,i){},ff81:function(t,e,i){}});
//# sourceMappingURL=app.5821f702.js.map