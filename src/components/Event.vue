<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <button type="button" @click="increaseCapacity()">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import useEventSpace from '@/use/event-space';
  import useMapping from '@/use/mapping';
  import { onBeforeMount, onMounted } from '@vue/composition-api';

  export default {
    name: 'Event',
    setup() {
      onBeforeMount(()=> {
        console.log('Before Mount!');
      });
      onMounted(() => {
        console.log('Mounted!');
      });
      return { ...useEventSpace(), ...useMapping() }
    }
  };
</script>

<style scoped>

ul {
  list-style: none;
  padding: 0;
}

</style>
