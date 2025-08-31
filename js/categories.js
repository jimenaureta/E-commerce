import { getJSONData, CATEGORIES_URL } from "./common.js";

document.addEventListener("DOMContentLoaded", async ()=>{
  const cont = document.getElementById("cat-list-container");
  const r = await getJSONData(CATEGORIES_URL);
  if(r.status!=="ok"){ cont.innerHTML = "<p class='text-muted'>No se pudieron cargar las categorías</p>"; return; }

  cont.innerHTML = r.data.map(c=>`
    <a href="./products.html" class="list-group-item list-group-item-action"
       onclick="localStorage.setItem('catID', '${c.id}')">
      <div class="row">
        <div class="col-3"><img src="${c.imgSrc}" class="img-thumbnail" alt="${c.name}"></div>
        <div class="col">
          <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">${c.name}</h4>
            <small class="text-muted">${c.productCount} artículos</small>
          </div>
          <p class="mb-1">${c.description}</p>
        </div>
      </div>
    </a>
  `).join("");
});