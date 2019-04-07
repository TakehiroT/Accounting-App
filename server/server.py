from flask import Flask, render_template
from api_server import app

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)