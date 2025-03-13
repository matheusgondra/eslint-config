# @dgondra/eslint-config

Este pacote fornece uma configuração personalizada do ESLint para projetos JavaScript/TypeScript, integrando boas práticas com suporte para Prettier.

## Recursos

- Configuração para arquivos JavaScript, TypeScript.
- Integração com [Prettier](https://prettier.io/) através do plugin `eslint-plugin-prettier` e `eslint-config-prettier`.
- Suporte a regras recomendadas do ESLint e da configuração do plugin JavaScript do ESLint.
- Configuração recomendada para TypeScript via `typescript-eslint`.

## Instalação

**pnpm**
```bash
pnpm add -D @dgondra/eslint-config eslint
```

**yarn**
```bash
yarn add -D @dgondra/eslint-config eslint
```

**npm**
```bash
npm i -D @dgondra/eslint-config eslint
```

## Uso

Crie um arquivo de configuração do eslint e exporte a configuração do pacote

```js
import config from "@dgondra/eslint-config";

export default config;
```