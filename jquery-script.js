/* Código jQuery para o arquivo 'jquery-script.js' */

[cite_start]// Inicializa o jQuery quando o documento estiver pronto [cite: 922, 932]
$(document).ready(function(){
    
    [cite_start]// Função acionada ao clicar no botão "Não é cadastrado ainda? Cadastre-se" [cite: 923, 933]
    $("#botao-cadastrar").click(function(){
        
        [cite_start]// Faz o formulário de cadastro deslizar (aparecer/sumir) suavemente [cite: 924, 934]
        $("#form-cadastrar").slideToggle("slow");
        
        [cite_start]// Faz o formulário de login deslizar (sumir/aparecer) suavemente [cite: 925, 935]
        $("#section-login").slideToggle("slow");
        
        [cite_start]// Esconde o próprio botão de cadastro [cite: 926, 936]
        $("#botao-cadastrar").hide();
    });
    
});