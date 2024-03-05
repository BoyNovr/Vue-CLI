<template>
    <div>
        <app-header></app-header>
        <div class="container">
            <comp-life v-if="showit"></comp-life>

        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import compLife from './components/life/index.vue'
export default{
    components:{
        compLife
    },
    data(){
        return{
            showit:true
        }
    },
    mounted(){
        setTimeout(() => {
           this.showit=false 
        }, 5000);
    }
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