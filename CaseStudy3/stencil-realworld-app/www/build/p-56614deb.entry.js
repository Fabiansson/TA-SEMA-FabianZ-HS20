import{r as s,h as t}from"./p-169f3d6f.js";import"./p-3daa696c.js";import{g as i,f as o}from"./p-2b452230.js";const e=class{constructor(t){s(this,t),this.following=!1,this.isLoading=!0,this.notFound=!1,this.fetchProfile=async()=>{this.isLoading=!0;const{username:s}=this.match.params;document.title=s+"'s profile - Stencil Conduit",s||(this.notFound=!0,this.isLoading=!1);const t=this.user?this.user.token:void 0,o=await i(s,t),{success:e,errors:r,profile:n}=o;e?this.profile=n:this.errors=r,this.isLoading=!1},this.followProfile=async()=>{const{profile:s,user:t}=this;if(!s||!t)return;this.profile=Object.assign(Object.assign({},s),{following:!s.following});const i=await o(s.username,t.token,s.following),{success:e,errors:r}=i;e||(console.error(r),this.profile=s)}}getNewUser(){this.fetchProfile()}componentDidLoad(){this.fetchProfile()}render(){if(this.isLoading)return t("loading-spinner",null);if(this.errors)return[t("h1",null,"Something went wrong"),t("error-display",{errors:this.errors})];if(this.notFound||!this.profile)return t("not-found",null);const{username:s,image:i,bio:o,following:e}=this.profile;return t("main",{class:"profile-page"},t("div",{class:"user-info"},t("div",{class:"container"},t("div",{class:"row"},t("div",{class:"col-xs-12 col-md-10 offset-md-1"},t("img",{src:i,class:"user-img",alt:"user image"}),t("h4",null,s),o&&t("p",null,o),this.user&&this.user.username!==s&&t("button",{class:"btn btn-sm action-btn "+(e?"btn-secondary":"btn-outline-secondary"),onClick:this.followProfile},!e&&t("ion-icon",{name:"ion-plus-round"}),"  ",e?"Unfollow":"Follow"," ",s))))),t("div",{class:"container"},t("div",{class:"row"},t("div",{class:"col-xs-12 col-md-10 offset-md-1"},t("tabbed-feed",{class:"col-md-9",user:this.user,profile:this.profile,possibleTabs:["authored","favorited"],isProfile:!0})))))}static get watchers(){return{match:["getNewUser"]}}};export{e as profile_page}