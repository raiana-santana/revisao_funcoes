let usuarios = [];
let emailUsers = [];

let nomedoUsuario;
let emaildoUsuario;

function cadastrarUsuario(nomeUsuario, emailUsuario) {
  usuarios.push(nomeUsuario);
  emailUsers.push(emailUsuario);
}

function buscarUsuario(email) {
  //indexOf vai buscar pelo índice do array
  const indiceUsuario = emailUsers.indexOf(email);
  return usuarios[indiceUsuario];
}

function removerUsuario(email) {
  const indiceUsuario = emailUsers.indexOf(email);
  emailUsers.splice(indiceUsuario, 1);
  usuarios.splice(indiceUsuario, 1);
}

function editarUsuario(email, novoNome) {
  const indiceUsuario = emailUsers.indexOf(email);
  usuarios[indiceUsuario] = novoNome;
}

cadastrarUsuario("Raiana", "raiana@email.com");
cadastrarUsuario("Ana", "ana@email.com");
cadastrarUsuario("João", "joao@email.com");

while (true) {
  let opcaoUsuario = parseInt(
    prompt(
      "Seja bem vindo!\n" +
        "Cadastrar Usuário (Digite 1)\n" +
        "Buscar Usuário (Digite 2)\n" +
        "Remover Usuário (Digite 3)\n" +
        "Editar Usuário (Digite 4)\n" +
        "Sair do programa (Digite 0)\n"
    )
  );
  // debugger;
  switch (opcaoUsuario) {
    case 1:
      nomedoUsuario = prompt("Digite seu nome: ");
      emaildoUsuario = prompt("Digite o seu e-mail: ");
      cadastrarUsuario(nomedoUsuario, emaildoUsuario);
      alert("Usuário cadastrado com sucesso!");
      break;

    case 2:
      emaildoUsuario = prompt("Busque um usuário pelo e-mail cadastrado");
      let usuarioBuscado = buscarUsuario(emaildoUsuario);
      if (usuarioBuscado) {
        alert(`Usuário encontrado! ${usuarioBuscado}`);
      } else {
        alert("Usuário não encontrado.");
      }
      break;

    case 3:
      emaildoUsuario = prompt("Digite o e-mail do usuário que deseja remover:");
      removerUsuario(emaildoUsuario);
      alert("Usuário removido com sucesso!");
      break;

    case 4:
      emaildoUsuario = prompt("Digite o e-mail do usuário que deseja editar: ");
      let novoNome = prompt("Digite o novo nome do usuário: ");
      editarUsuario(emaildoUsuario, novoNome);
      alert("Usuário editado com sucesso!");
      break;
  }
}
