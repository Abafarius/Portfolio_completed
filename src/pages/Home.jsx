import React from "react";
import { motion } from "framer-motion";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
};

const Home = () => {
  return (
    <Container maxWidth="md">
      {/* Блок с анимацией */}
      <motion.div initial="hidden" animate="visible" variants={textVariants}>
        <Typography variant="h3" align="center" gutterBottom>
          Привет! 👋 Я Галымжан
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary">
          Фронтенд-разработчик, исследователь AI/ML, автор научных статей 📚
        </Typography>
      </motion.div>

      {/* Кнопка с анимацией */}
      <Box mt={4} textAlign="center">
        <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/projects"
          >
            Посмотреть проекты
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
