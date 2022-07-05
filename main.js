let Books = JSON.parse(localStorage.getItem("Books")) ? JSON.parse(localStorage.getItem("Books")) : [];
   
let login = document.getElementById('login');
let list = document.getElementById("book-list")

if(login)
login.addEventListener("submit", addLogin, false)
display()
function addLogin(e){
    e.preventDefault();
    let emailElement = document.getElementById('email')
    let password = document.getElementById('password').value

let email = emailElement.value.trim()
if(email == email && password == password){
    location.href="index_1.html"
    return
}else{
  alert("Fill out the fields")
}

}

let form = document.getElementById("form")
form.addEventListener("submit", addBooks, false)

function addBooks(e){
e.preventDefault();
let bookElement = document.getElementById('book')
let category = document.getElementById('category').value
let date = document.getElementById('publishdate').value

let book = bookElement.value.trim()

if(book === "" || category === "" || date === ""){
    alert('please fill out the fields')
    return
}else{
   let books = {
       id: Date.now(),
       book,
       category,
       date
   }
   Books.push(books)
   form.reset()
   localStorage.setItem("Books", JSON.stringify(Books));

   list.innerHTML = ""
   display()
}

}

function display () {
    let books;
    let newBook = JSON.parse(localStorage.getItem('Books'));
    if(newBook.length > 0) {
        for(let i = 0; i < newBook.length; i++){
            books=newBook[i];

            const row = document.createElement('tr')
          
            row.innerHTML = `
            <td>${books.book}</td>
            <td>${books.category}</td>
            <td>${books.date}</td>
            <td><a onclick = "delBook(${books.id})" href="#" class="btn btn-danger btn-sm delete" id ='del'>X</a></td>
            `
            list.appendChild(row)
        }
    }

}

function delBook (id){
    // let bookIndex = Books.findIndex(i => i.id === id);
    // Books.splice(bookIndex, 1)

    const newBooks = Books.filter(book => book.id !== id)

    localStorage.setItem('Books', JSON.stringify(newBooks))
    list.innerHTML = ""
    display()

}


let searchBooks = []
searchForm = document.getElementById("search-form")
searchForm.addEventListener("input", (e) =>{
    const value = e.target.value.trim()
   let newBooks = Books.filter(book => book.book.toLowerCase().includes(value.toLowerCase()))

    localStorage.setItem('Books', JSON.stringify(newBooks))
    list.innerHTML = ""
    display()
})


