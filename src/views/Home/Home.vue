<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    sup
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data(){
    return {
      teste: null,
    }
  },
  created(){
    console.log('sup');
  }
}
</script>
