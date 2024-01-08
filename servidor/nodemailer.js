// nodemailer.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'multicare.app@gmail.com',
    pass: 'Proyect0123',
  },
});

export async function enviarFormularioPorEmail(formData) {
  try {
    const info = await transporter.sendMail({
      from: 'multicare.app@gmail.com',
      to: 'multicare.app@gmail.com',
      subject: 'Nuevo formulario enviado',
      html: `<p>Fecha: ${formData.date}</p>
             <p>Nombre de la víctima: ${formData.victimName}</p>
             <p>Nombre del/los agresores: ${formData.agressorName}</p>
             <p>Ubicación: ${formData.location}</p>
             <p>Testigos: ${formData.witnesses}</p>
             <p>Detalles: ${formData.details}</p>
             <p>Comentarios: ${formData.comments}</p>`,
    });

    console.log('Correo electrónico enviado:', info.messageId);
    return info.messageId;
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw error;
  }
}
