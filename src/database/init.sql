BEGIN;

  DROP TABLE IF EXISTS users, travel_posts
  CASCADE;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE travel_posts
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ,
  location VARCHAR(255) NOT NULL,
  message TEXT,
  image VARCHAR(255)
);


COMMIT;

