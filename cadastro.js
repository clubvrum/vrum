const API = "https://script.google.com/macros/s/AKfycbwepH2nL55uoRkElvwqm5l-0cqfzkrtl-NIi48ll_6ce5FMg_4X8QuhIHTzRRVUC5yH/exec";

async function cadastrar() {
  
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  
  if (!nome || !email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }
  
  try {
    const resposta = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome,
        email,
        senha
      })
    });
    
    const dados = await resposta.json();
    alert(dados.mensagem);
    
    if (dados.ok) {
      window.location.href = "login.html";
    }
    
  } catch (erro) {
    alert("Erro: " + erro.message);
  }
}