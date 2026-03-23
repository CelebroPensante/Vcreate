# VCreate Site

Site institucional da VCreate com foco em modelagem 3D, impressao 3D e engenharia reversa.

## Visao geral

O projeto e um site estatico (HTML, CSS e JavaScript) com:
- layout moderno e responsivo
- destaque para servicos e portfolio
- visualizacao de modelos 3D no navegador
- formulario de contato integrado com EmailJS
- navegacao otimizada para desktop e mobile

## Funcionalidades do site

### 1. Navegacao e estrutura
- menu fixo no topo com links para secoes internas: Inicio, Sobre, Servicos, Portfolio e Contato
- menu hamburger para mobile
- fechamento automatico do menu ao tocar em um link
- scroll suave para ancoras internas

### 2. Hero com midia em carrossel
- carrossel com imagens e video na area principal
- autoplay com ajuste de tempo para touch devices
- navegacao por indicadores
- suporte a swipe/drag horizontal com dedo e mouse
- pausa e retomada automatica do autoplay (inclusive quando a aba fica oculta)

### 3. Secao de servicos
- cards com os 3 pilares da empresa:
  - modelagem 3D
  - impressao 3D
  - engenharia reversa
- efeitos visuais e destaque de icones

### 4. Secao sobre
- texto institucional
- estatisticas de projetos, experiencia e clientes

### 5. Portfolio com carrossel e modelos 3D
- cards de projetos renderizados dinamicamente via JavaScript
- carrossel de projetos com:
  - botoes anterior/proximo
  - indicadores de pagina
  - autoplay
  - swipe/drag horizontal (dedo e mouse)
- visualizador 3D (Three.js) com carregamento de arquivos OBJ + MTL
- controles de interacao no modelo (rotacao/zoom apos clique)
- pausa do autoplay do portfolio durante interacao

### 6. Visualizacao 3D (Three.js)
- uso de:
  - THREE.js
  - OBJLoader
  - MTLLoader
  - OrbitControls
- iluminacao combinada (ambiente e direcional)
- materiais convertidos para padrao PBR (MeshStandardMaterial)
- rotacao automatica com damping
- ajuste responsivo em resize
- otimizacoes para mobile:
  - limite de pixel ratio
  - antialias reduzido em touch
  - comportamento para preferencia de movimento reduzido

### 7. Formulario de contato
- campos: nome, email, assunto e mensagem
- envio via EmailJS
- estados de feedback no botao:
  - enviando
  - sucesso
  - falha
- reset automatico apos envio bem-sucedido

### 8. Animacoes e UX
- animacao de entrada em elementos com IntersectionObserver
- microinteracoes em botoes e cards
- suporte a prefers-reduced-motion
- ajustes para melhor fluidez no mobile

### 9. Performance e responsividade
- breakpoints para tablet e celular
- lazy loading/decoding de imagens do hero
- preload de metadata para video
- content-visibility em secoes para reduzir custo de render
- comportamento pensado para nao quebrar o scroll vertical ao fazer swipe

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla)
- Three.js (0.128.0)
- Font Awesome
- Google Fonts
- EmailJS

## Estrutura do projeto

```text
Vcreate/
  index.html
  style.css
  script.js
  assets/
    olds/
      montagem.mtl
    photos/
    torre dupla/
      montagem_torre_dupla.mtl
```

## Onde editar cada parte
- conteudo e secoes da pagina: index.html
- visual e responsividade: style.css
- logica de interacao, carrosseis, 3D e formulario: script.js

## Como executar

Como e um site estatico, basta abrir o arquivo index.html no navegador.

Opcionalmente, use um servidor local simples para evitar bloqueios de assets em alguns ambientes.

## Observacoes importantes
- o formulario depende das chaves e templates do EmailJS configurados no codigo
- os modelos 3D dependem dos arquivos OBJ e MTL no diretorio assets
- existem funcoes JavaScript de modal de portfolio preparadas no codigo, mas sem markup correspondente no HTML atual

## Melhorias futuras sugeridas
- adicionar modal de detalhes de projeto no HTML para aproveitar as funcoes ja existentes
- mover configuracoes sensiveis do EmailJS para variaveis de ambiente em pipeline de deploy
- comprimir imagens e videos para reduzir tempo de carregamento em redes moveis
- adicionar SEO basico (meta description, Open Graph e favicon set completo)
