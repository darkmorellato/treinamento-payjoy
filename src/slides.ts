export interface CardItem {
  title: string;
  description: string;
  icon?: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface TipItem {
  id: number;
  title: string;
  description: string;
}

export interface ObjectionQuiz {
  question: string;
  options: { text: string; isCorrect: boolean }[];
  correctAnswer: string;
  tactic: string;
}

export interface Slide {
  id: number;
  type: 'title' | 'split' | 'cards' | 'timeline' | 'tips' | 'objection1' | 'objection2' | 'objection_grid' | 'closing';
  title: string;
  subtitle?: string;
  tag?: string;
  content?: string | string[];
  illustration?: string;
  cards?: CardItem[];
  steps?: StepItem[];
  tips?: TipItem[];
  quiz?: ObjectionQuiz;
  objections?: { question: string; answer: string; icon?: string }[];
  closingCards?: CardItem[];
  notes: string; // Speaker notes for presenter view
}

export const slides: Slide[] = [
  {
    id: 1,
    type: 'title',
    title: 'Crediário PayJoy na Mi Place',
    subtitle: 'Treinamento de Vendas — Como oferecer, aprovar e fechar vendas com segurança e transparência.',
    tag: 'REDE MI PLACE',
    illustration: 'handshake',
    notes: 'Apresente-se à equipe. Comece dando as boas-vindas e destacando que o objetivo deste treinamento é ensinar a usar o crediário PayJoy de forma segura e transparente para aumentar a conversão de vendas na loja.'
  },
  {
    id: 2,
    type: 'split',
    title: 'Por Que o Crediário Importa?',
    content: 'Vender no crediário é uma das nossas ferramentas mais poderosas para garantir que o cliente não saia da loja de mãos vazias.',
    illustration: 'smartphone',
    notes: 'Destaque a dor do cliente: muitos querem um smartphone premium, mas não têm limite suficiente no cartão de crédito. O crediário PayJoy é a ferramenta para resgatar essas vendas perdidas.'
  },
  {
    id: 3,
    type: 'cards',
    title: 'O Que é o PayJoy?',
    subtitle: 'O PayJoy é um sistema de financiamento onde o próprio aparelho serve como garantia de pagamento.',
    illustration: 'lock',
    cards: [
      {
        title: 'Entrada + Parcelas',
        description: 'O cliente paga uma entrada na loja e parcela o restante em semanas ou meses.'
      },
      {
        title: 'Bloqueio por Atraso',
        description: 'Em caso de atraso, o app bloqueia a tela do celular até a regularização do pagamento.'
      },
      {
        title: 'Sem Burocracia Bancária',
        description: 'Aprovação rápida apenas com RG/CPF — sem análise de crédito tradicional.'
      }
    ],
    notes: 'Explique a mecânica básica: o aparelho é a garantia através do app de bloqueio. Isso permite aprovar crédito sem a burocracia tradicional dos bancos, beneficiando clientes negativados ou autônomos.'
  },
  {
    id: 4,
    type: 'cards',
    title: 'Identifique o Cliente Ideal',
    subtitle: 'Ofereça o crediário proativamente ao perceber estes sinais durante o atendimento:',
    cards: [
      {
        title: 'Limite Insuficiente',
        description: 'O cliente quer um modelo premium (iPhone, Xiaomi, Realme), mas o cartão "não passa".',
        icon: 'credit-card'
      },
      {
        title: 'Pede Boleto ou Carnê',
        description: 'O cliente pergunta se a loja aceita pagamento parcelado fora do cartão.',
        icon: 'file-text'
      },
      {
        title: 'Sem Conta Bancária',
        description: 'O cliente prefere pagar em dinheiro vivo ou Pix e não tem conta em banco.',
        icon: 'wallet'
      }
    ],
    notes: 'Instrua os vendedores a serem proativos. Não esperem o cliente desistir. Ao menor sinal de limite insuficiente ou busca por parcelamento fora do cartão, apresente a alternativa do crediário.'
  },
  {
    id: 5,
    type: 'timeline',
    title: 'O Passo a Passo da Venda',
    steps: [
      {
        title: 'Abordagem Transparente',
        description: 'Explique crédito e bloqueio ao cliente'
      },
      {
        title: 'Simulação e Aprovação',
        description: 'RG/CPF e escolha do parcelamento'
      },
      {
        title: 'Recebimento da Entrada',
        description: 'Receba via Pix, dinheiro ou débito'
      },
      {
        title: 'Configuração e Bloqueio',
        description: 'Instale o app PayJoy e bloqueie'
      },
      {
        title: 'Registro no Sistema',
        description: 'Registre a venda no Controle de Vendas'
      }
    ],
    notes: 'REGRA DE OURO DA SEGURANÇA: Enfatize ao extremo que a entrada DEVE ser cobrada antes de abrir a caixa do aparelho ou instalar o aplicativo PayJoy. Isso protege a loja contra fraudes e desistências de última hora.'
  },
  {
    id: 6,
    type: 'tips',
    title: 'Dicas de Ouro para o Vendedor',
    illustration: 'award',
    tips: [
      {
        id: 1,
        title: 'Fale do bloqueio com naturalidade',
        description: 'Apresente como uma vantagem: é graças a essa garantia que o crédito foi aprovado na hora, sem burocracia.'
      },
      {
        id: 2,
        title: 'Foque na parcela, não no total',
        description: 'Use frases como: "Com apenas R$ 50 por semana você leva esse modelo hoje."'
      },
      {
        id: 3,
        title: 'Reforce a segurança do sistema',
        description: 'Lembre o cliente que um hard reset inutiliza o aparelho permanentemente — e a dívida continua ativa.'
      }
    ],
    notes: 'Oriente sobre a psicologia de vendas: falar do bloqueio de forma natural gera confiança. A parcela semanal parece muito menor e mais acessível que o total acumulado com juros.'
  },
  {
    id: 7,
    type: 'objection1',
    title: 'Objeção 1: "Os Juros São Altos"',
    tag: 'SIMULAÇÃO DE OBJEÇÕES',
    quiz: {
      question: 'O cliente diz: "No final o celular sai muito mais caro com esses juros. Compensa mais comprar à vista." Qual a melhor resposta?',
      options: [
        { text: 'A vista é melhor mesmo, mas se você não tem dinheiro, o juro é esse.', isCorrect: false },
        { text: 'Você tem razão — comprar à vista é o ideal. Mas o PayJoy é para quem precisa do aparelho hoje, sem ter o valor total. O importante é se a parcela semanal de R$ [Valor] cabe no seu bolso. Cabe?', isCorrect: true },
        { text: 'O juro é alto porque nós facilitamos o crédito sem banco. Vale a pena pagar mais.', isCorrect: false }
      ],
      correctAnswer: 'Você tem razão — comprar à vista é o ideal. O PayJoy é para quem precisa do aparelho hoje, mas está sem o valor total ou sem limite no cartão. O que importa é se essa parcela de R$ [Valor] por semana cabe no seu bolso. Se couber, o senhor(a) já sai da loja com o celular na mão agora mesmo.',
      tactic: 'Mude o foco do valor total (que assusta) para o valor da parcela (que é acessível).'
    },
    notes: 'Exercite a quebra de objeção com a equipe. A tática chave é concordar primeiro (reduz a resistência do cliente) e depois redirecionar para a acessibilidade da parcela semanal.'
  },
  {
    id: 8,
    type: 'objection2',
    title: 'Objeção 2: "E Se Bloquear de Surpresa?"',
    tag: 'SIMULAÇÃO DE OBJEÇÕES',
    illustration: 'bell',
    quiz: {
      question: 'O cliente diz: "E se eu esquecer de pagar e meu celular bloquear do nada na rua?" Como você responde?',
      options: [
        { text: 'O sistema nunca bloqueia de surpresa. O app manda notificações dias antes do vencimento. E se bloquear por imprevisto, pagou com Pix, desbloqueia na mesma hora automaticamente.', isCorrect: true },
        { text: 'Se o senhor pagar direitinho em dia, isso nunca vai acontecer.', isCorrect: false },
        { text: 'Bloqueia na hora do vencimento, mas aí o senhor liga no suporte e eles liberam no dia seguinte.', isCorrect: false }
      ],
      correctAnswer: 'Fique tranquilo — o sistema nunca bloqueia de surpresa. O app manda notificações dias antes do vencimento, como um assistente financeiro. E se por um imprevisto bloquear, é só pagar via Pix que a tela é liberada automaticamente, na mesma hora.',
      tactic: 'Transforme o bloqueio de "punição" para "lembrete". Ressalte a velocidade do desbloqueio com Pix.'
    },
    notes: 'Mostre ao vendedor como tranquilizar o cliente. Enfatize que o aplicativo avisa várias vezes antes do vencimento e o Pix libera a tela imediatamente.'
  },
  {
    id: 9,
    type: 'objection_grid',
    title: 'Objeções: Privacidade e Revenda',
    tag: 'QUEBRA DE OBJEÇÕES',
    objections: [
      {
        question: '"O app vai ver minhas fotos e conversas?"',
        answer: 'De jeito nenhum! A tecnologia PayJoy é certificada internacionalmente e funciona apenas na camada de segurança da tela. Não tem acesso a mensagens, fotos ou dados bancários. Sua privacidade é 100% garantida.',
        icon: 'shield-check'
      },
      {
        question: '"E se eu quiser formatar ou vender o celular?"',
        answer: 'Enquanto o financiamento estiver ativo, o aparelho não pode ser formatado — é a garantia do crédito. Ao quitar a última parcela, o app é desinstalado automaticamente e o celular fica livre. Para vender antes, basta quitar o saldo na loja.',
        icon: 'refresh-cw'
      }
    ],
    notes: 'Muitos clientes têm medo de espionagem. Esclareça que a criptografia do app apenas gerencia a tela, sem acesso a dados pessoais. Para revenda, explique que a quitação remove o app totalmente.'
  },
  {
    id: 10,
    type: 'closing',
    title: 'Encerre com uma Pergunta de Fechamento',
    subtitle: 'Sempre conduza o cliente ao próximo passo após quebrar uma objeção.',
    content: 'Entendeu como funciona? Fica bem mais leve pagar assim, né? Para essa simulação, o senhor(a) prefere deixar a entrada separada no dinheiro ou no Pix para já iniciarmos o cadastro?',
    illustration: 'handshake',
    closingCards: [
      {
        title: 'Transparência',
        description: 'Explique o bloqueio com naturalidade desde o início.',
        icon: 'eye'
      },
      {
        title: 'Foco na Parcela',
        description: 'Destaque o valor semanal/mensal, não o total.',
        icon: 'dollar-sign'
      },
      {
        title: 'Pergunte Sempre',
        description: 'Conduza o cliente ao próximo passo com uma pergunta direta.',
        icon: 'help-circle'
      }
    ],
    notes: 'Relembre a importância do fechamento: nunca encerre com silêncio. Faça uma pergunta de dupla escolha (Pix ou Dinheiro) que presuma que a venda está fechada.'
  }
];
