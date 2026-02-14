# 🛒 Shopping List CRUD Web App

A simple and interactive **Shopping List (To-Do) CRUD application** built using **HTML, CSS and Vanilla JavaScript**.
This project demonstrates basic web development concepts such as DOM manipulation, event handling and browser local storage.

The application allows users to add, edit, mark complete and delete items from a shopping list.
All data is saved in the browser, so the list remains even after refreshing the page.

---

## 📌 Features

- ➕ Add new shopping items
- ✏️ Edit existing items
- ✔️ Mark items as completed
- 🗑️ Delete items
- 💾 Data persistence using **localStorage**
- 🔄 Automatically reload saved items after refresh
- 🎨 Clean UI design

---

## 🧠 Concepts Used

This project is mainly created for learning and understanding:

- DOM Manipulation
- JavaScript Event Handling
- CRUD Operations (Create, Read, Update, Delete)
- Browser localStorage API
- Basic UI Styling with CSS

---

## 🗂️ Project Structure

```
shopping-list-crud/
│
├── index.html   -> Main webpage structure
├── style.css    -> UI design and layout
├── script.js    -> Application logic (CRUD operations)
└── README.md    -> Project documentation
```

---

## ⚙️ How to Run the Project

1. Download or clone the repository:

```
git clone https://github.com/your-username/shopping-list-crud.git
```

2. Open the project folder.

3. Double-click **index.html**
   (or open it in any web browser)

That’s it — the app will run locally in your browser.

---

## 🔍 How It Works

The application stores all items in a JavaScript array:

```
items = [
  { name: "Milk", completed: true },
  { name: "Bread", completed: false }
]
```

This array is saved inside the browser using **localStorage**.
Whenever the page loads, JavaScript retrieves the stored data and displays it automatically.

---

## 🧪 CRUD Operations

| Operation | Description                     |
| --------- | ------------------------------- |
| Create    | Add a new item to the list      |
| Read      | Display all items on screen     |
| Update    | Edit item name or mark complete |
| Delete    | Remove an item from the list    |

---

## 🌐 Live Demo

(Enable GitHub Pages in repository settings to get a live website link)

---

## 📷 Preview

A simple card-style shopping list interface where users can manage items easily.

---

## 👨‍💻 Author

**Subin Aryal**
Electronics, Communication and Information Engineering Student

---

## 📄 License

This project is for **educational purposes only**.
