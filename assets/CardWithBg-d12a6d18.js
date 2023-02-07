import{d as p,B as $,F as f,j as n,C as i,H as we,T as Q,aj as Re,a4 as ae,a5 as ie,ak as Le,a8 as V,ae as Ae,ab as Ee}from"./index-d196e65e.js";import{t as Ve,_ as $e}from"./toFinite-cf3a3438.js";import{r as a}from"./react-venders-43274802.js";import{T as Pe}from"./chunk-IXKZFKRY-443bf058.js";import{S as k,a as H,b as G,c as N,d as q}from"./icon-calendar-955105eb.js";import{a as ue,_ as Be,h as je,u as Me,S as ze}from"./CustomSelect-ae770508.js";import{u as Fe,a as De}from"./lend-fe9aa8f1.js";import{_ as g}from"./toConsumableArray-d9a3109e.js";function We(r,t,e){var l=-1,o=r.length;t<0&&(t=-t>o?0:o+t),e=e>o?o:e,e<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var u=Array(o);++l<o;)u[l]=r[l+t];return u}var ke=We,He=Ve;function Ge(r){var t=He(r),e=t%1;return t===t?e?t-e:t:0}var Ne=Ge,qe=ke,Je=$e,se=Ne;function Ke(r,t,e){var l=r==null?0:r.length;return l?(e&&typeof e!="number"&&Je(r,t,e)?(t=0,e=l):(t=t==null?0:se(t),e=e===void 0?l:se(e)),qe(r,t,e)):[]}var le=Ke;const Qe=({data:{step:r,title:t,text:e},...l})=>p($,{...l,children:[p(f,{mb:5,alignItems:"center",children:[n(Pe,{bg:i.primaryColor,color:"white",borderRadius:"50%",mr:4,w:8,h:8,justifyContent:"center",children:r}),n(we,{size:"md",children:t})]}),n(Q,{color:i.secondaryTextColor,children:e})]}),x=[.4,.6,.8,1,1.2,1.4,1.6],J=[0,.5,1,1.5,2],K=[0,.5,1,1.5,2],st=({selectCollateral:r,selectTenor:t,description:e})=>{const l=a.useMemo(()=>Re[`${t}-${r}`],[t,r]),[o,u]=a.useState(1),[h,P]=a.useState(1),[T,A]=a.useState(1),O=a.useMemo(()=>ae.indexOf(t)+1,[t]),m=a.useMemo(()=>ie.indexOf(r)+1,[r]),_=a.useMemo(()=>le(ae,0,O),[O]),b=a.useMemo(()=>le(ie,0,m),[m]),S=a.useMemo(()=>{const s=new Array(m);for(let c=0;c<m;c++){const y=[..._];s[c]=y.map((C,B)=>{const v=(l-((m-c-1)*h+(O-B-1)*T))*o;return v===~~v?v:v.toFixed(2)})}return s},[O,m,_,l,h,T,o]);return p(ue,{mb:8,bg:i.secondaryBgc,borderRadius:"16px",p:8,children:[p(f,{wrap:"wrap",children:[e&&n(Qe,{data:{step:4,...e}}),p(k,{defaultValue:1,min:x[0],max:x[x.length-1],step:.2,mt:10,mx:12,onChange:s=>{u(s)},mb:8,children:[x.map(s=>n(H,{value:s,fontSize:"sm",zIndex:1,children:n($,{w:2,h:2,borderRadius:8,borderWidth:1,borderColor:"white",mt:-1,bg:o>s?i.primaryColor:i.tipTextColor})},s)),n(H,{value:x[0],mt:4,ml:"-2.5",fontSize:"sm",color:i.secondaryTextColor,children:"min"}),n(H,{value:x[x.length-1],ml:"-2.5",fontSize:"sm",mt:4,color:i.secondaryTextColor,children:"max"}),n(G,{bg:i.tipTextColor,children:n(N,{bgGradient:`linear-gradient(90deg,#fff,${i.primaryColor})`})}),n(q,{boxSize:6,borderWidth:5,borderColor:i.primaryColor,_focus:{boxShadow:"none"}}),n(Le,{})]}),p(f,{justify:"flex-end",w:"100%",alignItems:"center",gap:8,children:[p($,{bg:"white",borderRadius:2,padding:2,mt:6,w:"660px",id:"base-rate-table",pos:"relative",children:[n(f,{children:["Collateral Factor/ Tenor",..._.map(s=>`${s} Day`)].map(s=>n(f,{w:"20%",alignItems:"center",justify:"center",h:"40px",borderBottom:`1px solid ${i.borderColor}`,children:n(Q,{textAlign:"center",fontSize:"xs",fontWeight:"bold",lineHeight:"12px",children:s})},s))}),S.map((s,c)=>n(f,{borderBottom:c!==(S==null?void 0:S.length)-1?`1px solid ${i.borderColor}`:"none",children:[b[c],...s].map((y,C)=>n(f,{w:"20%",alignItems:"center",justify:"center",h:"40px",children:p(Q,{textAlign:"center",fontSize:"xs",fontWeight:C===0?"bold":"normal",color:C===0?i.textColor:i.secondaryTextColor,children:[y,"%"]})},`${y}-${C}`))},`${JSON.stringify(s)}-${c}`))]}),p(k,{orientation:"vertical",direction:"ltr",defaultValue:1,min:J[0],max:J[J.length-1],h:"132px",step:.5,onChange:s=>{P(s)},children:[n(G,{bg:i.tipTextColor,children:n(N,{bg:i.primaryColor})}),n(q,{boxSize:4,borderWidth:"2px",borderColor:i.primaryColor,_focus:{boxShadow:"none"}})]})]})]}),n(f,{justify:"center",mt:5,children:n(f,{alignItems:"center",children:p(k,{min:K[0],max:K[K.length-1],w:"132px",step:.2,defaultValue:1,mt:1,onChange:s=>{A(s)},children:[n(G,{bg:i.tipTextColor,children:n(N,{bg:i.primaryColor})}),n(q,{boxSize:4,borderWidth:"2px",borderColor:i.primaryColor,_focus:{boxShadow:"none"}})]})})})]})};var Ue=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function Xe(r){var t=r.defaultOptions,e=t===void 0?!1:t,l=r.cacheOptions,o=l===void 0?!1:l,u=r.loadOptions;r.options;var h=r.isLoading,P=h===void 0?!1:h,T=r.onInputChange,A=r.filterOption,O=A===void 0?null:A,m=Be(r,Ue),_=m.inputValue,b=a.useRef(void 0),S=a.useRef(!1),s=a.useState(Array.isArray(e)?e:void 0),c=g(s,2),y=c[0],C=c[1],B=a.useState(typeof _<"u"?_:""),v=g(B,2),U=v[0],j=v[1],de=a.useState(e===!0),X=g(de,2),ce=X[0],w=X[1],pe=a.useState(void 0),Y=g(pe,2),M=Y[0],z=Y[1],fe=a.useState([]),Z=g(fe,2),he=Z[0],F=Z[1],me=a.useState(!1),ee=g(me,2),Se=ee[0],E=ee[1],ge=a.useState({}),te=g(ge,2),R=te[0],re=te[1],be=a.useState(void 0),oe=g(be,2),Ce=oe[0],ve=oe[1],xe=a.useState(void 0),ne=g(xe,2),Oe=ne[0],_e=ne[1];o!==Oe&&(re({}),_e(o)),e!==Ce&&(C(Array.isArray(e)?e:void 0),ve(e)),a.useEffect(function(){return S.current=!0,function(){S.current=!1}},[]);var D=a.useCallback(function(L,I){if(!u)return I();var d=u(L,I);d&&typeof d.then=="function"&&d.then(I,function(){return I()})},[u]);a.useEffect(function(){e===!0&&D(U,function(L){S.current&&(C(L||[]),w(!!b.current))})},[]);var ye=a.useCallback(function(L,I){var d=je(L,I,T);if(!d){b.current=void 0,j(""),z(""),F([]),w(!1),E(!1);return}if(o&&R[d])j(d),z(d),F(R[d]),w(!1),E(!1);else{var Te=b.current={};j(d),w(!0),E(!M),D(d,function(W){S&&Te===b.current&&(b.current=void 0,w(!1),z(d),F(W||[]),E(!1),re(W?V(V({},R),{},Ae({},d,W)):R))})}},[o,D,M,R,T]),Ie=Se?[]:U&&M?he:y||[];return V(V({},m),{},{options:Ie,isLoading:ce||P,onInputChange:ye,filterOption:O})}var Ye=a.forwardRef(function(r,t){var e=Xe(r),l=Me(e);return a.createElement(ze,Ee({ref:t},l))});function lt({...r}){const{loading:t,runAsync:e}=Fe(De,{manual:!0}),l=a.useCallback(o=>(console.log(o),new Promise(u=>{e().then(h=>{u(h.data.list)}).catch(h=>console.log(h))})),[e]);return n(Ye,{isLoading:t,className:"react-select-container",defaultOptions:!0,isOptionSelected:(o,u)=>o.id===u,loadOptions:l,theme:o=>({...o,borderRadius:0,width:240,colors:{...o.colors,primary:i.primaryColor}}),styles:{control:o=>({...o,width:240,borderRadius:8,height:44}),option:(o,u)=>({...o,backgroundColor:u.isSelected?i.secondaryColor:"white",color:i.textColor})},components:{IndicatorSeparator:()=>null},formatOptionLabel:({col2:o,id:u})=>p(f,{alignItems:"center",children:[n($,{w:4,h:4,bg:"pink"}),"----",o]},u),...r})}const ut="/preview/assets/icon-arrow-left-2439d3e9.svg",dt="/preview/assets/icon-intersect-0bc98e14.svg",ct=r=>n(ue,{bg:i.secondaryBgc,borderRadius:"16px",p:8,...r});export{lt as A,ct as C,ut as I,st as L,Qe as S,dt as a};
