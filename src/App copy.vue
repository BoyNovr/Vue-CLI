<template>
<div>
    <app-header></app-header>
    <div class="container">

        <profile-page 
        :nama2="nama"
        :lastN="lastName"
        :userAge="age"
        :userParent="parent"
        @update-last="lastName=$event"
        @say-hello="sayHellow"
        :updateAge="updateAge"
        ></profile-page>
        <br/>
        <button @click='updateName'>Change Name from props</button>   

    </div>
    
    <app-footer></app-footer>
    
</div>

</template>

<script>
import profilePage from './components/user/profilePage.vue'

export default {
    components:{
    profilePage
},
    data(){
        return{
            nama:'Boy',
            lastName:'Novriyal',
            age:'30',
            parent:{
                mother:'JNT',
                father:'GT'
            }
        }
    },
    methods: {
        updateName(){
            this.nama='hengki'
        },
        sayHellow(){
            alert('Hello World')
        },
        updateAge(value){
            this.age=value

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
</style>