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
## Ejercicio 3
```
SELECT * FROM movies where title LIKE "%Toy Story%";
SELECT * FROM movies where director LIKE "John Lasseter";
SELECT * FROM movies where director NOT LIKE "John Lasseter";
SELECT * FROM movies where title LIKE "WALL-_";
```

## Ejercicio 4
```
SELECT DISTINCT director FROM movies ORDER BY director ASC;
SELECT title FROM movies ORDER BY year DESC LIMIT 4;
SELECT * FROM movies ORDER BY title ASC LIMIT 5;
SELECT * FROM movies ORDER BY title ASC LIMIT 5 OFFSET 5;
```

## Ejercicio 5
```
SELECT city, population FROM north_american_cities WHERE country = "Canada";
SELECT city FROM north_american_cities WHERE Country LIKE "United States" ORDER BY latitude DESC;
SELECT city FROM north_american_cities WHERE longitude < (
         SELECT longitude FROM north_american_cities WHERE city = "Chicago"
) ORDER BY longitude
SELECT city, population FROM north_american_cities WHERE country = "Mexico" ORDER BY population DESC LIMIT 2 
SELECT city, population FROM north_american_cities WHERE country = "United States" ORDER BY population DESC limit 2 offset 2
```

## Ejercicio 6
```
SELECT * FROM movies INNER JOIN Boxoffice ON id = Movie_id
SELECT * FROM movies INNER JOIN Boxoffice ON id = Movie_id where Domestic_sales < International_sales
SELECT title, rating FROM movies INNER JOIN Boxoffice ON id = Movie_id ORDER BY rating DESC
```