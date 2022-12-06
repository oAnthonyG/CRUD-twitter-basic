// [CRUD] JavaScript
const miniTwitter = {
  usuarios: [
    {
      username: 'anthony',

    }
  ],
  posts: [
    {
      id: 1,
      owner: 'anthony',
      content: 'Meu primeiro post'
    }
  ]
};
// CREATE
function criaPost(dados) {
  miniTwitter.posts.push({
    id: miniTwitter.posts.length + 1,
    owner: dados.owner,
    content: dados.content
  })
};
criaPost({ owner: 'anthony', content: 'Segundo post' });
criaPost({ owner: 'anthony', content: 'Terceiro post' });
//console.log(miniTwitter.posts);

// READ
function pegaPosts() {
  return miniTwitter.posts;
}
//console.log(pegaPosts());

// UPDATE
function atualizaConteudoDoPost(id, novoConteudo) {
  const postQueVaiSerAtualizado = pegaPosts().find((post) => {
    return post.id === id;
  });
  console.log(postQueVaiSerAtualizado)
  postQueVaiSerAtualizado.content = novoConteudo;

}

atualizaConteudoDoPost(1, 'Novo conteúdo do post');
console.log(pegaPosts());

// DELETE
function apagaPost(id) {
  const listaDePostatualizada = pegaPosts().filter((postAtual) => {
    return postAtual.id !== id;
  });
  miniTwitter.posts = listaDePostatualizada;
}
apagaPost(1);
apagaPost(3);
console.log(pegaPosts())
