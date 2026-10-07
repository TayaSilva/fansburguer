// Lista dos tokens para a tela de Design System (src/screens/StyleGuide.jsx).
// Os VALORES moram em src/index.css (@theme); aqui ficam só nome e uso.

export const COLOR_GROUPS = [
  {
    title: 'Fundos',
    items: [
      { name: 'night', use: 'Fundo do site' },
      { name: 'abyss', use: 'Abertura e véu do modal' },
      { name: 'crypt', use: 'Rodapé' },
      { name: 'panel', use: 'Cartões e painéis' },
      { name: 'panel-hi', use: 'Selecionado, círculo de ícone' },
    ],
  },
  {
    title: 'Linhas',
    items: [
      { name: 'line', use: 'Divisórias, contorno de cartões' },
      { name: 'edge', use: 'Contorno de campos e botões vazados' },
    ],
  },
  {
    title: 'Texto',
    items: [
      { name: 'ghost', use: 'Texto principal / fundo da seção clara' },
      { name: 'mist', use: 'Texto secundário' },
      { name: 'fog', use: 'Apoio e legendas' },
      { name: 'haze', use: 'Placeholder de campo' },
      { name: 'ink', use: 'Texto corrido sobre fundo claro' },
    ],
  },
  {
    title: 'Marca',
    items: [
      { name: 'accent', use: 'Botões e destaques no escuro' },
      { name: 'accent-hi', use: 'Hover de link, ícones, foco' },
    ],
  },
  {
    title: 'Seção clara',
    items: [
      { name: 'flame', use: 'Palavra em destaque no título' },
      { name: 'ember', use: 'Botão laranja com texto branco' },
      { name: 'spark', use: 'Rabiscos decorativos' },
      { name: 'dusk', use: 'Botão escuro sobre fundo claro' },
      { name: 'lilac', use: 'Fundo da etiqueta' },
      { name: 'plum', use: 'Texto da etiqueta' },
      { name: 'iris', use: 'Seta decorativa' },
    ],
  },
]

export const RADII = [
  { name: 'field', use: 'Campos' },
  { name: 'photo', use: 'Fotos, opções retangulares' },
  { name: 'tile', use: 'Linhas do carrinho' },
  { name: 'card', use: 'Cartões e painéis' },
  { name: 'panel', use: 'Login, cadastro, modal' },
]

export const TYPE_SCALE = [
  { label: 'Título de página', className: 'font-display text-[clamp(44px,7vw,92px)] leading-[1.02]', sample: 'Eu vejo gente com fome.' },
  { label: 'Título de seção', className: 'font-display text-[clamp(34px,4.6vw,56px)] leading-[1.05]', sample: 'As aparições da casa' },
  { label: 'Título de cartão', className: 'font-display text-[26px] leading-[1.1]', sample: 'O Sexto Sentido' },
  { label: 'Texto de destaque', className: 'text-xl text-mist', sample: 'Smash burgers de outro mundo.' },
  { label: 'Texto corrido', className: 'text-[17px]', sample: 'Duplo smash, cheddar derretido e cebola caramelizada.' },
  { label: 'Citação', className: 'text-[17px] font-medium italic', sample: '“Eles chegaram.” Os pedidos, no caso.' },
  { label: 'Rótulo', className: 'text-sm font-extrabold uppercase tracking-[0.16em] text-accent', sample: 'Cardápio em cartaz' },
  { label: 'Legenda', className: 'text-[15px] text-fog', sample: 'Lata de 350 ml.' },
]
