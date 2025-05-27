CREATE DATABASE productos_db;

CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio NUMERIC NOT NULL,
  stock INT NOT NULL
);
