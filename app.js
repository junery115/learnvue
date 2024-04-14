const app = Vue.createApp({
    // template: '<h2>I am a template</h2>'
    //data templates (the code below with data(){} is a short way of creating a function inside an object)
    data(){
        return {
            showBooks : true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
        }
    },
    //methods functions or methods
    methods: {
            toggleShowBooks(){
                this.showBooks = !this.showBooks
            },
            handleEvent(e,data){
                console.log(e, e.type)
                if(data){
                    console.log(data)
                }
            },
            handleMousemove(e){
                this.x = e.offsetX
                this.y = e.offsetY
                
            }
        }
    
})

app.mount('#app')