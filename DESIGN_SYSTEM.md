# Design system — Fansburguer

Guia visual do site. Os valores oficiais ficam no bloco `@theme` de [`src/index.css`](./src/index.css);
este documento explica **quando usar cada um**. Para ver tudo funcionando, rode o site e abra
**Design system** no rodapé.

## Ideia geral

Uma hamburgueria mal-assombrada, mas simpática: **noite roxa-escura**, **fantasma branco-lilás**
e **laranja cheddar** como única cor de destaque. O humor vem dos textos, não de efeitos visuais.

- O site é escuro. Só a seção "A lenda" é clara, para dar um respiro.
- O laranja marca o que é clicável ou importante. Se tudo for laranja, nada é.
- Cantos bem arredondados e botões em formato de pílula.

## Cores

Cada cor vira classe do Tailwind: `night` → `bg-night`, `text-night`, `border-night`.

### Fundos

| Token      | Hex       | Uso                              |
| ---------- | --------- | -------------------------------- |
| `night`    | `#15131F` | Fundo do site                    |
| `abyss`    | `#0B0A12` | Abertura e véu do modal          |
| `crypt`    | `#0F0D17` | Rodapé                           |
| `panel`    | `#1E1B2C` | Cartões e painéis                |
| `panel-hi` | `#2D2843` | Item selecionado, círculo de ícone |

### Linhas

| Token  | Hex       | Uso                                  |
| ------ | --------- | ------------------------------------ |
| `line` | `#343049` | Divisórias e contorno de cartões     |
| `edge` | `#4A4466` | Contorno de campos e botões vazados  |

### Texto

| Token   | Hex       | Uso                                             |
| ------- | --------- | ----------------------------------------------- |
| `ghost` | `#F1EEFF` | Texto principal no escuro; fundo da seção clara |
| `mist`  | `#C9C4DD` | Texto secundário                                |
| `fog`   | `#B4AEC9` | Texto de apoio e legendas                       |
| `haze`  | `#8F89A8` | Placeholder de campo (nunca para texto de leitura) |
| `ink`   | `#3A3552` | Texto corrido sobre fundo claro                 |

### Marca

| Token       | Hex       | Uso                                         |
| ----------- | --------- | ------------------------------------------- |
| `accent`    | `#FF9F1C` | Botões e destaques no escuro (texto `night` por cima) |
| `accent-hi` | `#FFB54D` | Hover de link, ícones e contorno de foco    |

### Seção clara ("A lenda")

| Token   | Hex       | Uso                                    |
| ------- | --------- | -------------------------------------- |
| `flame` | `#E8590C` | Palavra em destaque no título          |
| `ember` | `#D9480F` | Botão laranja com texto branco         |
| `spark` | `#F2711C` | Rabiscos decorativos                   |
| `dusk`  | `#1F1A45` | Botão escuro sobre fundo claro         |
| `lilac` | `#D9D2FF` | Fundo da etiqueta                      |
| `plum`  | `#4A3CC0` | Texto da etiqueta                      |
| `iris`  | `#6B5BE6` | Seta decorativa                        |

### Combinações seguras

| Texto     | Fundo             | Para quê                              |
| --------- | ----------------- | ------------------------------------- |
| `ghost`   | `night` / `panel` | Texto principal                       |
| `mist`, `fog` | `night` / `panel` | Texto secundário                  |
| `night`   | `accent`          | Botão principal                       |
| `night`, `ink` | `ghost`      | Seção clara                           |
| branco    | `ember`           | Botão laranja na seção clara          |
| `ghost`   | `dusk`            | Botão escuro na seção clara           |

Evite: `accent` como texto sobre `ghost` (fica fraco; use `flame`) e `haze` para texto de leitura.

## Tipografia

| Fonte          | Classe         | Uso                           |
| -------------- | -------------- | ----------------------------- |
| **Bowlby One** | `font-display` | Títulos, preços e logo        |
| **Figtree**    | `font-sans`    | Todo o resto                  |

As duas vêm do Google Fonts (link no `index.html`).

| Estilo            | Classes                                                         |
| ----------------- | --------------------------------------------------------------- |
| Título de página  | `font-display text-[clamp(44px,7vw,92px)] leading-[1.02]`       |
| Título de seção   | `font-display text-[clamp(34px,4.6vw,56px)] leading-[1.05]`     |
| Título de cartão  | `font-display text-[26px] leading-[1.1]`                        |
| Texto de destaque | `text-xl text-mist`                                             |
| Texto corrido     | `text-[17px]` (padrão do site)                                  |
| Citação           | `font-medium italic`                                            |
| Rótulo            | `text-sm font-extrabold uppercase tracking-[0.16em] text-accent` |
| Legenda           | `text-[15px] text-fog`                                          |

Bowlby One só tem um peso: use sempre `font-normal` com ela.

## Raios

| Token   | Valor | Classe          | Uso                          |
| ------- | ----- | --------------- | ---------------------------- |
| `field` | 12px  | `rounded-field` | Campos                       |
| `photo` | 14px  | `rounded-photo` | Fotos e opções retangulares  |
| `tile`  | 16px  | `rounded-tile`  | Linhas do carrinho           |
| `card`  | 20px  | `rounded-card`  | Cartões e painéis            |
| `panel` | 24px  | `rounded-panel` | Login, cadastro e modal      |
| —       | total | `rounded-full`  | Botões, abas e etiquetas     |

## Espaçamento e largura

- Conteúdo com largura máxima de **1200px** e **24px** de margem lateral (`max-w-[1200px] px-6`).
- Formulários estreitos: **480px** (login) e **760px** (carrinho e pagamento).
- Seções da página inicial: **96px** de respiro em cima e embaixo (`py-24`).
- Dentro dos cartões: **28px** (`p-7`).
- Grades se ajustam sozinhas: `grid-cols-[repeat(auto-fit,minmax(280px,1fr))]`.

## Componentes

### Button — `src/components/ui/Button.jsx`

| Variante        | Aparência                              | Quando usar                             |
| --------------- | -------------------------------------- | --------------------------------------- |
| `primary`       | Laranja cheio, texto escuro            | A ação principal da tela (uma por tela) |
| `outline`       | Contorno cinza-roxo                    | Ação secundária, voltar, cancelar       |
| `accentOutline` | Contorno laranja                       | "Adicionar" nos cards do cardápio       |
| `ember`         | Laranja escuro, texto branco           | Ação principal sobre fundo claro        |
| `dusk`          | Azul-noite, texto claro                | Ação secundária sobre fundo claro       |
| `link`          | Só texto                               | Navegação do topo, links discretos      |

Tamanhos: `sm` (44px), `md` (48px), `lg` (52px). Com `href`, vira um link com a mesma aparência.

```jsx
<Button size="lg" onClick={...}>Fazer meu pedido</Button>
<Button variant="outline" href="#lenda">Conhecer a lenda</Button>
```

### Field — `src/components/ui/Field.jsx`

Campo com rótulo sempre visível. Aceita qualquer atributo de `<input>`.

```jsx
<Field label="E-mail" type="email" name="email" placeholder="voce@email.com" required />
```

### PillGroup — `src/components/ui/PillGroup.jsx`

Escolha de uma opção entre várias. `shape="pill"` para abas, `shape="box"` para opções de formulário.

```jsx
<PillGroup label="Categorias" options={CATEGORIES} value={tab} onChange={setTab} />
```

### Modal — `src/components/ui/Modal.jsx`

Janela sobre a página. Fecha com Esc, clicando fora ou por um botão interno.

### Outros

| Componente     | Arquivo                                | Uso                                   |
| -------------- | -------------------------------------- | ------------------------------------- |
| `Eyebrow`      | `ui/Eyebrow.jsx`                       | Rótulo acima dos títulos              |
| `Ghost`        | `brand/Ghost.jsx`                      | Fantasma (`mouth`: none, open, smile) |
| `Icons`        | `brand/Icons.jsx`                      | Ícones de traço                       |
| `MenuCard`     | `features/MenuCard.jsx`                | Item do cardápio                      |
| `OrderSummary` | `features/OrderSummary.jsx`            | Resumo com frete e total              |
| `AuthCard`     | `features/AuthCard.jsx`                | Moldura de login, cadastro e senha    |

## Movimento

| Classe               | O que faz                                   |
| -------------------- | ------------------------------------------- |
| `animate-float`      | Fantasma flutuando                          |
| `animate-slide`      | Faixa de frases correndo                    |
| `animate-ghost-fly`  | Fantasma voando em direção à tela (abertura) |
| `animate-intro-out`  | Some com a camada da abertura               |
| `animate-whisper`    | Texto piscando na abertura                  |

Toda animação é desligada com `motion-reduce:animate-none` para quem pede menos movimento no sistema.

## Acessibilidade

- Área de toque mínima de **44px** em botões e links.
- Foco visível: contorno de 3px em `accent-hi`.
- Rótulo sempre visível nos campos; placeholder é só exemplo.
- Botões de verdade (`<button>`) e links de verdade (`<a>`); nada de `div` clicável.
- Ícones decorativos com `aria-hidden`; botões só com símbolo têm `aria-label`.

## Tom de voz

- Trocadilhos com fantasmas e filmes de terror, sempre leves: assusta, mas não ofende.
- Frases curtas. Uma piada por bloco, no máximo.
- Na hora de pagar, entregar ou resolver erro, a clareza vem antes da piada.
- Botão diz o que acontece: "Fechar pedido", "Enviar história", "Voltar ao carrinho".

| Em vez de           | Escreva                         |
| ------------------- | ------------------------------- |
| "Erro 404"          | "Essa página virou fantasma."   |
| "Carrinho vazio"    | "Vazio feito casa abandonada."  |
| "Pedido realizado"  | "Pedido invocado!"              |

## Como mudar o tema

1. Abra `src/index.css` e edite o valor no bloco `@theme`.
2. Se criar um token novo, acrescente o nome em `src/design/tokens.js` para ele aparecer na tela de Design System.
3. Atualize a tabela deste documento.
