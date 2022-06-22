# Тестовое задание
Видео с работой приложения здесь: [демо](https://youtu.be/8Q1WXoCWqNs). 
В качестве REST API использован [json-server](https://www.npmjs.com/package/json-server). 
Данные приложение получает с json-server из файла DATA_BASE.json.
Стэк: TypeScript, React Hooks, Styled-Components, Redux Toolkit.
Обращение к API эмулированы, в случае успеха - переход на главный экран и запись данных в файл DATA_BASE.json.
Верстка адаптивная, на маленьких разрешениях появляется "бургер" меню.
В форме оплаты присутствует маска и валидация, в случае неверного ввода выводится сообщение, 
кнопка становится активной только если введенные данные валидны.

Что не сделал:
 - не вынесена логика из компонентов и слайсов (хотя приложение маленькое, не критично);
 - при холодном запуске, при переключении вкладок меню идет лишний рендер;
 - 
