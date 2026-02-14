let items = JSON.parse(localStorage.getItem("items")) || [];
const list = document.getElementById("itemList");

/* ---------- DISPLAY ITEMS ---------- */
function displayItems() {
  list.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
            <div class="item-left">
                <input type="checkbox" ${item.completed ? "checked" : ""} onchange="toggleComplete(${index})">
                <span class="${item.completed ? "completed" : ""}">${item.name}</span>
            </div>

            <div class="actions">
                <button class="edit" onclick="editItem(${index})">
                    <i class="fa fa-pen"></i>
                </button>

                <button class="delete" onclick="deleteItem(${index})">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        `;

    list.appendChild(li);
  });

  localStorage.setItem("items", JSON.stringify(items));
}

/* ---------- CREATE ---------- */
function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();

  if (value === "") {
    alert("Enter an item!");
    return;
  }

  items.push({
    name: value,
    completed: false,
  });

  input.value = "";
  displayItems();
}

/* ---------- UPDATE (CHECK) ---------- */
function toggleComplete(index) {
  items[index].completed = !items[index].completed;
  displayItems();
}

/* ---------- UPDATE (EDIT) ---------- */
function editItem(index) {
  const newName = prompt("Edit item:", items[index].name);

  if (newName !== null && newName.trim() !== "") {
    items[index].name = newName.trim();
    displayItems();
  }
}

/* ---------- DELETE ---------- */
function deleteItem(index) {
  if (confirm("Delete this item?")) {
    items.splice(index, 1);
    displayItems();
  }
}

/* initial load */
displayItems();
