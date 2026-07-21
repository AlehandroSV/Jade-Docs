import type { DocSection } from './docs'

export const docsSectionsPtBr: DocSection[] = [
  {
    id: 'introduction',
    title: 'Introdução',
    description: 'O que é Jade e por que você deveria usá-lo.',
    content: [
      {
        type: 'paragraph',
        text: 'Jade é um ORM para Lua que mapeia suas tabelas de banco de dados para objetos Lua. Você define seu schema em código, e Jade cuida das migrations, queries e validação de dados.',
      },
      {
        type: 'paragraph',
        text: 'Diferente de alguns ORMs, Jade não esconde o SQL. Toda query é transparente. Você sempre pode ver o que está sendo executado contra seu banco de dados.',
      },
      { type: 'heading', text: 'Princípios de Design', level: 3 },
      {
        type: 'list',
        items: [
          '**Schema é a verdade.** A estrutura do seu banco é definida em código Lua.',
          '**SQL é visível.** Toda operação pode ser auditada.',
          '**Migrations são determinísticas.** Sem alterações surpresa no schema.',
          '**Você tem controle.** Sem magia, sem comportamento oculto.',
        ],
      },
    ],
  },
  {
    id: 'installation',
    title: 'Instalação',
    description: 'Como instalar Jade e seus requisitos.',
    content: [
      { type: 'heading', text: 'Via LuaRocks', level: 3 },
      { type: 'code', code: 'luarocks install jade', language: 'bash' },
      { type: 'heading', text: 'Requisitos', level: 3 },
      {
        type: 'list',
        items: [
          'Lua 5.1, 5.2, 5.3, 5.4, ou LuaJIT',
          'PostgreSQL (via luapgsql ou pgmoon)',
          'MySQL (via luasql-mysql)',
          'SQLite (via luasql-sqlite3)',
        ],
      },
      { type: 'heading', text: 'Instalar CLI Esmeralda', level: 3 },
      { type: 'code', code: 'npm install -g @alehandrosv/esmeralda-cli', language: 'bash' },
      { type: 'callout', variant: 'tip', text: 'O CLI é opcional mas recomendado para migrations e gerenciamento de schema.' },
    ],
  },
  {
    id: 'quick-start',
    title: 'Início Rápido',
    description: 'Comece a usar o Jade em 3 passos.',
    content: [
      { type: 'heading', text: '1. Configurar o Banco de Dados', level: 3 },
      {
        type: 'code',
        language: 'lua',
        code: `local jade = require("jade")

jade.configure({
  database = {
    driver = "postgresql",
    host = "localhost",
    port = 5432,
    database = "myapp",
    user = "postgres",
    password = "secret"
  }
})`,
      },
      { type: 'heading', text: '2. Definir uma Entidade', level: 3 },
      {
        type: 'code',
        language: 'lua',
        code: `local User = jade.Entity("users", {
  id = jade.Integer():primaryKey(),
  name = jade.String(120),
  email = jade.String():unique(),
  active = jade.Boolean():default(true),
  created_at = jade.Timestamp():defaultNow()
})`,
      },
      { type: 'heading', text: '3. Usar Operações CRUD', level: 3 },
      {
        type: 'code',
        language: 'lua',
        code: `-- Criar
local user = User:create({ name = "Lucas", email = "lucas@email.com" })

-- Ler
local user = User:find(1)
local users = User:where(User.active:eq(true)):get()

-- Atualizar
user:update({ name = "Novo Nome" })

-- Deletar
user:delete()`,
      },
    ],
  },
  {
    id: 'encryption',
    title: 'Encriptação',
    description: 'Encripte dados sensíveis no seu banco de dados.',
    content: [
      {
        type: 'paragraph',
        text: 'Jade suporta dois modos de encriptação: nativo do banco (recomendado para produção) e customizado (para lógica fornecida pelo usuário).',
      },
      { type: 'heading', text: 'Encriptação Nativa do Banco (AES)', level: 3 },
      {
        type: 'paragraph',
        text: "Usa as funções de encriptação integradas do banco de dados. Requer PostgreSQL com extensão pgcrypto ou MySQL.",
      },
      {
        type: 'code',
        language: 'lua',
        code: `-- Configurar encriptação com uma chave secreta
jade.Encryption.configure({ key = "minha-chave-secreta" })

-- PostgreSQL: instale a extensão pgcrypto primeiro
-- CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Marcar colunas como encriptadas
local User = jade.Entity("users", {
  id = jade.Integer():primaryKey(),
  name = jade.String(120),
  email = jade.String(255):encrypted(),
  ssn = jade.String(11):encrypted(),
})

-- Valores são encriptados no banco de dados (não em Lua)
-- PostgreSQL: pgp_sym_encrypt(column, key)
-- MySQL: AES_ENCRYPT(column, key)
-- A desencriptação acontece automaticamente no SELECT`,
      },
      { type: 'heading', text: 'Encriptação Customizada (Funções do Usuário)', level: 3 },
      { type: 'heading', text: 'Opção 1: Funções Inline', level: 4 },
      {
        type: 'code',
        language: 'lua',
        code: `jade.Encryption.configure({
  key = "minha-chave-secreta",
  algorithm = "custom",
  encrypt_fn = function(value, key)
    -- sua lógica de encriptação aqui
    return valor_encriptado
  end,
  decrypt_fn = function(encrypted, key)
    -- sua lógica de desencriptação aqui
    return valor_original
  end,
})`,
      },
      { type: 'heading', text: 'Opção 2: Arquivos Separados', level: 4 },
      {
        type: 'code',
        language: 'lua',
        code: `jade.Encryption.configure({
  key = "minha-chave-secreta",
  algorithm = "custom",
  encrypt_file = "encryption/encrypt.lua",
  decrypt_file = "encryption/decrypt.lua",
})`,
      },
      {
        type: 'paragraph',
        text: 'Os arquivos de encriptação devem retornar uma função:',
      },
      { type: 'heading', text: 'encryption/encrypt.lua', level: 4 },
      {
        type: 'code',
        language: 'lua',
        code: `return function(value, key)
  local result = {}
  for i = 1, #value do
    local byte = string.byte(value, i)
    local key_byte = string.byte(key, (i - 1) % #key + 1)
    result[i] = string.char((byte + key_byte) % 256)
  end
  return table.concat(result)
end`,
      },
    ],
  },
  // Add more sections as needed...
]
