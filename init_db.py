import csv
import sqlite3

connection = sqlite3.connect('database3.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()
file = open("data.csv")
next(file)

contents = csv.reader(file)


insert_records = "INSERT INTO person (firstName, lastName, age, mail, death) VALUES(?, ?, ?, ?, ?)"

cur.executemany(insert_records, contents)

# SQL query to retrieve all data from
# the person table To verify that the
# data of the csv file has been successfully 
# inserted into the table
select_all = "SELECT * FROM person"
rows = cur.execute(select_all).fetchall()

# Output to the console screen
for r in rows:
    print(r)

# Committing the changes
connection.commit()

# closing the database connection
connection.close()