<template>
    <div>
        Search for <input type="text" v-model="searchInput" />
        <div>
            <p>Number of events: {{ results }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref, watch } from '@vue/composition-api';
    import mockEventAPI from '@/api/event';

    export default {
        name: 'Search',
        setup() {
            const searchInput = ref("");
            const results = ref(0);

            watch(searchInput, (newVal, oldVal) => {
                results.value = mockEventAPI.getEventCount(searchInput.value);
            })

            //To use multiple watchers
            /*
            watch([v1, v2], ([newV1, oldV1], [newV2, oldV2]) => {

            })
            */
            
            return { searchInput, results };
        }
    };
</script>

<style scoped>

</style>