(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{l14b:function(t,e,a){"use strict";a.r(e),a.d(e,"SettingsModule",function(){return $});var r=a("gy9y"),s=a("AxuA"),i=a("A47K"),c=a("fXoL");let n=(()=>{class t{constructor(t){this.apiService=t}update(t){return this.apiService.put("/user",{user:t})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(i.b))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac}),t})();var o=a("ofXK"),u=a("tyNb"),b=a("9jGm"),d=a("LRne"),p=a("zp1y"),l=a("lJxs"),h=a("bOdf"),m=a("5+tZ"),g=a("JIr8"),f=a("l7P3");const F=Object(f.n)("[settings] EDIT_SETTINGS");var v=a("EdWO");let y=(()=>{class t{constructor(t,e,a,i){this.actions$=t,this.settingsService=e,this.authFacade=a,this.ngrxFormsFacade=i,this.editSettings=Object(b.c)(()=>this.actions$.pipe(Object(b.d)(F),Object(p.a)(this.ngrxFormsFacade.data$,this.authFacade.user$),Object(l.a)(([t,e,a])=>Object.assign(Object.assign({},a),{image:e.image,username:e.username,bio:e.bio,pass:e.pass,email:e.email})),Object(h.a)(t=>this.settingsService.update(t).pipe(Object(m.a)(t=>[Object(r.e)(),Object(v.b)({to:{path:["profile",t.user.username]}})]),Object(g.a)(t=>Object(d.a)(Object(s.d)({errors:t.error.errors})))))))}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(b.a),c.Pb(n),c.Pb(r.a),c.Pb(s.a))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac}),t})();var O=a("3Pt+"),x=a("T7Fx"),j=a("5W4/");const w=[{type:"INPUT",name:"image",placeholder:"URL of profile picture",validator:[]},{type:"INPUT",name:"username",placeholder:"Your Name",validator:[O.h.required]},{type:"TEXTAREA",name:"bio",placeholder:"Short bio about you",validator:[]},{type:"INPUT",name:"email",placeholder:"Email",validator:[O.h.required]},{type:"INPUT",name:"password",placeholder:"New Password",validator:[O.h.required],attrs:{type:"password"}}];let S=(()=>{class t{constructor(t,e,a,r){this.store=t,this.router=e,this.authFacade=a,this.ngrxFormsFacade=r}ngOnInit(){this.ngrxFormsFacade.setStructure(w),this.authFacade.user$.subscribe(t=>this.ngrxFormsFacade.setData(t)),this.data$=this.ngrxFormsFacade.data$,this.structure$=this.ngrxFormsFacade.structure$}updateForm(t){this.ngrxFormsFacade.updateData(t)}submit(){this.store.dispatch(F())}logout(){this.authFacade.logout()}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(f.h),c.Hb(u.e),c.Hb(r.a),c.Hb(s.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-settings"]],decls:14,vars:2,consts:[[1,"settings-page"],[1,"container","page"],[1,"row"],[1,"col-md-6","offset-md-3","col-xs-12"],[1,"text-xs-center"],[3,"data$","structure$","updateForm"],[1,"edit-button-container"],["type","submit",1,"btn","btn-lg","btn-primary","pull-xs-right",3,"click"],[1,"btn","btn-outline-danger",3,"click"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"div",3),c.Lb(4,"h1",4),c.ic(5,"Your Settings"),c.Kb(),c.Ib(6,"app-list-errors"),c.Lb(7,"app-dynamic-form",5),c.Sb("updateForm",function(t){return e.updateForm(t)}),c.Kb(),c.Lb(8,"div",6),c.Lb(9,"button",7),c.Sb("click",function(){return e.submit()}),c.ic(10," Update Settings "),c.Kb(),c.Kb(),c.Ib(11,"hr"),c.Lb(12,"button",8),c.Sb("click",function(){return e.logout()}),c.ic(13," Or click here to logout. "),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&t&&(c.xb(7),c.Yb("data$",e.data$)("structure$",e.structure$))},directives:[x.a,j.a],styles:[".edit-button-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:0}),t})(),$=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},providers:[y,n],imports:[[o.c,s.b,u.h.forChild([{path:"",pathMatch:"full",component:S,canActivate:[r.b]}]),b.b.forFeature([y])]]}),t})()}}]);