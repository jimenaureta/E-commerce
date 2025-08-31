import { setCatID } from "./common.js";

document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("autos")   ?.addEventListener("click", ()=>{ setCatID(101); location.href="./products.html"; });
  document.getElementById("juguetes")?.addEventListener("click", ()=>{ setCatID(102); location.href="./products.html"; });
  document.getElementById("muebles") ?.addEventListener("click", ()=>{ setCatID(103); location.href="./products.html"; });
});