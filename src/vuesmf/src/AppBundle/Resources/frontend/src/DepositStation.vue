<template>
  <div id="app" class="content">
    <div class="content__right">
      <deposit-station-list></deposit-station-list>
    </div>
    <div class="content__left">
      <deposit-station-navigation></deposit-station-navigation>
    </div>
  </div>
</template>

<script>
import DepositStationNavigation from './components/DepositStationNavigation.vue';
import DepositStationList from './components/DepositStationList.vue';

export default {
  name: 'app',
  components: { DepositStationNavigation, DepositStationList },
  created() {
    this.$store.dispatch('updateStorage');
    this.$store.dispatch('initActiveTab');
  }
};
</script>

<style src="./assets/style.css"></style>