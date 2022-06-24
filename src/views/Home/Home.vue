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
  computed: {
    ...mapGetters(["items"])
  },
  async created(){
    await this.getData();
  },
  methods: {
    ...mapActions(["getItems"]),
    async getData(){
      await this.getItems();
      console.log(this.items);
    }
  }
}
</script>
