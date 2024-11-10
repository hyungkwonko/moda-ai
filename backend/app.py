# backend/app.py

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows the frontend to make requests to the backend

@app.route('/api/data', methods=['GET'])
def get_data():
    mock_data = {
        "id": 1,
        "name": "Sample Data",
        "description": "This is a sample description from the backend."
    }
    return jsonify(mock_data)

if __name__ == '__main__':
    app.run(debug=True)
