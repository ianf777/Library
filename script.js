const myLibrary = [];

// const authorInput = document.getElementById("authorInput");
// const titleInput = document.getElementById("titleInput");
// const pagesInput = document.getElementById("pagesInput");
// const readInput = document.getElementById("readInput");
const bookCards = document.querySelector(".bookCards");
const submissionForm = document.getElementById("submissionForm");

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

submissionForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  addBookToLibrary(author, title, pages, read);
  console.log(`Author: ${author}`);
  console.log(`Title: ${title}`);
  console.log(`Pages: ${pages}`);
  console.log(`Read: ${read}`);
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").value = "";
});

function addBookToLibrary(author, title, pages, read) {
  let authorInput = author;
  let titleInput = title;
  let pagesInput = pages;
  let readInput = read;
  let newBook = new Book(authorInput, titleInput, pagesInput, readInput);
  myLibrary.push(newBook);
  createCard(authorInput, titleInput, pagesInput, readInput);
}

function createCard(author, title, pages, read) {
  const card = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    bookCards.removeChild(card);
  });
  card.classList.add("card");
  card.innerHTML += `Author: ${author}<br>
    Title: ${title}<br>
    Pages: ${pages}<br>
    Read: ${read}<br>
    `;
  card.appendChild(deleteButton);
  bookCards.appendChild(card);
}

console.log(myLibrary);
