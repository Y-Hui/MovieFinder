webpackJsonp([1],{"/8vw":function(t,e){},"1XiC":function(t,e){},"3l3/":function(t,e){},"8sJK":function(t,e){},EhxA:function(t,e){},Kg7K:function(t,e){},MzKY:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("y2iJ");var s=a("fkOI"),o=(a("33iB"),a("LhXK")),i=(a("B9qP"),a("UtRs")),n=(a("+6AY"),a("CTpo")),r=(a("xP6f"),a("cOys")),c=a("xd7I"),l={data:function(){return{blur:!1}},methods:{backTop:function(){if(document.documentElement.scrollTop>0){clearInterval(t);var t=setInterval(function(){var e=document.documentElement.scrollTop,a=(0-e)/10;(e+=a=a>0?Math.ceil(a):Math.floor(a))<0&&(e=0),document.documentElement.scrollTop=e,0==e&&clearInterval(t)},15)}}},mounted:function(){},created:function(){},computed:{listenMask:function(){return this.$store.state.maskStatus}},watch:{listenMask:function(t){this.blur=t}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mf-tab-wrap",class:{blur:t.blur},on:{dblclick:t.backTop}},[a("div",{staticClass:"container mf-tab"},[a("div",{staticClass:"tab-item"},[a("router-link",{attrs:{to:"/home"}},[t._v("首页")])],1),t._v(" "),a("div",{staticClass:"tab-item"},[a("router-link",{attrs:{to:"/find"}},[t._v("发现")])],1),t._v(" "),a("div",{staticClass:"tab-item"},[a("router-link",{attrs:{to:"/ranking"}},[t._v("排行")])],1),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-item mf-search"},[e("a",{attrs:{href:"###"}})])}]};var v=a("C7Lr")(l,u,!1,function(t){a("arlJ")},"data-v-6c047684",null).exports,h={name:"sortCard",props:{type:String,name:String,icon:String},data:function(){return{}},methods:{func:function(){this.$emit("func")}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sort",class:[this.type,this.icon],on:{click:this.func}},[e("span",[this._v(this._s(this.name))])])},staticRenderFns:[]};var f=a("C7Lr")(h,m,!1,function(t){a("oB5S")},"data-v-7dc27d1e",null).exports,d={name:"App",data:function(){return{LocationCity:"正在定位"}},mounted:function(){},created:function(){},methods:{city:function(){var t=this;(new BMap.Geolocation).getCurrentPosition(function(e){var a=e.address.city;e.address.province;t.LocationCity=a},function(e){t.LocationCity="定位失败"},{provider:"baidu"})}},components:{Headers:v,SortCard:f}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.$route.meta.navShow?e("Headers"):this._e(),this._v(" "),e("router-view",{ref:"mfView"})],1)},staticRenderFns:[]};var _=a("C7Lr")(d,p,!1,function(t){a("OiEK")},null,null).exports,g=a("aozt"),C=a.n(g),w=a("3XdE"),S={name:"Home",data:function(){return{blurStatus:!1,hotMovieList:{arr:[],totalValue:1},showingMovieList:{arr:[],totalValue:1},movieList_l:[],movieList_r:[],hotStartValue:0,showingStartValue:0,countValue:10,totalValue:1,sortCardType:"hot",switchData:!0}},computed:{listenSortCard:function(){return this.$store.state.homeSortCard.type}},watch:{listenSortCard:function(t){console.log(this.sortCardType),console.log(t),t!=this.sortCardType&&(this.sortCardType=t,this.movieList_l=[],this.movieList_r=[],10!=this.countValue&&(this.countValue=10),this.startGet())}},created:function(){this.startGet()},mounted:function(){var t=this;this.switchData=!1,window.addEventListener("scroll",function(){document.body.offsetHeight-window.scrollY-window.innerHeight<=200&&t.switchData&&(t.switchData=!1,t.startGet(),console.log("到底了"))})},methods:{startGet:function(){"hot"==this.sortCardType?this.getMock(this.hotMovieList,"hotStartValue"):"showing-soon"==this.sortCardType&&this.getMock(this.showingMovieList,"showingStartValue")},getMock:function(t,e){var a=this;if(t.arr.length<t.totalValue){console.log("没有数据，开始获取"),console.log(this.$store.state.homeURL+this[e]+"&count="+this.countValue);this.$ajax.get("https://bird.ioliu.cn/v1/?url="+this.$store.state.homeURL+this[e]+"&count="+this.countValue).then(function(s){if(t.totalValue=s.data.total,a[e]>=t.totalValue)return a.switchData=!1,a.countValue=10,!1;for(var o=0;o<a.countValue;o++)t.arr.push(s.data.subjects[o]);a[e]+=a.countValue,a[e]+a.countValue>=s.data.total&&(a.countValue=s.data.total-a[e]),a.startDistMovie(t.arr),a.switchData=!0})}else console.log("有数据，进行分配"),this.startDistMovie(t.arr),this.switchData=!0},startDistMovie:function(t){this.$store.commit("distMovie",{listArr:t,leftList:this.movieList_l,rightList:this.movieList_r})},showMask:function(){this.$store.commit("showMask"),this.blurStatus=!this.blurStatus},switchCard:function(t){var e={type:this.$refs[t]._props.type,name:this.$refs[t]._props.name};this.$store.commit("switchCard",e),this.$store.commit("switchURL",e),this.showMask()}},components:{SortCard:f}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"content",class:{blur:t.blurStatus}},[a("van-row",{ref:"movieBox",attrs:{type:"flex",justify:"space-between"}},[a("van-col",{staticClass:"content",attrs:{span:"11"}},[a("div",{ref:"leftSection",staticClass:"leftSection"},[a("SortCard",{attrs:{type:t.$store.state.homeSortCard.type,icon:"badge",name:t.$store.state.homeSortCard.name},on:{func:function(e){return t.showMask()}}}),t._v(" "),a("transition-group",{attrs:{name:"fadeInUp"}},t._l(t.movieList_l,function(e){return a("div",{key:e.id},[a("router-link",{attrs:{to:"/movieInfo/"+e.id}},[a("div",{staticClass:"movie-card"},[a("div",{staticClass:"movie-cover"},[a("img",{attrs:{src:e.images.small,alt:""}})]),t._v(" "),a("h6",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"score"},[t._v(t._s(t._f("fullScore")(e.rating.average))+"\n                  ")])])])],1)}),0)],1)]),t._v(" "),a("van-col",{staticClass:"content",attrs:{span:"11"}},[a("div",{ref:"rightSection",staticClass:"rightSection"},[a("transition-group",{attrs:{name:"fadeInUp"}},t._l(t.movieList_r,function(e){return a("div",{key:e.id},[a("router-link",{attrs:{to:"/movieInfo/"+e.id}},[a("div",{staticClass:"movie-card"},[a("div",{staticClass:"movie-cover"},[a("img",{attrs:{src:e.images.small,alt:""}})]),t._v(" "),a("h6",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"score"},[t._v(t._s(t._f("fullScore")(e.rating.average)))])])])],1)}),0)],1)])],1),t._v(" "),t._m(0)],1),t._v(" "),a("van-popup",{staticClass:"show-pops",on:{"click-overlay":t.showMask},model:{value:t.blurStatus,callback:function(e){t.blurStatus=e},expression:"blurStatus"}},[a("h6",{staticClass:"sort-title"},[t._v("切换分类：")]),t._v(" "),a("SortCard",{ref:"hotCard",attrs:{type:"hot",name:"正在热映"},on:{func:function(e){return t.switchCard("hotCard")}}}),t._v(" "),a("SortCard",{ref:"showingCard",attrs:{type:"showing-soon",name:"即将上映"},on:{func:function(e){return t.switchCard("showingCard")}}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("span",[this._v("已经到底了哟")])])}]};var y=a("C7Lr")(S,b,!1,function(t){a("unfN")},"data-v-4798e43e",null).exports,k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"},[this._v("\n  发现\n")])},staticRenderFns:[]};var L=a("C7Lr")({data:function(){return{}}},k,!1,function(t){a("rYGo")},"data-v-4b3cc3de",null).exports,V={name:"MovieInfo",data:function(){return{movieID:this.$route.params.id,movieTitle:"",movieInfo:{},movieCover:"",moreInfo:!1,moreText:"更多信息",value:0,closeBtn:!1}},created:function(){this.getMovieInfo()},mounted:function(){var t=this;window.addEventListener("scroll",function(){window.scrollY>100?t.closeBtn=!0:t.closeBtn=!1},!0)},methods:{getMovieInfo:function(){var t=this;this.$ajax.get("https://bird.ioliu.cn/v1/?url=https://api.douban.com/v2/movie/subject/"+this.movieID).then(function(e){t.movieInfo={},t.movieTitle=e.data.title,t.value=e.data.rating.average/2,t.movieCover=e.data.images.large.replace(/s_ratio_poster/g,"l_ratio_poster"),t.movieInfo=e.data})},getInfoMock:function(){var t=this;this.$ajax.get("/info").then(function(e){t.movieTitle=e.data.data.title,t.value=e.data.data.rating.average/2,t.movieCover=e.data.data.images.large.replace(/s_ratio_poster/g,"l_ratio_poster"),t.movieInfo=e.data.data})},more:function(){this.moreInfo=!this.moreInfo,this.moreInfo?this.moreText="收起":this.moreText="更多信息"},back:function(){this.$router.go(-1)}},filters:{}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movie-page"},[a("div",{staticClass:"movie-page-cover"},[a("img",{attrs:{src:t.movieCover,alt:""}}),t._v(" "),a("div",{staticClass:"mask"})]),t._v(" "),a("div",{staticClass:"movie-page-info container"},[a("h2",{staticClass:"movie-name",class:{maxName:t.movieTitle.length>6}},[t._v(t._s(t.movieTitle))]),t._v(" "),a("h6",{staticClass:"director"},[t._v("\n      "+t._s(t.movieInfo.year)+" - "+t._s(t.movieInfo.original_title)+"\n    ")]),t._v(" "),a("div",{staticClass:"movie-star"},[a("van-rate",{attrs:{"allow-half":"","void-icon":"star","void-color":"#eee",readonly:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),a("span",[t._v(t._s(2*t.value))])],1),t._v(" "),a("div",{staticClass:"genres"},t._l(t.movieInfo.genres,function(e,s){return a("span",{key:s},[t._v(t._s(e))])}),0),t._v(" "),a("transition",{attrs:{name:"bounce"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.moreInfo,expression:"moreInfo"}],staticClass:"other-info"},[a("p",{staticClass:"aka"},[t._v("又名："),t._l(t.movieInfo.aka,function(e,s){return a("span",{key:s},[t._v(t._s(e))])})],2),t._v(" "),a("p",[t._v("制片国家/地区："),t._l(t.movieInfo.countries,function(e,s){return a("span",{key:s},[t._v(t._s(e))])})],2)])]),t._v(" "),a("div",{staticClass:"more",on:{click:t.more}},[a("span",{class:{open:!t.moreInfo,close:t.moreInfo}},[t._v(t._s(t.moreText))])]),t._v(" "),a("h6",{staticClass:"intro"},[t._v(t._s(t.movieInfo.summary))])],1),t._v(" "),a("div",{staticClass:"figure-wrap dir container"},[a("h6",[t._v("导演：")]),t._v(" "),a("div",{staticClass:"scroll-wrap"},t._l(t.movieInfo.directors,function(e,s){return a("figure",{key:s},[a("img",{attrs:{src:e.avatars.small,alt:e.name}}),t._v(" "),a("p",[t._v(t._s(e.name))])])}),0)]),t._v(" "),a("div",{staticClass:"figure-wrap dir container"},[a("h6",[t._v("演职员：")]),t._v(" "),a("div",{staticClass:"scroll-wrap"},t._l(t.movieInfo.casts,function(e,s){return a("figure",{key:s},[a("img",{attrs:{src:e.avatars.small,alt:e.name}}),t._v(" "),a("p",[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._m(0),t._v(" "),a("transition",{attrs:{name:"fadeInUp"}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.closeBtn,expression:"closeBtn"}],staticClass:"close-btn",on:{click:t.back}},[t._v("关闭")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("span",[this._v("已经到底了哟")])])}]};var M=a("C7Lr")(V,I,!1,function(t){a("3l3/")},"data-v-4f1fb05a",null).exports,$={name:"Ranking",data:function(){return{top250List:[],movieList_l:[],movieList_r:[],switchData:!0,startValue:0,countValue:10,totalValue:1}},created:function(){this.getTop250()},mounted:function(){var t=this;this.switchData=!1,window.addEventListener("scroll",function(){document.body.offsetHeight-window.scrollY-window.innerHeight<=200&&t.switchData&&(t.switchData=!1,t.getTop250(),console.log("到底了"))})},methods:{getTop250:function(){var t=this;if(this.top250List.length<this.totalValue){console.log("没有数据，开始获取");this.$ajax.get("https://bird.ioliu.cn/v1/?url=https://api.douban.com/v2/movie/top250?start="+this.startValue+"&count="+this.countValue).then(function(e){console.log("https://api.douban.com/v2/movie/top250?start="+t.startValue+"&count="+t.countValue);var a=e.data;if(t.totalValue=a.total,t.startValue>=t.totalValue)return t.switchData=!1,!1;console.log("可以继续获取");for(var s=0;s<t.countValue;s++)t.top250List.push(a.subjects[s]);t.startValue+=t.countValue,t.startDistMovie(),t.switchData=!0})}else console.log("有数据，进行分配"),this.startDistMovie(),this.switchData=!0},getTopMock:function(){var t=this;this.top250List.length<this.totalValue?(console.log("没有数据，开始获取"),this.$ajax.get("/top").then(function(e){var a=e.data.data;if(t.totalValue=a.total,t.startValue>=t.totalValue)return t.switchData=!1,!1;console.log("可以继续获取");for(var s=t.startValue;s<t.countValue;s++)t.top250List.push(a.subjects[s]);t.startValue=t.countValue,t.countValue+=10,t.startDistMovie(),t.switchData=!0})):(console.log("有数据，进行分配"),this.startDistMovie(),this.switchData=!0)},startDistMovie:function(){this.$store.commit("distMovie",{listArr:this.top250List,leftList:this.movieList_l,rightList:this.movieList_r})}},components:{SortCard:f}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("van-row",{attrs:{type:"flex",justify:"space-between"}},[a("van-col",{staticClass:"content",attrs:{span:"11"}},[a("div",{ref:"leftSection",staticClass:"leftSection"},[a("SortCard",{attrs:{type:"top-250",name:"Top 250"}}),t._v(" "),a("transition-group",{attrs:{name:"fadeInUp"}},t._l(t.movieList_l,function(e){return a("div",{key:e.id},[a("router-link",{attrs:{to:"/movieInfo/"+e.id}},[a("div",{staticClass:"movie-card"},[a("div",{staticClass:"movie-cover"},[a("img",{attrs:{src:e.images.small,alt:e.title}})]),t._v(" "),a("h6",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"score"},[t._v(t._s(t._f("fullScore")(e.rating.average)))])])])],1)}),0)],1)]),t._v(" "),a("van-col",{staticClass:"content",attrs:{span:"11"}},[a("div",{ref:"rightSection",staticClass:"rightSection"},[a("transition-group",{attrs:{name:"fadeInUp"}},t._l(t.movieList_r,function(e){return a("div",{key:e.id},[a("router-link",{attrs:{to:"/movieInfo/"}},[a("div",{staticClass:"movie-card"},[a("div",{staticClass:"movie-cover"},[a("img",{attrs:{src:e.images.small,alt:e.title}})]),t._v(" "),a("h6",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"score"},[t._v(t._s(t._f("fullScore")(e.rating.average)))])])])],1)}),0)],1)])],1),t._v(" "),t._m(0)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("span",[this._v("已经到底了哟")])])}]};var x=a("C7Lr")($,T,!1,function(t){a("fPoc")},"data-v-0c76bbc4",null).exports;c.a.use(w.a);var D=new w.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:y,meta:{navShow:!0}},{path:"/find",name:"Find",component:L,meta:{navShow:!0}},{path:"/ranking",name:"Ranking",component:x,meta:{navShow:!0}},{path:"/movieInfo/:id",name:"MovieInfo",component:M,meta:{navShow:!1}}],linkActiveClass:"tabActive"}),E=a("R4Sj"),R={showMask:function(t){t.maskStatus=!t.maskStatus},switchCard:function(t,e){t.homeSortCard.type=e.type,t.homeSortCard.name=e.name},switchURL:function(t,e){"hot"==e.type?(console.log("发起真实请求"),t.homeURL="https://api.douban.com/v2/movie/in_theaters?city=南昌&start="):"showing-soon"==e.type&&(console.log("发起真实请求"),t.homeURL="https://api.douban.com/v2/movie/coming_soon?city=南昌&start=")},getTop:function(t,e){for(var a=0;e;)a+=e.offsetTop,e=e.offsetParent;return a},distMovie:function(t,e){console.log("开始分配数据");for(var a=e.leftList.length+e.rightList.length,s=e.listArr.length,o=a;o<s;o++)o%2==0?e.rightList.push(e.listArr[o]):e.leftList.push(e.listArr[o])}},U=a("WMeU"),j=a.n(U),A=a("/8vw"),B=a.n(A);c.a.use(E.a);var H=new E.a.Store({state:{title:"state",city:"",homeURL:"https://api.douban.com/v2/movie/in_theaters?city=南昌&start=",maskStatus:!1,homeSortCard:{type:"hot",name:"正在热映"},getTopData:""},mutations:R,getters:j.a,actions:B.a});a("/JRm"),a("8sJK"),a("Kg7K");c.a.use(s.a).use(o.a).use(i.a).use(n.a).use(r.a),c.a.prototype.$ajax=C.a,C.a.defaults.baseURL="/api",C.a.defaults.headers.post["Content-Type"]="application/json",c.a.config.productionTip=!1,new c.a({el:"#app",router:D,components:{App:_},template:"<App/>",store:H}),c.a.filter("fullScore",function(t){var e=t.toString();return 1==e.length?e+".0":e})},OiEK:function(t,e){},TyYA:function(t,e){},WMeU:function(t,e){},adJq:function(t,e){},arlJ:function(t,e){},fPoc:function(t,e){},oB5S:function(t,e){},rYGo:function(t,e){},unfN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.63b8e21c818aa7dde87b.js.map