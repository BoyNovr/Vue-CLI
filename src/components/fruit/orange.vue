<template>
    <div>
        Orange Component
    </div>
</template>
<script>
export default{
    name:'orange-comp',
    mounted(){
        console.log('orange mounted')
    },
    activated(){
        console.log('orange activated')
    },
    deactivated(){
        console.log('orange deactivated')
    },
    unmounted(){
        console.log('orange Unmounted')
    }
}
</script>