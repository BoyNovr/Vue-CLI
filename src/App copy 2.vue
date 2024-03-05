<template>
<div>
    <app-header></app-header>
    CHILDREN
     <!-- <comp-cars :cars="cars"></comp-cars> -->
     <comp-cars></comp-cars>

     PARENT
     <ul>
            <li v-for="(car,index) in cars" :key="index">
            {{ car.brand }} : {{ car.model }}
            </li>
        </ul>
        <button @click="changeCar">Change Car</button>
        <!-- atau <compCars></compCars> -->

        <div class="container">
            <comp-brand>
                <template v-slot:top><h3>ini ada di top of content</h3>
                </template>
                    <template v-slot:brand>
                <ul>
                <li v-for="(value,index) in brands" :key="index">
                {{ value }}
                </li>   
                </ul>
        </template>
        <template v-slot:other>
            <h3>other Slot</h3>
        </template>
        <strong>Default Slot</strong>
            </comp-brand>
          
        </div>
    <app-footer></app-footer>
    
</div>

</template>

<script>
import compCars from './components/cars/index.vue'
import CompBrand from './components/cars/brand.vue'
export default {
    components:{
  compCars,
  CompBrand
},
    data(){
        return{
            brands:['Honda','Toyota','Ford','Avanza'],
            cars:[
            {model:'Jazz',brand:'Honda'},
            {model:'Airev',brand:'Wulling'},
            {model:'Yaris',brand:'Toyota'}
           ]
        }
    },
    provide(){
        return {
            cars:this.cars,
            changeCar:this.changeCar
        }
    },
    methods: {
       changeCar(){
        this.cars[0].brand="Ferarri"
       }
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
</style>;