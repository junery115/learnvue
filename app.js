const app = Vue.createApp({
    // template: '<h2>I am a template</h2>'
    //data templates (the code below with data(){} is a short way of creating a function inside an object)
    data(){
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    //methods functions or methods
    methods: {
        changeTitle(title){
            // this.title = 'Words of Radiance'
            // this.title = 'Words of Radiance'
            this.title = title
            
        }
    }
})

app.mount('#app')