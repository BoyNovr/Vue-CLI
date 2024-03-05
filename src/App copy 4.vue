<template>
    <div>
        <app-header></app-header>
        <div class="container">
        <button @click="this.activeComp='comp-orange'">Orange</button>
        <button @click="this.activeComp='comp-grape'">Grape</button>
        <button @click="this.activeComp='comp-banana'">Banana</button>

        <!-- <comp-orange v-if="activeComp==='comp-orange'"></comp-orange>
        <comp-grape v-if="activeComp==='comp-grape'"></comp-grape>
        <comp-banana v-if="activeComp==='comp-banana'"></comp-banana> -->
        <!-- cara mudah -->
        <!-- keep alive membiarkan setiap komponen tetap di mounted , pada keep alive ada life cycle tambahan
        yaitu activated dan deactivated, komponen tetap ada dalam dom tetapi hanya status nya activated-->
        <!-- atau <KeepAlive exclude="banana-comp"></KeepAlive> -->
        <KeepAlive include="orange-comp,grape-comp">
        <component :is='activeComp'></component>
        </KeepAlive>

        <div id="dialog_here">
            
        </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import compOrange from './components/fruit/orange.vue';
import compGrape from './components/fruit/grape.vue';
import compBanana from './components/fruit/banana.vue';
export default{
    components:{
       compOrange,compGrape,compBanana
    },
    data(){
        return{
           activeComp:'comp-orange'
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