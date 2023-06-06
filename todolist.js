document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.todo__input');
  const inputBtn = document.querySelector('.todo__add-btn');
  const taskList = document.querySelector('.todo__task-list');




  let todoData = {
    existTask: [],
    removeTasks: [],
    completedTasks: []
  }

  const createTask = (title = "new task") => { //title = "new task" default value
    const newTask = {
      title, // якщо назва ключа співпадає з назвою змінною то можливо скоротити запис з title: title до title
      text: 'taskText'
    }
    todoData.existTask.push(newTask)
  }

  const render = () => {
    let list = ''
    todoData.existTask.forEach(element => {
      list += `
      <li class="todo__task-item">
        <p class="todo__task-name">${element.title}</p>
        <p class="todo__task-text"></p>
        <div class="todo__update-btns">
          <div class="update-btn todo__remove-task-btn">
            <span class="crossmark">&#10006;</span>
          </div>
          <div class="update-btn todo__complete-task-btn">
            <span class="checkmark">&#10003;</span>
          </div>
        </div>
      </li>`
    });
    taskList.innerHTML = list
  }

  const saveLocalStorage = () => {
    localStorage.setItem('data', JSON.stringify(todoData))
  }

  const removeTask = (index) => {
    const removedTask = todoData.existTask.splice(index, 1)[0];
    todoData.removeTasks.push(removedTask);
    render();
    saveLocalStorage();
    attachRemoveTaskHandlers();
  };

  const addRemoveTaskdelete = () => {
    const removeBtns = Array.from(taskList.getElementsByClassName('crossmark'));

    removeBtns.forEach((btn, index) => {
      btn.removeEventListener('click', removeTask);
      btn.addEventListener('click', () => {
        removeTask(index);
      });
    });
  };

  const init = () => {
    const initData = JSON.parse(localStorage.getItem('data'))
    todoData = initData || todoData;
    render();
    addRemoveTaskdelete();
  }

  init()

  inputBtn.addEventListener('click', () => {
    const inputValue = input.value.trim();

    if (inputValue === '') {
      return;
    }
    createTask(inputValue);
    render();
    saveLocalStorage();
    addRemoveTaskdelete();
  })

  localStorage.clear()
});


  // 1) сделать удаление таски без локал стореджа (функцию)
  // 3) удаленная таска удаляется с existTask в removeTasks
  // 2) сделать обновление и сохранение локал стореджа (вывести в консль existTask и removeTasks)0

// 1) Метод querySelector() шукає перший елемент, який відповідає переданому селектору.
// Він повертає знайдений елемент.

// 3) Метод addEventListener() додає обробник подій до вибраного елементу.

// 4) Метод trim() видаляє пробіли з початку та кінця рядка.
// Використовується для очищення введеного тексту від зайвих пробілів.

// 5) Метод getElementsByClassName() повертає колекцію елементів, які мають заданий клас.

// 6)Метод some() перевіряє, чи задовольняє хоча б один елемент.
// Повертає true, якщо умова виконується для хоча б одного елемента, і false - якщо ні.

// 7) Метод createElement() створює новий елемент з вказаним тегом.
// Повертає новостворений елемент.

// 8)Властивість classList представляє список класів елемента.
// Метод add() додає клас до списку класів елемента.

// 9) Властивість textContent містить текстовий вміст елемента.
// Використовується для встановлення або отримання тексту, що відображається в елементі.

// 10) Властивість innerHTML містить HTML-код, який представляє дочірні елементи та вміст елемента.
// Використовується для встановлення або отримання HTML-структури в елементі.

// 11)  appendChild() - це метод, який використовується для додавання нового дочірнього вузла до
// батьківського вузла в DOM (Document Object Model) в JavaScript.

// const parent = document.getElementById("parentElement");
// const newChild = document.createElement("div");
// newChild.textContent = "Новий дочірній вузол";
// parent.appendChild(newChild);

// 11.1) removeChild() - це метод, який використовується для видалення дочірнього вузла з батьківського
// вузла в DOM (Document Object Model) в JavaScript.

// const parent = document.getElementById("parentElement");
// const child = document.getElementById("childElement");
// parent.removeChild(child);

// 12) Властивість value містить значення поля введення.
// Використовується для отримання або встановлення значення поля введення.

// 13) outerHTML - це властивість, яка доступна для елементів веб-сторінки в об'єктному представленні веб-документа,
// такому як Document Object Model (DOM). Властивість outerHTML містить  HTML-код, який представляє елемент,
// включаючи всі його дочірні елементи і текстовий вміст.

// 14) JSON.parse(): Цей метод приймає рядок JSON і перетворює його в JavaScript-об'єкт або масив. Рядок JSON
// повинен бути валідним JSON-форматом

// const jsonString = '{"name":"John","age":30,"city":"New York"}';
// let jsonObj = JSON.parse(jsonString);
// console.log(jsonObj.name, jsonObj.age, jsonObj.city); // Виведе "John" // 30 // "New York"

// 14.1) JSON.stringify(): Цей метод приймає JavaScript-об'єкт або масив і перетворює його в рядок JSON.
// Він використовується для серіалізації об'єктів в JSON-формат.

// const obj = { name: "John", age: 30, city: "New York" };
// const arrs = ['str', 1, 10, true]
// let jsonStringsObj = JSON.stringify(obj);
// let jsonStringsArr = JSON.stringify(arrs);  // Виведе {"name":"John","age":30,"city":"New York"}
// console.log(jsonStringsObj, jsonStringsArr); // Виведе ["str",1,10,true]