# SQL Bolt
## Ejercicio 1
```
SELECT title FROM movies;
SELECT director FROM movies;
SELECT title, director FROM movies;
SELECT title, year FROM movies;
SELECT * FROM movies;
```
## Ejercicio 2
```
SELECT title FROM movies where id=6;
SELECT title FROM movies where year>=2000 and year<=2010;
SELECT title FROM movies WHERE year NOT BETWEEN 2000 and 2010;
SELECT title, year FROM movies WHERE id <= 5;
```
