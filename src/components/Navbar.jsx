import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.4 } },
  exit: { x: "100%", transition: { duration: 0.3 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Навбар для десктопа */}
      <motion.div initial="hidden" animate="visible" variants={navVariants}>
        <AppBar position="sticky" color="primary" elevation={4}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Portfolio
            </Typography>

            {/* Бургер-меню для мобильных устройств */}
            <IconButton color="inherit" edge="end" sx={{ display: { xs: "block", md: "none" } }} onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </IconButton>

            {/* Обычная навигация для десктопа */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button color="inherit" component={Link} to="/">Главная</Button>
              <Button color="inherit" component={Link} to="/projects">Проекты</Button>
              <Button color="inherit" component={Link} to="/about">Обо мне</Button>
              <Button color="inherit" component={Link} to="/contact">Контакты</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Мобильное меню (Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial="hidden" animate="visible" exit="exit" variants={menuVariants}>
            <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
              <Box sx={{ width: 250, p: 2, textAlign: "center" }}>
                <IconButton onClick={() => setIsOpen(false)} sx={{ position: "absolute", right: 10, top: 10 }}>
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" sx={{ mb: 2 }}>Меню</Typography>
                <Button fullWidth component={Link} to="/" onClick={() => setIsOpen(false)}>Главная</Button>
                <Button fullWidth component={Link} to="/projects" onClick={() => setIsOpen(false)}>Проекты</Button>
                <Button fullWidth component={Link} to="/about" onClick={() => setIsOpen(false)}>Обо мне</Button>
                <Button fullWidth component={Link} to="/contact" onClick={() => setIsOpen(false)}>Контакты</Button>
              </Box>
            </Drawer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
