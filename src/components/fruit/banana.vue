<template>
<div>
    Banana Component
</div>
</template>

<script>
export default{
    mounted(){
        console.log('Banana mounted')
    },
    activated(){
        console.log('Banana activated')
    },
    deactivated(){
        console.log('Banana deactivated')
    },
    unmounted(){
        console.log('Banana Unmounted')
    }
}
</script>