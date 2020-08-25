DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  dept_id INT PRIMARY KEY,
  name VARCHAR(30) NULL
);

CREATE TABLE role (
  role_id INT PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL(10, 2),
  dept_id INT NULL
);

CREATE TABLE employee (
  emp_id INT PRIMARY KEY,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  mgr_id INT NULL
);



