import{R as t}from"./index-d196e65e.js";function l(n,r){return Array.isArray(n)?n.map(u=>u===null?null:r(u)):t(n)?Object.keys(n).reduce((u,e)=>(u[e]=r(n[e]),u),{}):n!=null?r(n):null}export{l as m};
