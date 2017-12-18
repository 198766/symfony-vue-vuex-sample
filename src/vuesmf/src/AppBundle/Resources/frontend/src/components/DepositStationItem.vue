<template>
  <li class="list-group-item">
    <span class="badge">{{ item.id }}</span>
    <div class="deposit-station-item">
      <div class="item">
        <div class="item__label"><strong>Label:</strong> {{ item.label }}</div>
        <div class="item__group"><strong>Tel:</strong> {{ item.details.tel }}</div>
        <div class="item__group"><strong>Group:</strong> {{ item.group }}</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style>
  .deposit-station-item{
    color: #909b9c;
    padding: 10px;
    max-width: 320px;
    magrin-bottom: 10px;
  }
</style>