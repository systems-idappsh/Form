import requests

# Reemplaza con tu token y chat_id
token = '7679846298:AAFaVGdOyT7ITFjQl_Z3buqqWSkC6dVJKM8'
chat_id = '6887146335'  # Puedes usar el ID del grupo o tu propio ID

mensaje = 'Hola, este es un mensaje de prueba desde mi bot!'

url = f'https://api.telegram.org/bot{token}/sendMessage'
data = {
    'chat_id': chat_id,
    'text': mensaje
}

response = requests.post(url, data=data)

if response.status_code == 200:
    print('Mensaje enviado con éxito!')
else:
    print('Error al enviar el mensaje:', response.text)
