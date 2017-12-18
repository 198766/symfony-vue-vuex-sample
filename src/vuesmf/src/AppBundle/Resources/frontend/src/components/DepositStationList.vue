<template>
  <div class="deposit-station-list">
    <ul class="list-group">
      <deposit-station-item v-for="item in results" :item="item"></deposit-station-item>
    </ul>
  </div>
</template>

<script>
import DepositStationItem from './DepositStationItem.vue';
import clusterize from "vue-clusterize";

export default {
  components: {
      DepositStationItem,
      clusterize
  },
  computed: {
    results() {
      return this.$store.getters.patientFiltered;
    }
  }
}
</script>

