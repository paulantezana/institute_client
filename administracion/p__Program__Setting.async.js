(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{HwYw:function(e,a,t){"use strict";t.r(a);t("IzEo");var r=t("bx4M"),n=t("lSNA"),o=t.n(n),s=t("lwsE"),l=t.n(s),c=t("W8MJ"),i=t.n(c),p=t("a1gu"),d=t.n(p),u=t("Nsbk"),m=t.n(u),y=t("7W2i"),b=t.n(y),h=t("q1tI"),g=t.n(h),f=t("MuoO"),w=t("zHco"),v=t("vOfa"),k=t("gMA2"),T=t("5el/"),E=function(e){function a(){var e,t;l()(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t=d()(this,(e=m()(a)).call.apply(e,[this].concat(n))),t.state={cardTabKey:"semesters"},t.onCardTabChange=function(e,a){t.setState(o()({},a,e))},t}return b()(a,e),i()(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.computedMatch.params,t=e.dispatch;t({type:"program/byId",payload:{id:parseInt(a.id)}}),t({type:"semester/all",payload:{program_id:parseInt(a.id)}}),t({type:"moduler/all",payload:{program_id:parseInt(a.id)}}),t({type:"teacherProgram/all",payload:{program_id:parseInt(a.id)}})}},{key:"render",value:function(){var e=this,a=this.props.program.currentProgram,t=[{key:"semesters",tab:"Semestres"},{key:"modules",tab:"Modulos"},{key:"teachers",tab:"Profesores"}],n={semesters:g.a.createElement(v["a"],null),modules:g.a.createElement(k["a"],null),teachers:g.a.createElement(T["a"],null)};return g.a.createElement(w["a"],{title:a.name},g.a.createElement(r["a"],{bordered:!1,style:{width:"100%"},tabList:t,activeTabKey:this.state.cardTabKey,onTabChange:function(a){e.onCardTabChange(a,"cardTabKey")}},n[this.state.cardTabKey]))}}]),a}(g.a.Component),I=function(e){var a=e.program;e.loading;return{program:a}};a["default"]=Object(f["connect"])(I)(E)}}]);