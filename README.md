<p align="center">
  <img alt="IGNITE React - Chapter 04 - Desafio 02 - Upload de Imagens" src=".github/logo-upload-imagens.svg" />
</p>

<p align="center">
  <a href="LICENSE"><img  src="https://img.shields.io/static/v1?label=License&message=MIT&color=F7DD43&labelColor=202024" alt="License"></a>
</p>

## 💻 Projeto

Essa aplicação de upload de imagens permite cadastrar imagens junto com seus respectivos títulos e
descrições no banco de dados FaunaDB (banco de dados sem servidor distribuído) e armazenar as imagens
no site ImgBB (serviço de hospedagem de imagens) sem a necessidade de utilizar uma aplicação backend.

É apresentado ao usuário uma lista de imagens cadastradas onde o mesmo poderá clicar em qualquer uma para ver em tamanho maior, e também ter acesso em uma nova aba, a imagem em tamanho real.

Nesse desafio foi utilizado o framework Next.js para estruturar a aplicação e o Chakra UI para a 
construção do design da página e dos componentes envolvidos conforme o layout do Figma apresentado.

Para que a aplicação fosse mais performática e ágil, foi utilizado o React-Query (biblioteca de busca
de dados e gerenciamento de estado).

E para finalizar, a aplicação teve um tratamento responsivo para que o usuário pudesse acessar em 
qualquer tamanho de tela de seu dispositivo favorito.

[ACESSE A APLICAÇÃO](https://reactjs-upload-de-imagens-db67my9yg-darciocarvalho.vercel.app/)

## ✨ Tecnologia

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [React Query](https://tanstack.com/query/v3/docs/react/overview)
- [React Hook Form](https://www.react-hook-form.com/)
- [FaunaDB](https://fauna.com/home)
- [ImgBB](https://pt-br.imgbb.com/)


## 🚀 Como executar

- Instale o [Node.js] na versão 16.16.0 ou inferior(https://nodejs.dev/)
- Instale o [yarn](https://yarnpkg.com/)
- Instale os pacotes com `yarn` ou `yarn install` .
- Crie um arquivo oculto no diretório raiz da aplicação chamado ".env.local" 
  seguindo a instrução do arquivo ".env.example" .
- Execute `yarn dev` para iniciar o cliente web.

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout](https://www.figma.com/file/QKxbxCVwwlDLMrCtHae239/Desafio-2-M%C3%B3dulo-4-ReactJS/duplicate)

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/).


## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💙 by Dárcio Carvalho
</p>

<p align="center">
  Desenvolvido by Rocketseat :wave: <a href="https://discord.gg/rocketseat">Participe da nossa comunidade!</a> 
</p>
