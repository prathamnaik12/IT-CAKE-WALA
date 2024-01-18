from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message

app = Flask(__name__)
CORS(app)

# Configure email settings
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587  # Use the appropriate port for your mail server
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'portfolionagesh.1957@gmail.com'
app.config['MAIL_PASSWORD'] = 'qlqy eoda vftd mtkx'
app.config['MAIL_DEFAULT_SENDER'] = 'portfolionagesh.1957@gmail.com'

mail = Mail(app)

@app.route('/submit-form', methods=['POST'])
def submit_form():
    try:
        data = request.get_json()
        send_email(data)
        return jsonify({'success': True, 'message': 'Form data submitted successfully!'})

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)})

def send_email(data):
    try:
        subject = 'New Form Submission'
        recipient = 'your_recipient_email@example.com'

        message_body = f"New form submission:\nLocation: {data['location']}\nDate: {data['date']}\nWith Egg: {data['withEgg']}\nEggless: {data['eggless']}\nMessage: {data['message']}"

        msg = Message(subject, recipients=[recipient], body=message_body)

        mail.send(msg)

    except Exception as e:
        print(f"Error sending email: {str(e)}")

if __name__ == '__main__':
    app.run(debug=True)
