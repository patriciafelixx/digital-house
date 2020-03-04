## Guia Prático de GIT

![](https://git-scm.com/images/logo@2x.png)

### Trazer um arquivo do GITHUB
Sempre que for iniciar um trabalho num projeto, fazer o `git pull <nome do repositório>` ou `git pull origin <nome da branch>.`

Após fazer o PULL, abrir o arquivo do projeto pelo ATOM/Visual Studio Code e fazer as atualizações.

### Devolver o arquivo atualizado para o GITHUB
Fazer um GIT PULL novamente para trazer a última versão do arquivo (outros devs podem estar trabalhando no mesmo arquivo)

Validar as suas alterações com o arquivo atualizado que acabou de ser baixado.

`git status` (para visualizar o nome do arquivo)

`git add <nome do arquivo>`

`git commit -m "mensagem sobre as atualizações realizadas"`

`git pull origin <nome da branch>`

`git push origin <nome da branch>`


**Observação:**

Nesse início de projeto (primeira sprint), estaremos sempre na branch "master".

Assim que terminar a sprint 1, devemos criar um nova branch e carregar os arquivos da "master" nessa nova branch.

Comando no git bash para gerar uma nova branch:

`git checkout -b sprint2` (sprint2 é o nome escolhido para a 2ª branch)

Nesse momento, a branch "sprint2" receberá todos os arquivos da branch "master" e todos passarão a trabalhar na "sprint2".

Após conclusão da sprint 2, então devemos fazer a atualização das suas alterações "JÁ VALIDADAS" na branch "master".

Comando no git bash para trazer as atualizações da sprint2 na master:

Dentro da branch (sprint2), digitar o comando: `git merge origin master`.

Para a iniciar a terceira sprint, deve-se criar a nova branch, no caso, "sprint3", a partir da branch "master".

Dentro da branch (master), digitar o comando: `git checkout -b sprint3`.

A sprint3 será criada e receberá todos os arquivos atualizados da "master".

### LINKS ÚTEIS:
<https://github.com/VictorCaldas/Github-Guide-to-code>

<http://rogerdudler.github.io/git-guide/index.pt_BR.html>