(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{45:function(e,t,n){e.exports=n.p+"static/media/not-found.9d817070.png"},50:function(e,t,n){e.exports=n.p+"static/media/no-notes.e0be4324.png"},51:function(e,t,n){e.exports=n.p+"static/media/no-results.e9410c74.png"},55:function(e,t,n){e.exports=n(99)},73:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=n(10),s=n(18),l=n(22),u=n.n(l),d=n(41),f=n.n(d),m=n(42),h=n(35),v=n(7),g=n(43),p=n(34),E=n(44),_=n.n(E),b=function(e){return function(t,n,a){return e((function(e,n){var a,r=performance.now(),o=t(e,n),i=performance.now(),c=(a=i-r,Math.round(100*a)/100);return console.log("reducer process time:",c),o}),n,a)}},C=n(3),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=arguments.length>1?arguments[1]:void 0;return e(n)[a.type]?e(n)[a.type](n,a):n}},N=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(n){return n({type:e,value:t})}}},T=O((function(e){return{SETTINGS_TOGGLE_AUTO_SAVE:function(){return Object(C.a)({},e,{autoSave:!e.autoSave})},SETTINGS_TOGGLE_DARK_MODE:function(){return Object(C.a)({},e,{darkMode:!e.darkMode})},SETTINGS_TOGGLE_SAVE_CREATE_NEW:function(){return Object(C.a)({},e,{saveAndCreateNew:!e.saveAndCreateNew})}}})),S=n(12),y=n(2),j=function(e,t){return Object(C.a)({},e,{list:(n=Object(y.get)(e,"list",{}),a=t.value,Object(C.a)({},n,Object(S.a)({},a.uuid,a)))});var n,a},A=function(e,t){var n=e.find((function(e){return e===t})),a=!Object(y.isEmpty)(t);return!n&&a&&e.push(t),e},k=function(e,t){return Object(C.a)({},e,{list:Object(C.a)({},e.list,Object(S.a)({},t.value.uuid,Object(C.a)({},Object(y.get)(e.list,t.value.uuid,{content:"",title:"",isStarred:!1,isDraft:!0,tags:[]}),{uuid:t.value.uuid,isDraft:t.value.isDraft,tags:A(Object(y.get)(e.list,"".concat(t.value.uuid,".tags"),[]),t.value.tag)})))})},w=function(e,t){return Object(C.a)({},e,{list:Object(C.a)({},e.list,Object(S.a)({},t.value.uuid,Object(C.a)({},Object(y.get)(e.list,t.value.uuid,{content:"",title:"",isStarred:!1,isDraft:!0,tags:[]}),{uuid:t.value.uuid,isDraft:t.value.isDraft,tags:(n=Object(y.get)(e.list,"".concat(t.value.uuid,".tags"),[]),a=t.value.tag,n.filter((function(e){return e!==a})))})))});var n,a},D=function(e,t){return Object(C.a)({},e,{list:Object(C.a)({},e.list,Object(S.a)({},t.value.uuid,Object(C.a)({},Object(y.get)(e.list,t.value.uuid,{content:"",title:"",isStarred:!1,isDraft:!0,tags:[]}),{uuid:t.value.uuid,title:"",isDraft:t.value.isDraft,content:"",colour:"default",tags:[]})))})},I=function(e,t){return Object(C.a)({},e,{list:Object(C.a)({},(n=e.list,a=t.value.uuid,delete n[a],n))});var n,a},x=function(e,t){return Object(C.a)({},e,{list:Object(C.a)({},e.list,Object(S.a)({},t.value.uuid,Object(C.a)({},Object(y.get)(e.list,t.value.uuid,{content:"",title:"",isStarred:!1,isDraft:!0,tags:[]}),{uuid:t.value.uuid,title:t.value.title,isDraft:t.value.isDraft})))})},M=function(e,t){return Object(C.a)({},e,{list:Object(C.a)({},e.list,Object(S.a)({},t.value.uuid,Object(C.a)({},Object(y.get)(e.list,t.value.uuid,{content:"",title:"",isStarred:!1,isDraft:!0,tags:[]}),{uuid:t.value.uuid,content:t.value.content,isDraft:t.value.isDraft})))})},L=function(e,t){return Object(C.a)({},e,{list:Object(C.a)({},e.list,Object(S.a)({},t.value.uuid,Object(C.a)({},Object(y.get)(e.list,t.value.uuid,{content:"",title:"",isStarred:!1,isDraft:!0,tags:[]}),{uuid:t.value.uuid,colour:t.value.colour,isDraft:t.value.isDraft})))})},G=function(e,t){return Object(C.a)({},e,{list:Object(C.a)({},e.list,Object(S.a)({},t.value.uuid,Object(C.a)({},Object(y.get)(e.list,t.value.uuid,{content:"",title:"",isStarred:!1,isDraft:!0,tags:[]}),{uuid:t.value.uuid,isStarred:!Object(y.get)(e.list,t.value.uuid,!1).isStarred,isDraft:t.value.isDraft})))})},R=function(e,t){return Object(C.a)({},e,{list:Object(C.a)({},e.list,Object(S.a)({},t.value.uuid,Object(C.a)({},Object(y.get)(e.list,t.value.uuid,{content:"",title:"",isStarred:!1,isDraft:!0,tags:[]}),{isDraft:!1})))})},P=O((function(e,t){return{NOTE_CREATE:j,NOTE_CLEAR:D,NOTE_CHANGE_TITLE:x,NOTE_CHANGE_CONTENT:M,NOTE_TAG_ADD:k,NOTE_TAG_REMOVE:w,NOTE_CHANGE_COLOUR:L,NOTE_TOGGLE_STAR:G,NOTE_DELETE:I,NOTE_PUBLISH:R}}),{list:{}}),z=Object(v.c)({settings:T,notes:P,i18nState:l.i18nState}),V={key:"root",storage:_.a},B=Object(p.a)(V,z);var H=n(1),U=(n(73),n(74),n(6)),W=n(45),F=n.n(W),q=function(e,t){var n=t.t;return r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"no-javascript"},r.a.createElement("img",{src:F.a,alt:n("An illustration from Ivan Haidutski",{},"image credits")}),r.a.createElement("br",null),n("Page not found",{},"404 main text")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"/"},n("Go to home",{},"image credits"))))};q.contextTypes={t:H.func};var K=q,J=n(8),Y=n(24),$=n(25),Q=n(28),X=n(27),Z=n(5),ee=n(26),te=n(31),ne=n.n(te),ae=n(46),re=n(47),oe=n.n(re),ie=function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},ce=function(){return oe()({tablet:!0})},se=function(){var e=Object(ae.a)(ne.a.mark((function e(t){var n,a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,a=t.text,e.next=3,navigator.share({title:n,text:a,url:"/notes"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(e){return e},ue=function(e){return e.toLocaleLowerCase()},de=function(e){var t=e.items,n=e.term;return!!Object(y.isEmpty)(n)||t.some((function(e){return"string"===typeof e?ue(e).includes(ue(n)):fe({arr:e,term:n})}))},fe=function(e){var t=e.arr,n=e.term;return t.some((function(e){return de({items:[e],term:n})}))},me=(n(77),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onPressEnter,n=void 0===t?le:t,a=e.shouldClearAfterEnter,r=void 0!==a&&a,o=e.setInternalValue,i=void 0===o?le:o;return function(e){if("Enter"===e.key){try{n(e)}catch(t){}r&&i("")}return!0}}),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onChange,n=void 0===t?le:t,a=e.isInternalControl,r=void 0!==a&&a,o=e.setInternalValue,i=void 0===o?le:o;return function(e){r?i(e.target.value):n(e)}},ve=function(e){return!!e&&e},ge=function(e){var t=e.onPressEnter;return function(e){var t=e.onPressEnter,n=e.value;return ce()&&null!==t&&!Object(y.isEmpty)(n)}({onPressEnter:t,value:e.value})&&r.a.createElement("div",{onClick:t,className:"ti__input-confirm"},r.a.createElement(Z.a,{size:"20px"}))},pe=function(e){var t=e.id;ce()&&function(e){document.body.classList.add("keyboard-open"),Object(y.isEmpty)(e)||document.body.classList.add("field-".concat(e,"-open"))}(t)},Ee=function(e){var t=e.event,n=e.onPressEnter,a=e.setInternalValue,r=e.id;if(ce()){try{n(t)}catch(o){}a(""),function(e){document.body.classList.remove("keyboard-open"),Object(y.isEmpty)(e)||document.body.classList.remove("field-".concat(e,"-open"))}(r)}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=void 0===t?"":t,a=e.placeholder,o=void 0===a?"":a,i=e.isMultiLine,c=void 0!==i&&i,s=e.value,l=void 0===s?void 0:s,u=e.autoFocus,d=void 0!==u&&u,f=e.rows,m=void 0===f?1:f,h=e.size,v=void 0===h?"small":h,g=e.addClass,p=void 0===g?"":g,E=e.onChange,_=void 0===E?le:E,b=e.onPressEnter,C=void 0===b?null:b,O=e.shouldClearAfterEnter,N=void 0!==O&&O,T=e.IconElement,S=void 0===T?null:T,y="undefined"===typeof l,j=r.a.useState(""),A=Object(J.a)(j,2),k=A[0],w=A[1],D=function(){return c?r.a.createElement("textarea",{autoFocus:d,placeholder:o,rows:m,onFocus:function(){return pe({id:n})},onBlur:function(e){return Ee({event:e,id:n,onPressEnter:C,setInternalValue:w})},value:y?k:l,className:"ti__input ti__input--".concat(v),onKeyDown:me({onPressEnter:C,shouldClearAfterEnter:N,setInternalValue:w}),onChange:he({isInternalControl:y,setInternalValue:w,onChange:_})}):r.a.createElement("input",{autoFocus:d,placeholder:o,onFocus:function(){return pe({id:n})},onBlur:function(e){return Ee({event:e,onPressEnter:C,setInternalValue:w,id:n})},value:y?k:l,className:"ti__input ti__input--".concat(v),onKeyDown:me({onPressEnter:C,shouldClearAfterEnter:N,setInternalValue:w}),onChange:he({isInternalControl:y,setInternalValue:w,onChange:_})})};return r.a.createElement("div",{className:"ti ".concat(p)},ve(S),D(),ge({onPressEnter:C,value:k}))},be=n(14),Ce=(n(79),function(e){var t=e.tip,n=e.content;return!!t?r.a.createElement(be.Tooltip,{title:t,position:"bottom",trigger:"mouseenter"},n):n}),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.children,n=e.isActive,a=void 0!==n&&n,o=e.isRound,i=void 0!==o&&o,c=e.onClick,s=void 0===c?null:c,l=e.tip,u=void 0!==l&&l,d=e.addClass,f=void 0===d?"":d,m=r.a.createElement("i",{className:"icon icon__state--".concat(a?"active":"default"," ").concat(null!==s&&"icon__state--clickable","   ").concat(i&&"icon--round"," ").concat(f),onClick:s},i?t:Ce({content:t,tip:u}));return i?Ce({content:m,tip:u}):m},Ne=n(100),Te=(n(80),function(e){var t=e.componentID;return document.getElementById(t).offsetWidth-50<function(e){var t=document.getElementById(e).children,n=0;if(t.length>0)for(var a in t)n+=a.offsetWidth;return n}(t)}),Se=function(e){var t=e.showMore,n=e.showAllItems,a=e.translate,o=e.componentID,i=e.setShowAllItems;return n?r.a.createElement("div",{className:"chipdisplay__info",onClick:function(){return i(!1)}},a("Less",{},"collapse chips display to one line")):function(e){var t=e.showMore,n=e.componentID,a=e.setShowAllItems,o=e.translate,i=document.getElementById(n).offsetWidth,c=document.getElementById(n).children,s=c.length,l=0,u=0;c.forEach((function(e){var t=u+e.offsetWidth;i>t&&(u+=e.offsetWidth,l++)}));var d=s-l,f=t?r.a.createElement(be.Tooltip,{title:o("Show all tags",{},"link to display all tags added"),position:"bottom",trigger:"mouseenter"},"+",d):r.a.createElement(r.a.Fragment,null,"+",d);return d>0&&r.a.createElement("div",{className:"chipdisplay__info",onClick:function(){return t&&a(!0)}},f)}({showMore:t,componentID:o,setShowAllItems:i,translate:a})},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.children,n=e.width,o=void 0===n?"500px":n,i=e.showMore,c=void 0===i||i,s=e.addClass,l=void 0===s?"":s,u=e.translate,d=void 0===u?function(e){return e}:u,f=r.a.useState(!1),m=Object(J.a)(f,2),h=m[0],v=m[1],g=r.a.useState(Object(Ne.a)()),p=Object(J.a)(g,1),E=p[0],_=r.a.useState(!1),b=Object(J.a)(_,2),C=b[0],O=b[1];return Object(a.useEffect)((function(){!h&&Te({componentID:E,translate:d})&&v(!0)})),r.a.createElement("div",{id:E,className:"chipdisplay ".concat(l),style:{width:o,height:C?" auto":"35px"}},t,h&&Se({showMore:c,showAllItems:C,translate:d,componentID:E,setShowAllItems:O}))},je=(n(81),function(e){var t=e.translate,n=e.onRemove,a=t("Remove this tag",{},"Accessibility description for delete icon");return r.a.createElement(be.Tooltip,{title:a,position:"bottom",trigger:"mouseenter"},r.a.createElement("i",{className:"chip__icon animated fadeIn",onClick:n},r.a.createElement(Z.j,{size:"15px"})))}),Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.children,n=e.isRemovable,a=void 0!==n&&n,o=e.onRemove,i=void 0===o?function(){}:o,c=e.translate,s=void 0===c?function(e){return e}:c,l=r.a.useState(!1),u=Object(J.a)(l,2),d=u[0],f=u[1];return r.a.createElement("div",{className:"chip chip__state--".concat(d||ce()?"active":"default"),onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)}},t,(d||ce())&&a&&je({translate:s,onRemove:i}))},ke=["pink","salmon","yellow","lavanda","blue","ocean-blue","mint-green","olive-green"],we=function(e){var t=e.onClick,n=e.addClass,a=void 0===n?"":n,o=e.tip,i=void 0!==o&&o,c=e.colour,s=r.a.createElement("div",{className:"colour-switch__item  ".concat(a," ").concat(c,"-border"),onClick:function(){return t({colour:c})}});return!!i?r.a.createElement(be.Tooltip,{title:i,position:"bottom",trigger:"mouseenter"},s):s},De=(n(82),function(e){var t=e.setIsSelectorOpen,n=e.onChange;return function(e){t(!1),n(e)}}),Ie=function(e){e.translate;var t=e.onChange,n=e.setIsSelectorOpen;return r.a.createElement("div",{className:"colour-switch__items animated fadeIn"},ke.map((function(e){return r.a.createElement(we,{onClick:De({setIsSelectorOpen:n,onChange:t}),colour:e})})))},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selected,n=void 0===t?"default":t,a=e.addClass,o=void 0===a?"":a,i=e.onChange,c=void 0===i?function(){}:i,s=e.translate,l=void 0===s?function(e){return e}:s,u=r.a.useState(!1),d=Object(J.a)(u,2),f=d[0],m=d[1];return r.a.createElement("div",{className:"colour-switch ".concat(o)},f&&Ie({translate:l,onChange:c,setIsSelectorOpen:m}),r.a.createElement(we,{tip:l("Change note color",{},"link to display all tags added"),onClick:function(){return m(!f)},colour:n}))},Me={uuid:"",title:"",content:"",tags:[],colour:"default",scheduleOptions:[],isScheduled:!1,isPinned:!1,onSettings:le,onChangeTitle:le,onChangeContent:le,onChangeColour:le,onSchedule:le,onPin:le,onDelete:le,onInfo:le,onRemoveTag:le,onAddTag:le,onSaveAndClose:le,onClose:le,translate:le},Le=(n(83),function(e){Object(Q.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(Y.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).hot_keys={"shift+enter":{priority:1,handler:e.props.onSave}},e}return Object($.a)(n,[{key:"render",value:function(){var e=this.props,t=void 0===e?Me:e;return r.a.createElement("div",{className:"note-interface"},r.a.createElement("header",{className:"note-interface__header"},r.a.createElement(_e,{id:"title",key:"title",size:"big",value:t.title,onChange:t.onChangeTitle,addClass:"note-interface__header-input",placeholder:ce()?t.translate("Title","","Note title placeholder"):t.translate("Add your note title here","","Note title placeholder")}),r.a.createElement("button",{onClick:t.onClose,"aria-label":t.translate("Close this note","","button to return to all notes"),className:"note-interface__header-close"},r.a.createElement(Z.j,{size:"32px"}))),r.a.createElement("main",{className:"note-interface__main"},r.a.createElement("section",{className:"note-interface__main-tags"},r.a.createElement(_e,{id:"tag",key:"tags",size:"small",onPressEnter:t.onAddTag,shouldClearAfterEnter:!0,addClass:"note-interface__main-tags-input",placeholder:t.translate("Add tags","","Note title placeholder")}),r.a.createElement(ye,{width:"".concat(ce()?"100%":"calc(100% - 160px)"),addClass:"note-interface__main-tags-list"},function(e){var t=e.tags,n=e.onRemoveTag;return t.map((function(e,t){return r.a.createElement(Ae,{onRemove:function(){return n(e)},isRemovable:!0,key:t},e)}))}({tags:t.tags,onRemoveTag:t.onRemoveTag}))),r.a.createElement("section",{className:"note-interface__main-description"},r.a.createElement(_e,{id:"content",size:"medium",isMultiLine:!0,rows:ce()?5:10,value:t.content,onChange:t.onChangeContent,addClass:"note-interface__main-description-input",placeholder:ce()?t.translate("Note content","","Note title placeholder"):t.translate("Add your content here and press shift+enter to save to add and start a new","","Note title placeholder")}))),r.a.createElement("footer",{className:"note-interface__footer"},r.a.createElement("div",{className:"note-interface__footer-options"},r.a.createElement(xe,{onChange:t.onChangeColour,selected:t.colour,addClass:"note-interface__footer-option"}),r.a.createElement(Oe,{tip:t.translate("Star this note","","float button in add/edit interface"),isActive:t.isPinned,onClick:t.onPin,addClass:"note-interface__footer-option"},r.a.createElement(Z.h,{size:"22px"})),r.a.createElement(Oe,{tip:t.translate("Delete this note","","float button in add/edit interface"),onClick:function(){return t.onDelete(t.uuid)},addClass:"note-interface__footer-option"},r.a.createElement(Z.i,{size:"22px"})),!ce()&&r.a.createElement(Oe,{tip:t.translate("Show keyboard shortcuts","","float button in add/edit interface"),onClick:t.onInfo,addClass:"note-interface__footer-option"},r.a.createElement(Z.c,{size:"22px"})),ce()&&!!navigator.share&&r.a.createElement(Oe,{tip:t.translate("Share note","","float button in add/edit interface"),onClick:function(){return se({title:t.title,text:"".concat(t.title," --- ").concat(t.content)})},addClass:"note-interface__footer-option"},r.a.createElement(Z.g,{size:"22px"})),r.a.createElement(Oe,{tip:t.translate("Settings","","float button in add/edit interface"),onClick:t.onSettings,addClass:"note-interface__footer-option"},r.a.createElement(Z.f,{size:"22px"}))),function(e){var t=e.title,n=e.content;return!Object(y.isEmpty)(t)||!Object(y.isEmpty)(n)}({title:t.title,content:t.content})&&r.a.createElement("div",{className:"note-interface__footer-float animated fadeIn"},r.a.createElement(Oe,{tip:t.translate("Save and close","","float button in add/edit interface"),isRound:!0,onClick:t.onSaveAndClose},r.a.createElement(Z.a,{size:"44px"})))))}}]),n}(r.a.PureComponent)),Ge=Object(ee.hotkeys)(Le),Re={setSaveAndCreateNewToggle:le,setDarkModeToggle:le,setAutoSaveToggle:le,autoSave:!0,darkMode:"browser",saveAndCreateNew:!0},Pe={darkMode:!0,saveAndCreateNew:!0,autoSave:!0,onDarkMode:le,onSaveAndCreateNewToggle:le,onAutoSave:le,onClose:le,translate:le},ze=N("NOTE_CREATE"),Ve=N("NOTE_TAG_ADD"),Be=N("NOTE_TAG_REMOVE"),He=N("NOTE_CHANGE_TITLE"),Ue=N("NOTE_CHANGE_CONTENT"),We=N("NOTE_CLEAR"),Fe=N("NOTE_CHANGE_COLOUR"),qe=N("NOTE_TOGGLE_STAR"),Ke=N("NOTE_DELETE"),Je=N("NOTE_PUBLISH"),Ye=function(e){var t=e.saveAndCreateNew,n=e.changeUUID,a=e.publishNote,r=e.history;a({uuid:e.uuid}),t?n(Object(Ne.a)()):r.push("/")},$e=function(e){var t=e.saveAndCreateNew,n=e.deleteNote,a=e.uuid,r=e.history;t||n({uuid:a}),r.push("/")},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0,n=t.t,a=r.a.useState(Object(Ne.a)()),o=Object(J.a)(a,2),i=o[0],c=o[1],s=!e.autoSave,l={uuid:i,tags:[],title:"",colour:"default",content:"",isDraft:!e.autoSave,isStarred:!1},u=Object(y.get)(e.notes,i,l);return r.a.createElement(Ge,{isPinned:u.isStarred||!1,onPin:function(){return e.toggleStar({uuid:i,isDraft:s})},tags:u.tags||[],colour:u.colour||"default",onAddTag:function(t){return e.addTag({uuid:i,tag:t.target.value,isDraft:s})},onChangeColour:function(t){var n=t.colour;return e.changeColour({uuid:i,colour:n,isDraft:s})},onRemoveTag:function(t){return e.removeTag({uuid:i,tag:t})},title:u.title,content:u.content,onDelete:function(){return e.deleteNote({uuid:i})},onChangeTitle:function(t){return e.changeTitle({uuid:i,title:t.target.value,isDraft:s})},onChangeContent:function(t){return e.changeContent({uuid:i,content:t.target.value,isDraft:s})},onClose:function(){return $e({saveAndCreateNew:e.saveAndCreateNew,deleteNote:e.deleteNote,uuid:i,history:e.history})},onSaveAndClose:function(){return Ye({saveAndCreateNew:e.saveAndCreateNew,changeUUID:c,publishNote:e.publishNote,history:e.history,uuid:i})},onSettings:function(){return e.history.push("/settings")},translate:n,onInfo:function(){return e.history.push("/shortcuts")}})};Qe.contextTypes={t:H.func,history:H.shape({push:H.func.isRequired})};var Xe=Object(c.connect)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.notes,n=void 0===t?Me:t,a=e.settings,r=void 0===a?Re:a;return{autoSave:r.autoSave,saveAndCreateNew:r.saveAndCreateNew,notes:Object(y.get)(n,"list",[])}}),(function(e){return Object(v.b)({addNote:ze,addTag:Ve,removeTag:Be,changeColour:Fe,changeTitle:He,changeContent:Ue,deleteNote:Ke,toggleStar:qe,publishNote:Je},e)}))(Object(U.g)(Qe)),Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0,n=t.t,a=Object(U.f)(),o=a.uuid,i=!1,c={tags:[],title:"",colour:"default",content:"",isDraft:!e.autoSave,isStarred:!1},s=!!e.notes[o];s||e.history.push("/404");var l=Object(y.get)(e.notes,o,c);return r.a.createElement(Ge,{isPinned:l.isStarred||!1,onPin:function(){return e.toggleStar({uuid:o,isDraft:i})},tags:l.tags||[],colour:l.colour||"default",onAddTag:function(t){return e.addTag({uuid:o,tag:t.target.value,isDraft:i})},onChangeColour:function(t){var n=t.colour;return e.changeColour({uuid:o,colour:n,isDraft:i})},onRemoveTag:function(t){return e.removeTag({uuid:o,tag:t})},title:l.title,content:l.content,onDelete:function(){return e.deleteNote({uuid:o})&&e.history.push("/")},onChangeTitle:function(t){return e.changeTitle({uuid:o,title:t.target.value,isDraft:i})},onChangeContent:function(t){return e.changeContent({uuid:o,content:t.target.value,isDraft:i})},onClose:function(){return e.history.push("/")},onSaveAndClose:function(){return e.history.push("/")},onInfo:function(){return e.history.push("/shortcuts")},translate:n,onSettings:function(){return e.history.push("/settings")}})};Ze.contextTypes={t:H.func,history:H.shape({push:H.func.isRequired})};var et=Object(c.connect)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.notes,n=void 0===t?Me:t,a=e.settings,r=void 0===a?Re:a;return{autoSave:r.autoSave,notes:Object(y.get)(n,"list",[])}}),(function(e){return Object(v.b)({addNote:ze,addTag:Ve,removeTag:Be,changeColour:Fe,changeTitle:He,changeContent:Ue,clearNote:We,toggleStar:qe,deleteNote:Ke},e)}))(Object(U.g)(Ze)),tt={notes:[],searchTerm:"",isSearchMode:!1,onAdd:le,onSettings:le,onSearch:le},nt={notes:[],searchTerm:"",isSearchMode:!1,onOpenNote:le,onAdd:le,onSettings:le,onClearSearch:le,onSearch:le,translate:le},at=n(49),rt=n.n(at),ot=(n(85),function(e){var t=e.isStarred,n=e.dueDate,a=e.translate,o=!!n,i="".concat(a("Due",{},"Icon that indicates that the note is starred")," ").concat(it({dueDate:n}));return t||o?r.a.createElement("div",{className:"card__icons"},t&&r.a.createElement("div",{className:"card__icons__item"},r.a.createElement(be.Tooltip,{title:a("This note is starred",{},"Icon that indicates that the note is starred"),position:"bottom",trigger:"mouseenter"},r.a.createElement(Z.h,{size:"15px"}))),o&&r.a.createElement("div",{className:"card__icons__item"},r.a.createElement(be.Tooltip,{title:i,position:"bottom",trigger:"mouseenter"},r.a.createElement(Z.b,{size:"15px"})))):""}),it=function(e){var t=e.dueDate;return rt()(t).fromNow()},ct=function(e){var t=e.tags,n=e.width,a=e.translate;return t.length>0?r.a.createElement(ye,{addClass:"card__tags",showMore:!1,width:"calc(".concat(n," - 40px)"),translate:a},function(e){var t=e.tags,n=e.translate;return t.map((function(e){return r.a.createElement(Ae,{key:e,translate:n},e)}))}({tags:t,translate:a})):""},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,n=void 0===t?le:t,a=e.isStarred,o=void 0!==a&&a,i=e.title,c=void 0===i?"":i,s=e.content,l=void 0===s?"":s,u=e.tags,d=void 0===u?[]:u,f=e.dueDate,m=void 0===f?"":f,h=e.colour,v=void 0===h?"default":h,g=e.width,p=void 0===g?ce()?"100%":"300px":g,E=e.translate,_=void 0===E?function(e){return e}:E,b=r.a.useState(!1),C=Object(J.a)(b,2),O=C[0],N=C[1],T="default"!==v&&ke.includes(v),S=!!c,y=!!l;return r.a.createElement("dl",{onClick:n,className:"card card__state--".concat(O?"active":"default"),onMouseEnter:function(){return N(!0)},style:{paddingBottom:T&&"10px"},onMouseLeave:function(){return N(!1)}},S&&r.a.createElement("dt",{className:"card__title"},c),ot({isStarred:o,dueDate:m,translate:_}),y&&r.a.createElement("dd",{className:"card__content"},l),T&&r.a.createElement("div",{className:"card__colour ".concat(v,"-bg")}),ct({tags:d,width:p}))},lt=n(50),ut=n.n(lt),dt=n(51),ft=n.n(dt),mt=(n(86),function(e){var t=e.notes,n=e.onOpenNote;return t.map((function(e,t){return r.a.createElement(st,{onClick:function(){return n(e.uuid)},key:t,isStarred:e.isStarred,colour:e.colour,title:e.title,dueDate:e.dueDate,content:e.content,tags:e.tags})}))}),ht=function(e){var t=e.translate,n=e.searchTerm,a=e.onClearSearch;return r.a.createElement("div",{className:"notes-interface__header-search"},r.a.createElement("div",{className:"notes-interface__header-search-info"},t("Displaying only results to '{searchTerm}'",{searchTerm:n},"Notes interface"),!ce()&&r.a.createElement("button",{onClick:a},t("Clear search",{},"image credits"))))},vt=function(e){var t=e.translate,n=e.searchTerm,a=(e.isSearchMode,e.onAdd),o=e.onClearSearch;return Object(y.isEmpty)(n)?function(e){var t=e.translate,n=e.onAdd;return r.a.createElement("div",{className:"notes-interface__main-empty"},r.a.createElement("div",{className:"notes-interface__main-empty-info"},r.a.createElement("img",{src:ut.a,alt:t("An illustration from Ivan Haidutski",{},"image credits")}),r.a.createElement("br",null),t("You don't have notes yet",{},"Notes interface")," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:n},t("Create your first note",{},"image credits")," ")))}({translate:t,onAdd:a}):function(e){var t=e.translate,n=e.searchTerm,a=e.onClearSearch;return r.a.createElement("div",{className:"notes-interface__main-empty"},r.a.createElement("div",{className:"notes-interface__main-empty-info"},r.a.createElement("img",{src:ft.a,alt:t("An illustration from Ivan Haidutski",{},"image credits")}),r.a.createElement("br",null),t("No results for {searchTerm} ",{searchTerm:n},"Notes interface")," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:a},t("Clear search",{},"image credits"))))}({translate:t,searchTerm:n,onClearSearch:o})},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt;return r.a.createElement("div",{className:"notes-interface"},r.a.createElement("header",{className:"notes-interface__header ".concat(!Object(y.isEmpty)(e.searchTerm)&&"notes-interface__header--search-enabled")},r.a.createElement("h1",{className:"notes-interface__header-title"},e.translate("My notes","","page title")),r.a.createElement("div",{className:"notes-interface__header-options"},r.a.createElement("button",{onClick:e.onSearch,"aria-label":e.translate("Search notes","","button to return to all notes results"),className:"notes-interface__header-option"},r.a.createElement(Z.e,{size:"32px"})),r.a.createElement("button",{onClick:e.onSettings,"aria-label":e.translate("Settings","","button to return to all notes results"),className:"notes-interface__header-option"},r.a.createElement(Z.f,{size:"32px"}))),!Object(y.isEmpty)(e.searchTerm)&&ht({translate:e.translate,searchTerm:e.searchTerm,onClearSearch:e.onClearSearch})),r.a.createElement("main",{className:"notes-interface__main"},e.notes.length>0&&mt({notes:e.notes,onOpenNote:e.onOpenNote}),0===e.notes.length&&vt({translate:e.translate,searchTerm:e.searchTerm,onAdd:e.onAdd,onClearSearch:e.onClearSearch})),r.a.createElement("footer",{className:"note-interface__footer"},r.a.createElement("div",{className:"note-interface__footer-float"},r.a.createElement(Oe,{tip:e.translate("New note","","float button in add/edit interface"),isRound:!0,onClick:e.onAdd},r.a.createElement(Z.d,{size:"44px"})))))},pt=function(){return function(e){return e({type:"SETTINGS_TOGGLE_AUTO_SAVE"})}},Et=function(){return function(e){return e({type:"SETTINGS_TOGGLE_DARK_MODE"})}},_t=function(){return function(e){return e({type:"SETTINGS_TOGGLE_SAVE_CREATE_NEW"})}},bt=function(e){var t=e.notes,n=void 0===t?[]:t,a=e.searchTerm;return""===a?n:(n||[]).filter((function(e){var t=e.title,n=void 0===t?"":t,r=e.content,o=void 0===r?"":r,i=e.tags;return de({items:[n,o,void 0===i?[]:i],term:a})}))},Ct=function(e){return Object.keys(e).map((function(t){return e[t]})).filter((function(e){var t=e.isDraft;return!(void 0===t||t)})).sort((function(e,t){return e.isStarred-t.isStarred})).reverse()},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0,n=t.t;return r.a.createElement(gt,{onOpenNote:function(t){return e.history.push("/edit/".concat(t))},onSettings:function(){return e.history.push("/settings")},onSearch:function(){return e.history.push("/search")},onClearSearch:function(){return e.history.push("/")},onAdd:function(){return e.history.push("/new")},translate:n,searchTerm:e.searchTerm,notes:bt({notes:Ct(e.notes),searchTerm:e.searchTerm})})};Ot.contextTypes={t:H.func,history:H.shape({push:H.func.isRequired})};var Nt=Object(c.connect)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.notes,n=void 0===t?tt:t;return{notes:n.list}}),(function(e){return Object(v.b)({setAutoSaveToggle:pt,setDarkModeToggle:Et,setSaveAndCreateNewToggle:_t},e)}))(Object(U.g)(Ot)),Tt=function(){var e=Object(U.f)().searchTerm;return r.a.createElement(Nt,{searchTerm:e})},St={onSearch:le,onClose:le,translate:le},yt={history:le},jt=(n(87),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,t=r.a.useState(""),n=Object(J.a)(t,2),a=n[0],o=n[1];return r.a.createElement("div",{className:"search-interface"},r.a.createElement("header",{className:"search-interface__header"},r.a.createElement("button",{onClick:e.onClose,"aria-label":e.translate("Close this search","","button to return to all searches results"),className:"search-interface__header-close"},r.a.createElement(Z.j,{size:"32px"}))),r.a.createElement("main",{className:"search-interface__main"},r.a.createElement(_e,{size:"big",autoFocus:!0,value:a,onChange:function(e){return o(e.target.value)},onPressEnter:function(){return e.onSearch(a)},shouldClearAfterEnter:!0,addClass:"notes-interface__main-input",placeholder:ce()?e.translate("Search","","Notes title placeholder"):e.translate("Type what you're looking for and press enter","","Notes title placeholder")})),""!==a&&r.a.createElement("footer",{className:"search-interface__footer animated fadeIn"},r.a.createElement("div",{className:"search-interface__footer-float"},r.a.createElement(Oe,{tip:e.translate("Search","","float button in add/edit interface"),isRound:!0,onClick:function(){return e.onSearch(a)}},r.a.createElement(Z.a,{size:"44px"})))))}),At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0,n=t.t;return r.a.createElement(jt,{onSearch:function(t){return e.history.push("/search/".concat(t))},onClose:function(){return e.history.push("")},translate:n})};At.contextTypes={t:H.func,history:H.shape({push:H.func.isRequired})};var kt=Object(U.g)(At),wt=n(52),Dt=n.n(wt),It=(n(92),n(93),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.children,e.isActive),n=void 0!==t&&t,a=e.title,o=void 0===a?"":a,i=e.addClass,c=void 0===i?"":i,s=e.description,l=void 0===s?"":s,u=e.onToggle,d=void 0===u?function(){}:u;e.translate;return r.a.createElement("div",{className:"twd ".concat(c)},r.a.createElement("div",{className:"twd__title"},o),r.a.createElement("div",{className:"twd__description"},l),r.a.createElement("div",{className:"twd__button"},r.a.createElement(Dt.a,{defaultChecked:n,onClick:d,"aria-labelledby":o,icons:!1})))}),xt=(n(94),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe;return r.a.createElement("div",{className:"settings-interface"},r.a.createElement("header",{className:"settings-interface__header"},r.a.createElement("h1",{className:"shortcuts-interface__header-title"},e.translate("Settings","","page title")),r.a.createElement("button",{onClick:e.onClose,"aria-label":e.translate("Close this settings","","button to return to all settings results"),className:"settings-interface__header-close"},r.a.createElement(Z.j,{size:"32px"}))),r.a.createElement("main",{className:"settings-interface__main"},r.a.createElement(It,{isActive:e.darkMode,onToggle:e.onDarkMode,addClass:"settings-interface__main-item",title:e.translate("Dark mode","","Settings page"),description:e.translate("This mode is enabled by default when your browser is in dark mode, you can enable or disable it manually","","settings page")}),r.a.createElement(It,{isActive:e.saveAndCreateNew,onToggle:e.onSaveAndCreateNewToggle,addClass:"settings-interface__main-item",title:e.translate("Add new note by default","","Settings page"),description:e.translate("When you finish the current mode the application could create a new one or back to note list","","settings page")}),r.a.createElement(It,{isActive:e.autoSave,onToggle:e.onAutoSave,addClass:"settings-interface__main-item",title:e.translate("Auto save","","Settings page"),description:e.translate("The note that you didn't finish the creation could be saved automatically","","settings page")})))}),Mt=N("SETTINGS_TOGGLE_AUTO_SAVE"),Lt=N("SETTINGS_TOGGLE_DARK_MODE"),Gt=N("SETTINGS_TOGGLE_SAVE_CREATE_NEW"),Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0,n=t.t;return r.a.createElement(xt,{darkMode:"browser"===e.darkMode?ie():e.darkMode,saveAndCreateNew:e.saveAndCreateNew,autoSave:e.autoSave,onDarkMode:e.setDarkModeToggle,onSaveAndCreateNewToggle:e.setSaveAndCreateNewToggle,onAutoSave:e.setAutoSaveToggle,onClose:function(){return e.history.goBack()},translate:n})};Rt.contextTypes={t:H.func,history:H.shape({push:H.func.isRequired})};var Pt=Object(c.connect)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.settings,n=void 0===t?Re:t;return{autoSave:n.autoSave,darkMode:n.darkMode,saveAndCreateNew:n.saveAndCreateNew}}),(function(e){return Object(v.b)({setAutoSaveToggle:Mt,setDarkModeToggle:Lt,setSaveAndCreateNewToggle:Gt},e)}))(Object(U.g)(Rt)),zt=function(){return navigator.platform.toUpperCase().indexOf("MAC")>=0},Vt=(n(95),function(e){return e.keys.map((function(e){return r.a.createElement("kbd",{key:e,className:"ksi__key"},function(e){return"meta"===e?zt()?"command":"control":"alt"===e?zt()?"option":"alt":e}(e))}))}),Bt=function(e){var t=e.length;return e.map((function(e,n){return r.a.createElement(r.a.Fragment,{key:n},e,function(e){return e+1<t}(n)&&r.a.createElement("span",{className:"ksi__divisor"},"+"))}))},Ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keys,n=void 0===t?[]:t,a=e.description,o=void 0===a?"":a,i=e.addClass;return r.a.createElement("div",{className:"ksi ".concat(i)},Bt(Vt({keys:n}))," ",r.a.createElement("div",{className:"ksi__description"},o," "))},Ut=(n(96),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClose,n=void 0===t?le:t,a=e.translate,o=void 0===a?le:a;return r.a.createElement("div",{className:"shortcuts-interface"},r.a.createElement("header",{className:"shortcuts-interface__header"},r.a.createElement("h1",{class:"shortcuts-interface__header-title"},o("Shortcuts","","page title")),r.a.createElement(Oe,{onClick:n,tip:o("Close this shortcuts","","button to return to all shortcuts results"),addClass:"shortcuts-interface__header-close"},r.a.createElement(Z.j,{size:"32px"}))),r.a.createElement("main",{className:"shortcuts-interface__main"},r.a.createElement(Ht,{addClass:"shortcuts-interface__main-item",keys:["alt","n"],description:o("Create new note","","shortcut interface")}),r.a.createElement(Ht,{addClass:"shortcuts-interface__main-item",keys:["alt","p"],description:o("Open the settings page","","shortcut interface")}),r.a.createElement(Ht,{addClass:"shortcuts-interface__main-item",keys:["alt","h"],description:o("Open the shortcuts list","","shortcut interface")}),r.a.createElement(Ht,{addClass:"shortcuts-interface__main-item",keys:["alt","s"],description:o("Search note","","shortcut interface")}),r.a.createElement(Ht,{addClass:"shortcuts-interface__main-item",keys:["alt","a"],description:o("List all note","","shortcut interface")}),r.a.createElement(Ht,{addClass:"shortcuts-interface__main-item",keys:["shift","enter"],description:o("Save this note and add a new one","","shortcut interface")})))}),Wt=function(e,t){var n=t.t;return r.a.createElement(Ut,{onClose:function(){return e.history.goBack()},translate:n})};Wt.contextTypes={t:H.func,history:H.shape({push:H.func.isRequired})};var Ft=Object(U.g)(Wt),qt=function(){return r.a.createElement(U.c,null,r.a.createElement(U.a,{path:"/new",exact:!0},r.a.createElement(Xe,null)),r.a.createElement(U.a,{path:"/edit/:uuid"},r.a.createElement(et,null)),r.a.createElement(U.a,{path:"/search/",exact:!0},r.a.createElement(kt,null)),r.a.createElement(U.a,{path:"/search/:searchTerm",exact:!0},r.a.createElement(Tt,null)),r.a.createElement(U.a,{path:"/settings",exact:!0},r.a.createElement(Pt,null)),r.a.createElement(U.a,{path:"/shortcuts",exact:!0},r.a.createElement(Ft,null)),r.a.createElement(U.a,{path:"/",exact:!0},r.a.createElement(Nt,null)),r.a.createElement(U.a,{path:"*",exact:!0},r.a.createElement(K,null)))},Kt=n(53),Jt=document.body,Yt=function(e){var t=Object(c.useSelector)((function(e){return e.settings})).darkMode;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.darkMode,n=void 0===t?"browser":t,a="browser"===n?ie():n;Jt.classList.remove("dark-mode"),Jt.classList.remove("light-mode"),Jt.classList.add("".concat(a?"dark":"light","-mode"))}({darkMode:void 0===t?"browser":t}),Jt.classList.add(ce()?"mobile-tablet":"desktop"),function(){var e=function(e){return e.toLowerCase().split(" ").join("-")},t=Object(Kt.a)(),n=t.name,a=t.version,r=t.os;Jt.classList.add(e(n)),Jt.classList.add(e("".concat(n,"-").concat(a))),Jt.classList.add(e(r))}(),e.children},$t=function(e){Object(Q.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(Y.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).hot_keys={"alt+n":{priority:1,handler:function(){return e.props.history.push("/new")}},"alt+p":{priority:1,handler:function(){return e.props.history.push("/settings")}},"alt+s":{priority:1,handler:function(){return e.props.history.push("/search")}},"alt+a":{priority:1,handler:function(){return e.props.history.push("/")}},"alt+h":{priority:1,handler:function(){return e.props.history.push("/shortcuts")}}},e}return Object($.a)(n,[{key:"render",value:function(){return this.props.children}}]),n}(r.a.PureComponent),Qt=Object(U.g)(Object(ee.hotkeys)($t)),Xt=function(e,t){return r.a.createElement(Yt,null,r.a.createElement(Qt,null,r.a.createElement("div",{className:"App"},r.a.createElement(qt,null))))};Xt.contextTypes={t:H.func};var Zt=Xt;n(98),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var en=function(e){var t=[!1,g.a].filter(Boolean),n=[v.a.apply(void 0,Object(h.a)(t)),b,!1].filter(Boolean),a=v.d.apply(void 0,Object(h.a)(n)),r=Object(v.e)(B,e,a);return{store:r,persistor:Object(p.b)(r)}}(),tn=en.store,nn=en.persistor;i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.Provider,{store:tn},r.a.createElement(m.a,{loading:null,persistor:nn},r.a.createElement(u.a,{translations:{en:{"Hello world":"Testing translations II - The revenge"},options:{plural_rule:"n != 1",plural_number:"2"}},initialLang:f()(),fallbackLang:"en"},r.a.createElement(s.a,null,r.a.createElement(Zt,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.6a39e33c.chunk.js.map