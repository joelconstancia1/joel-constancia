// =============================================================================
// GUIA DE EDIÇÃO — tudo que aparece no site é controlado por este arquivo
// =============================================================================
//
//  FOTO DO CANDIDATO (seção inicial)
//  → Salve a foto em:  public/joel.jpg
//  → Depois abra:      src/components/Hero.jsx  (linha ~27)
//    Troque o bloco de placeholder pela tag:
//    <img src="/joel.jpg" alt="Joel Constância" className="absolute inset-0 w-full h-full object-cover" />
//
//  NOME, NÚMERO, PARTIDO, SLOGAN
//  → Edite o objeto `candidato` abaixo
//
//  LINK DA VAKINHA (botão "Apoie a campanha")
//  → Edite `linkVaquinha` abaixo
//  → Aparece em: página inicial (hero) e página de propostas (/propostas)
//
//  LINK DO WHATSAPP (botão "Entre no nosso WhatsApp")
//  → Edite `linkWhatsapp` abaixo
//  → Aparece em: página inicial (hero) e botão flutuante no rodapé
//
//  REDES SOCIAIS (ícones no rodapé e barra lateral)
//  → Edite `redesSociais` abaixo
//  → Deixe o valor como '' para esconder qualquer rede
//
//  AGENDA / EVENTOS
//  → Edite o array `agenda` abaixo
//  → Os 3 primeiros aparecem na home. Se houver mais de 3, surge botão "Ver toda a agenda" → /agenda
//  → A página /agenda mostra todos
//
//  ENTREVISTAS / VÍDEOS DA IMPRENSA
//  → Edite o array `entrevistas` abaixo (use só o ID do YouTube, ex: 'dQw4w9WgXcQ')
//  → Os 3 primeiros aparecem na home. Se houver mais de 3, surge botão "Ver todas" → /entrevistas
//  → A página /entrevistas mostra todas
//
//  PROPOSTAS DE CAMPANHA
//  → Edite o array `propostas` abaixo
//  → Os 3 primeiros aparecem na home. Se houver mais de 3, surge botão "Ver todas" → /propostas
//  → A página /propostas mostra todas com texto completo
//  → Para adicionar vídeo num card, inclua: videoId: 'ID_DO_YOUTUBE'
//  → O vídeo aparece tanto no card da home quanto na página /propostas
//
// =============================================================================

// ---------------- Dados do candidato ----------------------------------------

export const candidato = {
  nome: 'Joel Constância',
  cargo: 'Pré-candidato a Deputado Estadual',
  estado: 'Pernambuco',
  numero: '00000',   // ← substitua pelo número oficial quando definido
  partido: 'PARTIDO', // ← substitua pelo partido
  tagline: 'Por uma Pernambuco mais justa, próspera e do nosso lado.',
}

// ---------------- Links externos ---------------------------------------------

// Vakinha / Apoia.se / qualquer plataforma de financiamento coletivo
// Aparece em: hero (botão "Apoie a campanha") e página /propostas
export const linkVaquinha = 'https://apoiar.me/joel'

// Link de convite do grupo de WhatsApp
// Aparece em: hero (botão "Entre no nosso WhatsApp") e botão flutuante
export const linkWhatsapp = 'https://chat.whatsapp.com/DyXSAkqktf57wrJkKJhPsJ?mode=wwt'

// ---------------- Biografia --------------------------------------------------

// Cada item do array vira um parágrafo na seção "Quem é Joel"
export const bio = [
  'Joel Constância é um homem do povo, nascido e criado em Pernambuco, comprometido com as causas que importam pra quem vive a realidade do nosso estado.',
  'Com uma trajetória marcada pela luta por educação, saúde e oportunidade, Joel decidiu dar mais um passo: levar a voz das ruas ao parlamento estadual.',
  'EDITE ESTE TEXTO em src/data.js — adicione a biografia completa, conquistas, formação, atuação na comunidade e o que o motiva a se candidatar.',
]

// Vídeo de apresentação do Joel (seção "Quem é Joel")
// Formato: https://www.youtube.com/embed/ID_DO_VIDEO
export const videoApresentacao = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

// ---------------- Agenda -----------------------------------------------------

// Os 3 primeiros aparecem na home. Se houver mais de 3, surge o botão
// "Ver toda a agenda" que leva para /agenda (página com todos os eventos).
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
  {
    data: '2026-06-28',
    hora: '10:00',
    titulo: 'Visita às escolas estaduais do Agreste',
    local: 'Caruaru/PE',
    descricao: 'Visita a unidades escolares para ouvir professores e diretores sobre as condições de ensino.',
  },
  {
    data: '2026-07-05',
    hora: '16:00',
    titulo: 'Ato público em defesa do SUS',
    local: 'Praça do Derby — Recife/PE',
    descricao: 'Mobilização junto a profissionais de saúde e movimentos sociais pelo fortalecimento do sistema público.',
  },
  {
    data: '2026-07-12',
    hora: '09:00',
    titulo: 'Reunião com lideranças do Sertão',
    local: 'Petrolina/PE',
    descricao: 'Encontro com representantes de municípios do sertão para debater infraestrutura e desenvolvimento regional.',
  },
  // Adicione mais eventos copiando o formato acima
]

// ---------------- Entrevistas / imprensa -------------------------------------

// Os 3 primeiros aparecem na home. Se houver mais de 3, surge o botão
// "Ver todas" que leva para /entrevistas (página com todos os vídeos).
// videoId:       apenas o ID do YouTube (parte final da URL: youtube.com/watch?v=ESSE_TRECHO)
// videoVertical: true para vídeos verticais (9:16, ex: Reels/Shorts)
export const entrevistas = [
  {
    titulo: 'Podcast com Joel Constância',
    veiculo: 'YouTube',
    videoId: 'hxnv8-ONEwg',
    data: '2026',
  },
  {
    titulo: 'Podcast com Joel Constância',
    veiculo: 'YouTube',
    videoId: 'cu7bCWjvGXs',
    data: '2026',
  },
  // Adicione mais entrevistas copiando o formato acima
]

// ---------------- Propostas --------------------------------------------------

// Os 3 primeiros aparecem na home. Se houver mais de 3, surge o botão
// "Ver todas as propostas" que leva para /propostas (página completa).
//
// Campos obrigatórios: categoria, rotulo, titulo, resumo, texto
// Campos opcionais:    videoId       → adiciona vídeo do YouTube no card
//                      videoVertical → true para vídeos verticais (9:16, ex: Reels/Shorts)
//                      (aparecem tanto na home quanto na página /propostas)
//
// Categorias disponíveis:
//   educacao | saude | seguranca | economia | infraestrutura | cultura | meioambiente | social
export const propostas = [
  {
    categoria: 'social',
    rotulo: 'Gestão Pública',
    titulo: 'Pressionar prefeitos por concursos públicos',
    resumo:
      'A maioria dos prefeitos do estado de PE usam a prefeitura como cabide de emprego e isso precisa acabar.',
    texto:
      'A maioria dos prefeitos do estado de PE usam a prefeitura como cabide de emprego e isso precisa acabar.',
    videoId: 'XdPuyfTeHKw',
    videoVertical: true,
  },
  {
    categoria: 'economia',
    rotulo: 'Economia',
    titulo: 'Fim do IPVA',
    resumo:
      'O IPVA é roubo, não devemos pagar imposto sobre a existência de um bem.',
    texto:
      'O IPVA é roubo, não devemos pagar imposto sobre a existência de um bem.',
    videoId: 'Zpj6Z7Y_ND0',
    videoVertical: true,
  },
  {
    categoria: 'infraestrutura',
    rotulo: 'Municípios',
    titulo: 'Pressionar municípios para resolver problemas estruturais',
    resumo:
      'A maioria dos municípios só realizam obras eleitoreiras, não pensam a longo prazo.',
    texto:
      'A maioria dos municípios só realizam obras eleitoreiras, não pensam a longo prazo. Irei continuar pressionando os municípios do nosso estado para que pensem a longo prazo e deixem de enganar a população.',
    videoId: 'L7j8St6ZrxA',
    videoVertical: true,
  },
  {
    categoria: 'social',
    rotulo: 'Transparência',
    titulo: 'Leis gerenciais',
    resumo:
      'Criar leis que obriguem os municípios a terem mais transparência e eficiência.',
    texto:
      'Criar leis que obriguem os municípios a terem mais transparência e eficiência, como: controle de ponto dos servidores, limite de gastos com shows e propaganda, e criação de índices objetivos para medir saúde, segurança e educação. Assim, a população poderá saber de forma clara se o prefeito está fazendo uma boa gestão ou sendo incompetente.',
    videoId: 'v8RQcHdbef8',
    videoVertical: true,
  },
  // Adicione mais propostas copiando o formato acima
]

// ---------------- Redes sociais ----------------------------------------------

// Deixe o valor como '' (string vazia) para esconder qualquer rede social
// Aparece em: rodapé e barra de redes sociais
export const redesSociais = {
  instagram: 'https://instagram.com/joelconstancia',
  facebook: 'https://facebook.com/joelconstancia',
  twitter: 'https://twitter.com/joelconstancia',
  tiktok: 'https://tiktok.com/@joelconstancia',
  youtube: 'https://youtube.com/@joelconstancia',
}
