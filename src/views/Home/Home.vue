<template>
  <div class="home">
    <Counter msg="new message"/>
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
