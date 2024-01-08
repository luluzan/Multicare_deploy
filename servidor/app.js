const express = require('express');
const enviarFormularioPorEmail = require('nodemailer.js');

const app = express();

app.use(express.json());

app.post('/enviar-formulario', async (req, res) => {
  const formData = req.body;

  try {
    const messageId = await enviarFormularioPorEmail(formData);
    res.status(200).send({ messageId });
  } catch (error) {
    res.status(500).send({ error: 'Error al enviar el formulario por correo electrónico' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
