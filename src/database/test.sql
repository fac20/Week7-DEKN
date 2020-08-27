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
  image TEXT
);

INSERT INTO users
  (username, password)
VALUES
  ('faclover', 'fac1234'),
  ('ji-to-the-hyun', 'jiboss1234'),
  ('my-honey', 'mihoney1234'),
  ('shaysavage', 'shaysavage1234'),
  ('ephie-tastic', 'ephie1234');

INSERT INTO travel_posts
  (user_id,location,message,image)
VALUES
  (1, 'finsbury park', 'faclover', 'https://www.coops.tech/images/coops/founders-and-coders.png'),
  (2, 'finsbury park', 'I am the one and only JI BOSS!!', 'https://i.redd.it/czwswgcme2j41.jpg'),
  (2, 'the amazon', 'I am the best plant mum', 'https://i.pinimg.com/originals/4f/ec/5b/4fec5bd52c0a4a3285f90f765e4ff9ef.jpg'),
  (2, 'Sunnys heart', ' ', 'https://i.pinimg.com/originals/d8/f1/cb/d8f1cbe1e4156d260d89fd5b27641828.jpg'),
  (2, 'Ovies arms', 'I will marry Ovie Soko', 'https://kintzing.imgix.net/nS2OY0dg.jpeg?w=800&auto=format');

COMMIT;

