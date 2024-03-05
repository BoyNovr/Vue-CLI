<template>
    <div>
      <h3>Grape Component</h3> 
      <Teleport to="#dialog_here">
      <compModal></compModal>
    </Teleport> 
    </div>
</template>
<script>
import compModal from '../utils/modal.vue'
export default{
    components:{
        compModal
    },
    name:'grape-comp',
    mounted(){
        console.log('Grape Mounted')
    },
    activated(){
        console.log('Grape activated')
    },
    deactivated(){
        console.log('Grape deactivated')
    },
    unmounted(){
        console.log('Grape Unmounted')
    }
}
</script>