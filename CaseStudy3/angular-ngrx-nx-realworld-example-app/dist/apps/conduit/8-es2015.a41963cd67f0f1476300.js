(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QpK0:function(t,e,s){"use strict";s.r(e),s.d(e,"HomeModule",function(){return x});var i=s("CWEr"),n=s("ofXK"),c=s("tyNb"),a=s("9jGm"),o=s("l7P3"),b=s("LRne"),r=s("eIep"),l=s("lJxs"),g=s("JIr8"),u=s("A47K"),f=s("fXoL");let h=(()=>{class t{constructor(t){this.apiService=t}getTags(){return this.apiService.get("/tags")}}return t.\u0275fac=function(e){return new(e||t)(f.Pb(u.b))},t.\u0275prov=f.Db({token:t,factory:t.\u0275fac}),t})();const p=Object(o.n)("[home] LOAD_TAGS"),d=Object(o.n)("[home] LOAD_TAGS_SUCCESS",Object(o.s)()),L=Object(o.n)("[home] LOAD_TAGS_FAIL",Object(o.s)());let v=(()=>{class t{constructor(t,e){this.actions$=t,this.homeService=e,this.loadTags$=Object(a.c)(()=>this.actions$.pipe(Object(a.d)(p),Object(r.a)(()=>this.homeService.getTags().pipe(Object(l.a)(t=>d({tags:t.tags})),Object(g.a)(t=>Object(b.a)(L(t)))))))}}return t.\u0275fac=function(e){return new(e||t)(f.Pb(a.a),f.Pb(h))},t.\u0275prov=f.Db({token:t,factory:t.\u0275fac}),t})();const O={tags:[]},j=Object(o.p)(O,Object(o.r)(d,(t,e)=>Object.assign(Object.assign({},t),{tags:e.tags})),Object(o.r)(L,(t,e)=>Object.assign(Object.assign({},t),{tags:[]})));function m(t,e){return j(t,e)}const K=Object(o.o)("home"),$={getTags:Object(o.q)(K,t=>t.tags),getHome:K};let y=(()=>{class t{constructor(t){this.store=t,this.home$=this.store.select($.getHome),this.tags$=this.store.select($.getTags)}loadTags(){this.store.dispatch(p())}}return t.\u0275fac=function(e){return new(e||t)(f.Pb(o.h))},t.\u0275prov=f.Db({token:t,factory:t.\u0275fac}),t})(),C=(()=>{class t{constructor(t){this.facade=t}resolve(t,e){return this.facade.loadTags(),Object(b.a)(!0)}}return t.\u0275fac=function(e){return new(e||t)(f.Pb(y))},t.\u0275prov=f.Db({token:t,factory:t.\u0275fac}),t})();var T=s("XNiG"),k=s("1G5W"),F=s("gy9y"),w=s("qm0p");function A(t,e){if(1&t){const t=f.Mb();f.Lb(0,"a",2),f.Sb("click",function(){f.dc(t);const s=e.$implicit;return f.Ub().setListTag.emit(s)}),f.ic(1),f.Kb()}if(2&t){const t=e.$implicit;f.xb(1),f.jc(t)}}let S=(()=>{class t{constructor(){this.setListTag=new f.n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Bb({type:t,selectors:[["app-tags-list"]],inputs:{tags:"tags"},outputs:{setListTag:"setListTag"},decls:4,vars:1,consts:[[1,"tag-list"],["class","tag-pill tag-default",3,"click",4,"ngFor","ngForOf"],[1,"tag-pill","tag-default",3,"click"]],template:function(t,e){1&t&&(f.Lb(0,"p"),f.ic(1,"Popular Tags"),f.Kb(),f.Lb(2,"div",0),f.hc(3,A,2,1,"a",1),f.Kb()),2&t&&(f.xb(3),f.Yb("ngForOf",e.tags))},directives:[n.k],styles:[""],changeDetection:0}),t})();const D=function(t){return{active:t}};let W=(()=>{class t{constructor(t,e,s,i){this.facade=t,this.router=e,this.articleListFacade=s,this.authFacade=i,this.unsubscribe$=new T.a}ngOnInit(){this.authFacade.isLoggedIn$.pipe(Object(k.a)(this.unsubscribe$)).subscribe(t=>{this.isAuthenticated=t,this.getArticles()}),this.listConfig$=this.articleListFacade.listConfig$,this.tags$=this.facade.tags$}setListTo(t="ALL"){this.articleListFacade.setListConfig(Object.assign(Object.assign({},i.c.listConfig),{type:t}))}getArticles(){this.setListTo(this.isAuthenticated?"FEED":"ALL")}setListTag(t){this.articleListFacade.setListConfig(Object.assign(Object.assign({},i.c.listConfig),{filters:Object.assign(Object.assign({},i.c.listConfig.filters),{tag:t})}))}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}}return t.\u0275fac=function(e){return new(e||t)(f.Hb(y),f.Hb(c.e),f.Hb(i.a),f.Hb(F.a))},t.\u0275cmp=f.Bb({type:t,selectors:[["app-home"]],decls:32,vars:21,consts:[[1,"home-page"],[1,"banner"],[1,"container"],[1,"logo-font"],[1,"container","page"],[1,"row"],[1,"col-md-9"],[1,"feed-toggle"],[1,"nav","nav-pills","outline-active"],[1,"nav-item"],[1,"nav-link",3,"ngClass","click"],[1,"nav-item",3,"hidden"],[1,"nav-link","active"],[1,"ion-pound"],[1,"col-md-3"],[1,"sidebar"],[3,"tags","setListTag"]],template:function(t,e){if(1&t&&(f.Lb(0,"div",0),f.Lb(1,"div",1),f.Lb(2,"div",2),f.Lb(3,"h1",3),f.ic(4,"conduit"),f.Kb(),f.Lb(5,"p"),f.ic(6,"A place to share your knowledge."),f.Kb(),f.Kb(),f.Kb(),f.Lb(7,"div",4),f.Lb(8,"div",5),f.Lb(9,"div",6),f.Lb(10,"div",7),f.Lb(11,"ul",8),f.Lb(12,"li",9),f.Lb(13,"a",10),f.Sb("click",function(){return e.setListTo("FEED")}),f.Vb(14,"async"),f.ic(15,"Your Feed"),f.Kb(),f.Kb(),f.Lb(16,"li",9),f.Lb(17,"a",10),f.Sb("click",function(){return e.setListTo("ALL")}),f.Vb(18,"async"),f.Vb(19,"async"),f.ic(20,"Global Feed"),f.Kb(),f.Kb(),f.Lb(21,"li",11),f.Vb(22,"async"),f.Lb(23,"a",12),f.Ib(24,"i",13),f.ic(25),f.Vb(26,"async"),f.Kb(),f.Kb(),f.Kb(),f.Kb(),f.Ib(27,"app-article-list"),f.Kb(),f.Lb(28,"div",14),f.Lb(29,"div",15),f.Lb(30,"app-tags-list",16),f.Sb("setListTag",function(t){return e.setListTag(t)}),f.Vb(31,"async"),f.Kb(),f.Kb(),f.Kb(),f.Kb(),f.Kb(),f.Kb()),2&t){let t=null,s=null;f.xb(13),f.Yb("ngClass",f.ac(17,D,"FEED"===(null==(t=f.Wb(14,5,e.listConfig$))?null:t.type))),f.xb(4),f.Yb("ngClass",f.ac(19,D,"ALL"===(null==(s=f.Wb(18,7,e.listConfig$))?null:s.type)&&!(null!=f.Wb(19,9,e.listConfig$).filters&&f.Wb(19,9,e.listConfig$).filters.tag))),f.xb(4),f.Yb("hidden",!(null!=f.Wb(22,11,e.listConfig$).filters&&f.Wb(22,11,e.listConfig$).filters.tag)),f.xb(4),f.kc(" ",null==f.Wb(26,13,e.listConfig$).filters?null:f.Wb(26,13,e.listConfig$).filters.tag," "),f.xb(5),f.Yb("tags",f.Wb(31,15,e.tags$))}},directives:[n.j,w.a,S],pipes:[n.b],styles:[".nav-link[_ngcontent-%COMP%], .tag-pill[_ngcontent-%COMP%]{cursor:pointer}"],changeDetection:0}),t})(),x=(()=>{class t{}return t.\u0275mod=f.Fb({type:t}),t.\u0275inj=f.Eb({factory:function(e){return new(e||t)},providers:[v,C,h,y],imports:[[n.c,i.b,c.h.forChild([{path:"",pathMatch:"full",component:W,resolve:{HomeResolverService:C}}]),o.j.forFeature("home",m,{initialState:O}),a.b.forFeature([v])]]}),t})()}}]);