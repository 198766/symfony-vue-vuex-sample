<template>
  <div class="deposit-station-list">
    <virtual-list :size="100" :remain="8">
      <deposit-station-item v-for="item in results" :key="item.id" :item="item"></deposit-station-item>
    </virtual-list>
  </div>
</template>

<script>
import DepositStationItem from './DepositStationItem.vue';
import virtualList from 'vue-virtual-scroll-list';

export default {
  components: {
    DepositStationItem,
    'virtual-list': virtualList
  },
  computed: {
    results() {
      return this.$store.getters.patientFiltered;
    }
  }
}
</script>

