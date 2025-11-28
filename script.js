/* Código JavaScript para o arquivo 'script.js' */

[cite_start]// FUNÇÃO VOLTAR AO TOPO [cite: 877]
function topo() {
    [cite_start]// Rola a janela suavemente até o topo (posição 0, 0) [cite: 878]
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' 
    })
}


[cite_start]// FUNÇÃO VALIDAÇÃO DE LOGIN [cite: 892]
function login(){
    var logado = 0; [cite_start]// Inicia a variável de controle [cite: 906]
    
    [cite_start]// Pega o valor do input com 'name="usuario"' [cite: 907]
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase(); [cite_start]// Converte para minúsculas [cite: 909]
    
    [cite_start]// Pega o valor do input com 'id="senha"' [cite: 908]
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase(); [cite_start]// Converte para minúsculas [cite: 909]
    
    [cite_start]// Verifica as credenciais [cite: 897]
    if(usuario == "admin" && senha == "123456"){
        [cite_start]// Credenciais corretas: Redireciona para a home [cite: 899]
        window.location = "index.html"; 
        [cite_start]logado = 1 // Altera a variável para 1 [cite: 900]
    }
    
    [cite_start]// Verifica se não logou (logado == 0) [cite: 901]
    if(logado == 0) {
        [cite_start]// Credenciais incorretas: Exibe alerta [cite: 903]
        alert("Acesso Negado. Dados incorretos");
    }
}


[cite_start]// FUNÇÃO CADASTRO (Apenas para emitir alerta e redirecionar) [cite: 962]
function cadastro() {
    alert("Cadastrado com sucesso!"); [cite_start]// Alerta de sucesso [cite: 963]
    window.location.href = "index.html"; [cite_start]// Redireciona para a home [cite: 963]
}