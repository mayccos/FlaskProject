import sqlite3
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():  # put application's code here
    conn = sqlite3.connect('database3.db')

    persons = conn.execute('SELECT * FROM person').fetchall()
    
    conn.close()
   
    return render_template('index.html', persons=persons)

if __name__ == '__main__':
    app.run()
