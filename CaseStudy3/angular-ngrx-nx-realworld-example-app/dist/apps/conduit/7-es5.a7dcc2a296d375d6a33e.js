!function(){function t(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],i=!0,n=!1,a=void 0;try{for(var c,o=t[Symbol.iterator]();!(i=(c=o.next()).done)&&(r.push(c.value),!e||r.length!==e);i=!0);}catch(u){n=!0,a=u}finally{try{i||null==o.return||o.return()}finally{if(n)throw a}}return r}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CRCv:function(e,i,a){"use strict";a.r(i),a.d(i,"EditorModule",function(){return W});var c,o,u=a("gy9y"),s=a("AxuA"),l=a("ofXK"),f=a("tyNb"),b=a("9jGm"),d=a("l7P3"),p=a("LRne"),h=a("zp1y"),v=a("bOdf"),y=a("lJxs"),m=a("JIr8"),g=a("A47K"),O=a("fXoL"),A=((c=function(){function t(e){r(this,t),this.apiService=e}return n(t,[{key:"publishArticle",value:function(t){return t.slug?this.apiService.put("/articles/"+t.slug,{article:t}):this.apiService.post("/articles/",{article:t})}},{key:"get",value:function(t){return this.apiService.get("/articles/"+t)}}]),t}()).\u0275fac=function(t){return new(t||c)(O.Pb(g.b))},c.\u0275prov=O.Db({token:c,factory:c.\u0275fac}),c),j=Object(d.n)("[editor] PUBLISH_ARTICLE"),F=Object(d.n)("[editor] INITIALIZE_ARTICLE"),S=Object(d.n)("[editor] LOAD_ARTICLE",Object(d.s)()),k=Object(d.n)("[editor] LOAD_ARTICLE_SUCCESS",Object(d.s)()),w=Object(d.n)("[editor] LOAD_ARTICLE_FAIL",Object(d.s)()),L=a("EdWO"),I=((o=function e(i,n,a){var c=this;r(this,e),this.actions$=i,this.ngrxFormsFacade=n,this.editorService=a,this.publishArticle$=Object(b.c)(function(){return c.actions$.pipe(Object(b.d)(j),Object(h.a)(c.ngrxFormsFacade.data$),Object(v.a)(function(e){var r=t(e,2),i=(r[0],r[1]);return c.editorService.publishArticle(i).pipe(Object(y.a)(function(t){return Object(L.b)({to:{path:["article",t.article.slug]}})}),Object(m.a)(function(t){return Object(p.a)(Object(s.d)({errors:t.error.errors}))}))}))}),this.loadArticle$=Object(b.c)(function(){return c.actions$.pipe(Object(b.d)(S),Object(v.a)(function(t){return c.editorService.get(t.id).pipe(Object(y.a)(function(t){return k({article:t.article})}),Object(m.a)(function(t){return Object(p.a)(w(t))}))}))})}).\u0275fac=function(t){return new(t||o)(O.Pb(b.a),O.Pb(s.a),O.Pb(A))},o.\u0275prov=O.Db({token:o,factory:o.\u0275fac}),o),$={article:{slug:"",title:"",description:"",body:"",tagList:[],createdAt:"",updatedAt:"",favorited:!1,favoritesCount:0,author:{username:"",bio:"",image:"",following:!1,loading:!1}}},E=Object(d.p)($,Object(d.r)(k,function(t,e){return Object.assign(Object.assign({},t),{article:e.article})}),Object(d.r)(w,F,function(){return $}));function x(t,e){return E(t,e)}var T,P,C,D,R=Object(d.o)("editor"),K={getArticle:Object(d.q)(R,function(t){return t.article})},_=((T=function(){function t(e){r(this,t),this.store=e,this.article$=this.store.select(K.getArticle)}return n(t,[{key:"loadArticle",value:function(t){this.store.dispatch(S({id:t}))}},{key:"loadArticleSuccess",value:function(t){this.store.dispatch(k({article:t}))}},{key:"loadArticleFail",value:function(t){this.store.dispatch(w({error:t}))}},{key:"publishArticle",value:function(){this.store.dispatch(j())}},{key:"initializeArticle",value:function(){this.store.dispatch(F())}}]),t}()).\u0275fac=function(t){return new(t||T)(O.Pb(d.h))},T.\u0275prov=O.Db({token:T,factory:T.\u0275fac}),T),U=a("3Pt+"),N=a("T7Fx"),q=a("5W4/"),z=[{type:"INPUT",name:"title",placeholder:"Article Title",validator:[U.h.required]},{type:"INPUT",name:"description",placeholder:"What's this article about?",validator:[U.h.required]},{type:"TEXTAREA",name:"body",placeholder:"Write your article (in markdown)",validator:[U.h.required]},{type:"INPUT",name:"tagList",placeholder:"Enter Tags",validator:[]}],H=((D=function(){function t(e,i,n){r(this,t),this.ngrxFormsFacade=e,this.router=i,this.facade=n}return n(t,[{key:"ngOnInit",value:function(){var t=this;this.ngrxFormsFacade.setStructure(z),this.data$=this.ngrxFormsFacade.data$,this.structure$=this.ngrxFormsFacade.structure$,this.facade.article$.subscribe(function(e){return t.ngrxFormsFacade.setData(e)})}},{key:"updateForm",value:function(t){this.ngrxFormsFacade.updateData(t)}},{key:"submit",value:function(){this.facade.publishArticle()}},{key:"ngOnDestroy",value:function(){this.ngrxFormsFacade.initializeForm(),this.facade.initializeArticle()}}]),t}()).\u0275fac=function(t){return new(t||D)(O.Hb(s.a),O.Hb(f.e),O.Hb(_))},D.\u0275cmp=O.Bb({type:D,selectors:[["app-article-editor"]],decls:8,vars:2,consts:[[1,"editor-page"],[1,"container","page"],[1,"row"],[1,"col-md-10","offset-md-1","col-xs-12"],[3,"data$","structure$","updateForm"],["type","button",1,"btn","btn-lg","pull-xs-right","btn-primary",3,"click"]],template:function(t,e){1&t&&(O.Lb(0,"div",0),O.Lb(1,"div",1),O.Lb(2,"div",2),O.Lb(3,"div",3),O.Ib(4,"app-list-errors"),O.Lb(5,"app-dynamic-form",4),O.Sb("updateForm",function(t){return e.updateForm(t)}),O.Kb(),O.Lb(6,"button",5),O.Sb("click",function(){return e.submit()}),O.ic(7," Publish Article "),O.Kb(),O.Kb(),O.Kb(),O.Kb(),O.Kb()),2&t&&(O.xb(5),O.Yb("data$",e.data$)("structure$",e.structure$))},directives:[N.a,q.a],styles:[""],changeDetection:0}),D),J=((C=function(){function t(e){r(this,t),this.facade=e}return n(t,[{key:"resolve",value:function(t,e){var r=t.params.slug;return r&&this.facade.loadArticle(r),Object(p.a)(!0)}}]),t}()).\u0275fac=function(t){return new(t||C)(O.Pb(_))},C.\u0275prov=O.Db({token:C,factory:C.\u0275fac}),C),W=((P=function t(){r(this,t)}).\u0275mod=O.Fb({type:P}),P.\u0275inj=O.Eb({factory:function(t){return new(t||P)},providers:[I,A,J,_],imports:[[l.c,s.b,f.h.forChild([{path:"",pathMatch:"full",component:H,resolve:{EditorResolverService:J},canActivate:[u.b]},{path:":slug",component:H,resolve:{EditorResolverService:J}}]),d.j.forFeature("editor",x,{initialState:$}),b.b.forFeature([I])]]}),P)}}])}();