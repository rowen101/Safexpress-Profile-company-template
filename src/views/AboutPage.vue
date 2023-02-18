<template>
     <div >
    <img :src="about" alt="about" class="object-position: center;">
  </div>
</template>
<script>
export default{
  data(){
    return{
      about:require('@/assets/img/about.png')
    }
  }
}
</script>