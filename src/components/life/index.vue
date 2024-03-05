<template>
    <div>
    <h3>{{ text }}</h3>
    <button @click="this.text='changed Text'">Change text</button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            text:'data Lifecycle hook'
                }
    },
    beforeCreate(){
        console.log("1.beforeCreate")
    },
    created(){
        console.log('2-created')
    },
    beforeMount(){
        console.log('3-beforeMount')
    },
    mounted(){
        console.log('4-Mounted')
    },
    beforeUpdate(){
        console.log('U1 before update')
    },
    updated(){
        console.log('U2 updated')
    },
    beforeUnmount(){
        console.log('D1-before UnMount')
    },
    unmounted(){
        console.log('D2-destroy')
    }
}
</script>