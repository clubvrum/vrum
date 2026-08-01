// ===========================
// CLUB VRUM LOADER
// ===========================

function createLoader() {
  
  if (document.getElementById("cvLoader")) return;
  
  const loader = document.createElement("div");
  
  loader.id = "cvLoader";
  
  loader.innerHTML = `

    <div class="cv-box">

        <h2>CLUB <span>VRUM</span></h2>

        <p id="cvText">
            Buscando manuais...
        </p>

        <div class="cv-wave">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

        </div>

    </div>

    `;
  
  document.body.appendChild(loader);
  
}

function showLoader() {
  
  createLoader();
  
  document.getElementById("cvLoader").classList.add("show");
  
}

function hideLoader() {
  
  document.getElementById("cvLoader").classList.remove("show");
  
}

const mensagens = [
  
  "Buscando manuais...",
  "Consultando Google Drive...",
  "Organizando resultados...",
  "Quase pronto..."
  
];

let indice = 0;

setInterval(() => {
  
  const texto = document.getElementById("cvText");
  
  if (texto) {
    
    indice++;
    
    if (indice >= mensagens.length) {
      
      indice = 0;
      
    }
    
    texto.innerHTML = mensagens[indice];
    
  }},1800);