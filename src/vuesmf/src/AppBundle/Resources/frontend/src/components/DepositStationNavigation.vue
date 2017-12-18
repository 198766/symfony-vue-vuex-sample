<template>
  <div class="deposit-station-navigation">
    <ul class="nav nav-stacked">
      <li v-for='item in results' :class="{active: activeTab.id == item.id, 'not-active': activeTab.id != item.id}">
        <a href="#" @click="filter(item)">
          <i :class="'fa fa-2 fa-' + item.icon" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    results() {
      return this.$store.getters.navigation
    },
    activeTab() {
      return this.$store.getters.activeTab
    }
  },
  methods: {
    filter(item) {
       this.$store.dispatch('filterPatient', item)
    }
  }
}
</script>