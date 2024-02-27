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
    id INT AUTO_INCREMENT PRIMARY KEY,
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
