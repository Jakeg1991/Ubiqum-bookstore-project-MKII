
fetch("https://api.myjson.com/bins/zyv02", {
        method: 'GET',
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        var bookGrid = new Vue({
            el: "#bookVue",
            data: {
                books: data.books,
                search: "",
                loading: true


            },
            computed: {
                filteredBooks: function () {
                    return this.books.filter((book) => {
                        return book.title.includes(this.search);
                    })
                }
            }
        })
    })




// function smoothscroll() {
//     var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//     if (currentScroll > 0) {
//         window.requestAnimationFrame(smoothscroll);
//         window.scrollTo(0, currentScroll - (currentScroll / 5));
//     }
// }