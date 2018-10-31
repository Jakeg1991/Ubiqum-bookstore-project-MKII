 $(document).ready(function () {
     $('button').on('click', function () {
         $.fancybox($("a.fancybox"));
     });
 });




 fetch("https://api.myjson.com/bins/zyv02", {
         method: 'GET',
     })
     .then(function (response) {
         return response.json()
     })
     .then(function (data) {
         createBookGrid(data),
             console.log(data)
     })


 function createBookGrid(data) {

     var bookGrid = new Vue({
         el: "#bookVue",
         data: {
             books: data.books,
             search: ""
         },
         computed: {
             filteredBooks: function () {
                 return this.books.filter((book) => {
                     return book.title.includes(this.search);
                 })
             }
         }
     })
 }
