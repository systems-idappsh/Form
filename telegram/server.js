const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.json());

const botToken = '7679846298:AAFaVGdOyT7ITFjQl_Z3buqqWSkC6dVJKM8'; // Token de tu bot

// Endpoint para recibir actualizaciones del bot
app.post(`/webhook/${botToken}`, (req, res) => {
    const chatId = req.body.message.chat.id;
    const message = req.body.message.text;

    // Lógica para manejar el mensaje
    console.log('Mensaje recibido: ', message);

    // Responder al usuario
    request.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        json: {
            chat_id: chatId,
            text: 'Gracias por tu mensaje! ¿En qué puedo ayudarte?'
        }
    });

    res.sendStatus(200);
});

// Configura el webhook
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
