import { iniciarSesion } from "./common.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("usuario").value.trim();
    const pass  = document.getElementById("password").value.trim();
    if(!email || !pass){ alert("Complete Email y Contraseña."); return; }
    iniciarSesion(email);
    location.href = "./index.html";
  });
});
