import {
  getJSONData, PRODUCTS_URL, EXT_TYPE,
  fullAsset, requerirSesion, cerrarSesion,
  getUsuario, getCatID
} from "./common.js";

/* Respaldo de imágenes por nombre del producto */
const backupImages = {
  "Chevrolet Onix Joy": "https://assets.stickpng.com/images/61b2a2cad3590a0004a85937.png",
  "Fiat Way": "https://i.imgur.com/2U7Yw0N.png",
  "Suzuki Celerio": "https://i.imgur.com/1o6Qw6i.png",
  "Peugeot 208": "https://i.imgur.com/wg7kI1N.png",
  "Bugatti Chiron": "https://i.imgur.com/3b8Net4.png"
};

const placeholder = (name)=> `https://placehold.co/300x160?text=${encodeURIComponent(name)}`;

const card = (p) => `
  <article class="card-product">
    <div class="media">
      <img src="${fullAsset(p.image)}" alt="${p.name}" loading="lazy"
           referrerpolicy="no-referrer"
           onerror="this.onerror=null; this.src='${backupImages[p.name] || placeholder(p.name)}'">
    </div>
    <div class="body">
      <h3 class="title">${p.name}</h3>
      <p class="desc">${p.description}</p>
      <div class="meta">
        <span class="price">USD ${p.cost}</span>
        <span class="badge-sold">${p.soldCount} unidades</span>
      </div>
    </div>
  </article>
`;

document.addEventListener("DOMContentLoaded", async ()=>{
  if(!requerirSesion()) return;

  // usuario + salir
  const u = document.getElementById("usuarioActual");
  if(u) u.textContent = getUsuario();
  document.getElementById("btnSalir")?.addEventListener("click", cerrarSesion);

  const cont = document.getElementById("productos-container");
  const catID = getCatID();               // 101 default
  const url = `${PRODUCTS_URL}${catID}${EXT_TYPE}`;

  const res = await getJSONData(url);
  if(res.status!=="ok"){ cont.innerHTML = "<p class='text-muted'>No se pudieron cargar los productos.</p>"; return; }

  const list = res.data?.products || [];
  cont.innerHTML = list.map(card).join("");
});