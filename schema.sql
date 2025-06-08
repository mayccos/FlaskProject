DROP TABLE IF EXISTS person;



CREATE TABLE person(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        age INTEGER NOT NULL,
        mail TEXT NOT NULL,
        death TEXT NOT NULL
);