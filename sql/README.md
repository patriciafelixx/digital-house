## SQL

**TIPOS DE DADOS**
```sql
-- Tipo númerico
TINYINT 
SMALLINT
MEDIUMINT
INT
BIGINT
FLOAT
DOUBLE
DECIMAL

-- Tipo data
DATE -- AAAA-MM-DD
TIME -- HH:MM:SS
DATETIME -- AAAA-MM-DD HH:MM:SS

-- Tipo texto
CHAR -- qtde exata de caracteres
VARCHAR -- qtde máxima de caracteres
TEXT -- sem limite de caracteres
```

**CONSTRAINS**
```sql
UNIQUE KEY
NULL / NOTNULL
DEFAULT
AUTO_INCREMENT
```

**SELECT I**
```sql
SELECT nome_coluna FROM nome_tabela;

-- WHERE E ORDER BY
SELECT nome_coluna FROM nome_tabela WHERE item < 10;
SELECT * FROM movies WHERE title LIKE 'Avatar';
SELECT * FROM movies WHERE awards = 2 OR awards = 6;
DELETE FROM usuarios WHERE id = 2;
SELECT nome_coluna1, nome_coluna2 FROM tabela WHERE condicao ORDER BY nome_coluna1;
SELECT nome FROM usuarios WHERE idade < 21 ORDER BY nome DESC;

-- LIMIT E OFFSET
SELECT nome_coluna1, nome_coluna2 FROM nome_tabela LIMIT qtde_de_registros;
SELeCT * FROM filmes WHERE premios > 4 LIMIT 10;
SELECT id, nome, sobrenome FROM alunos LIMIT 20 OFFSET 20; 

-- BETWEEN e LIKE
SELECT nome, idade FROM alunos WHERE idade BETWEEN 6 AND 12;
SELECT nome FROM usuarios WHERE nome LIKE '_a%';
SELECT nome FROM clientes WHERE nome LIKE 'os%s';

-- ALIAS
SELECT nome_coluna1 AS alias_nome_coluna1 FROM tabela;
SELECT razao_social_cliente AS nome FROM cliente WHERE nome LIKE 'a%';
SELECT nome, sobrenome, idade FROM alunos_comissao_inicial AS alunos;
```

**SELECT II**
```sql
-- INNER JOIN, LEFT JOIN, RIGTH JOIN
SELECT filme.filme_id, titulo, filme.idioma_id, idioma.idioma_id, nome
FROM filme INNER JOIN idioma ON filme.idioma_id = idioma.idioma_id;

-- TABLE REFERENCE
SELECT clientes.id AS id, clientes.nome, vendas.data
FROM clientes, vendas
WHERE clientes.id = vendas.cliente_id;

SELECT cantor.nome FROM cantor, patrocinador WHERE cantor.patrocinador_id = patrocinador.id

-- DISTINCT
SELECT DISTINCT primeiro_nome, ultimo_nome
FROM filme.ator;
```

**FUNÇÕES**
```sql
-- CONCAT
SELECT DISTINCT CONCAT(primeiro_nome, " ", ultimo_nome) AS "Nome Completo"
FROM locadora.ator;

-- COALESCE
SELECT titulo, COALESCE(nome, "não tem idioma") FROM filmes
LEFT JOIN idioma ON filme.idioma_id = idioma.idioma_id;

-- NOW AND DATEDIFF
SELECT primeiro_nome, DATEDIFF(NOW(), data_de_devolucao)
FROM locadora.aluguel INNER JOIN cliente ON aluguel.cliente_id = cliente.cliente_id
ORDER BY aluguel_id;

-- DATES
SELECT YEAR(data_de_devolucao);
SELECT MONTH(data_de_devolucao);
SELECT DAY(data_de_devolucao);
SELECT EXTRACT(week FROM data_de_devolucao);
SELECT DATE_FORMAT(data_de_devolucao, "%d/%m/%Y");

-- REPLACE
SELECT REPLACE(titulo, 'HARRY', 'ENZO') FROM filme
WHERE titulo LIKE 'HARRY%';

-- LENGTH
SELECT LENGTH(titulo) FROM filme;

SELECT titulo FROM filme
WHERE LENGTH(titulo) > 10;

-- CASE
SELECT titulo, duracao_filme 
CASE
    WHEN duracao_filme < 60 THEN 'Filme curto!'
    ELSE 'Filme longo!'
END
FROM filme;

-- FUNÇÕES DE AGREGAÇÃO
SELECT COUNT(*) FROM filme;
SELECT MAX(duracao_filme) FROM filme;
SELECT MIN(duracao_filme) FROM filme;
SELECT AVG(duracao_filme) FROM filme;
SELECT SUM(duracao_filme) FROM filme;

-- GROUP BY
SELECT nome, COUNT(*), AVG(duraca_filme) FROM filme
INNER JOIN idioma ON filme.idioma_id = idioma.idioma_id
GROUP BY nome;

-- HAVING
SELECT nome, COUNT(*), AVG(duraca_filme) FROM filme
INNER JOIN idioma ON filme.idioma_id = idioma.idioma_id
GROUP BY nome
HAVING COUNT(*) >= 5;
```

**CREATE, ALTER, DROP**
```sql
CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50),
    email VARCHAR(100) NOT NULL UNIQUE,
    data_nascimento DATE
);

ALTER TABLE usuario 
ADD telefone VARCHAR(50);

DROP TABLE usuario;
```

**INSERT, UPDATE, DELETE**
```sql
INSERT INTO usuario (nome, sobrenome, email, data_nascimento, telefone)
VALUES ('Ana', 'Silvia', 'ana@email.com', '1995-10-10', 99999999);

UPDATE usuario SET
nome = 'Mary', sobrenome = 'Shelley'
WHERE id = 1;

DELETE FROM usuario
WHERE id = 1;
```