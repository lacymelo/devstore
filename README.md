<div align="justify">
  <p align="center">
    <img alt="Logo Omnistack 7 - Rocketseat" src="./public/landing.png" width="550px" />
  </p>

  <h1 align="center">
    🤖 Trilha ReactJS Ignite: DEVSTORE
  </h1>

  > Desenvolvimento do projeto Dev Store usando o Next.js 14 🚀 com Server Components. O projeto terá funcionalidades básicas, como listagem de produtos, carrinho e busca. Vamos criar um modal para exibir os detalhes do produto quando o usuário clicar em um item. Além disso, vamos aprender sobre interceptação de rotas no Next.js. O foco principal será a busca e exibição de dados de uma API. Utilizaremos imagens de camisetas e moletons da Rocketseat. Vamos configurar o projeto, instalar dependências e configurar o ESLint. Em seguida, começaremos a criar as páginas do projeto.
</div>

## :rocket: Os trê pilares no NextJS 14
- [X] Server Components 👉  Para não usar Javascript no lado do cliente.

- [X] Client Components 👉  Enviando somente o javascript necessário para o navegador (cliente).
- [X] Streaming SSR 👉  Ler/escrever dados de forma parcial + Server-Side Rendering

##  📥 Configurações e instalações
> Estas são todas as bibliotecas utilizadas neste projeto, verifique cada uma com atenção.

✨ Para criar o projeto execute este comando.
```bash
pnpm create next-app@latest devstore
```
✨ Para manter um padrão de escrita do código, instale a lib `@rocketseat/eslint-config` da rocketseat.
```bash
pnpm i @rocketseat/eslint-config -D 
```
🛠️ No arquivo `.eslintrc.json` do seu projeto adicione a configuração `@rocketseat/eslint-config/react`, da seguinte forma.
```bash
{
  "extends": [
    "@rocketseat/eslint-config/react",
    "next/core-web-vitals"
  ]
}
```
✨ Para utilizar ícones no projeto, instale a lib `lucide-react`, executando o seguinte comando.
```bash
pnpm i lucide-react
```
✨ Para trabalhar com formulário e validação de formulário usaremos as libs `react-hook-form` e `zod`, faça a instalação com o seguinte comando.
```bash
pnpm i react-hook-form @hookform/resolvers zod
```
✨ Para trabalhar com variáveis ambientes instale a
biblioteca para gerenciar variáveis ambientes
```bash
pnpm i @t3-oss/env-nextjs
```
✨ Para concatenar class já existentes do tailwind-merge, vamos utilizar a lib `tailwind-merge`, para instalar utilizaremos o seguinte comando.
```bash
 pnpm i tailwind-merge
```
✨ Para realizar teste `E2E` vamos utilizar a lib `cypress`, para instalar utilizaremos o seguinte comando.
```bash
 pnpm i cypress -D
```
✨ Para executar o cypress, execute o seguinte comando.
```bash
 pnpm cypress open
```
# :closed_book: License

Released in 2024 :closed_book: License
Made with love by  Laciene Melo [#lacymelo](https://github.com/lacymelo) 🚀.
This project is under the [MIT license](./LICENSE).
Give a ⭐️ if this project helped you!
