import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, TextField, Button, Typography, Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "../styles/animations";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cmt1jar", 
        "template_c1einpz", 
        formData,
        "06BV5O4rhLXq-JPTq"
      )
      .then(
        () => {
          alert("Сообщение отправлено!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Ошибка при отправке: " + error.text);
        }
      );
  };

  return (
    <Container maxWidth="sm">
      {/* Анимация заголовка */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Typography variant="h4" gutterBottom>
          Контакты
        </Typography>
      </motion.div>

      {/* Анимация контактной информации */}
      <motion.div initial="hidden" animate="visible" variants={slideUp} transition={{ delay: 0.2 }}>
        <Typography variant="body1">📧 Email: kepler1885@mail.ru</Typography>
        <Typography variant="body1">📍 Город: Алматы, Казахстан</Typography>
        <Typography variant="body1">
          🔗 Социальные сети: 
          <Link href="https://github.com/Abafarius" target="_blank" rel="noopener noreferrer"> GitHub</Link>,
          <Link href="https://www.linkedin.com/in/galymzhan-yessimbek-618bb6235/" target="_blank" rel="noopener noreferrer"> LinkedIn</Link>
        </Typography>
      </motion.div>

      {/* Анимация формы */}
      <motion.div initial="hidden" animate="visible" variants={slideUp} transition={{ delay: 0.4 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <motion.div variants={slideUp} transition={{ delay: 0.6 }}>
            <TextField
              label="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
          </motion.div>

          <motion.div variants={slideUp} transition={{ delay: 0.8 }}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
          </motion.div>

          <motion.div variants={slideUp} transition={{ delay: 1 }}>
            <TextField
              label="Сообщение"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
          </motion.div>

          <motion.div variants={slideUp} transition={{ delay: 1.2 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Отправить сообщение
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ContactPage;
