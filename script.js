"use strict";

let myLibrary = [];

function Book(title, author, numOfPages, readStatus){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readStatus = readStatus;
}
// create variables for all elements of Form popup
const addNewBookDiv = document.getElementById('addNewBook');
const form = document.getElementById('newBookForm');
const blocker = document.getElementsByClassName('blocker')[0];
const newBookButton = document.getElementById('newBookButton');
const submitBook = document.getElementById('submitBook');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookNumOfPages = document.getElementById('bookNumOfPages');
const bookReadStatus = document.getElementById('bookReadStatus');
// when you click off of form, hide
blocker.addEventListener('click', function(){
    hideForm();
});
// when you click add new book, bring up form
newBookButton.addEventListener('click', function(){
    displayForm()
});
// When you click submit, create new Book object from input
submitBook.addEventListener('click', function(){
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let numOfPages = bookNumOfPages.value;
    let readStatus = bookReadStatus.checked;
    
    addBookToLibrary(title, author, numOfPages, readStatus);
    hideForm();
});

function addBookToLibrary(title, author, numOfPages, readStatus){
    let newBook = Object.create(Book);
    newBook.title = title;
    newBook.author = author;
    newBook.numOfPages = numOfPages;
    newBook.readStatus = readStatus;

    myLibrary.push(newBook);
    displayBooks(myLibrary);
}

function displayForm(){
    addNewBookDiv.classList.add("visible");
 }
 
function hideForm(){
     addNewBookDiv.classList.remove("visible");
 }

function toggleReadStatus(element){
    let entryNumber = element.parentNode.getAttribute('data-entry-number');
    // get data-entry value to get index of book object
    myLibrary[entryNumber].readStatus *= -1;
    // toggle readStatus 
    if(myLibrary[entryNumber].readStatus == 1){
        element.innerHTML = "Read";
        element.classList.add("read");
    }
    else {
        element.innerHTML = "Not Read";
        element.classList.remove("read");
    }
    // Change 
    
}

function displayBooks(myLibrary){
    let libraryDisplay = document.getElementById('Library');
    // clear all entries before looping through array to remove duplicates
    
    while(libraryDisplay.firstChild){
        libraryDisplay.removeChild(libraryDisplay.firstChild);
    }

    for(let i = 0; i < myLibrary.length; i++){
        // loop through array and create entry for each book
        let bookEntry = document.createElement('div');
        bookEntry.className = "bookEntry";
        bookEntry.dataset.entryNumber = i;
        libraryDisplay.appendChild(bookEntry);
        // create new bookEntry and append to library

        let bookTitle = document.createElement('div');
        bookTitle.className = "bookTitle";
        bookEntry.appendChild(bookTitle);
        bookTitle.innerHTML = myLibrary[i].title;
        // create bookTitle div and append to bookEntry

        let bookAuthor = document.createElement('div');
        bookAuthor.className = "bookAuthor";
        bookEntry.appendChild(bookAuthor);
        bookAuthor.innerHTML = myLibrary[i].author;
        // create bookAuthor div and append to bookEntry

        let bookNumOfPages = document.createElement('div');
        bookNumOfPages.className = "bookNumOfPages";
        bookEntry.appendChild(bookNumOfPages);
        bookNumOfPages.innerHTML = myLibrary[i].numOfPages;
        // create bookNumOfPages div and append to bookEntry

        let bookReadButton = document.createElement('button');
        bookReadButton.className = "bookReadButton";
        bookEntry.appendChild(bookReadButton);
        if(myLibrary[i].readStatus){
            bookReadButton.innerHTML = "Read";
            bookReadButton.classList.add("read");
        }else{
            bookReadButton.innerHTML = "Not Read";
        }
        bookReadButton.addEventListener('click', function(){
            toggleReadStatus(this);
        });
        // create toggleReadStatus button 
    }
}




