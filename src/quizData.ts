export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const payjoyQuizData: QuizQuestion[] = [
  {
    id: 1,
    question: "O que é o PayJoy e qual é a sua principal garantia?",
    options: [
      "Um empréstimo pessoal com garantia de veículo.",
      "Um sistema de financiamento onde o próprio aparelho celular serve como garantia.",
      "Um cartão de crédito exclusivo da loja.",
      "Um consórcio para compra de eletrônicos a longo prazo."
    ],
    correctAnswer: "Um sistema de financiamento onde o próprio aparelho celular serve como garantia.",
    explanation: "A base do PayJoy é que a garantia de pagamento é atrelada ao uso do próprio smartphone financiado."
  },
  {
    id: 2,
    question: "Qual o perfil ideal do cliente para o qual devemos oferecer o PayJoy proativamente?",
    options: [
      "Clientes que buscam pagar à vista com desconto em dinheiro.",
      "Clientes que possuem um alto limite disponível no cartão de crédito.",
      "Clientes sem limite no cartão, que pedem boleto ou preferem pagar em dinheiro/Pix.",
      "Clientes que desejam comprar apenas capinhas, películas e acessórios."
    ],
    correctAnswer: "Clientes sem limite no cartão, que pedem boleto ou preferem pagar em dinheiro/Pix.",
    explanation: "Esse é o cliente exato do PayJoy: ele quer o celular, pode pagar por mês/semana, mas não tem acesso a crédito convencional."
  },
  {
    id: 3,
    question: "Na ordem correta do passo a passo da venda, o que deve ser feito imediatamente ANTES de abrir a caixa do aparelho novo?",
    options: [
      "Instalar o aplicativo do PayJoy.",
      "Registrar a venda no sistema Controle de Vendas.",
      "Explicar sobre a privacidade dos dados da tela.",
      "Receber o valor da entrada (Pix, dinheiro ou débito)."
    ],
    correctAnswer: "Receber o valor da entrada (Pix, dinheiro ou débito).",
    explanation: "A caixa só deve ser aberta e o aparelho configurado após a confirmação do pagamento da entrada."
  },
  {
    id: 4,
    question: "O cliente reclama que o valor final do aparelho fica muito caro com os juros. Qual é a melhor abordagem?",
    options: [
      "Concordar e sugerir que ele compre um celular bem mais barato à vista.",
      "Dizer que as taxas são altas mesmo porque o risco de calote é grande.",
      "Mudar o foco para o valor da parcela, mostrando que ela cabe no bolso para ele levar o aparelho hoje.",
      "Oferecer um desconto no valor da entrada tirando da própria comissão."
    ],
    correctAnswer: "Mudar o foco para o valor da parcela, mostrando que ela cabe no bolso para ele levar o aparelho hoje.",
    explanation: "Ao destacar a parcela acessível, o vendedor valida a conveniência de resolver o problema do cliente na hora sem burocracia."
  },
  {
    id: 5,
    question: "Como o vendedor deve explicar o funcionamento do bloqueio do aparelho em caso de atraso na parcela?",
    options: [
      "O aparelho é bloqueado de surpresa logo no primeiro minuto do dia de atraso.",
      "O aplicativo envia notificações prévias para lembrar do pagamento e, caso bloqueie, a tela é liberada automaticamente assim que pago via Pix.",
      "O celular queima o chip de rede e precisa ser levado de volta até a loja.",
      "O bloqueio é feito de forma manual e um técnico precisará ir até o cliente."
    ],
    correctAnswer: "O aplicativo envia notificações prévias para lembrar do pagamento e, caso bloqueie, a tela é liberada automaticamente assim que pago via Pix.",
    explanation: "Essa explicação tranquiliza o cliente, mostrando que o bloqueio não é definitivo e é fácil de ser resolvido."
  },
  {
    id: 6,
    question: "Um cliente demonstra medo de que o app roube suas fotos e leia o WhatsApp. O que você deve responder?",
    options: [
      "O aplicativo tem acesso a tudo por segurança, mas a empresa promete não olhar.",
      "A tecnologia é certificada, atua apenas no bloqueio da tela e não tem autorização para acessar fotos ou mensagens.",
      "O acesso às fotos é necessário apenas no primeiro dia para validar a identidade.",
      "O aplicativo só tem capacidade para ler mensagens SMS."
    ],
    correctAnswer: "A tecnologia é certificada, atua apenas no bloqueio da tela e não tem autorização para acessar fotos ou mensagens.",
    explanation: "Essa resposta transmite autoridade e deixa claro os limites tecnológicos do aplicativo, garantindo a privacidade."
  },
  {
    id: 7,
    question: "O que acontece se o cliente tentar formatar (dar hard reset) no celular para tentar burlar o bloqueio?",
    options: [
      "O aplicativo é desinstalado com sucesso e a dívida vai para o SPC.",
      "O sistema aciona um bloqueio definitivo e inutiliza o aparelho para uso normal.",
      "O celular volta às configurações de fábrica normalmente.",
      "A garantia do fabricante cobre a formatação e a loja dá um aparelho novo."
    ],
    correctAnswer: "O sistema aciona um bloqueio definitivo e inutiliza o aparelho para uso normal.",
    explanation: "O hard reset aciona um modo de segurança impenetrável, fazendo o cliente perder o uso do celular."
  },
  {
    id: 8,
    question: "Após a entrega do aparelho já configurado, qual é o último passo interno obrigatório do vendedor?",
    options: [
      "Pedir para o cliente fazer um vídeo recomendando a loja.",
      "Registrar imediatamente os dados da transação, valores e parcelas no sistema de Controle de Vendas.",
      "Bloquear a tela do celular do cliente manualmente para testar.",
      "Apagar o cadastro do cliente do sistema para proteger a privacidade."
    ],
    correctAnswer: "Registrar imediatamente os dados da transação, valores e parcelas no sistema de Controle de Vendas.",
    explanation: "Sem este registro no app Controle de Vendas, a meta da equipe e o caixa da loja não são atualizados corretamente."
  },
  {
    id: 9,
    question: "O cliente pergunta: 'E se eu quiser vender o celular daqui a três meses?' Como instruí-lo?",
    options: [
      "Ele pode vender tranquilamente, basta o comprador baixar o app e assumir as parcelas.",
      "É totalmente proibido vender o celular em qualquer circunstância.",
      "Ele deve comparecer à loja com o comprador e quitar o saldo devedor restante para liberar o aparelho.",
      "Basta desativar a permissão de administrador nas configurações e vender."
    ],
    correctAnswer: "Ele deve comparecer à loja com o comprador e quitar o saldo devedor restante para liberar o aparelho.",
    explanation: "A única forma de revender o aparelho legalmente e sem bloqueios é antecipando e quitando as parcelas."
  },
  {
    id: 10,
    question: "Qual é a postura ideal do vendedor ao ter que explicar o bloqueio da tela na abordagem inicial?",
    options: [
      "Falar rápido ou tentar esconder essa informação até o cliente pagar a entrada.",
      "Ser 100% transparente e falar com naturalidade, mostrando que essa ferramenta garantiu a aprovação.",
      "Usar um tom ameaçador e rígido para gerar medo.",
      "Dizer que o bloqueio raramente funciona e a empresa não é rigorosa."
    ],
    correctAnswer: "Ser 100% transparente e falar com naturalidade, mostrando que essa ferramenta garantiu a aprovação.",
    explanation: "A transparência aliada a uma explicação positiva constrói confiança com o cliente desde o início."
  },
  {
    id: 11,
    question: "Você simula o crediário, o cliente paga, mas na hora de vincular o CPF no app dá erro de 'financiamento ativo'. O que deu errado?",
    options: [
      "Nada deu errado, é apenas uma falha do servidor e o cliente pode levar o aparelho.",
      "O vendedor errou ao abrir a caixa antes de confirmar a aprovação final e liberação do CPF no portal.",
      "O cliente tentou usar um CPF falso e o app bloqueou preventivamente.",
      "O vendedor esqueceu de formatar o celular antes de instalar o app."
    ],
    correctAnswer: "O vendedor errou ao abrir a caixa antes de confirmar a aprovação final e liberação do CPF no portal.",
    explanation: "A caixa jamais deve ser aberta antes da simulação completa e confirmação no sistema de que o cliente não tem pendências."
  },
  {
    id: 12,
    question: "O cliente pagou a parcela atrasada via Pix há 10 minutos, mas o celular continua bloqueado. Qual a solução imediata?",
    options: [
      "Conectar o aparelho bloqueado a uma rede Wi-Fi.",
      "Reiniciar o aparelho forçando o hard reset.",
      "Ligar para o suporte da fabricante do celular.",
      "Pedir para o cliente aguardar 24 horas úteis."
    ],
    correctAnswer: "Conectar o aparelho bloqueado a uma rede Wi-Fi.",
    explanation: "O aparelho precisa de conexão com a internet para receber o comando de desbloqueio do servidor de pagamentos."
  },
  {
    id: 13,
    question: "O cliente quer um celular premium, tem R$ 800 em mãos e diz que vai guardar para comprar à vista daqui a 4 meses. Como agir?",
    options: [
      "Sugerir que compre um celular de R$ 800 à vista hoje.",
      "Incentivar ele a guardar o dinheiro e pegar o contato dele para o futuro.",
      "Usar os R$ 800 como uma entrada alta no PayJoy, mostrando como as parcelas ficarão pequenas para levar hoje.",
      "Fazer um boleto interno da loja sem usar o PayJoy."
    ],
    correctAnswer: "Usar os R$ 800 como uma entrada alta no PayJoy, mostrando como as parcelas ficarão pequenas para levar hoje.",
    explanation: "Ao aplicar uma entrada alta, o risco diminui, as parcelas ficam acessíveis e a loja não perde a venda."
  },
  {
    id: 14,
    question: "O cliente esqueceu a CNH física, mas oferece enviar uma foto do documento pelo WhatsApp para o cadastro. O que fazer?",
    options: [
      "Aceitar a foto se o cliente também tirar uma selfie na loja.",
      "Recusar a foto e solicitar o documento original físico ou digital oficial (ex: CNH Digital).",
      "Aprovar sem documento se a entrada for alta.",
      "Imprimir a foto do WhatsApp e anexar no sistema."
    ],
    correctAnswer: "Recusar a foto e solicitar o documento original físico ou digital oficial (ex: CNH Digital).",
    explanation: "Apenas documentos originais ou gerados por apps oficiais do governo garantem a autenticidade necessária contra fraudes."
  },
  {
    id: 15,
    question: "Após a instalação do PayJoy e entrega do aparelho, como registrar isso no Controle de Vendas?",
    options: [
      "Registrar apenas o valor financiado e ignorar a entrada.",
      "Registrar com o valor total do aparelho como se fosse à vista.",
      "Lançar a venda discriminando o método, o valor exato da entrada recebida e o saldo financiado.",
      "Não é necessário registrar vendas PayJoy no Controle de Vendas, apenas no portal deles."
    ],
    correctAnswer: "Lançar a venda discriminando o método, o valor exato da entrada recebida e o saldo financiado.",
    explanation: "O registro detalhado garante que o fluxo de caixa do dia bata perfeitamente e as metas da equipe sejam calculadas corretamente."
  },
  {
    id: 16,
    question: "O cliente quer usar seu celular atual (que ainda tem 3 parcelas PayJoy pendentes) como entrada num celular novo. O que responder?",
    options: [
      "Aceitar o aparelho, formatá-lo e repassar a dívida.",
      "Informar que a loja não pode aceitar o aparelho enquanto houver contrato, sendo necessário quitar o saldo antes.",
      "Pegar o aparelho e a loja assumir o pagamento das 3 parcelas.",
      "Aceitar o aparelho, mas cobrar uma taxa de serviço por fora."
    ],
    correctAnswer: "Informar que a loja não pode aceitar o aparelho enquanto houver contrato, sendo necessário quitar o saldo antes.",
    explanation: "O aparelho alienado é a garantia da financeira e não tem valor comercial de troca até a quitação total."
  },
  {
    id: 17,
    question: "O cliente diz que um amigo de TI avisou que o app copia senhas de banco (keylogger). Como quebrar a objeção?",
    options: [
      "Dizer que o app copia as senhas, mas a empresa jura não usar.",
      "Afirmar que o amigo não sabe de nada e nenhum app lê a tela hoje em dia.",
      "Explicar que o app usa protocolos corporativos (MDM) certificados e não tem permissão técnica para registrar digitação.",
      "Sugerir que ele não instale apps de banco no celular novo."
    ],
    correctAnswer: "Explicar que o app usa protocolos corporativos (MDM) certificados e não tem permissão técnica para registrar digitação.",
    explanation: "Termos técnicos como 'protocolo corporativo' (MDM) trazem autoridade e desmistificam o medo do cliente."
  },
  {
    id: 18,
    question: "O cliente hesita dizendo: 'Com o valor da entrada mais parcelas, eu compro um usado na internet à vista'. Qual o argumento?",
    options: [
      "Destacar a segurança de levar um aparelho lacrado e com garantia da loja, contra o risco de defeitos e golpes da internet.",
      "Concordar que o mercado de usados tem preços imbatíveis.",
      "Dizer que celulares usados da internet são todos roubados.",
      "Oferecer para a loja comprar o usado para ele."
    ],
    correctAnswer: "Destacar a segurança de levar um aparelho lacrado e com garantia da loja, contra o risco de defeitos e golpes da internet.",
    explanation: "O cliente do crediário valoriza segurança. Mostrar que ele leva um produto novo sem os riscos do mercado informal converte a venda."
  },
  {
    id: 19,
    question: "Um cliente volta com o celular travado numa tela preta de advertência permanente de segurança do Android. O que causou isso?",
    options: [
      "Deixou descarregar até 0% e corrompeu o sistema.",
      "Errou a senha de desbloqueio 3 vezes.",
      "Levou a uma assistência não autorizada para trocar a tela.",
      "Tentou realizar um hard reset para burlar o aplicativo e acionou o modo de bloqueio antifraude definitivo."
    ],
    correctAnswer: "Tentou realizar um hard reset para burlar o aplicativo e acionou o modo de bloqueio antifraude definitivo.",
    explanation: "O hard reset em dispositivos com software de financiamento aciona uma barreira de proteção permanente."
  },
  {
    id: 20,
    question: "O sistema do PayJoy pede entrada de 35%, mas o cliente só quer dar 20%. Qual a conduta do vendedor?",
    options: [
      "Explicar que o percentual é definido pela análise do CPF pelo sistema e focar em achar um modelo que caiba no orçamento.",
      "Pedir para o gerente liberar a entrada de 20% com a senha dele.",
      "Registrar 35% no app, cobrar 20% e tirar a diferença do caixa.",
      "Criar cadastro com CPF de familiar sem autorização para tentar taxa menor."
    ],
    correctAnswer: "Explicar que o percentual é definido pela análise do CPF pelo sistema e focar em achar um modelo que caiba no orçamento.",
    explanation: "O vendedor não pode alterar o risco do sistema, a solução é usar a flexibilidade do estoque para adequar ao bolso do cliente."
  }
];
