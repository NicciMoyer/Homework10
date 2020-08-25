DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30) NULL
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL(10.2),
  department_id INT NULL
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL
);



