(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"+eTa":function(e,t,a){e.exports={program:"an-pages-dashboard-index-program",name:"an-pages-dashboard-index-name",institute:"an-pages-dashboard-index-institute",student:"an-pages-dashboard-index-student",options:"an-pages-dashboard-index-options",optionsIcon:"an-pages-dashboard-index-optionsIcon",cardOptions:"an-pages-dashboard-index-cardOptions"}},TnSg:function(e,t,a){"use strict";a.r(t);a("Mwp2");var n=a("VXEj"),o=(a("14J3"),a("BMrR")),i=(a("jCWc"),a("kPKH")),r=(a("Telt"),a("Tckk")),l=(a("IzEo"),a("bx4M")),s=(a("fOrg"),a("+KLJ")),c=(a("Pwec"),a("CtXQ")),d=a("2Taf"),m=a.n(d),p=a("vZ4D"),u=a.n(p),g=a("l4Ni"),E=a.n(g),h=a("ujKo"),b=a.n(h),v=a("MhPg"),f=a.n(v),x=a("q1tI"),y=a.n(x),k=a("usdK"),w=a("MuoO"),I=a("Aeqt"),N=a("+eTa"),B=a.n(N),O=function(e){function t(){var e,a;m()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return a=E()(this,(e=b()(t)).call.apply(e,[this].concat(o))),a.onNavigae=function(e){k["a"].push(e)},a}return f()(t,e),u()(t,[{key:"render",value:function(){var e=this,t=this.props.global,a=t.setting,d=t.student,m=t.user,p=t.program,u=[{title:"My Historial",path:"/student/history",icon:y.a.createElement(c["a"],{type:"clock-circle"})},{title:"Bilioteca virtual",path:"/book",icon:y.a.createElement(c["a"],{type:"book"})},{title:"Revisiones",path:"/student/practice",icon:y.a.createElement(c["a"],{type:"scan"})},{title:"Encuestas",path:"/monitoring/poll",icon:y.a.createElement(c["a"],{type:"audit"})},{title:"Cuestionarios",path:"/monitoring/quiz",icon:y.a.createElement(c["a"],{type:"audit"})},{title:"Diplomados",path:"/monitoring/diplomat",icon:y.a.createElement(c["a"],{type:"audit"})},{title:"Chat",path:"/messenger",icon:y.a.createElement(c["a"],{type:"message"})},{title:"Datos personales",path:"/student/setting",icon:y.a.createElement(c["a"],{type:"solution"})}];return y.a.createElement(x["Fragment"],null,y.a.createElement(l["a"],{style:{marginBottom:"16px"},bordered:!1},y.a.createElement(s["a"],{banner:!0,showIcon:!1,type:"info",message:"Bienvenido al modulo del estudiante",description:"Este es uno de los m\xf3dulos de la intranet que pretende dar la informaci\xf3n precisa y concisa a los estudiantes de la ".concat(a.prefix," ").concat(a.institute)})),y.a.createElement(o["a"],{gutter:16},y.a.createElement(i["a"],{md:12},y.a.createElement(l["a"],{style:{marginBottom:"16px"},bordered:!1},y.a.createElement("div",{className:B.a.institute},y.a.createElement(r["a"],{src:"".concat(I["b"].path,"/").concat(a.logo),size:112,style:{marginBottom:"16px"}}),y.a.createElement("strong",null,a.prefix_short_name),y.a.createElement("div",null,a.institute),y.a.createElement("div",null,p.name)))),y.a.createElement(i["a"],{md:12},y.a.createElement(l["a"],{style:{marginBottom:"16px"},bordered:!1},y.a.createElement("div",{className:B.a.student},y.a.createElement(r["a"],{style:{marginBottom:"16px"},src:""===m.avatar?"".concat(I["b"].path,"/").concat(a.logo):"".concat(I["b"].path,"/").concat(m.avatar),size:112}),y.a.createElement("strong",null,"BIENVENIDO"),y.a.createElement("div",null,d.full_name),y.a.createElement("div",null,d.dni))))),y.a.createElement(n["a"],{grid:{gutter:16,xs:2,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:u,renderItem:function(t){return y.a.createElement(n["a"].Item,null,y.a.createElement(l["a"],{onClick:function(){return e.onNavigae(t.path)},bordered:!1,className:B.a.cardOptions},y.a.createElement("div",{className:B.a.options},y.a.createElement("div",{className:B.a.optionsIcon},t.icon),t.title)))}}))}}]),t}(x["Component"]),C=function(e){var t=e.global,a=e.loading;return{global:t,loading:a.effects["book/paginate"]}};t["default"]=Object(w["connect"])(C)(O)}}]);