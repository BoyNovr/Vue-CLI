import {createApp} from 'vue'
import App from './App.vue'
import Header from './components/generals/appHeader.vue'
import Footer from './components/generals/appFooter.vue'


const app=createApp(App)

app.directive('custDir',{
    created(el){
        console.log(el.parentNode)
        console.log('created')
    },
    beforeMount(el,binding){
        console.log(el.parentNode)
        console.log('before Mount')
        console.log(binding)
        // if(binding.arg==='blue'){
        //     el.style.color='blue'
        // }else if (binding.arg==='red'){
        //     el.style.color='red'
        // }else{
        //     el.style.color='yellow'
        // }
        el.style.color=binding.modifiers.blue ? 'blue' : 'red';
        el.style.fontSize=binding.modifiers.small? '20px' : '40px';
        el.innerHTML=binding.value
        // el.innerHTML='Hello descriptive'
        el.style.background='black'

           
    },
    mounted(el){
        console.log(el.parentNode)
        console.log('mounted')
    },
    beforeUpdate(el,binding){
        console.log(el)
        console.log(binding)
        el.innerHTML=binding.value
        console.log('Before Update')
    },
    updated(){
        console.log('updated')
    }

})
app.component('app-header',Header)
app.component('app-footer',Footer)
app.mount('#app')

