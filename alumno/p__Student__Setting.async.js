(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{SQCQ:function(e,a,t){},"kfs/":function(e,a,t){"use strict";t.r(a);t("IzEo");var l,n=t("bx4M"),r=(t("+L6B"),t("2/Rp")),i=(t("14J3"),t("BMrR")),c=(t("7Kak"),t("9yH6")),o=(t("iQDF"),t("+eQT")),s=(t("5NDa"),t("5rEg")),m=(t("jCWc"),t("kPKH")),d=(t("/zsF"),t("PArb")),u=(t("fOrg"),t("+KLJ")),E=t("2Taf"),p=t.n(E),b=t("vZ4D"),g=t.n(b),h=t("l4Ni"),f=t.n(h),v=t("ujKo"),I=t.n(v),k=t("MhPg"),D=t.n(k),F=(t("y8nQ"),t("Vl3Y")),y=t("q1tI"),x=t.n(y),V=(t("SQCQ"),t("MuoO")),P=t("wd/R"),Y=t.n(P),w=F["a"].create({name:"Student setting"})((l=function(e){function a(){var e,t;p()(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return t=f()(this,(e=I()(a)).call.apply(e,[this].concat(n))),t.handleSubmit=function(e){var a=t.props,l=(a.admission,a.dispatch),n=a.form;e.preventDefault(),n.validateFieldsAndScroll(function(e,a){e||l({type:"global/updateStudent",payload:a})})},t}return D()(a,e),g()(a,[{key:"render",value:function(){var e=this.props,a=e.form,t=e.global,l=t.student,E=t.setting,p=a.getFieldDecorator;return x.a.createElement(n["a"],{bordered:!1},x.a.createElement(u["a"],{message:"Verifique e ingrese su datos personales correctamente",description:"".concat(E.prefix," ").concat(E.institute," se reserva el derecho de tomar las acciones legales pertinentes en caso de verificarse la falsedad o inexactitud de las declaraciones realizadas en este formulario"),type:"warning",showIcon:!0}),x.a.createElement(d["a"],null),x.a.createElement(F["a"],{layout:"vertical",onSubmit:this.handleSubmit},x.a.createElement(i["a"],{gutter:32},x.a.createElement(m["a"],{xs:22,sm:22,md:11,lg:10,xl:8},x.a.createElement("strong",null,"Datos personales"),x.a.createElement("p",null,"Son los datos m\xe1s importantes en el sistema.")),x.a.createElement(m["a"],{xs:22,sm:22,md:11,lg:10,xl:10},x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"DNI"},p("dni",{initialValue:l.dni,rules:[{required:!0,message:"\xa1Por favor ingrese un DNI!"},{pattern:/^[0-9]{8}$/,message:"\xa1Ingrese un DNI v\xe1lido!"}]})(x.a.createElement(s["a"],{placeholder:"DNI",readOnly:!0}))),x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Apellidos y Nombres"},p("full_name",{initialValue:l.full_name,rules:[{required:!0,message:"\xa1Por favor ingrese un nombre!"}]})(x.a.createElement(s["a"],{placeholder:"ANTEZANA YANA, Paul yoel",readOnly:!0}))),x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Fecha de nacimiento"},p("birth_date",{initialValue:l.birth_date?Y()(new Date(l.birth_date),"DD/MM/YYYY"):void 0,rules:[{required:!0,message:"\xa1Por favor ingrese un fecha de nacimiento!"}]})(x.a.createElement(o["a"],{format:"DD/MM/YYYY",placeholder:"DD/MM/YYYY"}))),x.a.createElement(F["a"].Item,{label:"Sexo"},p("gender",{initialValue:l.gender,rules:[{required:!0,message:"\xa1Por favor ingrese el sexo!"}]})(x.a.createElement(c["a"].Group,null,x.a.createElement(c["a"],{value:"F"},"Femenino"),x.a.createElement(c["a"],{value:"M"},"Masculino")))))),x.a.createElement(d["a"],null),x.a.createElement(i["a"],{gutter:32},x.a.createElement(m["a"],{xs:22,sm:22,md:11,lg:10,xl:8},x.a.createElement("strong",null,"Lugar de nacimiento"),x.a.createElement("p",null,"Datos de lugar de nacimiento todos los campos son opcionales.")),x.a.createElement(m["a"],{xs:22,sm:22,md:11,lg:10,xl:10},x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Lugar de nacimiento"},p("birth_place",{initialValue:l.birth_place})(x.a.createElement(s["a"],{placeholder:"Lugar de nacimiento"}))),x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Distrito"},p("district",{initialValue:l.district})(x.a.createElement(s["a"],{placeholder:"Distrito"}))),x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Provincia"},p("province",{initialValue:l.province})(x.a.createElement(s["a"],{placeholder:"Provincia"}))),x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Regi\xf3n"},p("region",{initialValue:l.region})(x.a.createElement(s["a"],{placeholder:"Regi\xf3n"}))))),x.a.createElement(d["a"],null),x.a.createElement(i["a"],{gutter:32},x.a.createElement(m["a"],{xs:22,sm:22,md:11,lg:10,xl:8},x.a.createElement("strong",null,"Otros datos"),x.a.createElement("p",null,"Algunos datos adicionales.")),x.a.createElement(m["a"],{xs:22,sm:22,md:11,lg:10,xl:10},x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Pais"},p("country",{initialValue:l.country})(x.a.createElement(s["a"],{placeholder:"Pais"}))),x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Direccion"},p("address",{initialValue:l.address})(x.a.createElement(s["a"],{placeholder:"Direccion"}))),x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Telefono"},p("phone",{initialValue:l.phone})(x.a.createElement(s["a"],{placeholder:"Telefono"}))),x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Estado civil"},p("civil_status",{initialValue:l.civil_status})(x.a.createElement(s["a"],{placeholder:"Estado civil"}))),x.a.createElement(F["a"].Item,{label:"Trabaja"},p("is_work",{initialValue:l.is_work})(x.a.createElement(c["a"].Group,null,x.a.createElement(c["a"],{value:"si"},"SI"),x.a.createElement(c["a"],{value:"no"},"NO")))),x.a.createElement(F["a"].Item,{hasFeedback:!0,label:"Puesto en la que trabaja"},p("market_stall",{initialValue:l.market_stall})(x.a.createElement(s["a"],{placeholder:"Puesto"}))),x.a.createElement(F["a"].Item,null,x.a.createElement(r["a"],{type:"primary",htmlType:"submit"},"Guardar Cambios"))))))}}]),a}(x.a.Component),l)),_=function(e){e.admission;var a=e.global;e.loading;return{global:a}};a["default"]=Object(V["connect"])(_)(w)}}]);