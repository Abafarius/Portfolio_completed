import React from "react";
import { useSelector } from "react-redux";
import { Container, Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "../styles/animations";

function Projects() {
  const projects = useSelector((state) => state.projects.projects);

  return (
    <Container>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Typography variant="h2" gutterBottom>
          Мои проекты
        </Typography>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div key={project.id} initial="hidden" animate="visible" variants={slideUp} transition={{ delay: index * 0.2 }}>
          <Card sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="body2">{project.description}</Typography>
              <Button
                variant="contained"
                color="primary"
                href={project.github}
                target="_blank"
                sx={{ marginTop: 1 }}
              >
                GitHub
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Container>
  );
}

export default Projects;
