// EDITE AQUI: dados editáveis pelo time do Joel sem precisar mexer nos componentes

export const candidato = {
  nome: 'Joel Constância',
  cargo: 'Pré-candidato a Deputado Estadual',
  estado: 'Pernambuco',
  numero: '00000', // TODO: substituir pelo número oficial quando definido
  partido: 'PARTIDO', // TODO: substituir pelo partido
  tagline: 'Por uma Pernambuco mais justa, próspera e do nosso lado.',
}

// Link externo da vaquinha (Vakinha, Apoia.se, etc.)
export const linkVaquinha = 'https://www.vakinha.com.br/SUBSTITUIR_LINK_AQUI'

// Link de convite do grupo de WhatsApp
export const linkWhatsapp = 'https://chat.whatsapp.com/SUBSTITUIR_CODIGO_AQUI'

// Bio em parágrafos (cada item do array é um parágrafo)
export const bio = [
  'Joel Constância é um homem do povo, nascido e criado em Pernambuco, comprometido com as causas que importam pra quem vive a realidade do nosso estado.',
  'Com uma trajetória marcada pela luta por educação, saúde e oportunidade, Joel decidiu dar mais um passo: levar a voz das ruas ao parlamento estadual.',
  'EDITE ESTE TEXTO em src/data.js — adicione a biografia completa, conquistas, formação, atuação na comunidade e o que o motiva a se candidatar.',
]

// URL de embed do YouTube/Vimeo da apresentação do Joel
// Formato YouTube: https://www.youtube.com/embed/VIDEO_ID
export const videoApresentacao = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

// Eventos da agenda (próximos compromissos públicos)
export const agenda = [
  {
    data: '2026-05-25',
    hora: '19:00',
    titulo: 'Reunião com a comunidade de Boa Viagem',
    local: 'Centro Comunitário — Recife/PE',
    descricao: 'Conversa aberta com moradores sobre as demandas do bairro.',
  },
  {
    data: '2026-06-02',
    hora: '14:30',
    titulo: 'Caminhada no Centro de Olinda',
    local: 'Sítio Histórico — Olinda/PE',
    descricao: 'Caminhada pelas ruas históricas dialogando com comerciantes e moradores.',
  },
  {
    data: '2026-06-15',
    hora: '20:00',
    titulo: 'Live no Instagram — Saúde Pública em PE',
    local: '@joelconstancia',
    descricao: 'Bate-papo ao vivo sobre propostas para o SUS no estado.',
  },
  // Adicione mais eventos copiando o formato acima
]

// Entrevistas e aparições na imprensa (vídeos do YouTube)
// Os 3 primeiros aparecem na home. Se houver mais de 3, surge o botão "Ver todas" que leva pra /entrevistas
export const entrevistas = [
  {
    titulo: 'Entrevista — Programa Bom Dia Pernambuco',
    veiculo: 'TV Local',
    videoId: 'dQw4w9WgXcQ', // só o ID do YouTube
    data: 'Maio 2026',
  },
  {
    titulo: 'Joel fala sobre educação no estado',
    veiculo: 'Rádio Jornal',
    videoId: 'dQw4w9WgXcQ',
    data: 'Abril 2026',
  },
  {
    titulo: 'Debate sobre segurança pública',
    veiculo: 'Canal Independente',
    videoId: 'dQw4w9WgXcQ',
    data: 'Março 2026',
  },
  {
    titulo: 'Sabatina — Propostas para saúde em PE',
    veiculo: 'Portal NE10',
    videoId: 'dQw4w9WgXcQ',
    data: 'Março 2026',
  },
  {
    titulo: 'Joel no podcast Pernambuco em Foco',
    veiculo: 'Pernambuco em Foco',
    videoId: 'dQw4w9WgXcQ',
    data: 'Fevereiro 2026',
  },
  {
    titulo: 'Mesa-redonda sobre desenvolvimento regional',
    veiculo: 'TV Universitária',
    videoId: 'dQw4w9WgXcQ',
    data: 'Janeiro 2026',
  },
  // Adicione mais entrevistas copiando o formato acima
]

// Propostas de campanha
// Os 3 primeiros aparecem na home. Se houver mais de 3, surge o botão "Ver todas as propostas" que leva pra /propostas
// Categorias disponíveis: educacao, saude, seguranca, economia, infraestrutura, cultura, meioambiente, social
export const propostas = [
  {
    categoria: 'educacao',
    rotulo: 'Educação',
    titulo: 'Escola pública de qualidade',
    resumo:
      'Investir em formação de professores, infraestrutura escolar e tecnologia em sala de aula em todas as regiões do estado.',
    texto:
      'Defendo um plano estadual de educação que valorize quem está na linha de frente: o professor. Vamos lutar por reajuste salarial digno, plano de carreira justo e formação continuada. Além disso, vamos modernizar as escolas estaduais com laboratórios, bibliotecas e acesso à internet de qualidade. EDITE este texto em src/data.js com a proposta completa do Joel.',
  },
  {
    categoria: 'saude',
    rotulo: 'Saúde',
    titulo: 'SUS forte em todo o estado',
    resumo:
      'Ampliar unidades de saúde, reduzir filas de cirurgia e levar atendimento especializado para o interior.',
    texto:
      'Saúde pública é direito, não favor. Defendo a ampliação da rede estadual de UPAs e hospitais regionais, mutirões para zerar filas de cirurgias eletivas e fortalecimento da atenção básica. EDITE este texto em src/data.js.',
  },
  {
    categoria: 'seguranca',
    rotulo: 'Segurança',
    titulo: 'Segurança pública integrada',
    resumo:
      'Integração entre polícias, valorização do efetivo e programas de prevenção à violência nas comunidades.',
    texto:
      'Combater o crime exige inteligência, integração e respeito a quem está na rua todo dia. Vamos lutar por investimento em equipamento, formação e saúde mental dos agentes, junto com programas sociais que tirem jovens da criminalidade. EDITE este texto em src/data.js.',
  },
  {
    categoria: 'economia',
    rotulo: 'Economia',
    titulo: 'Emprego e renda pra Pernambuco',
    resumo:
      'Incentivo a pequenos empreendedores, simplificação tributária e atração de investimentos para o interior.',
    texto:
      'Pernambuco precisa gerar emprego de verdade. Vamos defender linhas de crédito acessíveis para pequenos negócios, capacitação profissional gratuita e incentivos para empresas que se instalarem no agreste e no sertão. EDITE este texto em src/data.js.',
  },
  {
    categoria: 'infraestrutura',
    rotulo: 'Infraestrutura',
    titulo: 'Estradas, saneamento e moradia',
    resumo:
      'Recuperar estradas estaduais, universalizar saneamento básico e criar programa estadual de moradia.',
    texto:
      'Não dá pra falar em dignidade sem esgoto, água tratada e estradas seguras. Vamos cobrar pelo cumprimento das metas de saneamento, recuperação das PE que ligam o interior e um programa estadual de habitação popular. EDITE este texto em src/data.js.',
  },
  {
    categoria: 'cultura',
    rotulo: 'Cultura',
    titulo: 'Cultura pernambucana valorizada',
    resumo:
      'Apoio a artistas locais, fortalecimento dos ciclos juninos e carnavalescos e descentralização dos recursos culturais.',
    texto:
      'Pernambuco é um dos maiores polos culturais do país e isso precisa virar política pública contínua. Vamos defender editais que cheguem ao interior, valorização dos mestres da cultura popular e apoio às nossas tradições. EDITE este texto em src/data.js.',
  },
  // Adicione mais propostas copiando o formato acima
]

// Redes sociais (deixe '' vazio em qualquer que não tiver pra esconder)
export const redesSociais = {
  instagram: 'https://instagram.com/joelconstancia',
  facebook: 'https://facebook.com/joelconstancia',
  twitter: 'https://twitter.com/joelconstancia',
  tiktok: 'https://tiktok.com/@joelconstancia',
  youtube: 'https://youtube.com/@joelconstancia',
}
