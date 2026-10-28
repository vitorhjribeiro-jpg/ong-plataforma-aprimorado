# Documentação Técnica — Plataforma Instituto Florescer

## 1. Objetivo do projeto

Desenvolver, de forma acadêmica e progressiva, uma plataforma web completa
para uma ONG fictícia (Instituto Florescer), priorizando neste momento os
fundamentos de **HTML5 semântico**, com estrutura preparada para receber
aprofundamento futuro de **CSS3** e **JavaScript**.

## 2. Público-alvo

A plataforma foi desenhada considerando quatro perfis distintos de usuário,
detalhados na seção 3.

## 3. Personas

### 3.1 Administrador da ONG
Responsável pela gestão institucional: cadastro de projetos, acompanhamento
de métricas, gestão de voluntários e doações, publicação de notícias e
relatórios. **Neste projeto acadêmico, essas funções são apresentadas de
forma conceitual/estrutural**, sem sistema de login ou banco de dados real.

### 3.2 Voluntário
Busca conhecer oportunidades de voluntariado, se candidatar a projetos e,
futuramente, acompanhar seu histórico de participação e certificados.
Representado principalmente pelo fluxo de `cadastro.html`.

### 3.3 Doador/Apoiador
Busca entender a missão da ONG, os projetos e o impacto gerado, além de
conhecer formas de doação e consultar relatórios de transparência.
Representado pelas seções de doação em `index.html` e de transparência em
`projetos.html`.

### 3.4 Visitante
Público geral que busca conhecer a organização, seus projetos, imagens e
canais de contato, sem necessariamente se cadastrar. Atendido pela navegação
livre entre as três páginas.

## 4. Casos de uso

| Ator | Caso de uso | Onde é atendido |
|---|---|---|
| Visitante | Conhecer missão, visão e valores da ONG | `index.html` — seção "Quem somos" |
| Visitante | Ver notícias recentes | `index.html` — seção "Notícias e atualizações" |
| Visitante | Encontrar informações de contato | `index.html` — seção "Fale conosco" (`<address>`) |
| Doador | Conhecer formas de doação | `index.html` — seção "Como você pode apoiar" |
| Doador | Consultar relatórios de transparência | `projetos.html` — seção "Relatórios de transparência" |
| Voluntário | Descobrir projetos e oportunidades | `projetos.html` — lista de projetos com objetivos e indicadores |
| Voluntário | Se cadastrar como voluntário | `cadastro.html` — formulário completo |
| Administrador (conceitual) | Gerenciar projetos, voluntários e doações | Representado estruturalmente; sem sistema real |

## 5. Arquitetura das páginas

O projeto segue uma arquitetura simples de **site estático multi-página**
(sem framework de front-end), com três páginas HTML interligadas por um
cabeçalho de navegação comum:

```
index.html  ──┬── projetos.html ── (âncoras internas para cada projeto)
              └── cadastro.html
```

Cada página compartilha:
- o mesmo cabeçalho (`<header>`) com logotipo e navegação principal;
- o mesmo rodapé (`<footer>`) com links e informações institucionais;
- a mesma folha de estilos (`assets/css/style.css`);
- o mesmo script (`assets/js/script.js`).

## 6. Estrutura HTML5

Elementos semânticos utilizados em todas as páginas, com sua função:

| Elemento | Uso no projeto |
|---|---|
| `<header>` | Cabeçalho fixo com logotipo e menu de navegação |
| `<nav>` | Navegação principal e navegações auxiliares (rodapé, categorias) |
| `<main>` | Conteúdo principal e único de cada página |
| `<section>` | Divisão de blocos temáticos (missão, projetos, formulário etc.) |
| `<article>` | Cada projeto social, cada notícia, cada cartão de conteúdo autocontido |
| `<aside>` | Bloco de indicadores na página inicial, complementar ao conteúdo principal |
| `<footer>` | Rodapé institucional, repetido em todas as páginas |
| `<figure>` / `<figcaption>` | Toda imagem ilustrativa acompanhada de legenda |
| `<address>` | Bloco de contato institucional (`index.html`) |
| `<time>` | Datas de fundação, notícias e relatórios, com atributo `datetime` |

A hierarquia de títulos foi planejada para não pular níveis: `<h1>` único por
página, `<h2>` para seções, `<h3>` para subseções (como cada projeto) e
`<h4>` para blocos internos (como "Objetivos" e "Indicadores" dentro de cada
projeto).

## 7. Formulários

O formulário de `cadastro.html` foi organizado em quatro grupos lógicos,
usando `<fieldset>` e `<legend>`:

1. **Dados pessoais** — nome completo, CPF, data de nascimento;
2. **Dados de contato** — e-mail, telefone;
3. **Endereço** — CEP, endereço, cidade, estado;
4. **Participação** — tipo de participação (rádio), área de interesse
   (checkbox), forma de contribuição (select), disponibilidade (number),
   mensagem (textarea).

Tipos de campo HTML5 utilizados: `text`, `email`, `tel`, `date`, `number`,
`radio`, `checkbox`, `select`, `textarea`.

Atributos de validação utilizados: `required`, `placeholder`, `minlength`,
`maxlength`, `pattern`, `autocomplete`, `min`/`max` (para datas e números).

Os campos de CPF, telefone e CEP utilizam `pattern` para validar o formato
esperado no envio, e contam com uma máscara de digitação simples implementada
em `assets/js/script.js`, comentada em detalhe naquele arquivo.

## 8. Acessibilidade

Ver seção "Acessibilidade" do `README.md` para a lista completa de práticas
aplicadas. Do ponto de vista técnico, destaca-se:
- todo `<input>`, `<select>` e `<textarea>` possui um `<label>` associado via
  `for`/`id`;
- grupos de campos relacionados (rádio/checkbox) usam `<fieldset>` +
  `<legend>` internos para leitura correta por tecnologia assistiva;
- uso do atributo `aria-describedby` para associar campos a textos de ajuda
  (ex.: formato esperado do CPF, telefone e CEP);
- link de "pular para o conteúdo principal" no início de cada página.

## 9. SEO

Cada página possui `<title>` único e descritivo, `meta charset="UTF-8"`,
`meta name="viewport"` e `meta name="description"` específica ao conteúdo da
página, além de hierarquia de títulos organizada e uso de `alt` descritivo
em todas as imagens.

## 10. Responsividade

Ver seção "Responsividade" do `README.md`. Tecnicamente, o layout utiliza
Flexbox e CSS Grid com `auto-fit`/`minmax`, o que garante reorganização
automática de cartões e colunas em telas menores, complementado por uma
media query simples em `max-width: 700px`.

## 11. Organização de arquivos

Ver seção "Estrutura de pastas" do `README.md`. A separação entre
`assets/css`, `assets/js` e `assets/images` (com subpastas por tipo de
imagem) segue a convenção sugerida no enunciado da atividade, facilitando a
manutenção e a futura expansão do projeto.

