<template>
    <div>
<!-- <listCar :cars="cars"></listCar> -->
<listCar></listCar>
    </div>
</template>
<script>
import listCar from './list.vue'
export default{
    components:{
        listCar
    },
    // props:['cars']
}
</script>

