import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", description: "Основной язык программирования" },
  { name: "React", description: "Разработка интерфейсов" },
  { name: "Redux", description: "Глобальное управление состоянием" },
  { name: "Material UI", description: "UI-библиотека для стилизации" },
  { name: "Framer Motion", description: "Анимации в React" },
  { name: "Git/GitHub", description: "Система контроля версий" },
  { name: "Python", description: "Анализ данных, машинное обучение" },
  { name: "C#", description: "Разработка приложений" },
  { name: "Pandas", description: "Обработка и анализ данных" },
  { name: "Scikit-Learn", description: "Библиотека ML" },
  { name: "NumPy", description: "Работа с многомерными массивами" },
  { name: "Matplotlib", description: "Визуализация данных" },
  { name: "Django", description: "Веб-разработка" },
  { name: "SQL", description: "Работа с базами данных" },
  { name: "CSS", description: "Стилизация веб-страниц" },
  { name: "BEM", description: "Методология CSS" },
  { name: "GitLab", description: "CI/CD, репозитории" },
];

const education = [
  { degree: "Бакалавр", field: "Киберфизика", university: "КазНУ им. аль-Фараби" },
  { degree: "Магистратура", field: "Финансовая аналитика", university: "Университет Нархоз (Нацбанк)" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <Container maxWidth="md">
      {/* Заголовок с анимацией */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Обо мне
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary">
          Фронтенд-разработчик, исследователь AI/ML, автор научных статей
        </Typography>
      </motion.div>

      {/* Сетка с карточками навыков */}
      <Typography variant="h4" mt={5} gutterBottom>
        Навыки
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div initial="hidden" animate="visible" variants={cardVariants}>
              <Card sx={{ textAlign: "center", height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {skill.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {skill.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Образование */}
      <Typography variant="h4" mt={5} gutterBottom>
        Образование
      </Typography>
      <Grid container spacing={3}>
        {education.map((edu, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div initial="hidden" animate="visible" variants={cardVariants}>
              <Card sx={{ textAlign: "center", height: "100%" }}>
                <CardContent>
                  <Typography variant="h5">{edu.degree}</Typography>
                  <Typography variant="body1">{edu.field}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {edu.university}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
