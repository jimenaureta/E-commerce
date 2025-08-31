// ===== API =====
export const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
export const PRODUCTS_URL   = "https://japceibal.github.io/emercado-api/cats_products/";
export const EXT_TYPE = ".json";

// ===== Spinner + fetch =====
export function showSpinner(){ document.getElementById("spinner-wrapper")?.style?.setProperty("display","block"); }
export function hideSpinner(){ document.getElementById("spinner-wrapper")?.style?.setProperty("display","none"); }

export async function getJSONData(url){
  const result = {};
  try{
    showSpinner();
    const r = await fetch(url, { cache:"no-store" });
    if(!r.ok) throw new Error(`HTTP ${r.status}`);
    result.status = "ok";
    result.data = await r.json();
  }catch(err){
    result.status = "error";
    result.data = err;
  }finally{
    hideSpinner();
  }
  return result;
}

// Si el path no es absoluto, lo resuelve contra la API oficial
export const fullAsset = (p)=> p?.startsWith("http") ? p : `https://japceibal.github.io/emercado-api/${p}`;

// ===== Sesión =====
const K="sesionActiva", U="usuarioEmail";
export const sesionActiva = ()=> sessionStorage.getItem(K)==="true";
export const getUsuario   = ()=> sessionStorage.getItem(U)||"";
export function iniciarSesion(email){ sessionStorage.setItem(K,"true"); sessionStorage.setItem(U,email); }
export function cerrarSesion(){ sessionStorage.clear(); location.href="./login.html"; }
export function requerirSesion(){ if(!sesionActiva()){ location.href="./login.html"; return false; } return true; }

// ===== Categoría seleccionada =====
export function setCatID(id){ localStorage.setItem("catID", String(id)); }
export function getCatID(){ return Number(localStorage.getItem("catID")||"101"); }