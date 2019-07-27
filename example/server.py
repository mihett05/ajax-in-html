from flask import Flask, send_file

app = Flask(__name__)


@app.route("/")
def index():
    return send_file("index.html")


@app.route("/jim.js")
def script():
    return send_file("jim.js")


@app.route("/comp/")
def comp():
    return "<h1>Hello world!</h1>"


@app.route("/name/")
def name():
    return "admin"


app.run("localhost", 3000, True)