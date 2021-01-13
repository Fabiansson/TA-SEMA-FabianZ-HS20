import{r as t,h as s}from"./p-169f3d6f.js";import"./p-3daa696c.js";import{r as i,l as a}from"./p-4bc430e0.js";const e=class{constructor(s){t(this,s),this.disabled=!1,this.changeUserState=async t=>{t.success&&t.user?this.setUser(t.user):this.errors=t.errors},this.handleSubmit=async t=>{t.preventDefault(),this.disabled=!0;const s=this.match.url.match(/\/register/i),{name:e,email:r,password:o}=this;if(r&&o&&(e||!s)){if(s){const t=await i({name:e,email:r,password:o});this.changeUserState(t)}else{const t=await a({email:r,password:o});this.changeUserState(t)}this.disabled=!1}},this.handleChange=t=>{const s=t.target.getAttribute("data-auth-id"),i=t.target.value;s&&i&&(this[s]=i)},this.setPageTitle=()=>{const t=this.match.url.match(/\/register/i);document.title=(t?"Sign Up":"Sign In")+" - Stencil Conduit"}}updateTitle(){this.setPageTitle()}componentDidLoad(){this.setPageTitle()}render(){const t=this.match.url.match(/\/register/i),i="Sign "+(t?"up":"in");return s("main",{class:"auth-page"},s("div",{class:"container page"},s("div",{class:"row"},s("div",{class:"col-md-6 offset-md-3 col-xs-12"},s("h1",{class:"text-xs-center"},i),s("p",{class:"text-xs-center"},s("stencil-route-link",{url:t?"/login":"/register"},t?"Have an account?":"Need an account?")),s("error-display",{errors:this.errors}),s("form",{onSubmit:this.handleSubmit},t&&s("fieldset",{class:"form-group",disabled:this.disabled},s("input",{class:"form-control form-control-lg",type:"text",placeholder:"Your Name",value:this.name,onInput:this.handleChange,"data-auth-id":"name",required:!0})),s("fieldset",{class:"form-group",disabled:this.disabled},s("input",{class:"form-control form-control-lg",type:"email",placeholder:"Email",value:this.email,onInput:this.handleChange,"data-auth-id":"email",required:!0})),s("fieldset",{class:"form-group",disabled:this.disabled},s("input",{class:"form-control form-control-lg",type:"password",placeholder:"Password",value:this.password,onInput:this.handleChange,"data-auth-id":"password",required:!0})),s("button",{class:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:this.disabled},i))))))}static get watchers(){return{match:["updateTitle"]}}};export{e as auth_page}