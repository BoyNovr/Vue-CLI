<template>
    <div>
        <app-header></app-header>
        <div class="container">
            <CompDirective></CompDirective>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import CompDirective from './components/Directive/index.vue'
export default{
    components:{
       CompDirective
    },
    data(){
        return{
          
        }
    },
 
}
</script>
<style>
body{
    padding: 0;
    margin: 0;
}
.container{
    min-height: 73vh;
    box-sizing: border-box;
    padding: 20px;

}
button{
    padding: 10px;
    background: green;
    cursor: pointer;
    border-radius: 10%;
    border: none;
}
button:hover{
    background: yellow;
}
</style>