(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"+Fwi":function(e,a,t){e.exports={tableListForm:"sn-pages-student-index-tableListForm",tableListOperator:"sn-pages-student-index-tableListOperator",programDetail:"sn-pages-student-index-programDetail",active:"sn-pages-student-index-active"}},"4UQA":function(e,a,t){e.exports={center:"sn-pages-student-export-modal-index-center"}},Lchr:function(e,a,t){"use strict";t.r(a);t("IzEo");var n=t("bx4M"),l=(t("+L6B"),t("2/Rp")),r=(t("qVdP"),t("jsC+")),o=(t("2qtc"),t("kLXV")),i=(t("lUTK"),t("BvKs")),s=(t("Pwec"),t("CtXQ")),c=(t("Q9mQ"),t("diRs")),d=(t("+BJd"),t("mr32")),u=t("p0pE"),m=t.n(u),p=t("2Taf"),f=t.n(p),h=t("vZ4D"),g=t.n(h),E=t("l4Ni"),y=t.n(E),v=t("ujKo"),b=t.n(v),k=t("MhPg"),x=t.n(k),C=(t("5NDa"),t("5rEg")),w=t("q1tI"),S=t.n(w),I=t("MuoO"),D=t("7DNP"),M=t("zHco"),N=(t("17x9"),t("CkN6")),_=t("+Fwi"),F=t.n(_),R=t("rlhR"),A=t.n(R),O=(t("7Kak"),t("9yH6")),L=(t("iQDF"),t("+eQT")),Q=t("jehZ"),T=t.n(Q),U=(t("y8nQ"),t("Vl3Y")),V=(t("OaEy"),t("2fM7")),P=(t("gtSE"),t("wd/R")),Y=t.n(P),j={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},B=V["a"].Option,q=U["a"].create()(function(e){function a(e){var t;return f()(this,a),t=y()(this,b()(a).call(this,e)),t.state={},t}return x()(a,e),g()(a,[{key:"render",value:function(){var e=this.props,a=e.visible,t=(e.user,e.program),n=e.onCancel,l=e.onOk,r=e.type,i=e.form,s=e.confirmLoading,c=e.data,d=i.getFieldDecorator,u={};void 0!=c.programs&&(u=c.programs.find(function(e){return!0===e.by_default}));var m="update"===r;return S.a.createElement(o["a"],{title:"Alumno",okText:"Guardar",confirmLoading:s,onCancel:n,onOk:l,visible:a},S.a.createElement(U["a"],{layout:"horizontal"},S.a.createElement(U["a"].Item,T()({},j,{label:"Programa"}),d("program_id",{initialValue:u.id,rules:[{required:!0,message:"\xa1Por favor elija un programa de estudios!"}]})(S.a.createElement(V["a"],{style:{width:"100%"},placeholder:"Programa de estudios",disabled:m},t.list.map(function(e){return S.a.createElement(B,{key:e.id,value:e.id},e.name)})))),S.a.createElement(U["a"].Item,T()({hasFeedback:!0},j,{label:"DNI"}),d("dni",{initialValue:c.dni,rules:[{required:!0,message:"\xa1Por favor ingrese su DNI!"},{pattern:/^[0-9]{8}$/,message:"\xa1Ingrese un DNI v\xe1lido!"}]})(S.a.createElement(C["a"],{placeholder:"DNI"}))),S.a.createElement(U["a"].Item,T()({hasFeedback:!0},j,{label:"Apellidos y Nombres"}),d("full_name",{initialValue:c.full_name,rules:[{required:!0,message:"\xa1Por favor ingrese su nombre!"}]})(S.a.createElement(C["a"],{placeholder:"Apellidos y Nombres"}))),S.a.createElement(U["a"].Item,T()({hasFeedback:!0},j,{label:"Fecha de nacimiento"}),d("birth_date",{initialValue:c.birth_date?Y()(new Date(c.birth_date),"DD/MM/YYYY"):void 0})(S.a.createElement(L["a"],{format:"DD/MM/YYYY"}))),S.a.createElement(U["a"].Item,T()({},j,{label:"Sexo"}),d("gender",{initialValue:c.gender,rules:[{required:!0,message:"\xa1Por favor ingrese el sexo!"}]})(S.a.createElement(O["a"].Group,null,S.a.createElement(O["a"],{value:"F"},"Femenino"),S.a.createElement(O["a"],{value:"M"},"Masculino")))),!m&&S.a.createElement(U["a"].Item,T()({hasFeedback:!0},j,{label:"Email"}),d("email",{initialValue:c.email,rules:[{type:"email",message:"\xa1Ingrese un correo valido!"}]})(S.a.createElement(C["a"],{placeholder:"Email"}))),S.a.createElement(U["a"].Item,T()({hasFeedback:!0},j,{label:"Telefono"}),d("phone",{initialValue:c.phone,rules:[{pattern:/^[0-9]{6,12}$/,message:"\xa1Ingrese un telefono v\xe1lido!"}]})(S.a.createElement(C["a"],{placeholder:"Telefono"})))))}}]),a}(S.a.Component)),z=function(e){function a(e){var t;return f()(this,a),t=y()(this,b()(a).call(this,e)),t.handleConfirm=t.handleConfirm.bind(A()(t)),t.handleCancel=t.handleCancel.bind(A()(t)),t}return x()(a,e),g()(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"program/all"})}},{key:"handleConfirm",value:function(e){var a=this.props,t=a.dispatch,n=a.student.currentItem,l=this.formRef.props.form;l.validateFields(function(a,r){a||(t({type:"student/".concat(e),payload:{student:{dni:r.dni,full_name:r.full_name,phone:r.phone,gender:r.gender,birth_date:r.birth_date},user:{email:r.email},program_id:r.program_id,id:n.id}}),l.resetFields())})}},{key:"handleCancel",value:function(){var e=this.formRef.props.form;e.resetFields()}},{key:"render",value:function(){var e=this,a=this.handleConfirm,t=this.handleCancel,n=this.props,l=n.dispatch,r=n.student,o=n.global,i=n.program,s=n.loading,c=r.currentItem,d=r.modalType,u=r.modalVisible,m={data:"create"==d?{state:!0}:c,disabled:"detail"==d,type:d,user:o.user,program:i,visible:u,confirmLoading:s,onOk:function(){a(d)},onCancel:function(){l({type:"student/resetStudent"}),t()}};return S.a.createElement(q,T()({},m,{wrappedComponentRef:function(a){return e.formRef=a}}))}}]),a}(w["Component"]),K=function(e){var a=e.student,t=e.global,n=e.program,l=e.loading;return{student:a,global:t,program:n,loading:l.effects["student/create"]||l.effects["student/update"]}},G=Object(I["connect"])(K)(z),H=(t("/zsF"),t("PArb")),J=(t("fOrg"),t("+KLJ")),X=(t("DZo9"),t("8z0m")),Z=X["a"].Dragger,$=function(e){function a(e){var t;return f()(this,a),t=y()(this,b()(a).call(this,e)),t.state={file:null},t}return x()(a,e),g()(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.student,n=a.dispatch,r=a.loading,i=t.modalUploadVisible,c=function(){n({type:"student/toggleModalUpload",payload:!1}),e.setState({file:null})},d={name:"filestidents",uploading:r,accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",showUploadList:!1,beforeUpload:function(a){return e.setState({file:a}),!1}},u=function(){n({type:"student/uploadStudents",payload:{file:e.state.file}})},m=function(){n({type:"student/downloadTemp"})},p=function(){e.setState({file:null})};return S.a.createElement("div",null,S.a.createElement(o["a"],{title:"Importar Alumnos",visible:i,footer:null,onCancel:c},S.a.createElement("p",null,"Importa la informaci\xf3n de tus alumnos desde un archivo xlsx(Excel). El archivo xlsx se puede formatear con: ID Programa, DNI, Apellidos y Nombres, Email, Sexo, y otros campos opcionales."),S.a.createElement("p",null,S.a.createElement("a",{onClick:function(){return m()}},S.a.createElement(s["a"],{type:"layout"})," Descarga la plantilla")," ","y abre en Excel para ver el formato con todos los campos aceptados."),this.state.file?S.a.createElement("div",null,S.a.createElement(J["a"],{message:this.state.file.name,type:"info",closable:!0,onClose:function(){return p()}}),S.a.createElement(H["a"],{dashed:!0}),S.a.createElement(l["a"],{type:"primary",loading:r,icon:"upload",onClick:function(){return u()}}," ","Subir archivo")):S.a.createElement(Z,d,S.a.createElement("p",{className:"ant-upload-drag-icon"},S.a.createElement(s["a"],{type:"inbox"})),S.a.createElement("p",{className:"ant-upload-text"},"Haga clic o arrastre el archivo a esta \xe1rea para cargar"),S.a.createElement("p",{className:"ant-upload-hint"},"Soporte para subir un solo archivo "))))}}]),a}(S.a.Component),W=function(e){var a=e.student,t=(e.global,e.loading);return{student:a,loading:t.effects["student/uploadStudents"]}},ee=Object(I["connect"])(W)($),ae=(t("oDxf"),t("iQbp")),te=t.n(ae),ne=t("4UQA"),le=t.n(ne),re=function(e){function a(e){return f()(this,a),y()(this,b()(a).call(this,e))}return x()(a,e),g()(a,[{key:"render",value:function(){var e=this.props,a=e.student,t=e.dispatch,n=(e.loading,a.modalExportVisible),r=function(){t({type:"student/toggleModalExport",payload:!1})};return S.a.createElement("div",null,S.a.createElement(o["a"],{title:"Exportar Alumnos",visible:n,footer:null,onCancel:r},S.a.createElement("div",{className:le.a.center},S.a.createElement(te.a,{filename:"currentStudents.xlsx",element:S.a.createElement(l["a"],{icon:"export"},"Exportar datos actuales")},S.a.createElement(te.a.Sheet,{data:a.data.list,name:"Sheet1"},S.a.createElement(te.a.Column,{label:"Ruc",value:"ruc"}),S.a.createElement(te.a.Column,{label:"Nombre o razon social",value:"name_social_reason"}),S.a.createElement(te.a.Column,{label:"Direccion",value:"address"}),S.a.createElement(te.a.Column,{label:"Gerente",value:"manager"}))))))}}]),a}(S.a.Component),oe=function(e){var a=e.student,t=e.loading;return{student:a,loading:t.effects["student/uploadStudents"]}},ie=Object(I["connect"])(oe)(re),se=t("3HEy"),ce=t("TSYQ"),de=t.n(ce),ue=t("UbMB"),me=t.n(ue),pe=t("i6OX"),fe=C["a"].Search,he=me.a.bind(F.a),ge=function(e){function a(){var e,t;f()(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=y()(this,(e=b()(a)).call.apply(e,[this].concat(l))),t.state={selectedRows:[],search:""},t.onQueryAll=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.props.dispatch,n=m()({},e,{limit:e.limit});a({type:"student/paginateByLicense",payload:n})},t.onShowModal=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.props.dispatch;n({type:"student/showModal",payload:{currentItem:a,modalType:e}})},t.onShowModalUser=function(e){var a=t.props.dispatch;a({type:"user/updateUserByID",payload:{id:e.user_id}})},t.onDetail=function(e){var a=t.props.dispatch;a(D["routerRedux"].push("/students/".concat(e)))},t.onShowModalExport=function(){var e=t.props.dispatch;e({type:"student/toggleModalExport",payload:!0})},t.onShowModalUpload=function(){var e=t.props.dispatch;e({type:"student/toggleModalUpload",payload:!0})},t.handleSelectRows=function(e){t.setState({selectedRows:e})},t.handleSearch=function(e){t.setState({search:e.target.value}),t.onQueryAll({search:e.target.value})},t.handleStandardTableChange=function(e,a,n){var l=t.state.formValues,r=Object.keys(a).reduce(function(e,t){var n=m()({},e);return n[t]=getValue(a[t]),n},{}),o=m()({current_page:e.current,limit:e.pageSize,search:t.state.search},l,r);n.field&&(o.sorter="".concat(n.field,"_").concat(n.order)),t.onQueryAll(o)},t.handleMenuClick=function(e){t.props.dispatch;var a=t.state.selectedRows;if(a)switch(e.key){case"remove":console.log(a.map(function(e){return e.id}));break;default:break}},t}return x()(a,e),g()(a,[{key:"componentDidMount",value:function(){this.onQueryAll()}},{key:"render",value:function(){var e=this,a=this.props,t=a.student,u=a.loading,m=a.dispatch,p=t.data,f=this.state.selectedRows,h=function(e){m({type:"student/delete",payload:e})},g=[{title:"DNI",dataIndex:"dni",key:"dni",width:85},{title:"Nombre completo",dataIndex:"full_name",key:"full_name"},{title:"Sexo",key:"gender",render:function(e,a){return"F"===a.gender?S.a.createElement("span",{style:{color:"#EA2875"}},S.a.createElement(pe["f"],null)," ",a.gender):"M"===a.gender?S.a.createElement("span",{style:{color:"#1890FF"}},S.a.createElement(pe["e"],null)," ",a.gender):a.gender}},{title:"Programas",key:"programs",render:function(e,a){return S.a.createElement(c["a"],{content:a.programs.map(function(e,a){var t=he({programDetail:!0,active:e.by_default});return S.a.createElement("ul",{className:de()(t),key:a},S.a.createElement("li",null,e.name),S.a.createElement("li",null,"Ingreso: ",e.year_admission),S.a.createElement("li",null,"Egreso: ",e.year_promotion))}),title:"Programas detalles"},S.a.createElement(d["a"],{color:"green"},"Mostrar detalles"))}},{title:"Edad",key:"admission_year",width:65,render:function(e,a){var t=Y()(new Date(a.birth_date)).year(),n=Y()().year();return"".concat(n-t)}},{title:"Accion",key:"accion",width:"110px",render:function(a,t){var n=S.a.createElement(i["a"],null,S.a.createElement(i["a"].Item,{key:"1",onClick:function(){return e.onShowModal("update",t)}},S.a.createElement(s["a"],{type:"edit"}),"Editar"),S.a.createElement(i["a"].Item,{key:"2",onClick:function(){o["a"].confirm({title:"\xbfEst\xe1s seguro de eliminar este registro?",content:"Estudiante: ".concat(t.full_name),okText:"SI",okType:"danger",cancelText:"NO",onOk:function(){h({id:t.id})}})}},S.a.createElement(s["a"],{type:"delete"}),"Eliminar"),S.a.createElement(i["a"].Item,{key:"3",onClick:function(){return e.onShowModalUser(t)}},S.a.createElement(s["a"],{type:"user"}),"Usuario"));return S.a.createElement(r["a"].Button,{onClick:function(){return e.onDetail(t.id)},overlay:n},"Detalles")}}],E=S.a.createElement(i["a"],{onClick:this.handleMenuClick,selectedKeys:[]},S.a.createElement(i["a"].Item,{key:"none"},"Ninguna"));return S.a.createElement(M["a"],{title:"Alumnos"},S.a.createElement(n["a"],{bordered:!1},S.a.createElement("div",{className:F.a.tableList},S.a.createElement("div",{className:F.a.tableListForm},S.a.createElement(fe,{placeholder:"Buscar alumno",value:this.state.search,onChange:this.handleSearch})),S.a.createElement("div",{className:F.a.tableListOperator},S.a.createElement(l["a"].Group,null,S.a.createElement(l["a"],{icon:"plus",type:"primary",onClick:function(){return e.onShowModal("create")}},"Nuevo"),S.a.createElement(l["a"],{icon:"reload",onClick:function(){return e.onQueryAll()}},"Refrescar")),S.a.createElement(l["a"].Group,null,S.a.createElement(l["a"],{icon:"upload",onClick:function(){return e.onShowModalUpload()}},"Importar"),S.a.createElement(l["a"],{icon:"export",onClick:function(){return e.onShowModalExport()}},"Exportar")),f.length>0&&S.a.createElement("span",null,S.a.createElement(r["a"],{overlay:E},S.a.createElement(l["a"],null,"Mas operaciones ",S.a.createElement(s["a"],{type:"down"}))))),S.a.createElement(G,null),S.a.createElement(ee,null),S.a.createElement(ie,null),S.a.createElement(N["a"],{selectedRows:f,loading:u,data:p,columns:g,rowKey:function(e){return e.id},onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange}),S.a.createElement(se["a"],null))))}}]),a}(w["Component"]),Ee=function(e){var a=e.student,t=e.loading;return{student:a,loading:t.effects["student/paginateBySubsidiary"]}};a["default"]=Object(I["connect"])(Ee)(ge)},gtSE:function(e,a,t){}}]);