<template>
    <div>
        <ul>
            <li v-for="(car,index) in cars" :key="index">
            {{ car.brand }} : {{ car.model }}
            </li>
        </ul>
        <button @click="changeCar">Change car</button>
    </div>
</template>
<script>
export default{
    // props:['cars']
    inject:['cars','changeCar']
}
</script>