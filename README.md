# Corrida do Zero (Feito inteiramente com IA)

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

## Como acessar

https://vercel.com/arthurfreitasys/corrida-zero

## Dados

Os registros ficam no armazenamento local do navegador (`localStorage`). Limpar os dados do site remove os registros salvos. Use a opção **Exportar backup** para guardar uma cópia.

## Estrutura

- `index.html`: interface, estilos e lógica do aplicativo.
- `manifest.webmanifest`: configuração de instalação PWA.
- `sw.js`: cache offline e atualização do aplicativo.
- `icon-*.png`: ícones do aplicativo.
