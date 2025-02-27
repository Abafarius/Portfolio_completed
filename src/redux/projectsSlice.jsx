import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    { id: 1, title: "Weather App", description: "Прогноз погоды на React", github: "https://github.com/Abafarius/react_shag/tree/main/homeworks/weather/weather" },
    { id: 2, title: "Todo List", description: "Простое приложение для задач", github: "https://github.com/Abafarius/react_shag/tree/main/homeworks/todolist/todo-app" },
    { id: 3, title: "Movie Gallery", description: "Галерея фильмов на React", github: "https://github.com/Abafarius/react_shag/tree/main/homeworks/movieGallery/movieGallery" },
    { id: 4, title: "Netflix Clone", description: "Клон Netflix на JS", github: "https://github.com/Abafarius/JS-RPO-STEP/tree/main/project/NETFLIX" },
    { id: 5, title: "JS Project", description: "Разработка на JavaScript", github: "https://github.com/Abafarius/JS-RPO-STEP/tree/main/05.16.2024" },
    { id: 6, title: "HTML/CSS Final", description: "Финальный проект на HTML/CSS", github: "https://github.com/Abafarius/html-css-step/tree/main/htmlWay/final_project" },
    { id: 7, title: "Industrial Internship", description: "Проект для стажировки", github: "https://github.com/Abafarius/Industrial-Internship-2021" },
    { id: 8, title: "Todo Context", description: "To-do List с Context API", github: "https://github.com/Abafarius/react_shag/tree/main/homeworks/todolist-context/todo-app" },
    { id: 9, title: "Django To-do", description: "To-do List на Django", github: "https://github.com/Abafarius/to-do-django/tree/lesson_46" },
    { id: 10, title: "Django Board", description: "Объявления на Django", github: "https://github.com/Abafarius/bboard_django_shag/tree/lesson_51" },
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
