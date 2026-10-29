# Guia Rápido do Sanity Studio — BY ARCH Maxicon

Este guia explica como criar sua conta gratuita no Sanity, obter seu código de projeto (`projectId`) e começar a cadastrar **Casas** e **Escritórios de Arquitetura**.

---

## Passo 1: Criar sua conta gratuita no Sanity (2 minutos)

1. Acesse o site oficial: [https://www.sanity.io](https://www.sanity.io)
2. Clique no botão preto **"Get started"** ou **"Sign up"** no canto superior direito.
3. Escolha **"Continue with Google"** (ou crie com seu e-mail).
4. Uma vez logado, você será direcionado para o painel de gerenciamento ([https://www.sanity.io/manage](https://www.sanity.io/manage)).

---

## Passo 2: Criar o Projeto "Maxicon BY ARCH"

1. No painel [sanity.io/manage](https://www.sanity.io/manage), clique no botão **"+ Create project"**.
2. No campo **Project name**, digite: `Maxicon By Arch`.
3. Escolha o plano **Free** (Gratuito — inclui banco de dados, upload de imagens, CDN e usuários ilimitados).
4. Clique em **Create project**.
5. Assim que o projeto for criado, na tela inicial do projeto você verá o **Project ID**:
   - É um código de 8 letras e números (exemplo: `a1b2c3d4`).
   - Copie esse código!

---

## Passo 3: Colar o `projectId` no seu site

Abra o arquivo `js/sanity-client.js` e substitua `'SEU_PROJECT_ID_AQUI'` pelo código copiado:

```javascript
const SANITY_CONFIG = {
  projectId: "seu_codigo_aqui", // cole o seu Project ID aqui
  dataset: "production",
  apiVersion: "2023-08-01",
  useCdn: true,
};
```

---

## Passo 4: Como acessar o Painel do Sanity Studio para cadastrar conteúdo

O Sanity Studio é o painel visual onde você cria e edita as casas e os escritórios.

### Opção A: Executar Localmente no seu computador (Requer Node.js)
Abra o terminal na pasta `studio/`:
```bash
cd studio
npm install
npm run dev
```
O painel abrirá automaticamente em `http://localhost:3333`.

### Opção B: Publicar o Painel na Nuvem Gratuita do Sanity
Para que qualquer pessoa da sua equipe acesse o painel pela internet (ex: `https://maxicon-byarch.sanity.studio`):
```bash
cd studio
npx sanity deploy
```
Ele pedirá um nome para o link (ex: `maxicon-byarch`) e pronto! Você terá um painel online com login seguro para toda a equipe.

---

## O que você pode cadastrar no Sanity:

### 1. Casas (Residências Autorais):
- **Nome da Casa** (ex: Casa Alva, Casa Pinha)
- **Slug / Link da Página** (gerado com um clique no botão "Generate")
- **Escritório de Arquitetura Responsável** (selecione o escritório cadastrado)
- **Status** (Disponível, Breve Lançamento, Oportunidade Exclusiva, Vendida)
- **Especificações**:
  - Área privativa (m²)
  - Lote e metragem do terreno
  - Número de suítes
  - Número de vagas
  - Tópicos de diferenciais
- **Fotos**:
  - Foto de destaque da fachada (Hero)
  - Foto conceitual quadrada
  - Galeria completa de fotos internas e externas
  - Capa e link de vídeo (opcional)

### 2. Escritórios de Arquitetura:
- **Nome do Escritório** (ex: Jéssika Neckel Arquitetura)
- **Nome do Arquiteto Titular**
- **Logotipo Oficial** (PNG com fundo transparente)
- **Foto Oficial dos Arquitetos** (retrato de alta resolução)
- **Manchete Editorial & Biografia**
- **Instagram e Endereço Comercial**
- **Residência Assinada Associada** (seleciona a casa correspondente)
