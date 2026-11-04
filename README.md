# Corrida do Zero

Aplicativo web progressivo (PWA) para acompanhar um plano de corrida para iniciantes.

## Funcionalidades

- Plano de corrida de 9 etapas, com alternância entre corrida e caminhada.
- Temporizador com aquecimento, blocos de treino e desaquecimento.
- Agenda semanal configurável.
- Registro manual de corrida, musculação e basquete.
- Histórico de atividades e acompanhamento de minutos.
- Registro opcional de testes de distância.
- Exportação e importação de backup em JSON.
- Armazenamento local no navegador e suporte básico a uso offline.

## Como executar localmente

Como o projeto usa Service Worker, execute por um servidor HTTP local. Uma opção com Python:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

Também é possível publicar os arquivos em GitHub Pages, Netlify ou outro host estático com HTTPS.

## Dados

Os registros ficam no armazenamento local do navegador (`localStorage`). Limpar os dados do site remove os registros salvos. Use a opção **Exportar backup** para guardar uma cópia.

## Estrutura

- `index.html`: interface, estilos e lógica do aplicativo.
- `manifest.webmanifest`: configuração de instalação PWA.
- `sw.js`: cache offline e atualização do aplicativo.
- `icon-*.png`: ícones do aplicativo.
