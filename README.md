# Trabalho Front

Projeto front-end com arquivos estáticos (HTML, CSS, JS).

Como subir para o GitHub:

1. (Opcional) Instale o Git e configure seu nome/email:
   - `git config --global user.name "Seu Nome"`
   - `git config --global user.email "seu@email.com"`

2. Inicializar e commitar localmente (já incluso neste repositório):
   - `git init`
   - `git add .`
   - `git commit -m "Initial commit"`

3. Criar repositório remoto e enviar (duas opções):
   - Usando GitHub CLI (`gh`): `gh repo create NOME-DO-REPO --public --source=. --remote=origin --push`
   - Manual: crie o repo no GitHub pelo site, depois execute:
     - `git remote add origin https://github.com/USUARIO/NOME-DO-REPO.git`
     - `git push -u origin main`

Observações:
- Recomendado usar nome sem espaços, ex: `trabalho-front`.
- Arquivos sensíveis (ex.: `.env`) devem ser adicionados ao `.gitignore`.

Se quiser, eu posso criar o repositório remoto automaticamente com `gh` se estiver instalado e autenticado. Deseja que eu faça isso? Informe também o nome do repositório e se deve ser `public` ou `private`.
