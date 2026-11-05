export default {
  name: 'casa',
  title: 'Casas (Residências Autorais)',
  type: 'document',
  groups: [
    { name: 'geral', title: '1. Identificação & Autoria' },
    { name: 'conceito', title: '2. Conceito & Hero' },
    { name: 'metricas', title: '3. Métricas & Destaques' },
    { name: 'video', title: '4. Vídeo Conceitual' },
    { name: 'momentos', title: '5. Experiências / Momentos' },
    { name: 'galeria', title: '6. Galeria Completa' },
    { name: 'plantas', title: '7. Plantas Técnicas' },
    { name: 'apresentacao', title: '8. Material (PDF)' },
    { name: 'investimento', title: '9. Valor do Investimento' },
  ],
  fields: [
    // =========================================================================
    // 1. IDENTIFICAÇÃO & AUTORIA
    // =========================================================================
    {
      name: 'name',
      title: 'Nome da Residência',
      type: 'string',
      group: 'geral',
      description: 'Ex: Casa Pinha, Casa Alva, Casa Tempo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Identificador na URL (Slug)',
      type: 'slug',
      group: 'geral',
      description: 'Clique em "Generate" para gerar a URL da página (ex: casa-pinha)',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'architect',
      title: 'Escritório de Arquitetura Responsável',
      type: 'reference',
      group: 'geral',
      to: [{ type: 'escritorio' }],
      description: 'Selecione o escritório de arquitetura que assina o projeto desta casa',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'condominium',
      title: 'Condomínio / Empreendimento',
      type: 'string',
      group: 'geral',
      description: 'Ex: Noah Reserva Natural',
      initialValue: 'Noah Reserva Natural',
    },
    {
      name: 'status',
      title: 'Status da Residência',
      type: 'string',
      group: 'geral',
      options: {
        list: [
          { title: 'Disponível para Aquisição', value: 'Disponível' },
          { title: 'Breve Lançamento', value: 'Breve Lançamento' },
          { title: 'Oportunidade Exclusiva', value: 'Oportunidade Exclusiva' },
          { title: 'Reservada / Vendida', value: 'Vendida' },
        ],
        layout: 'radio',
      },
      initialValue: 'Disponível',
    },

    // =========================================================================
    // 2. CONCEITO & HERO
    // =========================================================================
    {
      name: 'heroImage',
      title: 'Foto Principal da Fachada (Hero)',
      type: 'image',
      group: 'conceito',
      description: 'Imagem principal de alta resolução da fachada, exibida no topo da página',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroSlider',
      title: 'Slider de Imagens da Hero (Opcional)',
      type: 'array',
      group: 'conceito',
      description: 'Fotos adicionais para o slider inicial com transição e barrinhas de navegação (ex: piscina, fire pit, fachada lateral). Se vazio, exibirá apenas a foto principal.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Legenda / Descrição curta',
              description: 'Ex: Fachada Principal, Piscina com Borda Infinita',
            },
          ],
        },
      ],
    },
    {
      name: 'conceptImage',
      title: 'Foto Conceitual (Card Chanfrado)',
      type: 'image',
      group: 'conceito',
      description: 'Imagem quadrada exibida no card cinza chanfrado ao lado do conceito editorial',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tagline',
      title: 'Conceito Curto / Tagline',
      type: 'string',
      group: 'conceito',
      description: 'Ex: Luminosidade Natural, Volumes Puros & Atmosfera Silenciosa',
    },
    {
      name: 'headline',
      title: 'Título Conceitual Principal (H2)',
      type: 'string',
      group: 'conceito',
      description: 'Ex: Arquitetura que abraça. / Volumes puros e atmosfera silenciosa.',
    },
    {
      name: 'description',
      title: 'Texto Conceitual / Editorial',
      type: 'array',
      group: 'conceito',
      of: [{ type: 'block' }],
      description: 'Parágrafos conceituais explicando a inspiração, relação com a natureza e diferenciais do projeto',
    },

    // =========================================================================
    // 3. MÉTRICAS & DESTAQUES
    // =========================================================================
    {
      name: 'lot',
      title: 'Identificação do Lote',
      type: 'string',
      group: 'metricas',
      description: 'Ex: Lote D15, Lote A08',
    },
    {
      name: 'lotArea',
      title: 'Área do Terreno / Lote',
      type: 'string',
      group: 'metricas',
      description: 'Ex: 811,31 m²',
    },
    {
      name: 'privateArea',
      title: 'Área Privativa Construída',
      type: 'string',
      group: 'metricas',
      description: 'Ex: 434,40 m²',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'suites',
      title: 'Número de Suítes',
      type: 'string',
      group: 'metricas',
      description: 'Ex: 3 suítes ou 4 suítes',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'garage',
      title: 'Vagas de Garagem',
      type: 'string',
      group: 'metricas',
      description: 'Ex: 3 vagas ou 4 vagas',
    },
    {
      name: 'highlights',
      title: 'Tópicos de Destaque da Casa',
      type: 'array',
      group: 'metricas',
      of: [{ type: 'string' }],
      description: 'Itens exibidos nas duas colunas do card (ex: "Salão de festas integrado à piscina", "Piscina com deck e fire pit", "Jardim interno", "Living com lareira", "Adega no living")',
    },

    // =========================================================================
    // 4. VÍDEO CONCEITUAL
    // =========================================================================
    {
      name: 'videoHeadline',
      title: 'Frase de Destaque da Seção de Vídeo',
      type: 'string',
      group: 'video',
      description: 'Ex: Não é apenas uma casa ao lado da natureza. É uma casa desenhada a partir dela.',
    },
    {
      name: 'videoCover',
      title: 'Capa do Vídeo Conceitual',
      type: 'image',
      group: 'video',
      options: { hotspot: true },
      description: 'Imagem estática de capa que aparece antes do play',
    },
    {
      name: 'videoUrl',
      title: 'Link do Vídeo (YouTube, Vimeo ou MP4)',
      type: 'url',
      group: 'video',
      description: 'Insira o link para reprodução do vídeo conceitual da residência',
    },

    // =========================================================================
    // 5. EXPERIÊNCIAS / MOMENTOS DE VIDA (STACK CARDS)
    // =========================================================================
    {
      name: 'moments',
      title: 'Momentos de Experiência (Stack Cards)',
      type: 'array',
      group: 'momentos',
      description: 'Cards interativos sanfona na seção "Onde arquitetura se transforma em experiência" (ex: Sacada protagonista, Escritório independente, Living flexível, Suíte master, Lazer para receber)',
      of: [
        {
          name: 'momentItem',
          title: 'Momento',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Foto do Momento',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'collapsedLabel',
              title: 'Rótulo da Aba Recolhida',
              type: 'string',
              description: 'Texto vertical visível quando o card está recolhido (ex: Sacada protagonista, Suíte master)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Título do Momento',
              type: 'string',
              description: 'Título visível no card expandido (ex: Suíte master conectada à natureza)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Descrição do Momento',
              type: 'text',
              rows: 3,
              description: 'Breve parágrafo descrevendo a vivência neste ambiente',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'collapsedLabel',
              media: 'image',
            },
          },
        },
      ],
    },

    // =========================================================================
    // 6. GALERIA COMPLETA DE FOTOS
    // =========================================================================
    {
      name: 'gallery',
      title: 'Galeria Completa de Fotos da Casa',
      type: 'array',
      group: 'galeria',
      description: 'Todas as imagens da residência para o carrossel completo de fotos e ampliação em tela cheia (fachadas noturnas, interiores, lazer, detalhes construtivos)',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Legenda da Foto',
              description: 'Ex: Piscina com Borda Infinita, Living Integrado com Pé-direito Amplo',
            },
          ],
        },
      ],
    },

    // =========================================================================
    // 7. PLANTAS E PRANCHAS TÉCNICAS
    // =========================================================================
    {
      name: 'plants',
      title: 'Plantas e Pranchas Técnicas',
      type: 'array',
      group: 'plantas',
      description: 'Álbum técnico da residência (Planta Baixa Pav. Principal, Subsolo, Cobertura, Cortes e Fachadas)',
      of: [
        {
          name: 'plantItem',
          title: 'Prancha Técnica',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Arquivo da Planta / Prancha',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Título Completo da Prancha',
              type: 'string',
              description: 'Ex: Planta Baixa — Pavimento Principal, Elevação — Fachada Principal, Corte Arquitetônico',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'shortLabel',
              title: 'Rótulo Curto da Miniatura',
              type: 'string',
              description: 'Ex: Pav. Principal, Subsolo & Garagem, Cobertura, Corte, Fachada Frontal',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'shortLabel',
              media: 'image',
            },
          },
        },
      ],
    },

    // =========================================================================
    // 8. MATERIAL DE APRESENTAÇÃO (PDF)
    // =========================================================================
    {
      name: 'presentationHeadline',
      title: 'Título da Seção de Apresentação',
      type: 'string',
      group: 'apresentacao',
      initialValue: 'Explore o projeto completo.',
      description: 'Padrão: Explore o projeto completo.',
    },
    {
      name: 'presentationDescription',
      title: 'Texto Convidativo da Seção',
      type: 'text',
      group: 'apresentacao',
      rows: 3,
      initialValue: 'Conheça plantas, implantação, ambientes, materiais, soluções construtivas, tecnologia e todos os detalhes que fazem desta residência uma obra única.',
    },
    {
      name: 'presentationPdf',
      title: 'Arquivo PDF da Apresentação Completa',
      type: 'file',
      group: 'apresentacao',
      options: {
        accept: '.pdf',
      },
      description: 'Faça upload do arquivo PDF (catálogo/memorial) para download automático pelo modal do site',
    },
    {
      name: 'presentationPdfExternalUrl',
      title: 'Link Externo Alternativo do PDF (Opcional)',
      type: 'url',
      group: 'apresentacao',
      description: 'Caso o arquivo PDF já esteja hospedado em um link direto ou Google Drive público',
    },
    {
      name: 'presentationCoverImage',
      title: 'Imagem Ilustrativa ao Lado do Download (Opcional)',
      type: 'image',
      group: 'apresentacao',
      options: { hotspot: true },
      description: 'Imagem do corte esquemático ou perspectiva ao lado do botão de download',
    },

    // =========================================================================
    // 9. VALOR DO INVESTIMENTO
    // =========================================================================
    {
      name: 'price',
      title: 'Valor do Investimento Estimado',
      type: 'string',
      group: 'investimento',
      description: 'Ex: R$ 2.600.000 ou Sob Consulta',
    },
    {
      name: 'pricePrefix',
      title: 'Prefixo do Valor',
      type: 'string',
      group: 'investimento',
      initialValue: 'A PARTIR DE',
      description: 'Padrão: A PARTIR DE',
    },
    {
      name: 'priceSubtitle',
      title: 'Subtítulo da Composição do Investimento',
      type: 'string',
      group: 'investimento',
      initialValue: 'ARQUITETURA + LOTE NO NOAH + CONSTRUÇÃO',
      description: 'Ex: ARQUITETURA + LOTE NO NOAH + CONSTRUÇÃO',
    },
    {
      name: 'priceTooltip',
      title: 'Texto Explicativo do Balão de Informações (Tooltip)',
      type: 'text',
      group: 'investimento',
      rows: 4,
      initialValue: 'Valor estimado para lote, projeto arquitetônico e construção da residência, conforme as especificações-base apresentadas. Não inclui projeto de interiores, mobiliário, decoração e eletrodomésticos. Personalizações e alterações nas especificações podem modificar o investimento final.',
      description: 'Explicação detalhada exibida ao passar o mouse ou clicar no ícone de informação ao lado do valor',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'architect.name',
      media: 'heroImage',
    },
  },
}
