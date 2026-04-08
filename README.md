# Miau Livraria (Projeto de Estudo)

Este repositório contém uma aplicação de exemplo (frontend em React + Vite) e um servidor (Strapi/Node) usada para fins de estudo (atividade de pós-graduação). O foco deste trabalho é descrever as funcionalidades implementadas na pasta `app/` (cliente), explicar como executar o projeto localmente e apontar onde cada funcionalidade está implementada.

## Visão geral

- Frontend: `app/` — React + TypeScript + Vite, Material UI e React Query.
- Backend/API: `server/` — projeto separado (endpoints Strapi ou API simulada) — não detalhado aqui.

## Funcionalidades implementadas (resumo)

1. Autenticação
	- Tela de login: `app/src/pages/login.tsx` (formulário, envio via `api.post('/auth/local')`, mutation do React Query).
	- Armazenamento de credenciais: `app/src/store/slices/auth-slice.ts` (salva `user` e `token` no `localStorage` e no Redux store).
	- Proteção de rotas: `app/src/routers/protected-route.tsx` (redireciona para `/login` caso não autenticado e mostra toast).
	- Interceptors Axios: `app/src/services/api.ts` injeta `Authorization: Bearer <token>` em requests e despacha `logout()` em respostas 401.

2. Gerenciamento de estado
	- Local (componentes): uso de `useState`, `useEffect` para controlar formulários, menus e tema (ex.: `app/src/pages/login.tsx`, `app/src/pages/books.tsx`, `app/src/theme.tsx`).
	- Global: Redux Toolkit para `auth` e `cart` (`app/src/store/slices/auth-slice.ts`, `app/src/store/slices/cart-slice.ts`).

3. Carrinho de compras
	- Lógica de carrinho e chamadas à API com thunks: `app/src/store/slices/cart-slice.ts` (fetch, add, update, remove).
	- Componentes de UI do carrinho: em `app/src/components/Cart/` (itens, resumo, esqueleto).

4. Busca e paginação
	- Busca com debounce: hook `app/src/hooks/useDebounce.ts` usado em `app/src/pages/books.tsx`.
	- Paginação: `app/src/components/BookList/book-pagination.tsx` e uso de `page`/`setPage` no `Books`.

5. Componentização e reutilização
	- Lista de livros: `app/src/components/BookList/index.tsx` (render condicional para loading/error/empty), `app/src/components/CardBook`.
	- Detalhes do livro: `app/src/components/BookInfo/index.tsx` (recebe `book` e `onAddToCart` via props).
	- Header/Layout: `app/src/components/Layout/` com ações de autenticação e menu móvel.

6. UI/Temas
	- Tema e alternância: `app/src/theme.tsx` (contexto com `useThemeMode` e `useState` para `mode`).

7. Logs de depuração (impressão de estado)
	- Para fins de auditoria/depuração foram adicionados logs que imprimem variáveis de estado no escopo:
	  - `app/src/pages/login.tsx` — imprime `{ identifier, passwordLength }` quando o formulário é submetido (não expõe a senha completa, apenas o comprimento).
	  - `app/src/pages/books.tsx` — imprime `{ searchTerm, debouncedSearchTerm, page }` sempre que qualquer um muda.

## Arquitetura de código — onde procurar cada responsabilidade

- Rotas: `app/src/routers/index.tsx` e `app/src/routers/protected-route.tsx`.
- Serviços/API: `app/src/services/api.ts` (instância axios, interceptors, constantes `HOST`, `HOST_API`).
- Estado global: `app/src/store/index.ts`, slices em `app/src/store/slices/` e actions em `app/src/store/actions/`.
- Páginas principais: `app/src/pages/` (home, books, book-details, cart-page, login, register).
- Componentes: `app/src/components/` — BookList, BookInfo, CardBook, Cart, Layout, etc.
- Hooks: `app/src/hooks/useDebounce.ts`.
- Utilitários: `app/src/utils/` (ex.: `generateImageUrlBook.ts`, `calculateTotals.ts`).

## Como rodar (desenvolvimento)

1. Instalar dependências (ambos frontend e backend). Exemplo para frontend:

```bash
cd app
npm install
npm run dev
```

2. Backend (exemplo): abrir `server/` e seguir as instruções em `server/README.md` (iniciar Strapi ou servidor local na porta esperada `http://localhost:1337`).

3. A aplicação espera a API em `http://localhost:1337` (ver `app/src/services/api.ts`).

Observação: os comandos exatos de backend dependem da configuração no diretório `server/`.

## Notas de segurança e privacidade

- Os logs adicionados foram pensados para depuração: em `login.tsx` apenas o comprimento da senha é logado (não a senha em texto claro). 


## Referências rápidas (arquivos de maior interesse)

- `app/src/pages/login.tsx` — tela de login, useState, handleSubmit e log de estado.
- `app/src/services/api.ts` — axios instance e interceptors (Authorization + 401 -> logout).
- `app/src/store/slices/auth-slice.ts` — persistência de credenciais e seletores.
- `app/src/store/slices/cart-slice.ts` — lógica do carrinho (thunks, normalização, totals).
- `app/src/hooks/useDebounce.ts` — hook de debounce usado na busca.
- `app/src/components/BookList/index.tsx` — render condicional por loading/error/empty.

---

Atividade de estudo — utilize este README como guia para navegação no código. 
