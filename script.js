"use strict";

let myLibrary = [];

function Book(title, author, numOfPages, readStatus){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, numOfPages, readStatus){
    let newBook = Object.create(Book);
    newBook.title = title;
    newBook.author = author;
    newBook.numOfPages = numOfPages;
    newBook.readStatus = readStatus;

    myLibrary.push(newBook);
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

        let bookReadStatus = document.createElement('div');
        bookReadStatus.className = "bookReadStatus";
        bookEntry.appendChild(bookReadStatus);
        bookReadStatus.innerHTML = myLibrary[i].bookReadStatus;
        // create bookReadStatus div and append to bookEntry
    }
}

