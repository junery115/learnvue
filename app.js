const app = Vue.createApp({
    // template: '<h2>I am a template</h2>'
    //data templates (the code below with data(){} is a short way of creating a function inside an object)
    data(){
        return {
            showBooks : true,
            books: [
                {title: 'Name of the Wind', author: 'Patrick Rothfuss'},
                {title: 'the way of kings', author: 'brandon sanderson'},
                {title: 'the final empire', author: 'brandon sanderson'},
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