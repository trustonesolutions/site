// Dados estruturados (cada item em li) - extraído do texto fornecido
const DATA = {
    "ob_apuracao": {
        title: "Apuração de impostos",
        html: `
      <div class="subheading">Apuração de impostos</div>
      <ul class="detail-list">
        <li>ICMS</li>
        <li>ICMS-ST</li>
        <li>ICMS-DIFAL</li>
        <li>IPI</li>
        <li>FCP</li>
        <li>FCP-ST</li>
        <li>PIS/COFINS</li>
        <li>FUST/FUNTTEL</li>
        <li>ISS</li>
        <li>Apuração de múltiplas filiais por período</li>
        <li>Automação dos Movimentos de Ajustes por UF do emitente</li>
      </ul>`
    },
    "ob_relatorios": {
        title: "Relatório para conferência e acompanhamento fiscal",
        html: `
      <div class="subheading">Relatório para conferência e acompanhamento fiscal</div>
      <ul class="detail-list">
        <li>Entradas modelo P1 e P1A</li>
        <li>Saídas modelo P2 e P2A</li>
        <li>Livro de serviços tomados modelo 56</li>
        <li>Livro de serviços prestados modelo 51</li>
        <li>ICMS modelo P9</li>
        <li>IPI modelo P8</li>
        <li>ICMS-ST modelo P9, modelo P8/P9</li>
        <li>Tabela de mercadorias e serviços modelo P11</li>
        <li>Registro de inventário modelo P7</li>
        <li>Mapa de resumo de ECF</li>
        <li>Resumos de reduções Z conferência</li>
        <li>Termo de abertura/encerramento</li>
        <li>Listagem de emitentes modelo P10</li>
        <li>Registro de inventário modelo P7 – Padrão 2</li>
        <li>Registro de Duplicatas</li>
        <li>Controle de Produção - Modelo P3</li>
        <li>Demonstrativo de Diferencial de Alíquotas</li>
        <li>Livro Caixa Produtor Rural</li>
        <li>Livro CIAP – Modelo D</li>
        <li>Livro de Impostos Retidos</li>
        <li>Livro de Saída – Lei Complementar 87/2015</li>
        <li>Livro Fiscal PIS COFINS – Caixa</li>
        <li>Livro Fiscal PIS COFINS – Competência</li>
      </ul>`
    },
    "ob_analitica": {
        title: "Visão analítica dos dados fiscais e exportação de dados para Excel",
        html: `
      <div class="subheading">Visão analítica dos dados fiscais e exportação de dados para Excel</div>
      <ul class="detail-list">
        <li>Relatório dinâmico dos documentos de entrada e saída</li>
        <li>Exportação individual ou consolidada das operações de entrada e saída no formato Excel (Matriz e Filiais)</li>
      </ul>`
    },
    "ob_contabeis": {
        title: "Relatórios contábeis/financeiros",
        html: `
      <div class="subheading">Relatórios contábeis/financeiros</div>
      <ul class="detail-list">
        <li>Balancete</li>
        <li>Balanço</li>
        <li>Razão por conta</li>
        <li>Termo de abertura - Diário/Razão</li>
      </ul>`
    },
    "ob_acessorias": {
        title: "Obrigações acessórias",
        html: `
      <div class="subheading">Obrigações acessórias</div>
      <ul class="detail-list">
        <li>Sintegra</li>
        <li>GIA: MT, SP, MS, PR, RS, TO, RJ</li>
        <li>SPED Contábil (ECD)</li>
        <li>SPED Contábil Fiscal (ECF)</li>
        <li>SPED Contribuições</li>
        <li>Apuração PIS/COFINS</li>
        <li>SPED Fiscal</li>
        <li>Ressarcimento ICMS (C176)</li>
        <li>Crédito Presumido SC (cálculo automático)</li>
        <li>Ressarcimento ICMS-ST CAT 42/18 (SP)</li>
        <li>Ressarcimento ICMS-ST ADRC-ST (PR)</li>
        <li>SISCOSERV</li>
        <li>SUFRAMA PIN (DEID)</li>
        <li>FCI (Ficha de Conteúdo de Importação)</li>
        <li>DIME - SC</li>
        <li>DAC - AL</li>
        <li>DAPI - MG</li>
        <li>DAI - SP</li>
        <li>DIEF - PA</li>
        <li>DIPAM (GIA SP)</li>
        <li>DIF - TO</li>
        <li>DIAP - AP</li>
        <li>DIRF: Emissão da Guia de Recolhimento</li>
        <li>DDS - Natal</li>
        <li>DCI</li>
        <li>DCR-e</li>
        <li>DMED</li>
        <li>DCTF - Mensal</li>
        <li>DMA - BA</li>
        <li>DMS (Declaração Mensal de Serviços)</li>
        <li>DES (vários municípios)</li>
        <li>DES-IF</li>
        <li>DECLAN-IPM - RJ</li>
        <li>SEF e SEF II - PE</li>
        <li>Ajuste de Movimento Fiscal</li>
        <li>CAT 17/99</li>
        <li>CIAP</li>
        <li>Controle de Movimentações da ECF (PDV)</li>
        <li>Importação do XML da NFC-e, CF-e (SAT), e do CAT 52</li>
        <li>Controle do inventário fiscal</li>
        <li>Controle do status das NFs</li>
        <li>LDCPR</li>
        <li>Convênio 115/03</li>
        <li>Convênio 201/2017</li>
        <li>Convênio 74/2017</li>
        <li>CAT 15/2014 (São Paulo)</li>
        <li>DIA (Declaração de Ingresso no Amazonas)</li>
        <li>Geração do Provisionamento de Imposto Retido</li>
      </ul>`
    },
    "re_events": {
        title: "Eventos suportados (REINF)",
        html: `
      <div class="subheading">Eventos suportados</div>
      <ul class="detail-list">
        <li>R1000 - Identificação do contribuinte</li>
        <li>R1070 - Processos Administrativos e Judiciais</li>
        <li>R2010 - Retenção da Contribuição Previdenciária dos Serviços Tomados</li>
        <li>R2020 - Retenção da Contribuição Previdenciária dos Serviços Prestados</li>
        <li>R2030 - Recursos Recebidos por Associação Desportiva</li>
        <li>R2040 - Recursos Repassados por Associação Desportiva</li>
        <li>R2050 - Comercialização de Produção por Produtor Rural de Pessoa Jurídica e Agroindústria</li>
        <li>R2055 - Aquisição de Produção Rural de Pessoa Física</li>
        <li>R2060 - Contribuição Previdenciária sobre a Receita Bruta (CPRB)</li>
        <li>R2070 - Retenções na fonte (IR, CSLL, PIS/PASEP e COFINS)</li>
        <li>R2098 - Reabertura dos Eventos Periódicos</li>
        <li>R2099 - Fechamento dos Eventos Periódicos</li>
        <li>R5011 - Informações de bases e tributos consolidados por período de apuração</li>
      </ul>`
    },
    "re_funcoes": {
        title: "Principais funções (REINF)",
        html: `
      <div class="subheading">Principais funções</div>
      <ul class="detail-list">
        <li>Pedido de autorização em lote</li>
        <li>Armazenamento do XML</li>
        <li>Visualizar e Imprimir o Recibo</li>
        <li>Visualizar XML antes do envio para RFB</li>
        <li>Retificação e exclusão de eventos</li>
        <li>Leitura automática dos documentos sujeitos ao REINF</li>
        <li>Correção de informações no REINF sem necessidade de cancelamento da NF no SAP</li>
      </ul>`
    },
    "nfse_municipios": {
        title: "Lista de municípios atendidos (NFSe)",
        html: `
      <div class="subheading">Lista de municípios atendidos</div>
      <ul class="municipios-list">
        <li>Água Boa - MT</li>
        <li>Águas da Prata - SP</li>
        <li>Águas Lindas de Goiás - GO</li>
        <li>Aimorés - MG</li>
        <li>Alagoinhas - BA</li>
        <li>Além Paraíba - MG</li>
        <li>Alfenas - SP</li>
        <li>Americana - SP</li>
        <li>Amparo - SP</li>
        <li>Ananindeua - PA</li>
        <li>Anápolis - GO</li>
        <li>Aparecida de Goiânia - GO</li>
        <li>Apucarana - PR</li>
        <li>Aracaju - SE</li>
        <li>Araçariguama - SP</li>
        <li>Araçatuba - SP</li>
        <li>Aracruz - ES</li>
        <li>Araguaína - TO</li>
        <li>Araguari - MG</li>
        <li>Armação dos Búzios - RJ</li>
        <li>Arapiraca - AL</li>
        <li>Arapongas - PR</li>
        <li>Araranguá - SC</li>
        <li>Araraquara - SP</li>
        <li>Araras - SP</li>
        <li>Arcos - MG</li>
        <li>Altamira - PA</li>
        <li>Alto Paraná - PR</li>
        <li>Araucária - PR</li>
        <li>Ariquemes – RO</li>
        <li>Arujá - SP</li>
        <li>Assis - SP</li>
        <li>Atibaia - SP</li>
        <li>Avaré - SP</li>
        <li>Bacabeira - MA</li>
        <li>Bagé - RS</li>
        <li>Balneário Camboriú - SC</li>
        <li>Bálsamo - SP</li>
        <li>Balsas - MA</li>
        <li>Bandeirantes - PR</li>
        <li>Barcarena - PA</li>
        <li>Barretos - SP</li>
        <li>Barueri - SP</li>
        <li>Bauru - SP</li>
        <li>Bebedouro - SP</li>
        <li>Beberibe - CE</li>
        <li>Belford Roxo - RJ</li>
        <li>Bela Vista de Goiás - GO</li>
        <li>Belém - PA</li>
        <li>Belém de São Francisco - PE</li>
        <li>Belo Horizonte - MG</li>
        <li>Bento Gonçalves - RS</li>
        <li>Betim - MG</li>
        <li>Biguaçu - SC</li>
        <li>Birigui - SP</li>
        <li>Blumenau - SC</li>
        <li>Boa Esperança – MG</li>
        <li>Boa Vista - RR</li>
        <li>Boituva - SP</li>
        <li>Botucatu - SP</li>
        <li>Braço do Norte - SC</li>
        <li>Bragança Paulista - SP</li>
        <li>Brasília - DF</li>
        <li>Brodowski - SP</li>
        <li>Brumadinho - MG</li>
        <li>Brusque - SC</li>
        <li>Cabedelo - PB</li>
        <li>Cachoeira do Sul - RS</li>
        <li>Cachoeirinha - RS</li>
        <li>Cachoeiro de Itapemirim - ES</li>
        <li>Caiabu - SP</li>
        <li>Camaçari - BA</li>
        <li>Camboriú - SC</li>
        <li>Cambuí - MG</li>
        <li>Campina Grande - PB</li>
        <li>Campina Grande do Sul - PR</li>
        <li>Campinas - SP</li>
        <li>Campo Bom – RS</li>
        <li>Campos dos Goytacazes - RJ</li>
        <li>Campos do Jordão - SP</li>
        <li>Campo Grande - MS</li>
        <li>Campo Largo - PR</li>
        <li>Campo Mourão - PR</li>
        <li>Campo Novo dos Parecis - MT</li>
        <li>Campos Novos – SC</li>
        <li>Campo Verde - MT</li>
        <li>Canoas - RS</li>
        <li>Capetinga - MG</li>
        <li>Caraguatatuba - SP</li>
        <li>Carapicuíba - SP</li>
        <li>Carazinho - RS</li>
        <li>Cariacica - ES</li>
        <li>Carlos Barbosa - RS</li>
        <li>Carmo - RJ</li>
        <li>Carnaíba - PE</li>
        <li>Carpina - PE</li>
        <li>Caruaru - PE</li>
        <li>Casa Branca - SP</li>
        <li>Cascavel - CE</li>
        <li>Cascavel - PR</li>
        <li>Cassilândia - MS</li>
        <li>Castanhal - PA</li>
        <li>Catanduva - SP</li>
        <li>Catu - BA</li>
        <li>Caxias do Sul - RS</li>
        <li>Cedral - SP</li>
        <li>Cerquilho - SP</li>
        <li>Cezarina - GO</li>
        <li>Cesário Lange - SP</li>
        <li>Chapecó - SC</li>
        <li>Cianorte - PR</li>
        <li>Cidade Gaúcha - PR</li>
        <li>Colombo - PR</li>
        <li>Concórdia - SC</li>
        <li>Confins - MG</li>
        <li>Contagem - MG</li>
        <li>Coroados - SP</li>
        <li>Coronel Fabriciano - MG</li>
        <li>Corumbá - MS</li>
        <li>Cotia - SP</li>
        <li>Cravinhos - SP</li>
        <li>Criciúma - SC</li>
        <li>Cristais Paulista - SP</li>
        <li>Cruzeiro do Sul – AC</li>
        <li>Cubatão - SP</li>
        <li>Cuiabá - MT</li>
        <li>Curitiba - PR</li>
        <li>Diadema - SP</li>
        <li>Dois Córregos - SP</li>
        <li>Domingos Martins - ES</li>
        <li>Dourado - SP</li>
        <li>Dourados - MS</li>
        <li>Duque de Caxias - RJ</li>
        <li>Erechim - RS</li>
        <li>Espírito Santo do Dourado - MG</li>
        <li>Espírito Santo do Pinhal - SP</li>
        <li>Estância Velha - RS</li>
        <li>Euclides da Cunha Paulista - SP</li>
        <li>Eusébio - CE</li>
        <li>Extrema - MG</li>
        <li>Farroupilha - RS</li>
        <li>Fazenda Rio Grande - PR</li>
        <li>Feira de Santana - BA</li>
        <li>Ferraz de Vasconcelos - SP</li>
        <li>Fernandópolis - SP</li>
        <li>Florianópolis - SC</li>
        <li>Flores - PE</li>
        <li>Fortaleza - CE</li>
        <li>Foz do Iguaçu - PR</li>
        <li>Franca - SP</li>
        <li>Franco da Rocha - SP</li>
        <li>Frederico Westphalen - RS</li>
        <li>Goiânia - GO</li>
        <li>Governador Valadares - MG</li>
        <li>Gravataí - RS</li>
        <li>Guaíba - RS</li>
        <li>Guapó - GO</li>
        <li>Guarapuava - PR</li>
        <li>Guararapes - SP</li>
        <li>Guaratinguetá - SP</li>
        <li>Guariba - SP</li>
        <li>Guarujá - SP</li>
        <li>Guarulhos - SP</li>
        <li>Hidrolândia – GO</li>
        <li>Hortolândia - SP</li>
        <li>Ibiraci - MG</li>
        <li>Ibiraçu - ES</li>
        <li>Ibiúna - SP</li>
        <li>Içara - SC</li>
        <li>Igarapava - SP</li>
        <li>Igarapé - MG</li>
        <li>Igrejinha - RS</li>
        <li>Ijuí - RS</li>
        <li>Ilhabela - SP</li>
        <li>Imperatriz - MA</li>
        <li>Indaiatuba - SP</li>
        <li>Ipeúna - SP</li>
        <li>Ipojuca - PE</li>
        <li>Ibiporã - PR</li>
        <li>Itaberá - SP</li>
        <li>Itacoatiara - AM</li>
        <li>Itaguaí - RJ</li>
        <li>Itajaí - SC</li>
        <li>Itajubá - MG</li>
        <li>Itamogi - MG</li>
        <li>Itaúna - MG</li>
        <li>Itapema - SC</li>
        <li>Itapevi - SP</li>
        <li>Itapira - SP</li>
        <li>Itaporanga D’Ajuda - SE</li>
        <li>Itaquaquecetuba - SP</li>
        <li>Itu - SP</li>
        <li>Itupeva - SP</li>
        <li>Itapetininga - SP</li>
        <li>Itatiba - SP</li>
        <li>Jaboatão dos Guararapes - PE</li>
        <li>Jaboticabal - SP</li>
        <li>Jacareí - SP</li>
        <li>Jaguaruana - CE</li>
        <li>Jandira - SP</li>
        <li>Jaraguá do Sul - SC</li>
        <li>Jardinópolis - SP</li>
        <li>Japaratinga - AL</li>
        <li>Jataí - GO</li>
        <li>Jaú - SP</li>
        <li>Ji-Paraná - RO</li>
        <li>João Neiva - ES</li>
        <li>João Pessoa - PB</li>
        <li>Joinville - SC</li>
        <li>Juazeiro - BA</li>
        <li>Juazeiro do Norte - CE</li>
        <li>Juiz de Fora - MG</li>
        <li>Jundiaí - SP</li>
        <li>Juquiá - SP</li>
        <li>Lages - SC</li>
        <li>Lagoa Santa - MG</li>
        <li>Lagoa da Prata - MG</li>
        <li>Lauro de Freitas - BA</li>
        <li>Lavras - MG</li>
        <li>Leme - SP</li>
        <li>Lençóis Paulista - SP</li>
        <li>Limeira - SP</li>
        <li>Linhares - ES</li>
        <li>Loanda - PR</li>
        <li>Londrina - PR</li>
        <li>Lorena - SP</li>
        <li>Lucas do Rio Verde - MT</li>
        <li>Luziânia - GO</li>
        <li>Macaé - RJ</li>
        <li>Macapá - AP</li>
        <li>Maceió - AL</li>
        <li>Mafra - SC</li>
        <li>Manaus - AM</li>
        <li>Marabá - PA</li>
        <li>Maracás - BA</li>
        <li>Maracanaú - CE</li>
        <li>Maragogi - AL</li>
        <li>Marialva - PR</li>
        <li>Mariana - MG</li>
        <li>Marília - SP</li>
        <li>Maringá - PR</li>
        <li>Mata de São João - BA</li>
        <li>Matão - SP</li>
        <li>Mauá - SP</li>
        <li>Medianeira - PR</li>
        <li>Mococa - SP</li>
        <li>Mogi das Cruzes - SP</li>
        <li>Mogi Guaçu - SP</li>
        <li>Monte Alto - SP</li>
        <li>Montes Claros - MG</li>
        <li>Montividiu - GO</li>
        <li>Moreno - PE</li>
        <li>Morretes - PR</li>
        <li>Mossoró - RN</li>
        <li>Munhoz de Melo - PR</li>
        <li>Natal - RN</li>
        <li>Navegantes - SC</li>
        <li>Niterói - RJ</li>
        <li>Nova Friburgo - RJ</li>
        <li>Nova Iguaçu - RJ</li>
        <li>Nova Lima - MG</li>
        <li>Nova Mutum – MT</li>
        <li>Nova Odessa - SP</li>
        <li>Novo Hamburgo - RS</li>
        <li>Novo Horizonte – SP</li>
        <li>Olímpia - SP</li>
        <li>Olinda - PE</li>
        <li>Orlândia - SP</li>
        <li>Osasco - SP</li>
        <li>Osvaldo Cruz - SP</li>
        <li>Ourinhos - SP</li>
        <li>Pacatuba - CE</li>
        <li>Palhoça - SC</li>
        <li>Palmas - PR</li>
        <li>Palmas - TO</li>
        <li>Paraguaçu - MG</li>
        <li>Paranaguá - PR</li>
        <li>Paraty - RJ</li>
        <li>Parauapebas – PA</li>
        <li>Parnaíba - PI</li>
        <li>Parnamirim - RN</li>
        <li>Paraíso das Águas - MS</li>
        <li>Paranavaí - PR</li>
        <li>Passos - MG</li>
        <li>Passo Fundo - RS</li>
        <li>Patos - PB</li>
        <li>Pato Branco - PR</li>
        <li>Patos de Minas - MG</li>
        <li>Patrocínio - MG</li>
        <li>Paulínia - SP</li>
        <li>Paulista - PE</li>
        <li>Paulo Afonso - BA</li>
        <li>Pederneiras - SP</li>
        <li>Pedregulho - SP</li>
        <li>Pedro Leopoldo - MG</li>
        <li>Pelotas - RS</li>
        <li>Penápolis - SP</li>
        <li>Pereiro - CE</li>
        <li>Petrolina - PE</li>
        <li>Petrópolis - RJ</li>
        <li>Piedade - SP</li>
        <li>Pilar do Sul - SP</li>
        <li>Pindamonhangaba - SP</li>
        <li>Pinhais - PR</li>
        <li>Piracaia - SP</li>
        <li>Piracicaba - SP</li>
        <li>Piraju - SP</li>
        <li>Piranguinho - MG</li>
        <li>Pirapora do Bom Jesus - SP</li>
        <li>Pirassununga - SP</li>
        <li>Piripiri - PI</li>
        <li>Poços de Caldas - MG</li>
        <li>Pomerode - SC</li>
        <li>Pompéu - MG</li>
        <li>Ponta Grossa - PR</li>
        <li>Porto Alegre - RS</li>
        <li>Porto de Pedras - AL</li>
        <li>Porto Feliz - SP</li>
        <li>Porto Real - RJ</li>
        <li>Porto Seguro - BA</li>
        <li>Porto Velho - RO</li>
        <li>Pouso Alegre - MG</li>
        <li>Praia Grande - SP</li>
        <li>Presidente Alves - SP</li>
        <li>Presidente Prudente - SP</li>
        <li>Presidente Venceslau - SP</li>
        <li>Primavera do Leste - MT</li>
        <li>Quatro Barras - PR</li>
        <li>Recife - PE</li>
        <li>Resende - RJ</li>
        <li>Ribeirão das Neves - MG</li>
        <li>Ribeirão Pires - SP</li>
        <li>Ribeirão Preto - SP</li>
        <li>Rio Branco - AC</li>
        <li>Rio Claro - SP</li>
        <li>Rio das Ostras - RJ</li>
        <li>Rio de Janeiro - RJ</li>
        <li>Rio do Sul - SC</li>
        <li>Rio Grande - RS</li>
        <li>Rio Negro - PR</li>
        <li>Rio Verde - GO</li>
        <li>Rolândia - PR</li>
        <li>Rolim de Moura - RO</li>
        <li>Rondonópolis - MT</li>
        <li>Rosana - SP</li>
        <li>Rosário - MA</li>
        <li>Sales Oliveira - SP</li>
        <li>Salvador - BA</li>
        <li>Santa Bárbara d'Oeste - SP</li>
        <li>Santa Cruz do Sul - RS</li>
        <li>Santa Isabel - SP</li>
        <li>Santa Luzia - MG</li>
        <li>Santa Maria - RS</li>
        <li>Santa Rita do Sapucaí - MG</li>
        <li>Santa Teresa - ES</li>
        <li>Santana de Parnaíba - SP</li>
        <li>Santarém - PA</li>
        <li>Santo André - SP</li>
        <li>Santo Antônio dos Lopes - MA</li>
        <li>Santos - SP</li>
        <li>São Bento do Sul - SC</li>
        <li>São Bernardo do Campo - SP</li>
        <li>São Caetano do Sul - SP</li>
        <li>São Carlos - SP</li>
        <li>São Francisco do Sul - SC</li>
        <li>São Gonçalo - RJ</li>
        <li>São Jerônimo - RS</li>
        <li>São João da Barra – RJ</li>
        <li>São João da Boa Vista - SP</li>
        <li>São Joaquim da Barra - SP</li>
        <li>São José - SC</li>
        <li>São José de Ribamar - MA</li>
        <li>São José do Norte - RS</li>
        <li>São José do Rio Pardo - SP</li>
        <li>São José do Rio Preto - SP</li>
        <li>São José dos Campos - SP</li>
        <li>São José dos Pinhais - PR</li>
        <li>São Leopoldo - RS</li>
        <li>São Luís - MA</li>
        <li>São Manuel - SP</li>
        <li>São Miguel - RN</li>
        <li>São Miguel Arcanjo - SP</li>
        <li>São Paulo - SP</li>
        <li>São Sebastião - SP</li>
        <li>São Sebastião do Caí - RS</li>
        <li>São Tomás de Aquino - MG</li>
        <li>Saquarema - RJ</li>
        <li>Sarzedo - MG</li>
        <li>Seberi - RS</li>
        <li>Senador Canedo - GO</li>
        <li>Serra - ES</li>
        <li>Serrana - SP</li>
        <li>Sertãozinho - SP</li>
        <li>Sete Lagoas - MG</li>
        <li>Sinop - MT</li>
        <li>Sorocaba - SP</li>
        <li>Sorriso - MT</li>
        <li>Sumaré - SP</li>
        <li>Suzano - SP</li>
        <li>Tabatinga - AM</li>
        <li>Taboão da Serra - SP</li>
        <li>Tangará da Serra - MT</li>
        <li>Tatuí - SP</li>
        <li>Taubaté - SP</li>
        <li>Taquarituba - SP</li>
        <li>Teófilo Otoni - MG</li>
        <li>Teresina - PI</li>
        <li>Teresópolis - RJ</li>
        <li>Tietê - SP</li>
        <li>Timóteo - MG</li>
        <li>Toledo - PR</li>
        <li>Três Lagoas - MS</li>
        <li>Tubarão - SC</li>
        <li>Ubatuba - SP</li>
        <li>Uberlândia - MG</li>
        <li>Uberaba - MG</li>
        <li>Uruguaiana - RS</li>
        <li>Valinhos - SP</li>
        <li>Valparaíso de Goiás - GO</li>
        <li>Vargem Grande do Sul - SP</li>
        <li>Vargem Grande Paulista - SP</li>
        <li>Varginha - MG</li>
        <li>Varjota - CE</li>
        <li>Várzea Grande - MT</li>
        <li>Várzea Paulista - SP</li>
        <li>Vespasiano - MG</li>
        <li>Vila Velha - ES</li>
        <li>Vilhena - RO</li>
        <li>Vinhedo - SP</li>
        <li>Vitória - ES</li>
        <li>Vitória da Conquista - BA</li>
        <li>Votuporanga - SP</li>
        <li>Votorantim - SP</li>
        <li>Wenceslau Braz – PR</li>
      </ul>`
    }
};

// util: remove acentos e transforma para lowercase
function normaliza(str) {
    return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
}

// render e handlers
const buttons = document.querySelectorAll('.nav-button');
const mainTitle = document.getElementById('main-title');
const contentBody = document.getElementById('content-body');
const searchInput = document.getElementById('global-search');
const clearBtn = document.getElementById('clear-search');

function setActive(el) {
    buttons.forEach(b => b.classList.remove('active'));
    if (el) el.classList.add('active');
}

function showContent(key) {
    const entry = DATA[key];
    if (!entry) return;
    mainTitle.textContent = entry.title;
    contentBody.innerHTML = entry.html;
    contentBody.scrollTop = 0;
}

// attach events
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        setActive(btn);
        const key = btn.getAttribute('data-key');
        showContent(key);
        if (searchInput.value) {
            searchInput.value = '';
        }
    });
});

// busca com realce (preserva HTML das listas)
function highlightHtml(html, query) {
    if (!query) return html;
    const q = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Replace text nodes by wrapping matches; simple approach: operate on the HTML string
    return html.replace(new RegExp('(' + q + ')', 'ig'), '<span class="search-highlight">$1</span>');
}

function performSearch(qRaw) {
    const q = qRaw.trim();
    if (!q) {
        const active = document.querySelector('.nav-button.active');
        if (active) showContent(active.getAttribute('data-key'));
        else {
            mainTitle.textContent = 'Selecione um item na lateral';
            contentBody.innerHTML = '<p class="muted">Clique em qualquer item do menu lateral para ver o conteúdo correspondente centralizado aqui.</p>';
        }
        return;
    }

    const qNorm = normaliza(q);
    const hits = [];

    Object.keys(DATA).forEach(key => {
        const entry = DATA[key];
        const titleNorm = normaliza(entry.title || '');
        const textOnly = entry.html.replace(/<[^>]+>/g, ' ');
        const textNorm = normaliza(textOnly);

        if (titleNorm.includes(qNorm) || textNorm.includes(qNorm)) {
            const highlighted = highlightHtml(entry.html, q);
            hits.push({ key, title: entry.title, html: highlighted });
        }
    });

    if (hits.length === 0) {
        mainTitle.textContent = `Resultados para "${q}"`;
        contentBody.innerHTML = `<p class="muted">Nenhum resultado encontrado para "<strong>${q}</strong>"</p>`;
        return;
    }

    mainTitle.textContent = `Resultados para "${q}"`;
    contentBody.innerHTML = hits.map(h => `<div class="subheading">${h.title}</div><div>${h.html}</div><hr class="section-sep">`).join('');
    contentBody.scrollTop = 0;
}

// evento input (debounce simples)
let debounceTimer = null;
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => performSearch(e.target.value), 180);
    });
}

if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        performSearch('');
        searchInput.focus();
    });
}

// abrir Apuração de impostos por padrão
const defaultBtn = document.querySelector('[data-key="ob_apuracao"]');
if (defaultBtn) { defaultBtn.click(); }