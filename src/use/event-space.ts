import { ref, computed } from '@vue/composition-api';

//Modularization of the composition function
export default function useEventSpace() {
    //How create and initialize a variable (ex data)
    // -> using ref the setter and getter is acceded by the param 'value' (capacity.value) 
    // -> in the template is never needed to specify the param 'value' because Vue make it explicit
    const capacity = ref(3);
    const attending = ref(["Tim", "Bob", "Joe"]);

    //How create a computed method (ex computed)
    const spacesLeft = computed(() => {
        return capacity.value - attending.value.length;
    });

    //How create a simple method (ex methods)
    function increaseCapacity() {
        capacity.value++;
    }

    //Return everything
    return { capacity, increaseCapacity, attending, spacesLeft };

    //Alternative way to writing the same using a reactive object
    // -> to use a reactive object we need to import 'reactive' from the composition-api
    /* 
        const event = reactive({
        capacity: 4,
        attending: ["Tim", "Bob", "Joe"],
        spacesLeft: computed(() => {
            return capacity.value - attending.value.length;
        })
        });

        function increaseCapacity() {
        capacity.value++;
        }

        //To not need to use 'event.capacity' in the template we can import 'toRefs' from composition-api
        return { ...toRefs(events), increaseCapacity };
    */
}

