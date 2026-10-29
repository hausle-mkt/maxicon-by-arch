export default {
  name: 'casa',
  title: 'Casas (Residências Autorais)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome da Casa',
      type: 'string',
      description: 'Ex: Casa Alva, Casa Pinha, Casa Tempo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Identificador na URL (Slug)',
      type: 'slug',
      description: 'Clique em "Generate" para criar a URL da página (ex: casa-alva)',
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
      to: [{ type: 'escritorio' }],
      description: 'Selecione o escritório que assina o projeto desta residência',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status da Residência',
      type: 'string',
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
    {
      name: 'tagline',
      title: 'Conceito Curto / Tagline',
      type: 'string',
      description: 'Ex: Luminosidade Natural, Volumes Puros & Atmosfera Silenciosa',
    },
    {
      name: 'headline',
      title: 'Título Conceitual da Página',
      type: 'string',
      description: 'Ex: Luminosidade natural, volumes puros e atmosfera silenciosa no Noah Reserva Natural.',
    },
    {
      name: 'description',
      title: 'Texto Conceitual / Descrição Editorial',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Parágrafos conceituais explicando a arquitetura e diferenciais da casa',
    },
    {
      name: 'lot',
      title: 'Identificação do Lote',
      type: 'string',
      description: 'Ex: Lote A08, Lote D15',
    },
    {
      name: 'lotArea',
      title: 'Área do Terreno / Lote (m²)',
      type: 'string',
      description: 'Ex: 1.150 m²',
    },
    {
      name: 'privateArea',
      title: 'Área Privativa Construída (m²)',
      type: 'string',
      description: 'Ex: 560 m²',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'suites',
      title: 'Número de Suítes',
      type: 'string',
      description: 'Ex: 4 Suítes',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'garage',
      title: 'Vagas de Garagem',
      type: 'string',
      description: 'Ex: 4 Vagas',
    },
    {
      name: 'highlights',
      title: 'Destaques / Diferenciais da Residência',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Adicione tópicos de destaque (ex: "Conceito de luz zenital contínua", "Piscina com deck integrado", "Marcenaria artesanal")',
    },
    {
      name: 'heroImage',
      title: 'Foto Principal da Fachada (Hero)',
      type: 'image',
      description: 'Imagem de alta resolução da fachada da casa',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'conceptImage',
      title: 'Foto Conceitual (Card Quadrado)',
      type: 'image',
      description: 'Imagem secundária exibida no card chanfrado de conceito',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Galeria de Fotos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Legenda da Foto',
            },
          ],
        },
      ],
      description: 'Fotos internas e externas para a galeria / modal de navegação',
    },
    {
      name: 'videoCover',
      title: 'Capa do Vídeo Conceitual (Opcional)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'videoUrl',
      title: 'Link do Vídeo Conceitual (YouTube / Vimeo - Opcional)',
      type: 'url',
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
