const app = Vue.createApp({
    // template: '<h2>I am a template</h2>'
    //data templates (the code below with data(){} is a short way of creating a function inside an object)
    data(){
        return {
            url : 'http://www.thenetninja.co.uk',
            showBooks : true,
            books: [
                {title: 'Name of the Wind', author: 'Patrick Rothfuss', img:'assets/1.jpg' },
                {title: 'the way of kings', author: 'brandon sanderson', img:'assets/2.jpg'},
                {title: 'the final empire', author: 'brandon sanderson', img:'assets/3.jpg'},
            ]
        }
    },
    //methods functions or methods
    methods: {
            toggleShowBooks(){
                this.showBooks = !this.showBooks
            }
        }
    
})

app.mount('#app')