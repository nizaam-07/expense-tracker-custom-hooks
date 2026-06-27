Personal Expense Tracker with Custom Hooks & LocalStorage

Project Description

This project is a Personal Expense Tracker developed using React. The application allows users to add expenses, view expenses, delete expenses, filter expenses by category, and calculate total spending. The expense data is stored in LocalStorage so that it remains available even after refreshing the page.

Features

- Add new expenses
- Display expense list
- Delete expenses
- Calculate total spending
- Filter expenses by category
- Save data using LocalStorage
- Data persists after page refresh
- Use of React Custom Hooks

Technologies Used

- React JS
- JavaScript
- HTML
- CSS
- LocalStorage

Custom Hooks

1. useFormInput
   Used to manage form input values and reduce repeated code.

2. useExpense
   Used to manage expense operations such as adding and deleting expenses.

3. useLocalStorage
   Used to save and retrieve expense data from browser LocalStorage.

Project Structure

src
|
|-- components
|   |-- ExpenseForm.js
|   |-- ExpenseList.js
|   |-- Filters.js
|   |-- Summary.js
|
|-- hooks
|   |-- useExpense.js
|   |-- useFormInput.js
|   |-- useLocalStorage.js
|
|-- App.js
|-- App.css
|-- index.js

How to Run the Project

1. Open the project folder.
2. Run npm install to install dependencies.
3. Run npm start to start the application.
4. Open http://localhost:3000 in your browser.

Learning Outcomes

- Learned how to build a React application, create and use Custom Hooks, manage state in React, store data using LocalStorage, separate business logic from UI components.

Live link:
https://expense-tracker-custom-hooks.vercel.app/

