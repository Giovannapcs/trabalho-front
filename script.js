

[cite_start]
function topo() {
    [cite_start]
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' 
    })
}


[cite_start]
function login(){
    var logado = 0; [cite_start]
    
    [cite_start]
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase(); [cite_start]
    
    [cite_start]
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase(); [cite_start]
    
    [cite_start]
    if(usuario == "admin" && senha == "123456"){
        [cite_start]
        window.location = "index.html"; 
        [cite_start]logado = 1
    }
    
    [cite_start]
    if(logado == 0) {
        [cite_start]
        alert("Acesso Negado. Dados incorretos");
    }
}


[cite_start]
function cadastro() {
    alert("Cadastrado com sucesso!"); [cite_start]
    window.location.href = "index.html"; [cite_start]
}
