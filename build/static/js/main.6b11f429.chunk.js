(this["webpackJsonpproject-iron-cooking"]=this["webpackJsonpproject-iron-cooking"]||[]).push([[0],{51:function(e,t,a){},62:function(e,t,a){},81:function(e,t,a){},87:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(27),i=a.n(r),l=a(14),o=a(12),j=a(109),d=(a(62),a(5)),u=a(114),b=a(4),h=a.n(b),m=a(8),p=a(10),x=a(9),O=a.n(x);var f=function(e){var t=Object(d.a)(e.state,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var t,c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://www.themealdb.com/api/json/v1/1/random.php");case 3:return t=e.sent,e.next=6,O.a.get("https://www.themealdb.com/api/json/v1/1/random.php");case 6:return c=e.sent,e.next=9,O.a.get("https://www.themealdb.com/api/json/v1/1/random.php");case 9:n=e.sent,s([].concat(Object(m.a)(a),[t.data.meals[0],c.data.meals[0],n.data.meals[0]])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)(c.Fragment,{})};a(81);var g=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{state:[a,s]}),Object(c.jsx)(u.a,{children:a.map((function(e){return Object(c.jsx)(u.a.Item,{children:Object(c.jsxs)(l.b,{to:"/meal/".concat(e.idMeal),children:[Object(c.jsx)("img",{className:"carouselImg mt-5",src:e.strMealThumb,alt:"Meal slide"}),Object(c.jsx)(u.a.Caption,{children:Object(c.jsx)("h3",{children:e.strMeal})})]})},e.idMeal)}))})]})};a(87);var v=function(e){return Object(c.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-5",children:Object(c.jsxs)("div",{className:"hovereffect",children:[Object(c.jsx)("img",{className:"image",src:e.image,alt:e.title}),Object(c.jsx)("div",{className:"overlay",children:Object(c.jsx)(l.b,{className:"info",to:"/".concat(e.type,"/").concat(e.id),children:e.title})})]})})},y=a(110);var w=function(){return Object(c.jsx)("div",{className:"spinner-border",role:"status",children:Object(c.jsx)("span",{class:"sr-only",children:"Loading..."})})};var N=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://www.themealdb.com/api/json/v1/1/categories.php");case 3:t=e.sent,s(Object(m.a)(t.data.categories)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"text-center mt-4 ",children:"Categories"}),Object(c.jsx)("p",{className:"text-center",children:"Pasta? Vegan? Maybe some Dessert? You can find anything here."}),Object(c.jsxs)(j.a,{fluid:!0,children:[Object(c.jsxs)(y.a,{className:"d-flex justify-content-around ",children:[console.log(a),0===a.length?Object(c.jsx)(w,{}):a.filter((function(e,t){return t<8})).map((function(e){return Object(c.jsx)(v,{id:encodeURI(e.strCategory),title:e.strCategory,type:"categories",image:e.strCategoryThumb},e.idCategory)}))]}),Object(c.jsx)(y.a,{className:"d-flex justify-content-end mt-4 mr-5",children:Object(c.jsx)(l.b,{className:"btn btn-primary mt-2 ",to:"/categories",children:"See all categories"})})]})]})};var k=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");case 3:t=e.sent,s(Object(m.a)(t.data.meals)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"text-center mt-4 ",children:"Ingredients "}),Object(c.jsxs)("p",{className:"text-center",children:["Ever wondered about what can you do with Pickle Juice? ",Object(c.jsx)("br",{}),"Of course you did. Here you can find recipes for any ingredient that you want."]}),Object(c.jsxs)(j.a,{className:"",fluid:!0,children:[Object(c.jsxs)(y.a,{className:"d-flex justify-content-around ",children:[console.log(a),0===a.length?Object(c.jsx)(w,{}):a.filter((function(e,t){return t<8})).map((function(e){return Object(c.jsx)(v,{id:encodeURI(e.strIngredient),type:"ingredients",title:e.strIngredient,image:"https://www.themealdb.com/images/ingredients/".concat(e.strIngredient,".png")},e.idIngredient)}))]}),Object(c.jsx)(y.a,{className:"d-flex justify-content-end mt-4 mr-5",children:Object(c.jsx)(l.b,{className:"btn btn-primary mt-2 ",to:"/ingredients",children:"See all ingredients"})})]})]})};var M=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"text-center mt-4 pt-3",children:"You got time? We got the recipe!"}),Object(c.jsx)("h5",{className:"text-center  pt-3",children:"Start a new adventure today with almost 300 different meals for you to experience"}),Object(c.jsx)(g,{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{class:"dropdown-divider"}),Object(c.jsx)(N,{}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{class:"dropdown-divider"}),Object(c.jsx)(k,{})]})},S=a(115),I=a(113);a(51);var C=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],s=t[1],r=Object(o.f)();return Object(c.jsxs)("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),r.push("/search/".concat(a))},children:[Object(c.jsx)("input",{type:"text",className:"inputColor form-control mb-2 mr-sm-2",id:"inlineFormInputName2",placeholder:"Search",value:a,onChange:function(e){s(e.currentTarget.value)}}),Object(c.jsx)("button",{type:"submit",className:"btn  mb-2 btn-outline-danger",children:"Search"})]})};var T=function(){return Object(c.jsx)("header",{children:Object(c.jsxs)(S.a,{className:"navbar-dark bg-dark",expand:"lg",children:[Object(c.jsx)(S.a.Brand,{href:"/",children:"WeFork!"}),Object(c.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsxs)(S.a.Collapse,{id:"basic-navbar-nav",children:[Object(c.jsxs)(I.a,{className:"mr-auto navbar-dark ",children:[Object(c.jsx)(I.a.Link,{href:"/categories",children:"Categories"}),Object(c.jsx)(I.a.Link,{href:"/ingredients",children:"Ingredients"}),Object(c.jsx)(I.a.Link,{href:"/cuisines",children:"Cuisines"}),Object(c.jsx)(I.a.Link,{href:"/searchbyletter/A",children:"A to Z"}),Object(c.jsx)(I.a.Link,{href:"/favorites",children:"Favorites"}),Object(c.jsx)(I.a.Link,{href:"/aboutus",children:"About"})]}),Object(c.jsx)(C,{})]})]})})};a(91);var E=function(){return Object(c.jsxs)("footer",{className:"bg-dark mt-5 p-1 d-flex justify-content-between align-items-center",children:[Object(c.jsxs)("div",{className:"col-lg-2 col-md-4 col-xs-6 d-flex flex-column justify-content-start",children:[Object(c.jsx)("small",{className:"text-muted",children:"Powered by"}),Object(c.jsx)("img",{src:"https://www.themealdb.com/images/logo-small.png"})]}),Object(c.jsx)("div",{className:"col-lg-2 col-md-4 col-xs-6",children:Object(c.jsx)("img",{className:"footer",src:"https://media4.giphy.com/media/h8HgkqabhYyq8iRSp0/giphy.gif?cid=6c09b952c13f4f329e6b75650e03d12ad9c5ddb0813ae242&rid=giphy.gif"})})]})};var A=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://www.themealdb.com/api/json/v1/1/categories.php");case 3:t=e.sent,s(Object(m.a)(t.data.categories)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("div",{className:"min-height90",children:[Object(c.jsx)("h3",{className:"ml-3 mt-3 pt-4",children:"All Categories"}),Object(c.jsx)(j.a,{className:"",fluid:!0,children:Object(c.jsx)(y.a,{className:"d-flex justify-content-around ",children:0===a.length?Object(c.jsx)(w,{}):a.map((function(e){return Object(c.jsx)(v,{id:encodeURI(e.strCategory),type:"categories",title:e.strCategory,image:e.strCategoryThumb},e.idCategory)}))})})]})},F=a(55),L=(a(92),a(111)),R=a(112);var Y=function(e){var t=[];localStorage.hasOwnProperty("favorites")&&(t=JSON.parse(localStorage.getItem("favorites")));var a=Object(n.useState)(t),s=Object(d.a)(a,2),r=s[0],i=s[1];console.log(r);var o=Object(n.useState)({idMeal:0,strMeal:"",strCategory:"",strArea:"",strInstructions:"",strMealThumb:"",strTags:"",strYoutube:""}),j=Object(d.a)(o,2),u=j[0],b=j[1],x=Object(n.useState)(!1),f=Object(d.a)(x,2),g=f[0],v=f[1];function y(e){if(g){var t=Object(m.a)(r);t.splice(t.findIndex((function(e){return e.idMeal===u.idMeal})),1),i(Object(m.a)(t))}else i([].concat(Object(m.a)(r),[{idMeal:u.idMeal,strMeal:u.strMeal,strMealThumb:u.strMealThumb}]));v(!g)}Object(n.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(r))}),[r]),Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(e.match.params.id));case 3:a=t.sent,b(Object(F.a)({},a.data.meals[0])),v(r.map((function(e){return e.idMeal})).includes(e.match.params.id)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var w=Object(m.a)(new Array(20));return Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{className:"headerImg",src:u.strMealThumb,alt:"headimg"}),Object(c.jsx)("h1",{children:u.strMeal}),Object(c.jsx)("h3",{children:"Instructions"}),Object(c.jsx)("p",{children:u.strInstructions}),Object(c.jsx)("h3",{children:"Ingredients"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-6",children:Object(c.jsx)("ul",{children:w.map((function(e,t){return u["strIngredient".concat(t)]?Object(c.jsxs)("li",{children:[u["strIngredient".concat(t)]," - ",u["strMeasure".concat(t)]]}):Object(c.jsx)(c.Fragment,{})}))})}),Object(c.jsxs)("div",{className:"col-lg-6",children:[g?Object(c.jsx)(L.a,{onClick:y}):Object(c.jsx)(R.a,{onClick:y}),Object(c.jsx)("h3",{children:Object(c.jsxs)(l.b,{to:"/categories/".concat(u.strCategory),children:["See more ",u.strCategory,"'s meals"]})}),Object(c.jsx)("h3",{children:Object(c.jsxs)(l.b,{to:"/cuisines/".concat(u.strArea),children:["See more from ",u.strArea," cuisine"]})})]})]})]})};var P=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(e.match.params.id));case 3:a=t.sent,console.log(a.data.meals),r(Object(m.a)(a.data.meals)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(c.jsxs)("div",{className:"min-height90",children:[Object(c.jsx)("h3",{className:"ml-3 mt-3 pt-4",children:e.match.params.id}),Object(c.jsx)(j.a,{className:"",fluid:!0,children:Object(c.jsx)(y.a,{className:"d-flex justify-content-around ",children:0===s.length?Object(c.jsx)(w,{}):s.map((function(e){return Object(c.jsx)(v,{id:e.idMeal,type:"meal",title:e.strMeal,image:e.strMealThumb},e.idMeal)}))})})]})};var q=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get(" https://www.themealdb.com/api/json/v1/1/list.php?i=list");case 3:t=e.sent,s(Object(m.a)(t.data.meals)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("div",{className:"min-height90",children:[Object(c.jsx)("h3",{className:"ml-3 mt-3 pt-4",children:"Choose your ingredient"}),Object(c.jsx)(j.a,{className:"",fluid:!0,children:Object(c.jsx)(y.a,{className:"d-flex justify-content-around ",children:0===a.length?Object(c.jsx)(w,{}):a.map((function(e){return Object(c.jsx)(v,{id:encodeURI(e.strIngredient),type:"ingredients",title:e.strIngredient,image:"https://www.themealdb.com/images/ingredients/".concat(e.strIngredient,".png")},e.idIngredient)}))})})]})};var J=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=".concat(encodeURI(e.match.params.title)));case 3:a=t.sent,r(Object(m.a)(a.data.meals)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),console.log(s),Object(c.jsxs)("div",{className:"min-height90",children:[Object(c.jsx)("h3",{className:"ml-3 mt-3 pt-4",children:e.match.params.title}),Object(c.jsx)(j.a,{className:"",fluid:!0,children:Object(c.jsx)(y.a,{className:"d-flex justify-content-around ",children:0===s.length?Object(c.jsx)(w,{}):s.map((function(e){return Object(c.jsx)(v,{id:e.idMeal,type:"meal",title:e.strMeal,image:e.strMealThumb},e.idMeal)}))})})]})};var U=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(!0),l=Object(d.a)(i,2),o=l[0],u=l[1];return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,O.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e.match.params.querystring));case 4:(a=t.sent).data.meals?r(Object(m.a)(a.data.meals)):r(null),u(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(c.jsxs)("div",{className:"min-height90",children:[Object(c.jsx)("h3",{className:"ml-3 mt-3 pt-4",children:"Search Result"}),Object(c.jsx)(j.a,{className:"",fluid:!0,children:Object(c.jsxs)(y.a,{className:"d-flex justify-content-around ",children:[o?Object(c.jsx)(w,{}):Object(c.jsx)(c.Fragment,{}),s?s.map((function(e){return Object(c.jsx)(v,{id:e.idMeal,type:"meal",title:e.strMeal,image:e.strMealThumb},e.idMeal)})):Object(c.jsx)("p",{children:"Not found!"})]})})]})};a(93);var W=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");case 3:t=e.sent,s(Object(m.a)(t.data.meals)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("div",{className:"min-height90",children:[Object(c.jsx)("h3",{className:"ml-3 mt-3 pt-4",children:"All Cuisines"}),Object(c.jsx)(j.a,{className:"",fluid:!0,children:Object(c.jsx)(y.a,{className:"d-flex justify-content-around   ",children:0===a.length?Object(c.jsx)(w,{}):a.filter((function(e){return"Unknown"!==e.strArea})).map((function(e){return Object(c.jsx)(v,{id:e.strArea,type:"cuisines",title:e.strArea,image:"images/countries/".concat(e.strArea.toLowerCase(),".png")},e.strArea)}))})})]})},B=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];var D=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get(" https://www.themealdb.com/api/json/v1/1/search.php?f=".concat(e.match.params.letter));case 3:a=t.sent,r(Object(m.a)(a.data.meals)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.match.params.letter]),Object(c.jsxs)("div",{className:"min-height90",children:[Object(c.jsx)("h3",{className:"mt-4 mb-4",children:"Choose a letter "}),Object(c.jsx)("nav",{"aria-label":"breadcrumb",children:Object(c.jsx)("ol",{className:"breadcrumb bg-secondary",children:B.map((function(e,t){return Object(c.jsx)("li",{className:"breadcrumb-item active ","aria-current":"page",children:Object(c.jsx)(l.b,{to:"/searchbyletter/".concat(e),children:e})},t)}))})}),Object(c.jsx)(j.a,{className:"",fluid:!0,children:Object(c.jsx)(y.a,{className:"d-flex justify-content-around ",children:0===s.length?Object(c.jsx)(w,{}):s.map((function(e){return Object(c.jsx)(v,{id:e.idMeal,type:"meal",title:e.strMeal,image:e.strMealThumb},e.idMeal)}))})})]})};var H=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=".concat(e.match.params.area));case 3:a=t.sent,r(Object(m.a)(a.data.meals)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(c.jsxs)("div",{className:"min-height90",children:[Object(c.jsx)("h3",{className:"ml-3 mt-3 pt-4",children:e.match.params.id}),Object(c.jsx)(j.a,{className:"",fluid:!0,children:Object(c.jsx)(y.a,{className:"d-flex justify-content-around ",children:0===s.length?Object(c.jsx)(w,{}):s.map((function(e){return Object(c.jsx)(v,{id:e.idMeal,type:"Meal",title:e.strMeal,image:e.strMealThumb},e.idMeal)}))})})]})};var V=function(){var e=[];localStorage.hasOwnProperty("favorites")&&(e=JSON.parse(localStorage.getItem("favorites")));var t=Object(n.useState)(e),a=Object(d.a)(t,2),s=a[0];return a[1],Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"mt-4 mb-2",children:"Favorites"}),Object(c.jsx)(j.a,{className:"min-height90",fluid:!0,children:Object(c.jsx)(y.a,{className:"d-flex justify-content-around ",children:0===s.length?Object(c.jsx)("p",{children:"Not found!"}):s.map((function(e){return Object(c.jsx)(v,{id:e.idMeal,type:"meal",title:e.strMeal,image:e.strMealThumb},e.idMeal)}))})})]})};var Z=function(){return Object(c.jsxs)(j.a,{className:"bg-dark shadow-lg mt-5 mb-5",children:[Object(c.jsxs)(y.a,{className:"d-flex justify-content-center",children:[Object(c.jsx)("h1",{className:"mt-5 text-danger mb-5",children:"You got time? We got the recipe!"}),Object(c.jsxs)("div",{classname:"mt-5 w-75",children:[Object(c.jsx)("p",{className:"text-muted text-center",children:"WeFork! was created so you can have fun! Ever wondered about what people eat in Egypt? We got you."}),Object(c.jsx)("p",{className:"text-muted text-center",children:'Are you a fan of meals starting with "T"? Yap, we got you.'}),Object(c.jsx)("p",{className:"text-muted text-center",children:"Told someone that you like, that you REEALY LOVE lentils and now you have to cook for that special someone?"}),Object(c.jsx)("p",{className:"text-muted text-center",children:"You know the drill, we got you!"})]})]}),Object(c.jsxs)(y.a,{className:"d-flex justify-content-around mt-5",children:[Object(c.jsxs)("div",{className:"col-lg-3",children:[Object(c.jsx)("h3",{className:"mb-0 text-muted",children:"\u201cWeFork! changed our lives\u201d"}),Object(c.jsxs)("footer",{className:"blockquote-footer",children:["Creators",Object(c.jsx)("cite",{title:"Source Title"})]})]}),Object(c.jsxs)("div",{className:"col-lg-3",children:[Object(c.jsx)("h3",{className:"mb-0 text-muted",children:"\u201cMagnifique\u201d"}),Object(c.jsxs)("footer",{className:"blockquote-footer",children:["That weird Ratatouille mouse",Object(c.jsx)("cite",{title:"Source Title"})]})]})]}),Object(c.jsx)(y.a,{className:"d-flex justify-content-around mt-5 mb-5",children:Object(c.jsxs)("div",{className:"bottom contact text-center ",children:[Object(c.jsx)("h2",{className:"text-danger ",children:"Contact the creators"}),Object(c.jsx)("p",{className:"text-muted",children:"guilherme.tretow@gmail.com"}),Object(c.jsx)("p",{className:"text-muted",children:"rodrigomatosrj@gmail.com"})]})})]})};a(94);var G=function(){return Object(c.jsxs)(l.a,{className:"font",children:[Object(c.jsx)(T,{}),Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:M}),Object(c.jsx)(o.a,{exact:!0,path:"/aboutus",component:Z}),Object(c.jsx)(o.a,{exact:!0,path:"/meal/:id",component:Y}),Object(c.jsx)(o.a,{exact:!0,path:"/categories",component:A}),Object(c.jsx)(o.a,{exact:!0,path:"/categories/:id",component:P}),Object(c.jsx)(o.a,{exact:!0,path:"/ingredients/:title",component:J}),Object(c.jsx)(o.a,{exact:!0,path:"/ingredients",component:q}),Object(c.jsx)(o.a,{exact:!0,path:"/search/:querystring",component:U}),Object(c.jsx)(o.a,{exact:!0,path:"/cuisines",component:W}),Object(c.jsx)(o.a,{exact:!0,path:"/cuisines/:area",component:H}),Object(c.jsx)(o.a,{exact:!0,path:"/searchbyletter",component:D}),Object(c.jsx)(o.a,{exact:!0,path:"/searchbyletter/:letter",component:D}),Object(c.jsx)(o.a,{exact:!0,path:"/favorites",component:V})]})}),Object(c.jsx)(E,{})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,116)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(G,{})}),document.getElementById("root")),K()}},[[95,1,2]]]);
//# sourceMappingURL=main.6b11f429.chunk.js.map