# NutriVibe — Nutrition & Diet Blog / Блог о правильном питании и диетах

A modern, fully responsive website dedicated to healthy eating, a balanced lifestyle, and nutritious recipes[cite: 2]. The project is developed using vanilla JavaScript for dynamic interface generation, styled with Bootstrap 5, and enhanced with custom CSS[cite: 2].

Современный и полностью адаптивный веб-сайт, посвященный правильному питанию, здоровому образу жизни и полезным рецептам. Проект разработан с использованием чистого **JavaScript** для динамического создания интерфейса, стилизован с помощью **Bootstrap 5** и кастомных **CSS**-стилей.

---

## 🚀 Key Features / Основные особенности

* **Dynamic DOM Generation / Динамическая генерация DOM:** The entire page structure (navigation, menus, blog card grid) is created programmatically using a universal custom creator function[cite: 2]. / Вся структура страницы (навигация, меню, сетка карточек с блогами) создается программно с помощью универсальной кастомной функции `creator`.
* **Responsive Design / Адаптивный дизайн (Responsive):** The site displays correctly across all devices (from smartphones with a 320px screen width to large desktops) thanks to the Bootstrap grid system and custom @media queries[cite: 2]. / Сайт корректно отображается на любых устройствах (от смартфонов с шириной экрана 320px до широких экранов ПК) благодаря сетке Bootstrap и кастомным медиа-запросам (`@media`).
* **Interactive Navigation / Интерактивная навигация:**
  * User-friendly menu with a dropdown list (Pages)[cite: 2]. / Удобное меню с выпадающим списком (`Pages`).
  * Mobile slide-out menu (hamburger menu with FontAwesome icons), optimized for screens smaller than 992px[cite: 2]. / Мобильное выдвижное меню (гамбургер-меню с иконкой FontAwesome), адаптированное под экраны менее 992px.
* **Blog Cards / Блог-карточки:**
  * Dynamic rendering of blog articles from data arrays[cite: 2]. / Динамический вывод карточек со статьями из массивов данных.
  * Fixed card height (h-100) and adaptive images (object-fit: cover), ensuring a clean, uniform look for all blocks[cite: 2]. / Фиксированная высота карточек (`h-100`) и адаптивные изображения (`object-fit: cover`), обеспечивающие аккуратный и одинаковый размер блоков.
* **Interactive Elements / Интерактивные элементы:** Smooth hover animations, button effects, and a cart/items counter[cite: 2]. / Плавные анимации при наведении (`hover`), эффекты кнопок и счетчик товаров/корзины.

---

## 🛠️ Technologies Used / Используемые технологии

* **HTML5** — Content structure / структурирование контента[cite: 2].
* **CSS3 / Flexbox** — Custom styles, animations, and responsive media queries / кастомные стили, анимации и адаптивные медиа-запросы[cite: 2].
* **JavaScript (ES6)** — Dynamic element creation and rendering logic / динамическое создание элементов интерфейса и логика рендеринга данных[cite: 2].
* **Bootstrap 5** — Layout grid, ready-to-use utility classes for containers, columns, and spacing / сетка, готовые классы для контейнеров, колонок и отступов[cite: 2].
* **FontAwesome** — Icons for navigation and the shopping cart / иконки для навигации и корзины[cite: 2].

---

## 📂 Project Structure / Структура проекта

```text
├── index.html          # Main page / Главная страница[cite: 2]
├── style.css           # Custom styles and media queries / Кастомные стили и медиа-запросы[cite: 2]
├── script.js           # Logic for component generation and interface / Логика генерации элементов и интерфейса[cite: 2]
└── img/                # Directory for images (logos, blog photos) / Папка с изображениями (логотипы, фотографии для блогов)[cite: 2]