# Instituto Florescer — Plataforma Web (Projeto Acadêmico)

> **Entrega II — CSS3:** esta versão aplica um design system, layout responsivo com Flexbox/Grid, navegação com dropdown e menu hambúrguer e uma biblioteca de componentes. Veja [Entrega II](#entrega-ii--css3) e a página `guia-de-estilo.html`.

Plataforma web institucional fictícia para uma ONG, desenvolvida como projeto
acadêmico com foco principal em **HTML5 semântico**, preparada para receber,
em etapas futuras da disciplina, aprofundamento em **CSS3** e **JavaScript**.

> ⚠️ **Projeto acadêmico e fictício.** O "Instituto Florescer", seus dados de
> contato, projetos, números e imagens são fictícios, criados exclusivamente
> para fins de estudo. Não há back-end, banco de dados, autenticação ou
> gateway de pagamento reais.
>
> **Site Publicado:** https://vitorhjribeiro-jpg.github.io/ong-plataforma-aprimorado/
---

## Sumário

- [Objetivo do projeto](#objetivo-do-projeto)
- [Entrega II — CSS3](#entrega-ii--css3)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como executar localmente](#como-executar-localmente)
- [Acessibilidade](#acessibilidade)
- [Responsividade](#responsividade)
- [Segurança (observações para uma aplicação real)](#segurança-observações-para-uma-aplicação-real)
- [Imagens utilizadas](#imagens-utilizadas)
- [Autoria](#autoria)

---

## Objetivo do projeto

Demonstrar, de forma integrada, o uso de **HTML5 semântico** na construção de
uma plataforma web completa para uma ONG, contemplando:

- estrutura semântica (`header`, `nav`, `main`, `section`, `article`, `aside`,
  `footer`, `figure`, `figcaption`, `address`, `time`);
- formulários HTML5 completos, com validação nativa;
- boas práticas de acessibilidade (WCAG 2.1 nível AA);
- boas práticas básicas de SEO;
- organização de arquivos preparada para CSS3 e JavaScript;
- preparação para versionamento com Git/GitHub.

CSS3 e JavaScript foram utilizados apenas de forma simples e didática, pois
ainda serão aprofundados em etapas futuras da disciplina.


## Entrega II — CSS3

| Requisito | Onde está |
|---|---|
| Design system com variáveis CSS | `assets/css/base/variaveis.css` |
| Paleta com 15 cores (primárias, secundárias, neutras e de feedback) | `variaveis.css` |
| Tipografia hierárquica (7 tamanhos) | `variaveis.css` e `base/reset-tipografia.css` |
| Espaçamento modular (8, 16, 24, 32, 48, 64px) | `variaveis.css` (`--espaco-1` a `--espaco-8`) |
| Leiaute principal com CSS Grid | `layout/grid.css` (`body` em grid: cabeçalho / conteúdo / rodapé) |
| Flexbox em componentes internos | cabeçalho, botões, hero, cartões de projeto, alertas |
| Grid customizado de 12 colunas | `.grade-12` e `.col-N`, `.col-sm-N`, `.col-md-N`, `.col-lg-N` |
| 5 breakpoints | `responsivo.css`: 480, 640, 768, 1024 e 1280px |
| Leiautes por tipo de conteúdo | cartões, galeria em mosaico, projeto (imagem + texto), indicadores, documentos |
| Menu com submenu dropdown | `layout/navegacao.css` |
| Menu hambúrguer (mobile) | `navegacao.css` + `script.js` |
| Cards de projeto | `componentes/cards.css` |
| Botões (hover, focus, active, disabled) | `componentes/botoes.css` |
| Formulários com validação visual | `componentes/formularios.css` + `script.js` |
| Alerts, toasts e modals | `componentes/feedback.css` + `script.js` |
| Badges e tags | `componentes/badges-tags.css` |

### Estrutura modular do CSS

```
assets/css/
├── style.css            (importa todos os módulos)
├── base/                (variaveis.css, reset-tipografia.css)
├── layout/              (grid.css, navegacao.css)
├── componentes/         (botoes, cards, badges-tags, formularios, feedback)
└── responsivo.css
```

O JavaScript foi usado apenas para comportamento de interface (menu, modal, toast e validação visual).

## Funcionalidades

A plataforma está organizada em três páginas principais:

| Página | Conteúdo |
|---|---|
| `index.html` | Página institucional: apresentação, missão/visão/valores, história, indicadores, destaques de projetos, voluntariado, doações, notícias, galeria e contato. |
| `projetos.html` | Lista detalhada dos projetos sociais, com objetivos, público beneficiado, indicadores, resultados e relatórios de transparência. |
| `cadastro.html` | Formulário HTML5 completo para cadastro de voluntários e apoiadores. |
| `guia-de-estilo.html` | Guia do design system: cores, tipografia, espaçamento, grid e componentes. |

Todas as funcionalidades de administração (login, cadastro de projetos pelo
administrador, banco de dados, emissão real de certificados, gateway de
pagamento) são apresentadas de forma **conceitual/estrutural**, conforme
solicitado no escopo acadêmico do projeto — não há sistema real por trás
delas.

## Tecnologias utilizadas

- **HTML5** (foco principal do projeto);
- **CSS3** manual, sem frameworks (sem Bootstrap, sem Tailwind), em
  `assets/css/style.css`, com Flexbox e CSS Grid para um layout responsivo
  simples;
- **JavaScript puro (Vanilla JS)**, sem bibliotecas, em `assets/js/script.js`,
  usado apenas para uma máscara simples de digitação nos campos de CPF,
  telefone e CEP do formulário de cadastro.

Nenhum framework, biblioteca externa ou dependência de build foi utilizado —
o projeto pode ser aberto diretamente no navegador.

## Estrutura de pastas

```
ong-plataforma/
│
├── index.html
├── projetos.html
├── cadastro.html
├── README.md
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── images/
│       ├── logo/
│       ├── projetos/
│       ├── equipe/
│       └── galeria/
│
└── docs/
    └── documentacao.md
```

Todas as imagens referenciadas no HTML já existem como **imagens
ilustrativas (placeholders)** geradas para este projeto, para que as páginas
funcionem imediatamente ao serem abertas. Consulte [Imagens
utilizadas](#imagens-utilizadas) antes de publicar o projeto oficialmente.

## Como executar localmente

Por ser um projeto 100% estático (HTML, CSS e JS puros), não é necessário
instalar nada. Duas formas simples de executar:

**Opção 1 — Abrir diretamente no navegador**
1. Baixe/clone a pasta `ong-plataforma`;
2. Dê duplo clique em `index.html` (ou clique com o botão direito → "Abrir
   com" → seu navegador preferido).

**Opção 2 — Usando um servidor local simples (recomendado)**
Alguns navegadores restringem certos recursos ao abrir arquivos diretamente
(`file://`). Para simular um ambiente mais próximo de produção:

```bash
# Dentro da pasta ong-plataforma
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

Se estiver usando o VS Code, a extensão **Live Server** também funciona bem
para este projeto.


## Acessibilidade

Práticas aplicadas, alinhadas à WCAG 2.1 nível AA:

- Uso de HTML semântico como base da estrutura (ao invés de `div` genérica);
- Hierarquia lógica de títulos em cada página;
- Todo `<label>` associado ao seu campo via `for`/`id`;
- Textos alternativos (`alt`) descritivos em todas as imagens;
- Link "Pular para o conteúdo principal" no início de cada página;
- Landmarks ARIA implícitos via HTML5 (`header`, `nav`, `main`, `footer`);
- Indicação de campos obrigatórios não depende apenas de cor (o asterisco é
  acompanhado de texto para leitor de tela via `.apenas-leitor-de-tela`);
- Estilo de foco visível (`:focus-visible`) para navegação por teclado.

Fica como melhoria futura: testes com leitores de tela reais (NVDA, VoiceOver)
e verificação de contraste de cores após a implementação visual definitiva.

## Responsividade

O HTML foi estruturado para que a responsividade seja simples de implementar
e evoluir:

- Uso de `meta name="viewport"` em todas as páginas;
- Imagens com `max-width: 100%` no CSS;
- Layouts baseados em Flexbox e CSS Grid com `auto-fit`/`minmax`, que já se
  adaptam a diferentes tamanhos de tela sem a necessidade de muitas media
  queries;
- Uma media query básica (`max-width: 700px`) ajusta detalhes finos em telas
  pequenas.

Em etapas futuras, esse sistema poderá evoluir para uma abordagem totalmente
mobile-first, com mais breakpoints e imagens responsivas (`srcset`).

## Segurança (observações para uma aplicação real)

Este projeto é estático e não possui back-end, portanto **não implementa**
segurança de servidor. Em uma aplicação real, seria necessário implementar:

- **HTTPS** obrigatório em produção;
- **Sanitização de dados** de entrada no servidor;
- **Validação no servidor**, além da validação HTML5 do lado do cliente;
- Proteção contra **XSS** (Cross-Site Scripting);
- Proteção contra **CSRF** (Cross-Site Request Forgery), com tokens em
  formulários;
- **Autenticação** real para a área do administrador;
- **Controle de permissões** por tipo de usuário (administrador, voluntário,
  doador);
- **Armazenamento seguro de dados pessoais** (criptografia, conformidade com
  a LGPD), especialmente por envolver CPF e endereço.

No formulário de `cadastro.html`, a única validação implementada é a
**validação HTML5 do lado do cliente** (`required`, `pattern`, `minlength`,
`maxlength`, tipos de campo). Isso **não substitui** validação de servidor
em um cenário real.

## Imagens utilizadas

Foram utilizadas imagens dispobíveis em sites do google. Nenhuma imagem representa o Instituto Fictício que foi criado.


## Autoria

Projeto acadêmico desenvolvido para fins de estudo de HTML5, CSS3 e
JavaScript.

**Autor:** Vitor Hugo de Jesus Ribeiro
**GitHub:** [vitorhjribeiro-jpg](https://github.com/vitorhjribeiro-jpg)
