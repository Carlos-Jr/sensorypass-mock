# Prompt para criação do app mock — SensoryPass

Crie um aplicativo web mockado chamado **SensoryPass** usando **HTML, CSS e JavaScript**.

O objetivo é produzir uma demonstração visual muito bem acabada para uma competição de startups. Não é necessário backend e não é necessário implementar integrações reais. Todos os dados podem ser simulados.

## 1. Referências obrigatórias

Antes de começar:

- leia o arquivo `brand_guide.md` existente na pasta do projeto e use-o como principal referência visual;
- localize os arquivos de identidade visual da SensoryPass em SVG e/ou PNG;
- use a logo e o símbolo originais;
- não redesenhe a logo;
- não altere proporções, cores ou composição da marca;
- preserve o visual acolhedor, leve e tecnológico da identidade.

Sempre que houver conflito entre este prompt e o `brand_guide.md`, priorize o `brand_guide.md` para decisões visuais.

---

## 2. Tecnologia

Use apenas:

- HTML;
- CSS;
- JavaScript vanilla;
- Leaflet.js;
- OpenStreetMap como mapa base.

Pode usar uma biblioteca de ícones como **Lucide Icons** via CDN.

Não usar:

- React;
- Vue;
- Angular;
- backend;
- banco de dados;
- autenticação real;
- geolocalização real;
- speech-to-text real.

Organize preferencialmente em:

```text
index.html
styles.css
app.js
```

Também é aceitável um único `index.html` autocontido, caso isso facilite a execução.

O projeto deve abrir facilmente em um navegador e funcionar como uma demonstração navegável.

---

## 3. Objetivo do produto

O SensoryPass ajuda profissionais a terem **mais informações sobre o dia a dia da criança com TEA que acompanham**.

A proposta combina:

- relatos feitos por responsáveis, professores e acompanhantes;
- transcrição de relatos em áudio;
- análise dos relatos por inteligência artificial;
- informações provenientes do dispositivo SensoryPass;
- localização;
- nível de ruído;
- nível de ativação;
- histórico;
- tendências ao longo do tempo.

A proposta não é diagnosticar a criança.

O app deve transmitir a ideia de que o SensoryPass reúne informações do cotidiano para oferecer aos profissionais **mais contexto sobre o período entre os atendimentos**.

---

## 4. Importante: não é um dispositivo médico

O SensoryPass **não é um dispositivo médico**.

Não apresentar:

- BPM;
- frequência cardíaca em números;
- SpO2;
- oxigenação em porcentagem;
- diagnósticos;
- alertas médicos;
- interpretações clínicas;
- recomendações clínicas automáticas.

Quando for necessário representar informações relacionadas ao sinal fisiológico captado pelo dispositivo, utilizar apenas:

**Nível de ativação**

Estados possíveis:

- Baixo;
- Habitual;
- Elevado.

Exemplo:

```text
Nível de ativação
Habitual
```

Nunca exibir:

```text
92 BPM
97% SpO2
```

Adicionar de forma discreta em alguma área da interface:

> Informações para acompanhamento e contexto. O SensoryPass não é um dispositivo médico.

---

## 5. Direção visual

A interface deve seguir rigorosamente o `brand_guide.md`.

Quero uma aparência:

- moderna;
- acolhedora;
- leve;
- tecnológica sem parecer hospitalar;
- elegante;
- humana;
- simples;
- intuitiva;
- com bastante espaço em branco;
- com excelente acabamento visual.

A interface não deve parecer um dashboard empresarial genérico.

Use como base a identidade da SensoryPass:

- fundo creme/marfim;
- índigo/lilás como cor principal;
- turquesa como cor complementar;
- coral, rosa, laranja e azul apenas como destaques;
- gradiente característico SensoryPass usado com moderação;
- cards claros;
- cantos arredondados;
- sombras muito suaves;
- formas orgânicas;
- linhas onduladas discretas;
- ícones simples;
- bastante respiro visual.

O gradiente da marca deve aparecer principalmente em:

- pequenos elementos de destaque;
- estados selecionados;
- botão principal;
- detalhes decorativos;
- visualizações especiais.

Não colocar gradiente em todos os botões e cards.

---

## 6. Responsividade

Desenvolva primeiro pensando em celular.

Referência aproximada:

```text
390px x 844px
```

A aplicação também deve funcionar bem em telas maiores.

Em desktop:

- centralize o conteúdo;
- limite a largura máxima;
- preserve a sensação de aplicativo;
- não estique a interface horizontalmente;
- mantenha a barra inferior integrada ao layout.

Sugestão de largura máxima:

```css
max-width: 480px;
```

---

## 7. Navegação inferior

Criar uma barra de navegação inferior fixa com quatro áreas:

1. Início
2. Relatos
3. Localização
4. Insights

Cada item deve possuir:

- ícone;
- pequeno label;
- estado ativo;
- feedback visual ao toque.

A opção ativa deve usar a identidade visual da SensoryPass.

Não recarregar a página.

As telas devem trocar usando JavaScript.

Usar transições suaves entre telas:

- fade;
- pequeno slide;
- duração entre 200ms e 350ms.

A barra inferior deve permanecer visível durante a navegação.

---

## 8. Personagem da demonstração

Utilize uma criança totalmente fictícia.

```text
Nome: João
Idade: 8 anos
```

Utilize também uma responsável fictícia:

```text
Nome: Mariana
Relação: Responsável
```

Deixe claro no código que todos os dados são **MOCK**.

Adicionar um pequeno badge visual:

```text
Dados simulados
```

Não utilizar informações de pessoas reais.

---

# 9. Tela Início

A tela inicial deve ser limpa e agradável.

## Cabeçalho

No topo:

- logo ou símbolo SensoryPass;
- avatar discreto do usuário;
- saudação.

Texto:

```text
Olá, Mariana
Veja como foi o dia de João.
```

## Card principal da criança

Mostrar:

- avatar ilustrativo ou iniciais;
- João;
- 8 anos;
- dispositivo conectado;
- pequeno indicador visual turquesa ou verde.

Exemplo:

```text
João
8 anos

● Dispositivo conectado
```

## Seção "Agora"

Criar três cards pequenos:

### Nível de ativação

```text
Habitual
```

### Ruído ambiente

```text
Moderado
```

### Localização

```text
Escola
```

Adicionar abaixo:

```text
Última atualização: agora
```

Nunca mostrar valores clínicos.

## Resumo de hoje

Mostrar três pequenos indicadores:

```text
3 relatos
2 períodos de ruído elevado
1 alteração no nível de ativação
```

Os indicadores podem usar pequenos ícones.

## Últimos acontecimentos

Criar uma timeline vertical.

Exemplo:

```text
14:32
Nível de ativação elevado
Ruído ambiente alto

14:36
Relato registrado por Mariana

12:10
Nível de ativação habitual

10:45
Ruído ambiente elevado
```

Os cards devem ser clicáveis e possuir feedback visual.

---

# 10. Tela Relatos

Esta é uma das telas principais da demonstração.

Título:

```text
Relatos
```

Texto auxiliar:

```text
Registre acontecimentos do dia a dia de João.
```

Mostrar relatos anteriores em cards.

Exemplo:

```text
Hoje, 14:36
Mariana • Responsável

"Hoje o João ficou muito agitado depois do recreio e demorou alguns minutos para se acalmar."
```

Tags:

```text
#agitação
#recreio
#regulação
```

Mostrar análise:

```text
Tom percebido no relato
Preocupação

Intensidade
Moderada
```

### Regra importante

Não escrever:

```text
Sentimento da criança
```

A IA está analisando o **texto produzido por quem realizou o relato**, e não inferindo diretamente o estado emocional da criança.

Usar expressões como:

- Tom percebido no relato;
- Sentimento expresso no relato;
- Análise do relato;
- Tom do registro.

---

# 11. Mock de gravação

Criar um botão principal:

```text
Registrar relato
```

Usar ícone de microfone.

O botão pode ser:

- flutuante;
- destacado no topo da tela;
- ou em uma área fixa próxima ao rodapé.

Ao tocar, abrir um modal ou tela de gravação.

## Estado de gravação

Mostrar:

```text
Gravando relato...
```

Criar:

- cronômetro;
- animação falsa de waveform;
- botão grande de finalizar;
- pulsação sutil no ícone do microfone.

Exemplo:

```text
00:08
```

Botão:

```text
Finalizar
```

A gravação é completamente simulada.

Nenhum áudio precisa ser capturado.

---

# 12. Mock de transcrição

Ao clicar em finalizar:

1. esconder a interface de gravação;
2. mostrar loading por aproximadamente 800ms;
3. mostrar:

```text
Transcrevendo relato...
```

Depois apresentar sempre esta transcrição fixa:

```text
Hoje o João ficou muito agitado depois do recreio e demorou alguns minutos para se acalmar.
```

A transcrição deve aparecer dentro de um textarea editável.

Mostrar texto auxiliar:

```text
Revise a transcrição antes de continuar.
```

Botão:

```text
Analisar relato
```

---

# 13. Mock de análise por IA

Ao clicar em "Analisar relato":

Mostrar loading por aproximadamente 1 segundo:

```text
Analisando relato...
```

Depois apresentar os resultados com uma pequena animação de entrada.

## Resultado

```text
Tom percebido no relato
Preocupação

Intensidade
Moderada
```

Tags:

```text
Agitação
Recreio
Regulação
```

Resumo:

```text
João apresentou agitação após o recreio e levou alguns minutos para se regular.
```

Adicionar uma observação discreta:

```text
Análise gerada por IA a partir do relato.
```

Não apresentar essa análise como verdade absoluta.

Visualmente, diferenciar a análise da IA da transcrição original.

Botão:

```text
Salvar relato
```

Após salvar:

- mostrar um toast;
- fechar modal;
- inserir o relato no topo da lista;
- atualizar o contador de relatos;
- atualizar a timeline da tela inicial.

Toast:

```text
Relato salvo com sucesso
```

Tudo funciona somente no frontend.

---

# 14. Tela Localização

Criar a tela:

```text
Localização
```

Utilizar mapa real visualmente usando:

- Leaflet.js;
- OpenStreetMap.

A localização é totalmente simulada.

Não pedir permissão de localização.

Não utilizar:

```javascript
navigator.geolocation
```

Definir latitude e longitude fictícias diretamente no JavaScript.

Pode utilizar uma coordenada genérica de demonstração.

Não utilizar endereço residencial real.

## Card superior

Mostrar:

```text
João está em:
Escola

Dispositivo conectado

Última atualização:
há 2 minutos
```

Adicionar badge:

```text
Localização simulada
```

## Mapa

O mapa deve:

- ocupar aproximadamente 280–320px de altura no celular;
- possuir cantos arredondados;
- ficar integrado ao card;
- usar tiles do OpenStreetMap;
- manter a atribuição obrigatória;
- ter zoom controls discretos;
- ser responsivo.

Criar um marcador personalizado inspirado na identidade SensoryPass.

Pode ser:

- círculo índigo;
- contorno branco;
- pequeno detalhe em gradiente;
- ou ícone do beija-flor caso funcione visualmente.

Ao clicar no marker mostrar:

```text
João

Última localização registrada
Atualizado há 2 min

Localização simulada
```

Abaixo do mapa:

```text
Localização simulada para demonstração.
```

Não utilizar Google Maps.

---

# 15. Tela Insights

Criar:

```text
Insights
```

Texto auxiliar:

```text
Uma visão dos últimos registros de João.
```

Filtro visual:

```text
Últimos 7 dias
```

Não precisa ser funcional.

## Cards de indicadores

Mostrar:

```text
Relatos registrados
12
```

```text
Períodos de ruído elevado
5
```

```text
Alterações no nível de ativação
4
```

## Tom dos relatos

Criar barras horizontais arredondadas:

```text
Tranquilidade     45%
Preocupação       30%
Cansaço           15%
Frustração        10%
```

Esses dados são fictícios.

Não usar gráficos complexos.

## Assuntos recorrentes

Mostrar chips/tags:

```text
Rotina
Escola
Recreio
Barulho
Regulação
```

## Tendência observada

Criar um card especial.

Título:

```text
Tendência observada
```

Texto:

```text
Nos relatos desta semana, referências a ambientes com maior nível de ruído apareceram com mais frequência junto a registros de alteração no nível de ativação.
```

IMPORTANTE:

Isso deve ser escrito como **associação observada nos registros**, e não como relação causal.

Nunca escrever algo como:

```text
O barulho causa alteração na criança.
```

Adicionar abaixo:

```text
Essas informações servem como apoio para que o profissional tenha mais contexto sobre o dia a dia da criança.
```

---

# 16. Tela de detalhes de um relato

Ao clicar em um relato, abrir um modal ou tela de detalhes.

Mostrar:

```text
Relato
Hoje, 14:36

Registrado por
Mariana • Responsável
```

Texto original:

```text
Hoje o João ficou muito agitado depois do recreio e demorou alguns minutos para se acalmar.
```

## Contexto próximo ao relato

Mostrar:

```text
Nível de ativação
Elevado

Ruído ambiente
Alto

Local
Escola
```

Deixar claro que são registros próximos daquele momento.

## Análise do relato

```text
Tom percebido
Preocupação

Intensidade
Moderada
```

Tags:

```text
Agitação
Recreio
Regulação
```

Resumo:

```text
João apresentou agitação após o recreio e levou alguns minutos para se regular.
```

Adicionar:

```text
Análise automática baseada no conteúdo do relato.
```

---

# 17. Microinterações

Caprichar nas microinterações.

Adicionar:

- fade entre telas;
- slide muito discreto;
- hover no desktop;
- active state no toque;
- cards com leve elevação;
- animação do item ativo da barra inferior;
- skeleton/loading;
- toast de sucesso;
- microanimação no microfone;
- waveform animada;
- entrada suave dos resultados da IA;
- contador da gravação;
- transição suave dos modais;
- pequenos números animados ao atualizar contadores.

Não exagerar.

As animações devem transmitir refinamento, não chamar mais atenção que o conteúdo.

Duração recomendada:

```text
150ms a 350ms
```

---

# 18. Acessibilidade

Garantir:

- bom contraste;
- fontes legíveis;
- tamanho mínimo confortável;
- áreas de toque com pelo menos 44px;
- `aria-label` nos ícones importantes;
- navegação por teclado;
- `focus-visible`;
- labels em campos;
- sem depender apenas de cor para comunicar estados;
- texto alternativo nas imagens;
- bom comportamento com zoom de navegador.

Respeitar:

```css
@media (prefers-reduced-motion: reduce)
```

Quando essa preferência estiver ativa:

- reduzir animações;
- remover movimentos desnecessários;
- manter apenas transições essenciais.

---

# 19. Estados vazios e erros

Mesmo sendo mock, criar estados básicos.

## Sem relatos

```text
Ainda não há relatos registrados.

Os relatos ajudam a construir uma visão mais completa do dia a dia de João.
```

Botão:

```text
Registrar primeiro relato
```

## Erro simulado

Não precisa aparecer no fluxo normal, mas crie um componente reutilizável para erros.

Exemplo:

```text
Não foi possível carregar esta informação.
Tente novamente.
```

---

# 20. Dados mockados

Criar todos os dados em um objeto JavaScript centralizado.

Exemplo:

```javascript
const mockData = {
  child: {
    name: "João",
    age: 8,
    deviceConnected: true
  },

  current: {
    activationLevel: "Habitual",
    noiseLevel: "Moderado",
    location: "Escola",
    updatedAt: "agora"
  },

  summary: {
    reports: 3,
    elevatedNoisePeriods: 2,
    activationChanges: 1
  }
};
```

Evitar espalhar dados fictícios por muitos arquivos.

Centralize o máximo possível.

---

# 21. Estrutura interna do JavaScript

Organize o código com funções claras.

Exemplo:

```text
renderHome()
renderReports()
renderLocation()
renderInsights()
openRecordingModal()
finishRecording()
showTranscription()
analyzeReport()
saveReport()
showToast()
```

Evite código excessivamente acoplado.

Use comentários apenas onde realmente ajudam.

---

# 22. Mapa com OpenStreetMap

Carregar Leaflet via CDN.

Exemplo de funcionamento esperado:

```javascript
const map = L.map("map").setView([LATITUDE, LONGITUDE], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
```

Use uma coordenada fixa fictícia.

Não utilizar API key.

O mapa deve funcionar ao abrir o projeto com conexão à internet.

Se a tela do mapa for inicialmente escondida, garantir que o Leaflet seja redimensionado corretamente ao abrir a aba.

Usar:

```javascript
map.invalidateSize();
```

quando necessário.

---

# 23. Logo e assets

Antes de gerar a interface:

1. procure os arquivos `.svg`, `.png`, `.jpg` e `.webp` na pasta;
2. identifique logo e ícone do SensoryPass;
3. escolha preferencialmente SVG;
4. use PNG apenas se necessário;
5. não recrie a marca por texto se o arquivo oficial estiver disponível.

Criar uma pasta `assets` apenas se for necessário organizar arquivos.

Não apagar os arquivos originais.

---

# 24. Tipografia

Utilizar as fontes indicadas no `brand_guide.md`.

Caso uma fonte específica não esteja disponível:

- escolher uma alternativa visualmente próxima;
- preferir Google Fonts apenas se necessário;
- manter excelente legibilidade;
- não utilizar mais de duas famílias tipográficas.

Textos informativos devem ser fáceis de ler em telas pequenas.

---

# 25. Componentes visuais

Criar componentes consistentes para:

- card;
- botão principal;
- botão secundário;
- chips;
- badge;
- status;
- avatar;
- timeline;
- modal;
- toast;
- loading;
- barra inferior;
- indicador de nível;
- barras de tendência.

Todos devem seguir os mesmos:

- raios;
- espaçamentos;
- tipografia;
- sombras;
- cores;
- estados interativos.

---

# 26. CSS

Utilizar variáveis CSS.

Exemplo:

```css
:root {
  --color-primary: ...;
  --color-secondary: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-text-muted: ...;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  --shadow-soft: ...;

  --space-1: ...;
  --space-2: ...;
  --space-3: ...;
}
```

Preencher os valores com base no `brand_guide.md`.

Não inventar uma identidade visual desconectada da marca.

---

# 27. Fluxo principal da demonstração

O app deve permitir esta sequência:

```text
1. Usuário abre o SensoryPass
       ↓
2. Visualiza o resumo atual de João
       ↓
3. Abre Relatos
       ↓
4. Toca em "Registrar relato"
       ↓
5. Interface simula gravação
       ↓
6. Usuário finaliza
       ↓
7. Interface simula transcrição
       ↓
8. Texto aparece
       ↓
9. Usuário toca em "Analisar relato"
       ↓
10. IA simulada apresenta análise
       ↓
11. Usuário salva
       ↓
12. Novo relato aparece no histórico
       ↓
13. Contadores da tela inicial são atualizados
       ↓
14. Usuário abre Insights
       ↓
15. Visualiza tendências
       ↓
16. Abre Localização
       ↓
17. Visualiza a posição simulada de João no mapa
```

Essa sequência precisa funcionar sem recarregar a página.

---

# 28. Conteúdo e linguagem

Use português do Brasil.

Tom:

- acolhedor;
- claro;
- respeitoso;
- profissional;
- acessível.

Evitar linguagem alarmista.

Evitar palavras como:

- risco;
- anormal;
- problema;
- paciente;
- diagnóstico automático.

Prefira:

- registro;
- contexto;
- acompanhamento;
- tendência;
- informação;
- rotina;
- observação;
- relato;
- nível;
- período.

---

# 29. Diferenciação visual da IA

Quando uma informação for produzida pela IA, mostrar um pequeno identificador.

Exemplo:

```text
✦ Análise por IA
```

ou equivalente visual utilizando ícone.

A IA nunca deve parecer ser a fonte do relato original.

Deixar clara a separação:

```text
Relato original
↓
Análise por IA
```

---

# 30. Privacidade

Adicionar na interface, de forma discreta, uma seção ou informação sobre privacidade.

Pode aparecer na tela inicial ou em um modal "Sobre os dados".

Texto curto:

```text
Os dados da criança devem ser acessados apenas por pessoas autorizadas.
```

Para o mock, não é necessário implementar autenticação ou criptografia.

Não afirmar que o mock possui recursos reais que não foram implementados.

---

# 31. Qualidade visual esperada

O resultado deve parecer:

- um aplicativo real;
- pronto para ser apresentado em uma competição;
- um protótipo de alta fidelidade;
- um produto startup;
- algo que poderia ser mostrado em um smartphone.

Não entregar apenas wireframes.

Não criar elementos genéricos sem acabamento.

Caprichar especialmente em:

- espaçamento;
- hierarquia visual;
- tamanho dos textos;
- cards;
- ícones;
- estados;
- navegação;
- transições.

---

# 32. Critérios de conclusão

Antes de finalizar, verificar:

- [ ] A logo real está sendo usada.
- [ ] O `brand_guide.md` foi seguido.
- [ ] A interface é mobile-first.
- [ ] Existem quatro abas na navegação inferior.
- [ ] A troca de telas funciona sem reload.
- [ ] A gravação mock funciona.
- [ ] O cronômetro funciona.
- [ ] A transcrição mock aparece.
- [ ] A análise mock aparece.
- [ ] O novo relato pode ser salvo.
- [ ] O contador de relatos é atualizado.
- [ ] O mapa OpenStreetMap funciona.
- [ ] A localização é claramente simulada.
- [ ] Não existe BPM.
- [ ] Não existe SpO2.
- [ ] Não existem diagnósticos.
- [ ] "Nível de ativação" é usado no lugar de leitura clínica.
- [ ] A IA analisa o relato, não o sentimento da criança.
- [ ] Os Insights falam em tendências e associações, não causalidade.
- [ ] Existem transições suaves.
- [ ] `prefers-reduced-motion` foi implementado.
- [ ] O app funciona em 390px de largura.
- [ ] O app continua bonito no desktop.
- [ ] Não existem erros de JavaScript no console.

---

# 33. Entrega

Ao terminar:

1. entregue todos os arquivos necessários;
2. garanta que o projeto rode facilmente;
3. informe qual arquivo deve ser aberto;
4. não exigir instalação ou build se não for necessário;
5. mantenha o código organizado e legível;
6. não deixe funcionalidades principais apenas como comentários ou TODOs;
7. tudo que faz parte da demonstração deve estar funcional.

O resultado deve ser um **mock navegável e visualmente convincente do SensoryPass**, com foco em contar de maneira simples a história do produto:

> pessoas que convivem com a criança registram acontecimentos do dia a dia; o sistema organiza esses relatos junto com informações contextuais do dispositivo; e o profissional consegue visualizar um histórico mais rico para compreender melhor a rotina da criança que acompanha.
