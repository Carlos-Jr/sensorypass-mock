# SensoryPass — Guia de Marca e Diretrizes Visuais para o App

> Documento derivado do PDF de apresentação **SensoryPass**. As cores em HEX foram aproximadas a partir dos elementos visuais do próprio PDF, pois a apresentação não contém uma tabela oficial de códigos de cor.

## 1. Identidade da marca

**Nome:** SensoryPass  
**Assinatura:** by Adelitas  
**Tagline:** **“Mais que tecnologia, cuidado”**

A SensoryPass é apresentada como uma marca que combina tecnologia e cuidado, com uma solução formada por **vestível + IA + aplicativo**. O material associa a marca ao acompanhamento de crianças, responsáveis, acompanhantes, professores e profissionais, usando dados dos sensores, relatos e relatórios.

### Essência percebida no material

- **Cuidado humano antes da tecnologia.** A tecnologia aparece como meio para acompanhamento e suporte, não como fim.
- **Acolhimento.** A identidade evita estética excessivamente clínica e usa formas orgânicas, cores suaves e imagens de convivência.
- **Segurança e confiança.** Privacidade, autorização dos responsáveis, criptografia e acesso controlado são parte central da apresentação.
- **Inclusão.** O material apresenta a proposta “Cuidado para todos” e vincula a marca a impacto social.
- **Tecnologia acessível.** A solução é comunicada visualmente de forma simples, amigável e fácil de entender.

### Palavras-chave da marca

`cuidado` · `acolhimento` · `segurança` · `família` · `tecnologia` · `inclusão` · `confiança` · `acompanhamento` · `simplicidade`

---

## 2. Logo

O logo combina três elementos principais:

1. **Beija-flor estilizado**, aplicado em tons de azul, lilás e roxo.
2. **Traço circular/orbital**, envolvendo parcialmente o pássaro e reforçando sensação de movimento, conexão e acompanhamento.
3. **Wordmark “SENSORYPASS”**, em caixa alta, com aparência geométrica e contemporânea.

A assinatura **“Mais que tecnologia, cuidado”** aparece acima do nome em algumas aplicações, enquanto **“by Adelitas”** aparece abaixo ou ao lado do wordmark.

### Leitura simbólica

O beija-flor transmite leveza, atenção e proximidade. O traço circular sugere proteção e continuidade. O conjunto equilibra uma linguagem tecnológica com uma percepção mais sensível e humana.

### Aplicações recomendadas no app

- Usar a versão completa do logo em **splash screen, onboarding, login e telas institucionais**.
- Em barras de navegação e espaços reduzidos, usar preferencialmente o **símbolo do beija-flor** sem a tagline.
- Manter o logo prioritariamente sobre fundos **claros, creme ou branco**.
- Em fundos escuros, usar uma versão que preserve contraste; evitar simplesmente inverter cores sem validar a legibilidade.
- Não comprimir, esticar, inclinar ou alterar individualmente as cores do beija-flor e do wordmark.

### Área de respiro — recomendação para implementação

Como o PDF não define uma grade oficial de proteção, adotar como regra inicial uma margem livre equivalente a aproximadamente **50% da altura do símbolo do beija-flor** ao redor do logo completo.

---

## 3. Paleta de cores

### 3.1 Cores principais

As cores abaixo foram extraídas visualmente do PDF e devem ser consideradas **aproximações de implementação**, não valores oficiais fornecidos pela apresentação.

| Papel | Cor | HEX aproximado | Uso recomendado |
|---|---|---:|---|
| **Primária — Indigo Sensory** | Azul-lilás | `#707CB8` | Logo, títulos, botões principais, ícones selecionados |
| **Lilás de apoio** | Lilás | `#A180BE` | Ilustrações, estados suaves, detalhes gráficos |
| **Fundo principal** | Marfim rosado | `#FFF7F1` | Fundo geral do app |
| **Fundo alternativo** | Creme | `#F6E7D8` | Onboarding, splash, seções editoriais |
| **Branco** | Branco | `#FFFFFF` | Cards, modais e superfícies elevadas |
| **Texto forte** | Preto/Carvão | `#111111` | Corpo de texto e informações de alta prioridade |

### 3.2 Cores de destaque da identidade

A apresentação usa uma faixa orgânica multicolorida como elemento recorrente. A sequência visual passa por laranja, coral/vermelho, rosa, lilás, azul e turquesa.

| Cor | HEX aproximado | Papel visual |
|---|---:|---|
| **Laranja** | `#FF9D4B` | Energia, calor, pontos de destaque |
| **Coral** | `#FF7E4D` | Destaques e transições do gradiente |
| **Vermelho-coral** | `#FD3B4C` | Destaque forte; usar com moderação |
| **Rosa** | `#E083C2` | Humanização e transição cromática |
| **Azul vivo** | `#4196DD` | Tecnologia, informação e gráficos |
| **Turquesa** | `#07B0AE` | IA, sensores, informação positiva |

### 3.3 Tons auxiliares observados

| Cor | HEX aproximado | Uso observado / sugerido |
|---|---:|---|
| Lavanda média | `#99ACFF` | Cabeçalhos e tabelas comparativas |
| Lavanda clara | `#CDD6FF` | Células, fundos informativos |
| Verde de confirmação | `#2CD164` | Check, sucesso e confirmação |
| Vermelho de negação | `#DF260B` | X, erro ou indisponibilidade |
| Amarelo | `#F6E447` | Ilustração e destaque pontual |
| Preto | `#000000` | Tela institucional de segurança e contraste forte |

> **Importante:** verde e vermelho aparecem no PDF principalmente como cores semânticas de comparação. Eles não devem substituir a paleta principal da marca.

---

## 4. Gradiente característico

O elemento mais reconhecível depois do logo é a **faixa orgânica em gradiente**, recorrente em várias páginas.

### Gradiente-base para interface

```css
background: linear-gradient(
  90deg,
  #FF9D4B 0%,
  #FD3B4C 25%,
  #E083C2 50%,
  #707CB8 75%,
  #07B0AE 100%
);
```

### Uso recomendado

- Splash e onboarding.
- Destaque de cards especiais.
- Indicadores gráficos e estados de progresso.
- Headers de campanhas ou telas institucionais.
- Pequenos detalhes de marca.

### Evitar

- Fundo multicolorido atrás de textos longos.
- Usar o gradiente em todos os botões.
- Aplicar muitas cores simultaneamente em telas densas de dados.

No app funcional, a identidade deve permanecer reconhecível mesmo quando o gradiente não estiver presente.

---

## 5. Tipografia

O PDF utiliza uma combinação de famílias tipográficas com papéis distintos.

### Fontes identificadas no arquivo

| Família | Pesos observados | Papel observado |
|---|---|---|
| **Agrandir** | Regular, Bold | Logo, títulos, textos de destaque e identidade principal |
| **Open Sans** | Regular, Bold | Conteúdo funcional, títulos de produto, explicações e tabelas |
| **Crimson Pro** | Regular, Bold | Títulos editoriais e conteúdos mais humanos/narrativos |
| **Noto Serif Display** | Light Italic | Títulos editoriais de alto impacto, como “O começo” e “Segurança em cada lado” |
| **TT Firs** | Regular, Bold | Seção de segurança e textos institucionais |

### Hierarquia recomendada para o app

Para evitar excesso de famílias em uma interface digital, recomenda-se reduzir o sistema a no máximo duas fontes principais:

**Interface principal:**
- Títulos: **Agrandir Bold**
- Corpo: **Open Sans Regular**
- Labels e botões: **Open Sans Bold** ou **Agrandir Bold**

**Conteúdo editorial / onboarding:**
- Título especial: **Crimson Pro** ou **Noto Serif Display Italic**
- Corpo: **Open Sans**

### Fallbacks

```css
--font-display: "Agrandir", "Open Sans", Arial, sans-serif;
--font-body: "Open Sans", Arial, sans-serif;
--font-editorial: "Crimson Pro", Georgia, serif;
```

> Antes de distribuir o app, validar a licença de uso das famílias proprietárias eventualmente incluídas no material. Caso não estejam licenciadas para o produto, manter **Open Sans** como base e usar uma alternativa serifada licenciada para os títulos editoriais.

---

## 6. Formas e linguagem gráfica

A apresentação possui uma linguagem visual bastante consistente.

### 6.1 Formas orgânicas

O principal elemento decorativo é uma fita/onda volumétrica, arredondada e fluida, com gradiente multicolorido. Ela pode entrar ou sair parcialmente da tela, sem precisar aparecer inteira.

**Sensação transmitida:** movimento, flexibilidade, acolhimento e continuidade.

### 6.2 Linhas onduladas

Há padrões de linhas finas e paralelas formando ondas, normalmente em cinza claro ou branco.

**Uso recomendado:**
- Fundo discreto de headers.
- Áreas vazias de telas institucionais.
- Seções de relatório ou resumo.

Nunca competir com o conteúdo principal.

### 6.3 Bordas e cards

A apresentação favorece:

- Formas arredondadas.
- Cards com cantos generosos.
- Blocos limpos, com pouco ruído visual.
- Contraste entre superfícies claras e cores de destaque.

Para o app, um bom ponto de partida é utilizar raio entre **16 e 24 px** em cards principais e entre **10 e 16 px** em controles menores.

---

## 7. Fotografia

As fotografias da apresentação priorizam cenas humanas, especialmente contextos de convivência, acompanhamento e cuidado.

### Direção fotográfica

- Pessoas em interação real, não poses excessivamente publicitárias.
- Luz natural e ambientes cotidianos.
- Presença de família, responsáveis, profissionais e crianças em situações de convivência.
- Atmosfera acolhedora e respeitosa.
- Evitar imagens que transformem a pessoa acompanhada em “objeto” da tecnologia.

### Tratamento

- Preservar tons naturais de pele.
- Evitar filtros frios ou clínicos.
- Usar os grafismos da marca como sobreposição apenas quando não comprometer rostos ou informações importantes.

---

## 8. Iconografia

O PDF utiliza ícones simples e de leitura rápida para representar:

- Vestível.
- Inteligência artificial.
- Aplicativo.
- Segurança e proteção de dados.
- Pessoas e autorizações.
- GPS e localização.
- Sensores e relatórios.

### Diretriz para o app

Adotar ícones:

- Simples.
- Com traços arredondados.
- Consistentes em espessura.
- Preferencialmente monocromáticos na interface funcional.
- Coloridos apenas em cards de categoria, onboarding ou estados especiais.

---

## 9. Tom de voz

O tom da SensoryPass deve unir **clareza tecnológica** e **acolhimento humano**.

### Deve soar

- Claro.
- Calmo.
- Respeitoso.
- Próximo.
- Objetivo.
- Cuidadoso ao falar de dados e acompanhamento.

### Evitar

- Linguagem alarmista.
- Excesso de termos médicos.
- Promessas de diagnóstico ou tratamento.
- Tom infantilizado ao falar com responsáveis ou pessoas autistas.
- Linguagem técnica sem explicação.

### Exemplos de microcopy

**Bom:** “Relato salvo. Ele ficará disponível para as pessoas autorizadas.”  
**Bom:** “Localização atualizada há 2 min.”  
**Bom:** “Você controla quem pode acessar estas informações.”  
**Evitar:** “Detectamos uma crise.”  
**Preferir:** “Os dados indicam uma alteração relevante. Confira o contexto e as informações disponíveis.”

---

## 10. Segurança, privacidade e limites da solução

A apresentação destaca explicitamente:

- Criptografia no armazenamento e na transmissão.
- Coleta e compartilhamento mediante autorização dos responsáveis.
- Acesso controlado.
- Tratamento de dados seguindo princípios da LGPD.
- A informação de que a solução **não é um dispositivo médico**.

Esses pontos devem aparecer de forma clara no produto, especialmente em:

- Cadastro e consentimento.
- Convites para responsáveis/acompanhantes/profissionais.
- Compartilhamento de relatórios.
- Permissões de localização e microfone.
- Termos de uso e política de privacidade.
- Telas que apresentem indicadores derivados de sensores.

### Regra de linguagem para dados sensíveis

O app deve apresentar sinais e dados como **informações de acompanhamento**, evitando transformá-los automaticamente em diagnóstico, conclusão clínica ou certeza sobre o estado da pessoa.

---

## 11. Diretrizes de UI para o novo app

### Estrutura visual recomendada

- **Fundo:** `#FFF7F1`
- **Cards:** `#FFFFFF`
- **Cor primária:** `#707CB8`
- **Ação secundária / tecnologia:** `#07B0AE`
- **Destaque quente:** `#FF7E4D`
- **Títulos:** `#707CB8` ou `#111111`
- **Texto:** `#111111`
- **Texto secundário:** usar cinza neutro com contraste adequado

### Botão primário

- Fundo `#707CB8`
- Texto branco
- Cantos arredondados
- Peso tipográfico alto
- Sem gradiente na maioria das telas

### Botão secundário

- Fundo branco ou transparente
- Borda `#707CB8`
- Texto `#707CB8`

### Ações de tecnologia / sensores

Pode-se usar `#07B0AE` para elementos relacionados a:

- Sensores.
- IA.
- Sincronização.
- Dispositivo conectado.

### Cards especiais

Cards de onboarding, resumo ou campanha podem usar o gradiente da marca como faixa lateral, topo ou detalhe — preferencialmente sem cobrir toda a superfície.

---

## 12. Acessibilidade visual

A identidade usa vários tons suaves. Para o app, estética e acessibilidade devem ser tratadas separadamente: uma cor bonita em uma apresentação nem sempre possui contraste suficiente para texto pequeno.

### Regras práticas

- Usar `#111111` sobre fundos claros para textos longos.
- Reservar lilás e rosa claros para superfícies e decoração, não para textos pequenos.
- Usar branco sobre `#707CB8` apenas em elementos de tamanho e peso adequados.
- Não depender apenas de verde/vermelho para comunicar sucesso e erro; incluir ícone e texto.
- Não usar o gradiente como fundo de conteúdo crítico.
- Permitir tamanhos de fonte maiores sem quebrar cards ou navegação.

---

## 13. Design tokens sugeridos

```css
:root {
  /* Marca */
  --sp-primary: #707CB8;
  --sp-primary-soft: #A180BE;
  --sp-teal: #07B0AE;
  --sp-blue: #4196DD;

  /* Destaques */
  --sp-orange: #FF9D4B;
  --sp-coral: #FF7E4D;
  --sp-red-coral: #FD3B4C;
  --sp-pink: #E083C2;

  /* Superfícies */
  --sp-bg: #FFF7F1;
  --sp-bg-warm: #F6E7D8;
  --sp-surface: #FFFFFF;
  --sp-lavender: #99ACFF;
  --sp-lavender-soft: #CDD6FF;

  /* Texto */
  --sp-text: #111111;
  --sp-text-on-dark: #FFFFFF;

  /* Estados */
  --sp-success: #2CD164;
  --sp-error: #DF260B;
  --sp-warning: #F6E447;

  /* Formas */
  --sp-radius-card: 20px;
  --sp-radius-control: 12px;
}
```

---

## 14. Hierarquia visual sugerida

### Tela institucional / onboarding

1. Logo completo.
2. Mensagem curta e humana.
3. Ilustração, foto ou forma orgânica.
4. Uma ação principal clara.

### Tela funcional

1. Título objetivo.
2. Informação principal em card.
3. Ações contextuais.
4. Elementos de marca apenas como apoio.

### Tela de dados / relatório

1. Resumo legível em linguagem natural.
2. Dados com rótulo, unidade e horário.
3. Gráficos simples.
4. Contexto ou relato associado.
5. Indicação clara sobre origem e limitações do dado.

---

## 15. O que torna uma tela “SensoryPass”

Uma tela não precisa usar todas as cores da marca. Ela deve ser reconhecida pela combinação de:

- Fundo claro e quente.
- Indigo `#707CB8` como cor de identidade.
- Tipografia limpa e amigável.
- Cantos arredondados.
- Uso pontual de turquesa, coral e gradiente.
- Formas fluidas e ondas discretas.
- Comunicação que enfatiza cuidado e segurança.
- Fotografias humanas e naturais quando houver imagem.

---

## 16. Do / Don't

### Do

- Priorizar legibilidade.
- Usar a cor primária de forma consistente.
- Reservar o gradiente para momentos de marca.
- Usar linguagem humana para explicar dados técnicos.
- Destacar consentimento e controle de acesso.
- Reforçar que os dados são de acompanhamento.

### Don't

- Transformar cada card em uma cor diferente.
- Aplicar o gradiente em textos ou informações críticas.
- Criar estética hospitalar ou excessivamente fria.
- Usar vermelho-coral como cor padrão para ações comuns.
- Fazer promessas médicas ou diagnósticas.
- Usar fontes serifadas em textos longos de interface.

---

## 17. Resumo rápido para desenvolvimento

```text
Marca: SensoryPass by Adelitas
Tagline: Mais que tecnologia, cuidado
Símbolo: beija-flor + arco/círculo
Primária: #707CB8
Fundo: #FFF7F1
Fundo quente: #F6E7D8
Secundária tech: #07B0AE
Destaque quente: #FF7E4D
Gradiente: #FF9D4B -> #FD3B4C -> #E083C2 -> #707CB8 -> #07B0AE
Fonte principal: Agrandir / fallback Open Sans
Fonte de corpo: Open Sans
Fonte editorial: Crimson Pro / Noto Serif Display
Estilo: humano, acolhedor, tecnológico, orgânico e confiável
Forma-chave: fita orgânica multicolorida + linhas onduladas
Cards: claros, arredondados, com bastante respiro
Regra: funcionalidade primeiro; grafismos entram como assinatura, não como ruído
Privacidade: consentimento, criptografia, acesso controlado e princípios da LGPD
Limite comunicado no material: não é dispositivo médico
```

---

## 18. Referências visuais dentro do PDF

- **Página 1:** logo completo, tagline, fundo creme e faixa multicolorida.
- **Página 2:** combinação de fotografia, azul e formas orgânicas.
- **Página 3:** fotografia + bloco amarelo + faixa orgânica.
- **Página 4:** linguagem de ícones, fundo claro e gradiente decorativo.
- **Página 5:** arquitetura “Vestível + IA + APP” e uso de rosa/turquesa/lilás.
- **Página 7:** fluxo de dados, relatórios e interface mobile.
- **Página 8:** versão institucional em fundo preto para segurança e privacidade.
- **Página 9:** título editorial serifado e fita orgânica multicolorida.
- **Página 10:** cards arredondados com gradientes quentes.
- **Página 11:** tabela em lavanda e cores semânticas de confirmação/negação.
- **Página 13:** mensagem “Cuidado para todos” e identidade em fundo claro.
- **Página 14:** aplicação do logo sobre fotografia.

---

## 19. Observações de implementação

1. Os códigos HEX deste documento são **aproximações extraídas visualmente** do PDF; se existir um manual oficial da marca ou arquivo vetorial do logo, ele deve prevalecer.
2. O material original mistura várias fontes. Para o app, reduzir a quantidade de famílias tipográficas melhora consistência e desempenho.
3. A faixa multicolorida é um elemento forte de campanha e apresentação. Em interface transacional, usá-la com parcimônia.
4. A comunicação sobre dados deve preservar o cuidado presente na marca e os limites explicitados no próprio material.
5. Antes do desenvolvimento final, é recomendável transformar o logo em SVG oficial e criar tokens de cor no design system para evitar variações entre telas.
