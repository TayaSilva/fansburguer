# Fansburguer

**Para os fãs e para os tasmas.** Site de pedidos de uma hamburgueria com tema de fantasmas,
com abertura animada, cardápio, carrinho, login, pagamento e um design system próprio.

Feito com **React 19**, **Tailwind CSS 4** e **Vite 7**.

> Este projeto é o **front-end** (a parte visual e navegável). Login, cadastro, pedido e pagamento
> funcionam como demonstração: nada é enviado nem salvo. Veja [O que ainda não é real](#o-que-ainda-não-é-real).

## Como rodar

Você precisa do [Node.js](https://nodejs.org) 20.19 ou mais novo (ou 22.12+).

```bash
npm install      # baixa as dependências (só na primeira vez)
npm run dev      # abre o site em http://localhost:5173
```

Outros comandos:

| Comando           | O que faz                                              |
| ----------------- | ------------------------------------------------------ |
| `npm run build`   | Gera a versão final na pasta `dist/`, pronta para publicar |
| `npm run preview` | Abre a versão final localmente para conferir           |

## Telas

| Tela                    | Arquivo                          | Como chegar                                   |
| ----------------------- | -------------------------------- | --------------------------------------------- |
| Início                  | `src/screens/Home.jsx`           | Logo no topo                                  |
| Cardápio (com abas)     | `src/screens/Menu.jsx`           | "Cardápio" no topo                            |
| Carrinho                | `src/screens/Cart.jsx`           | "Carrinho" no topo                            |
| Login                   | `src/screens/Login.jsx`          | "Entrar" no topo, ou ao fechar o pedido       |
| Cadastro                | `src/screens/Signup.jsx`         | "Criar conta" no login                        |
| Esqueci a senha         | `src/screens/ForgotPassword.jsx` | "Esqueci minha senha" no login                |
| Entrega e pagamento     | `src/screens/Checkout.jsx`       | "Fechar pedido" no carrinho (pede login)      |
| Pedido confirmado       | `src/screens/Done.jsx`           | "Confirmar pedido"                            |
| Termos e privacidade    | `src/screens/Legal.jsx`          | Links no rodapé                               |
| Design system           | `src/screens/StyleGuide.jsx`     | "Design system" no rodapé                     |

O modal **"Me conta sua história de terror"** abre pelo botão da seção "A lenda", na página inicial.

## Estrutura de pastas

```
fansburguer/
├── index.html                 página base (carrega as fontes)
├── public/img/burger.webp     foto da seção "A lenda"
├── DESIGN_SYSTEM.md           cores, tipografia, componentes e tom de voz
└── src/
    ├── main.jsx               ponto de entrada
    ├── App.jsx                escolhe a tela e controla a abertura
    ├── index.css              Tailwind + TOKENS do design system (@theme)
    ├── context/
    │   └── StoreContext.jsx   tela atual, carrinho, usuário e pedido
    ├── data/
    │   ├── menu.js            itens do cardápio e categorias
    │   ├── site.js            endereço, horários, redes sociais, CNPJ, frete
    │   └── legal.js           textos dos termos e da política de privacidade
    ├── design/
    │   └── tokens.js          lista dos tokens mostrada na tela de Design System
    ├── components/
    │   ├── ui/                peças básicas, sem regra de negócio
    │   │   ├── Button.jsx       botão (6 variantes, 3 tamanhos)
    │   │   ├── Field.jsx        campo de formulário com rótulo
    │   │   ├── PillGroup.jsx    abas e seletores de opção
    │   │   ├── Modal.jsx        janela modal
    │   │   └── Eyebrow.jsx      rótulo acima dos títulos
    │   ├── brand/             desenhos da marca
    │   │   ├── Ghost.jsx        o fantasma
    │   │   ├── BurgerArt.jsx    hambúrguer ilustrado do topo
    │   │   ├── Icons.jsx        ícones de traço
    │   │   └── Doodles.jsx      rabiscos decorativos
    │   ├── layout/            o que aparece em todas as telas
    │   │   ├── Intro.jsx        abertura do fantasma saindo da tela
    │   │   ├── Header.jsx       topo
    │   │   ├── Footer.jsx       rodapé
    │   │   └── Marquee.jsx      faixa de frases correndo
    │   └── features/          blocos com conteúdo do site
    │       ├── Hero.jsx         topo da página inicial
    │       ├── MenuTeaser.jsx   chamada para o cardápio
    │       ├── Legend.jsx       seção "A lenda"
    │       ├── StoryModal.jsx   modal da história de terror
    │       ├── Visit.jsx        endereço, horários e contato
    │       ├── MenuCard.jsx     card de item do cardápio
    │       ├── OrderSummary.jsx resumo com frete e total
    │       └── AuthCard.jsx     moldura de login, cadastro e senha
    └── screens/               uma tela por arquivo (lista acima)
```

## O que trocar para virar o seu site

Tudo o que está **[ENTRE COLCHETES]** no site é um campo para você preencher.

| O quê                                        | Onde                                   |
| -------------------------------------------- | -------------------------------------- |
| Endereço, horários, WhatsApp, e-mail          | `src/data/site.js`                     |
| Links das redes sociais                       | `src/data/site.js` → `socials`         |
| Razão social e CNPJ                           | `src/data/site.js`                     |
| Valor do frete, prazo e área de entrega       | `src/data/site.js`                     |
| Itens, preços e ingredientes do cardápio      | `src/data/menu.js`                     |
| Fotos dos produtos                            | coloque em `public/fotos/` e preencha `image` em `menu.js` (ex.: `'/fotos/sexto-sentido.jpg'`) |
| Foto da seção "A lenda"                       | substitua `public/img/burger.webp` (de preferência com fundo transparente) |
| Termos de uso e política de privacidade       | `src/data/legal.js`                    |
| Cores, fontes e raios                         | bloco `@theme` em `src/index.css`      |

Preços, ingredientes e o frete de R$ 8,00 são **exemplos**.

## Design system

As cores, fontes, raios e animações ficam num lugar só: o bloco `@theme` de `src/index.css`.
Cada token vira classe do Tailwind (`--color-accent` → `bg-accent`, `text-accent`...).

- Documentação: [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)
- Versão viva: rode o site e clique em **Design system** no rodapé.

## O que ainda não é real

Os pontos de integração estão marcados com `TODO` no código.

| Função                 | Hoje                                   | Para funcionar de verdade                         |
| ---------------------- | -------------------------------------- | ------------------------------------------------- |
| Login e cadastro       | Qualquer e-mail e senha entram         | API de autenticação (`Login.jsx`, `Signup.jsx`)   |
| Esqueci a senha        | Só mostra a confirmação                | API que envia o e-mail (`ForgotPassword.jsx`)     |
| Pedido                 | Gera um número aleatório               | API de pedidos (`Checkout.jsx`)                   |
| Pagamento              | Nenhuma cobrança é feita               | Gateway como Mercado Pago, Pagar.me ou Stripe     |
| História de terror     | O texto não é guardado                 | API para receber o texto (`StoryModal.jsx`)       |
| Carrinho e sessão      | Somem ao recarregar a página           | Guardar no navegador ou no servidor               |
| Endereço das telas     | Todas ficam na mesma URL               | Trocar a navegação por React Router               |

Dados de cartão nunca devem passar pelo seu servidor: use o formulário ou o SDK do gateway de pagamento.

Os termos de uso e a política de privacidade são um **modelo genérico**; revise com um advogado antes de publicar um site real.

## Créditos

Nomes dos lanches e frases fazem referência, em tom de brincadeira, a filmes de fantasma.
O fantasma, o hambúrguer ilustrado e os ícones foram desenhados para este projeto.
