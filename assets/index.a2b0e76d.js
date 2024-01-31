import{j as e,r as i,a as n,C as k,b as w,S as L,c as P,L as M,d as A,T as O,F,R as E,e as T}from"./vendor.5e774553.js";const _=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};_();const I=({children:t,tipo:a})=>e("div",{className:`alerta ${a}`,children:t}),$=({presupuesto:t,setPresupuesto:a,setIsValidPresupuesto:r})=>{const[l,o]=i.exports.useState("");return e("div",{className:"contenedor-presupuesto contenedor sombra",children:n("form",{onSubmit:d=>{if(d.preventDefault(),!t||t<0){o("No es un presupuesto v\xE1lido");return}o(""),r(!0)},className:"formulario",children:[n("div",{className:"campo",children:[e("label",{children:"Definir Presupuesto"}),e("input",{className:"nuevo-presupuesto",type:"number",placeholder:"A\xF1ade tu Presupuesto",value:t,onChange:d=>a(Number(d.target.value))})]}),e("input",{type:"submit",value:"A\xF1adir"}),l&&e(I,{tipo:"error",children:l})]})})};const B=({gastos:t,setGastos:a,presupuesto:r,setPresupuesto:l,setIsValidPresupuesto:o})=>{const[s,d]=i.exports.useState(10),[u,v]=i.exports.useState(0),[p,f]=i.exports.useState(0);i.exports.useEffect(()=>{const g=t.reduce((x,C)=>C.cantidad+x,0),S=r-g,N=((r-S)/r*100).toFixed(2);v(S),f(g),setTimeout(()=>{d(N)},1500)},[t]);const h=g=>g.toLocaleString("en-US",{style:"currency",currency:"USD"}),m=()=>{confirm("\xBFDeseas reiniciar presupuesto y gastos?")&&(a([]),l(0),o(!1))};return n("div",{className:"contenedor-presupuesto contenedor sombra dos-columnas",children:[e("div",{children:e(k,{styles:w({pathColor:s>100?"#DC2626":"#3B82F6",trailColor:"#F5F5F5",textColor:s>100?"#DC2626":"#3B82F6"}),value:s,text:`${s}% Gastado`})}),n("div",{className:"contenido-presupuesto",children:[e("button",{className:"reset-app",type:"button",onClick:m,children:"Resetear App"}),n("p",{children:[e("span",{children:"Presupuesto: "}),h(r)]}),n("p",{className:`${u<0?"negativo":""}`,children:[e("span",{children:"Disponible: "}),h(u)]}),n("p",{children:[e("span",{children:"Gastado: "}),h(p)]})]})]})},R=({gastos:t,setGastos:a,presupuesto:r,setPresupuesto:l,isValidPresupuesto:o,setIsValidPresupuesto:s})=>n("header",{children:[e("h1",{children:"Planificador de Gastos"}),o?e(B,{gastos:t,setGastos:a,presupuesto:r,setPresupuesto:l,setIsValidPresupuesto:s}):e($,{presupuesto:r,setPresupuesto:l,setIsValidPresupuesto:s})]}),H=({filtro:t,setFiltro:a})=>e("div",{className:"filtros sombra contenedor",children:e("form",{children:n("div",{className:"campo",children:[e("label",{children:"Filtrar Gastos"}),n("select",{value:t,onChange:r=>a(r.target.value),children:[e("option",{value:"",children:"-- Todas las Categor\xEDas --"}),e("option",{value:"ahorro",children:"Ahorro"}),e("option",{value:"comida",children:"Comida"}),e("option",{value:"casa",children:"Casa"}),e("option",{value:"gastos",children:"Gastos Varios"}),e("option",{value:"ocio",children:"Ocio"}),e("option",{value:"salud",children:"Salud"}),e("option",{value:"suscripciones",children:"Suscripciones"})]})]})})});const V=()=>{const t=Math.random().toString(36).substr(2),a=Date.now().toString(36);return t+a},z=t=>{const a=new Date(t),r={year:"numeric",month:"long",day:"2-digit"};return a.toLocaleDateString("es-ES",r)};var J="https://CrowSkin.github.io/controlpresupuesto/assets/icono_ahorro.ff2959d3.svg",U="https://CrowSkin.github.io/controlpresupuesto/assets/icono_casa.1170ce11.svg",q="https://CrowSkin.github.io/controlpresupuesto/assets/icono_comida.db0a9016.svg",K="https://CrowSkin.github.io/controlpresupuesto/assets/icono_gastos.e6dea3b0.svg",Q="https://CrowSkin.github.io/controlpresupuesto/assets/icono_ocio.ad5d0e9e.svg",W="https://CrowSkin.github.io/controlpresupuesto/assets/icono_salud.41ba3136.svg",X="https://CrowSkin.github.io/controlpresupuesto/assets/icono_suscripciones.97f04dc8.svg";const Y={ahorro:J,comida:q,casa:U,gastos:K,ocio:Q,salud:W,suscripciones:X},D=({gasto:t,setGastoEditar:a,eliminarGasto:r})=>{const{categoria:l,nombre:o,cantidad:s,id:d,fecha:u}=t,v=()=>e(M,{children:e(A,{onClick:()=>a(t),children:"Editar"})}),p=()=>e(O,{children:e(A,{onClick:()=>r(d),destructive:!0,children:"Eliminar"})});return e(L,{children:e(P,{leadingActions:v(),trailingActions:p(),children:n("div",{className:"gasto sombra",children:[n("div",{className:"contenido-gasto",children:[e("img",{src:Y[l],alt:"Icono Gasto"}),n("div",{className:"descripcion-gasto",children:[e("p",{className:"categoria",children:l}),e("p",{className:"nombre-gasto",children:o}),n("p",{className:"fecha-gasto",children:["Agregado el: ","",e("span",{children:z(u)})]})]})]}),n("p",{className:"cantidad-gasto",children:["$",s]})]})})})},Z=({gastos:t,setGastoEditar:a,eliminarGasto:r,filtro:l,gastosFiltrados:o})=>e("div",{className:"listado-gastos contenedor",children:l?n(F,{children:[e("h2",{children:o.length?"Gastos":"No Hay Gastos en esta categor\xEDa"}),o.map(s=>e(D,{gasto:s,setGastoEditar:a,eliminarGasto:r},s.id))]}):n(F,{children:[e("h2",{children:t.length?"Gastos":"No Hay Gastos a\xFAn"}),t.map(s=>e(D,{gasto:s,setGastoEditar:a,eliminarGasto:r},s.id))]})});var ee="https://CrowSkin.github.io/controlpresupuesto/assets/cerrar.ab3aac92.svg";const oe=({setModal:t,animarModal:a,setAnimarModal:r,guardarGasto:l,gastoEditar:o,setGastoEditar:s})=>{const[d,u]=i.exports.useState(""),[v,p]=i.exports.useState(""),[f,h]=i.exports.useState(""),[m,g]=i.exports.useState(""),[S,N]=i.exports.useState(""),[x,C]=i.exports.useState("");return i.exports.useEffect(()=>{Object.keys(o).length>0&&(p(o.nombre),h(o.cantidad),g(o.categoria),C(o.id),N(o.fecha))},[]),n("div",{className:"modal",children:[e("div",{className:"cerrar-modal",children:e("img",{src:ee,alt:"cerrar modal",onClick:()=>{r(!1),s({}),setTimeout(()=>{t(!1)},500)}})}),n("form",{onSubmit:c=>{if(c.preventDefault(),[v,f,m].includes("")){u("Todos los campos son obligatorios"),setTimeout(()=>{u("")},3e3);return}l({nombre:v,cantidad:f,categoria:m,id:x,fecha:S})},className:`formulario ${a?"animar":"cerrar"}`,children:[e("legend",{children:o.nombre?"Editar Gasto":"Nuevo Gasto"}),d&&e(I,{tipo:"error",children:d}),n("div",{className:"campo",children:[e("label",{htmlFor:"nombre",children:"Nombre Gasto"}),e("input",{id:"nombre",type:"text",placeholder:"A\xF1ade el Nombre del Gasto",value:v,onChange:c=>p(c.target.value)})]}),n("div",{className:"campo",children:[e("label",{htmlFor:"cantidad",children:"Cantidad"}),e("input",{id:"cantidad",type:"number",placeholder:"A\xF1ade La cantidad del gasto: ej. 300",value:f,onChange:c=>h(Number(c.target.value))})]}),n("div",{className:"campo",children:[e("label",{htmlFor:"categoria",children:"Categor\xEDa"}),n("select",{id:"categoria",value:m,onChange:c=>g(c.target.value),children:[e("option",{value:"",children:"-- Seleccione --"}),e("option",{value:"ahorro",children:"Ahorro"}),e("option",{value:"comida",children:"Comida"}),e("option",{value:"casa",children:"Casa"}),e("option",{value:"gastos",children:"Gastos Varios"}),e("option",{value:"ocio",children:"Ocio"}),e("option",{value:"salud",children:"Salud"}),e("option",{value:"suscripciones",children:"Suscripciones"})]})]}),e("input",{type:"submit",value:o.nombre?"Guardar Cambios":"A\xF1adir Gasto"})]})]})};var te="https://CrowSkin.github.io/controlpresupuesto/assets/nuevo-gasto.3ab385ce.svg";function se(){var G;const[t,a]=i.exports.useState(localStorage.getItem("gastos")?JSON.parse(localStorage.getItem("gastos")):[]),[r,l]=i.exports.useState((G=Number(localStorage.getItem("presupuesto")))!=null?G:0),[o,s]=i.exports.useState(!1),[d,u]=i.exports.useState(!1),[v,p]=i.exports.useState(!1),[f,h]=i.exports.useState({}),[m,g]=i.exports.useState(""),[S,N]=i.exports.useState([]);return i.exports.useEffect(()=>{Object.keys(f).length>0&&(u(!0),setTimeout(()=>{p(!0)},500))},[f]),i.exports.useEffect(()=>{localStorage.setItem("presupuesto",r!=null?r:0)},[r]),i.exports.useEffect(()=>{var c;localStorage.setItem("gastos",(c=JSON.stringify(t))!=null?c:[])},[t]),i.exports.useEffect(()=>{if(m){const c=t.filter(b=>b.categoria===m);N(c)}},[m]),i.exports.useEffect(()=>{var b;((b=Number(localStorage.getItem("presupuesto")))!=null?b:0)>0&&s(!0)},[]),n("div",{className:d?"fijar":"",children:[e(R,{gastos:t,setGastos:a,presupuesto:r,setPresupuesto:l,isValidPresupuesto:o,setIsValidPresupuesto:s}),o&&n(F,{children:[n("main",{children:[e(H,{filtro:m,setFiltro:g}),e(Z,{gastos:t,setGastoEditar:h,eliminarGasto:c=>{const b=t.filter(y=>y.id!==c);a(b)},filtro:m,gastosFiltrados:S})]}),e("div",{className:"nuevo-gasto",children:e("img",{src:te,alt:"icono nuevo gasto",onClick:()=>{u(!0),h({}),setTimeout(()=>{p(!0)},500)}})})]}),d&&e(oe,{setModal:u,animarModal:v,setAnimarModal:p,guardarGasto:c=>{if(c.id){const b=t.map(y=>y.id===c.id?c:y);a(b),h({})}else c.id=V(),c.fecha=Date.now(),a([...t,c]);p(!1),setTimeout(()=>{u(!1)},500)},gastoEditar:f,setGastoEditar:h})]})}E.render(e(T.StrictMode,{children:e(se,{})}),document.getElementById("root"));
