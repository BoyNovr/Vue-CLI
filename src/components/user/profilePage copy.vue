<template>
    <div class="user-profile">
        <h3>user information</h3>
        <ul>
            <li><span>Name dari parent :</span> {{ nama2 }}</li>
            <li><span>Last Name :</span>{{ lastN }}</li>
            <li><span>Age :</span>{{ userAge }}</li>
            <ul>
                <li v-for="(value, key, index) in userParent" :key="index">
                    {{ key }} : {{ value }}

                </li>
            </ul>
        </ul>
     <button @click="updateLastName">Child Update Last Name</button>  
    <button @click="sayHellow">Child Say Hello</button>
    <button @click="updateAge(35)">Update Age</button>
    </div>
</template>

<script>
export default{
    // props:['nama2','lastN','userAge'],
    props:{
        nama2:{
            type:String,
            required:true,
            default:'N/A'
        },
        lastN:{
            type:String,
            // validator(value){
            //     if(value==='Novriyal'){
            //         return true
            //     }else{
            //         return false
            //     }
            // }
        },
        userAge:[Number,String],
        userParent:Object,
        updateAge:Function
    },
    // emits:['say-hello','update-last'],
    emits:{
        'update-last':function(last){
            if(last==='genos'){
                return true
            }else{
                alert('Wrong last Name!!')
                return false
            }
        }
    },
    data(){
        return{
            nama:'Boy'
        }
    },
    methods:{
        updateLastName(){
            this.$emit('update-last','genos')
        
        },
        sayHellow(){
            this.$emit('say-hello')
        },
    }
}
</script>