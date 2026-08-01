

/*
====================================================
URL DO SEU GOOGLE APPS SCRIPT
====================================================
*/
const DRIVE_API_URL = 'https://script.google.com/macros/s/AKfycbzEGP1QBQXZ3him6hb93uJG9sMJ-zl-ryN57ZY-9aRuhQ-pUR-HR9l7nkBe_lPESCCH/exec';


/*
====================================================
NAVEGAÇÃO
====================================================
*/

function showPage(id,btn){

  document
    .querySelectorAll('.page')
    .forEach(function(page){
      page.style.display='none';
    });

  document.getElementById(id).style.display='block';

  document
    .querySelectorAll('.nav button')
    .forEach(function(button){
      button.classList.remove('active');
    });

  if(btn){
    btn.classList.add('active');
  }

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
}


function openPage(id,index){

  var buttons =
    document.querySelectorAll('.nav button');

  showPage(id,buttons[index]);

}


/*
====================================================
BUSCA DAS MARCAS NA PÁGINA INICIAL
====================================================
*/

function filterBrands(){

  var q =
    document
      .getElementById('search')
      .value
      .toLowerCase()
      .trim();

  document
    .querySelectorAll('#brands .card')
    .forEach(function(card){

      card.style.display =
        (!q || card.dataset.key.includes(q))
        ? 'block'
        : 'none';

    });

}


/*
====================================================
BUSCA DE PDF NO GOOGLE DRIVE
====================================================
*/

async function searchDrive(){

  var input =
    document.getElementById('driveSearch');

  var status =
    document.getElementById('driveStatus');

  var results =
    document.getElementById('driveResults');

  var q =
    input.value.trim();


  if(!q){

    status.style.display='block';

    status.innerHTML =
      '<span class="error-box">' +
      'Digite a marca, modelo ou nome do manual.' +
      '</span>';

    results.innerHTML='';

    return;
  }
  
 showLoader();

  results.innerHTML='';


  try{

    var response =
      await fetch(
        DRIVE_API_URL +
        '?q=' +
        encodeURIComponent(q)
      );


    if(!response.ok){

      throw new Error(
        'Não foi possível conectar ao servidor.'
      );

    }


    var data =
      await response.json();


    if(!data.ok){

      throw new Error(
        data.error ||
        'Erro na busca do Google Drive.'
      );

    }


if (!data.files || data.files.length === 0) {

    hideLoader();

    status.style.display = "block";

    status.innerHTML =
        '<span class="error-box">❌ Nenhum PDF encontrado.</span>';

    results.innerHTML = "";

    return;
}


    status.style.display = "block";
    
    status.innerHTML =
  `<span class="success-box">
     📄 ${data.files.length} arquivo(s) encontrado(s).
   </span>`;


    results.innerHTML =
      data.files
      .map(function(file){

        return `

        <div class="card pdf-card">

          <div class="pdf-icon">
            PDF
          </div>

          <div class="pdf-title">
            ${escapeHtml(file.name)}
          </div>

          <p class="muted">
            Manual técnico encontrado no Google Drive.
          </p>

          <button
            class="cta"
            onclick="openPdf('${escapeAttribute(file.url)}')"
          >
            ABRIR PDF
          </button>

        </div>

        `;

      })
      .join(''); 
      hideLoader();
  }

  catch(error){
hideLoader();
    status.innerHTML =
      '<span class="error-box">' +
      '<b>Erro ao consultar o Google Drive.</b>' +
      '<br><br>' +
      escapeHtml(error.message) +
      '</span>';

  }

}


/*
====================================================
ABRIR PDF
====================================================
*/

function openPdf(url){

  window.open(
    url,
    '_blank',
    'noopener,noreferrer'
  );

}


/*
====================================================
SEGURANÇA
====================================================
*/

function escapeHtml(value){

  return String(value)
    .replace(
      /[&<>"']/g,
      function(character){

        return {

          '&':'&amp;',
          '<':'&lt;',
          '>':'&gt;',
          '"':'&quot;',
          "'":'&#039;'

        }[character];

      }
    );

}


function escapeAttribute(value){

  return String(value)
    .replace(/\\/g,'\\\\')
    .replace(/'/g,"\\'");

}


/*
====================================================
MODELOS
====================================================
*/

const models={

"Honda":[
  "CB 300F 2023",
  "CG 160 Titan",
  "CB 500F",
  "XRE 300"
],

"Yamaha":[
  "Fazer FZ25",
  "MT-03",
  "MT-07",
  "Lander 250"
],

"Suzuki":[
  "GS 500",
  "V-Strom 650",
  "Hayabusa"
],

"BMW":[
  "G 310 R",
  "F 750 GS",
  "R 1250 GS"
],

"KTM":[
  "390 Duke",
  "790 Duke",
  "1290 Super Duke"
],

"Ducati":[
  "Monster",
  "Panigale V2",
  "Multistrada"
],

"Triumph":[
  "Tiger 900",
  "Street Triple",
  "Bonneville"
],

"Harley-Davidson":[
  "Iron 883",
  "Sportster S",
  "Fat Bob"
]

};


/*
====================================================
CARREGAR MODELOS
====================================================
*/

function loadModels(){

  var marca =
    document.getElementById('marca').value;

  var select =
    document.getElementById('modelo');


  select.innerHTML='';


  if(!marca){

    select.disabled=true;

    select.innerHTML =
      '<option value="">' +
      'Primeiro selecione a marca...' +
      '</option>';

    return;
  }


  select.disabled=false;


  select.innerHTML =
    '<option value="">' +
    'Selecione um modelo...' +
    '</option>';


  models[marca].forEach(
    function(modelo){

      var option =
        document.createElement('option');

      option.value=modelo;

      option.textContent=modelo;

      select.appendChild(option);

    }
  );


  document
    .getElementById('result')
    .style.display='none';

}


/*
====================================================
DIAGNÓSTICO
====================================================
*/

function startDiagnostic(){

  var marca =
    document.getElementById('marca').value;

  var modelo =
    document.getElementById('modelo').value;

  var result =
    document.getElementById('result');


  if(!marca || !modelo){

    result.style.display='block';

    result.textContent =
      'Selecione a marca e o modelo antes de iniciar o diagnóstico.';

    return;
  }


  result.style.display='block';

  result.innerHTML =
    '<b>Diagnóstico iniciado!</b>' +
    '<br>' +
    '<span style="color:#aaa">' +
    'Consulta selecionada: ' +
    escapeHtml(marca) +
    ' ' +
    escapeHtml(modelo) +
    '.' +
    '</span>';

}

