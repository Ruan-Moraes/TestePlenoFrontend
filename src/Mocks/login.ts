// Não entendi muito bem isso

interface ILogin {
  Email: string;
  Senha: string;
}

export function ResponseLogin(request: ILogin) {
  return {
    status: 200,
    data: {
      mensagem: 'LOGIN EFETUADO COM SUCESSO!',
    },
  };
}
