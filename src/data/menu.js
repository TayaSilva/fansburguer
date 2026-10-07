// Cardápio. Preços e ingredientes são EXEMPLOS: troque pelos reais.
// Para usar foto, preencha `image` com o caminho (ex.: '/fotos/sexto-sentido.jpg' dentro de /public).

export const CATEGORIES = [
  { id: 'lanches', label: 'Lanches' },
  { id: 'porcoes', label: 'Porções' },
  { id: 'bebidas', label: 'Bebidas' },
]

export const MENU = [
  {
    id: 'sexto', cat: 'lanches', tag: 'SESSÃO 01', name: 'O Sexto Sentido', price: 34, image: '/img/sexto-sentido.png',
    quote: '“Eu vejo gente com fome. O tempo todo.”',
    desc: 'Duplo smash, cheddar derretido, cebola caramelizada e um molho que ninguém viu chegando.',
    ing: 'Pão brioche, 2 smashes de 90 g, cheddar, cebola caramelizada e molho da casa.',
  },
  {
    id: 'polter', cat: 'lanches', tag: 'SESSÃO 02', name: 'Poltergeist', price: 36, image: '/img/poltergeist.png',
    quote: '“Eles chegaram.” Os pedidos, no caso.',
    desc: 'Smash apimentado com jalapeño, pepper jack e maionese defumada. Faz os talheres tremerem.',
    ing: 'Pão brioche, 2 smashes de 90 g, pepper jack, jalapeño e maionese defumada.',
  },
  {
    id: 'iluminado', cat: 'lanches', tag: 'SESSÃO 03', name: 'O Iluminado', price: 38, image: '/img/iluminado.png',
    quote: '“Olha o lanche aí!” — direto pela porta.',
    desc: 'Bacon crocante, ovo de gema mole e queijo prato. Só trabalho e nenhum burger deixam qualquer um maluco.',
    ing: 'Pão brioche, smash de 120 g, bacon, ovo, queijo prato e maionese da casa.',
  },
  {
    id: 'outros', cat: 'lanches', tag: 'SESSÃO 04', name: 'Os Outros', price: 32, image: '/img/outros.png',
    quote: 'Ninguém percebe que não é carne. Até o final.',
    desc: 'Burger vegetal na chapa, queijo, picles da casa e rúcula. A reviravolta vem na última mordida.',
    ing: 'Pão brioche, burger vegetal, queijo, picles, rúcula e maionese verde.',
  },
  {
    id: 'ghost', cat: 'lanches', tag: 'SESSÃO 05', name: 'Ghost: Do Outro Lado da Chapa', price: 68, image: '/img/ghost.png',
    quote: '— Eu te amo. — Idem.',
    desc: 'Combo para dois: dois smashes, uma batata para dividir e um milkshake com dois canudos.',
    ing: '2 smashes simples com cheddar, 1 batata grande e 1 milkshake de 500 ml.',
  },
  {
    id: 'paranormal', cat: 'porcoes', tag: 'PORÇÃO', name: 'Atividade Paranormal', price: 24, image: '/img/123.webp',
    quote: 'Some do prato às 3h da manhã. Sem explicação.',
    desc: 'Batata rústica com cheddar, bacon e cebolinha. As câmeras nunca pegam quem comeu a última.',
    ing: 'Batata rústica, cheddar cremoso, bacon em cubos e cebolinha.',
  },
  {
    id: 'aneis', cat: 'porcoes', tag: 'PORÇÃO', name: 'Anéis do Além', price: 22, image: null,
    quote: 'Um anel para cada dedo fantasma.',
    desc: 'Anéis de cebola empanados e crocantes, para dividir ou esconder da mesa.',
    ing: 'Cebola empanada, sal temperado e maionese defumada para mergulhar.',
  },
  {
    id: 'ecto', cat: 'bebidas', tag: 'BEBIDA', name: 'Ectoplasma', price: 14, image: null,
    quote: 'Verde, gelada e levemente suspeita.',
    desc: 'Limonada da casa batida com hortelã. Brilha no copo, refresca na alma.',
    ing: 'Limão, hortelã fresca, açúcar e muito gelo. 400 ml.',
  },
  {
    id: 'nevoa', cat: 'bebidas', tag: 'BEBIDA', name: 'Névoa da Meia-Noite', price: 22, image: null,
    quote: 'Chega devagar e toma conta de tudo.',
    desc: 'Milkshake cremoso de baunilha com calda de caramelo.',
    ing: 'Sorvete de baunilha, leite, calda de caramelo e chantilly. 500 ml.',
  },
  {
    id: 'chope', cat: 'bebidas', tag: 'BEBIDA · +18', name: 'Chope Espectral', price: 16, image: null,
    quote: 'O colarinho é o único fantasma permitido no copo.',
    desc: 'Chope pilsen bem gelado, tirado na hora.',
    ing: 'Chope pilsen. 300 ml. Venda apenas para maiores de 18 anos.',
  },
  {
    id: 'refri', cat: 'bebidas', tag: 'BEBIDA', name: 'Refrigerante', price: 8, image: null,
    quote: 'O clássico que nunca morre.',
    desc: 'Lata gelada. Escolha o sabor no balcão ou nas observações.',
    ing: 'Lata de 350 ml. [SEUS SABORES]',
  },
  {
    id: 'agua', cat: 'bebidas', tag: 'BEBIDA', name: 'Água do Além', price: 6, image: null,
    quote: 'Transparente como todo bom fantasma.',
    desc: 'Água mineral, com ou sem gás.',
    ing: 'Garrafa de 500 ml.',
  },
]

export const formatBRL = (n) => 'R$ ' + n.toFixed(2).replace('.', ',')
