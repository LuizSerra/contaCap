CREATE TABLE conta (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	titular VARCHAR(100) NOT NULL,
	saldo DECIMAL(10,2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO conta (titular, saldo) values ('Antonio Abreu', 1250.50);
INSERT INTO conta (titular, saldo) values ('Maria Moura', 325.1);
INSERT INTO conta (titular, saldo) values ('Pedro Pascoal', 10750);