-- create DB--
CREATE DATABASE crud_test_junior
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       LC_COLLATE = 'Portuguese_Brazil.1252'
       LC_CTYPE = 'Portuguese_Brazil.1252'
       TABLESPACE = pg_default
       CONNECTION LIMIT = -1;

-- Criação da tabela de clientes
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(255)
);

-- Inserção de dados de exemplo
INSERT INTO clientes (nome, email, telefone, endereco) VALUES
('João Silva', 'joao@example.com', '(11) 1234-5678', 'Rua A, 123'),
('Maria Souza', 'maria@example.com', '(11) 9876-5432', 'Av. B, 456'),
('Carlos Santos', 'carlos@example.com', '(11) 5555-1234', 'Rua C, 789');

-- Criar tabela de produtos
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco NUMERIC(10, 2) NOT NULL,
    quantidade INTEGER NOT NULL
);

-- Inserir um novo produto
INSERT INTO produtos (nome, descricao, preco, quantidade) 
VALUES ('Produto A', 'Descrição do Produto A', 10.99, 100);


--tabela de compras--
CREATE TABLE pedidos_compra (
    id SERIAL PRIMARY KEY,
    cliente VARCHAR(100) NOT NULL,
    valor_total NUMERIC(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL
);

-- Inserir um novo pedido de compra
INSERT INTO pedidos_compra (cliente, valor_total, status) 
VALUES ('Cliente A', 100.00, 'Em Aberto');
