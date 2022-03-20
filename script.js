// nossa função para editar a cor conforme a pessoa clica no botão //

function mudarTema () {
  // estamos puxando realmente o BODY porque queremos mudar todo o visual da página 
  // vamos criar uma class para o modo escuro (dark mode) no css, e ai contar para o CSS (atraves do JS) que queremos que ele troque o tema conforme o clique do botão
  document.body.classList.toggle("dark")
}