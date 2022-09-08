import yagmail
import socket
from requests import get

# Get local machine info
hostname = socket.gethostname()
local_ip_addr = socket.gethostbyname(hostname)

# Get public IP
external_ip = get('https://api.ipify.org').content.decode('utf8')


user = 'volatilebg@gmail.com'
app_password = "ageiwuvgvoaoiklc"
to = 'darinchakalov@hotmail.com'

subject = 'New home IP address'


def send_email():
    content = f'New home public IP address: {external_ip}'
    with yagmail.SMTP(user, app_password) as yag:
        yag.send(to, subject, content)
        print('Email send successfully')


# Check if IP has changed and send me an email if it is
file = open('./saved_ip.txt', 'r')
old_ip = file.readline()
if external_ip != old_ip:
    file = open('./saved_ip.txt', 'w')
    file.write(external_ip)
    file.close()
    send_email()
else: 
    print('OK')


