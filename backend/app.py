from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message

app = Flask(__name__)
CORS(app)

# Configure Flask-Mail for Gmail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'kyleoneill26@gmail.com'  # Your Gmail address
app.config['MAIL_PASSWORD'] = 'your-app-specific-password'  # Generate this in Google Account settings

mail = Mail(app)

# Sample projects data
projects = [
    {
        "id": 1,
        "title": "Project 1",
        "description": "A full-stack web application",
        "technologies": ["React", "Python", "Flask"],
        "image_url": "project1.jpg",
        "github_url": "https://github.com/yourusername/project1",
        "live_url": "https://project1.com"
    }
]

@app.route('/api/projects', methods=['GET'])
def get_projects():
    return make_response({"projects": projects})

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    try:
        msg = Message(
            subject=f"New message from {data['name']}",
            sender=data['email'],
            recipients=['your-email@example.com'],
            body=data['message']
        )
        mail.send(msg)
        return jsonify({"message": "Message sent successfully!"})
    except Exception as e:
        return jsonify({"message": "Failed to send message"}), 500

if __name__ == '__main__':
    app.run(debug=True) 