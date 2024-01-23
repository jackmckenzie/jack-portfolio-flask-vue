from flask import Flask, jsonify

app = Flask(__name__)

projects = [
    {
        'id': 'template-designer',
        'title': "Template Designer"
    },
    {
        'id': 'promotions',
        'title': "In-store Promotions"
    }
]

@app.route("/")
def index():
    return "<p>Index</p>"

@app.route('/hello')
def hello():
    return "<p>Hello, World</p>"

@app.route('/projects')
def get_projects():
    return jsonify(projects)