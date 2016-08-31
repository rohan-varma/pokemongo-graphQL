DROP TABLE IF EXISTS Bug;
DROP TABLE IF EXISTS Electric;
DROP TABLE IF EXISTS Fire;
DROP TABLE IF EXISTS Pokemon;
DROP TABLE IF EXISTS Types;
DROP TABLE IF EXISTS Move;

CREATE TABLE Move(
  id INTEGER PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE Pokemon (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  thumbnail VARCHAR(255),
  favoriteMove VARCHAR(255),
  FOREIGN KEY(favoriteMove) REFERENCES Move(id)
);

INSERT INTO Move('name')
VALUES
('Move1'),
('Move2'),
('Move3'),
('Move4'),
('Move5');

INSERT INTO Pokemon('name', 'thumbnail', 'favoriteMove')
VALUES
('Caterpie', 'thumbnail_link', 1),
('Pikachu', 'thumbnail_link', 2),
('Bulbasaur', 'thumbnail_link', 3),
('Blastoise', 'thumbnail_link', 4),
('Suicune', 'thumbnail_link', 5),
('Gyrados', 'thumbnail_link', 6);
