<template>
    <div v-user-firstname.border="firstname"></div>
    <div v-user-lastname="lastname"></div>
    
    <!-- <h3 v-custDir:blue="Valdirective"></h3> -->
    <!-- <h3 v-custDir:red="Valdirective"></h3>
    <h3 v-custDir="Valdirective"></h3> -->
    <hr>
    <!-- modifiers -->
    <!-- <h3 v-custDir.blue.small="Valdirective"></h3>-->
    <h3 v-custDir.red.big="Valdirective"></h3> 

<button @click="this.Valdirective='changed text'">Change Text</button>
</template>
<script>
export default{
    data(){
        return{
            Valdirective:'Text From Data',
            firstname:'Boy',
            lastname:'Novriyal'
        }
    },
    directives:{
        'user-lastname':{
            beforeMount(el,binding){
                console.log(binding)
                el.innerHTML=binding.value
                el.style.color='magenta'
                el.style.fontSize='35px'    
            },
        },
        'user-firstname':{
            beforeMount(el,binding){
                console.log(binding)
                el.innerHTML=binding.value
                el.style.color='aqua'
                el.style.fontSize='35px'
                el.style.border=binding.modifiers.border? '2px solid red' : '10px solid blue';
            },

        },
    }
}
</script>