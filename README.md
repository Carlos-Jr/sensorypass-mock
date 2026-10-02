# SensoryPass — Mock navegável

Protótipo de alta fidelidade do app SensoryPass (by Adelitas) para demonstração.
Todos os dados são **simulados** — não há backend, autenticação, geolocalização, captura de áudio ou IA real.

## Como abrir

Abra `index.html` no navegador (é preciso internet para fontes, ícones e o mapa OpenStreetMap).

Se o mapa não carregar abrindo direto pelo arquivo, sirva a pasta localmente:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Docker

```bash
docker compose up -d --build   # http://localhost:8099
docker compose down
```

## Instalar como app (PWA)

O site é um web app instalável. No Android (Chrome), abra a URL e use **Instalar app** / **Adicionar à tela inicial**.
A instalação exige **HTTPS** (ou `localhost`). O layout se adapta a celular, tablet e desktop (menu lateral).

## Estrutura

- `index.html` — estrutura das telas, barra inferior e modal
- `styles.css` — tokens e componentes baseados em `sensorypass_brand_guide.md`
- `app.js` — dados mock centralizados (`mockData`) e lógica da demonstração
- `logo.png`, `icon.png` — identidade visual

Atalhos de tela: `#inicio`, `#relatos`, `#localizacao`, `#insights`, `#perfil`.

> Informações para acompanhamento e contexto. O SensoryPass não é um dispositivo médico.
