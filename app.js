const app = Vue.createApp({
    // template: '<h2>I am a template</h2>'
    //data templates (the code below with data(){} is a short way of creating a function inside an object)
    data(){
        return {
            url : 'http://www.thenetninja.co.uk',
            showBooks : true,
            books: [
                {title: 'Name of the Wind', author: 'Patrick Rothfuss', img:'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img:'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img:'assets/3.jpg' , isFav: true},
            ]
        }
    },
    //methods functions or methods
    methods: {
            toggleShowBooks(){
                this.showBooks = !this.showBooks
            },
            toggleIsFav(book){
                book.isFav = !book.isFav
            }
        }, 

        //computed properties are a way to define data properties that depend on other data properties, like the filteredBooks array in this case depends on the books array
        computed: {
            filteredBooks(){
                return this.books.filter((book) => book.isFav)
            }
        }
    
})

app.mount('#app')