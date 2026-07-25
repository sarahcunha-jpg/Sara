const form = document.getElementById("formContato");
const mensagem = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const texto = document.getElementById("mensagem").value.trim();

    if(nome === "" || email === "" || texto === ""){
        alert("Preencha todos os campos.");
        return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email)){
        alert("Digite um e-mail válido.");
        return;
    }

    mensagem.innerHTML = "✅ Mensagem enviada com sucesso! Em breve entraremos em contato.";

    mensagem.style.color = "green";

    form.reset();

});
