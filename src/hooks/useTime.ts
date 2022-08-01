import { computed, ref, watchEffect } from "vue";

const useTime = () => {
    const time = ref(new Date().toLocaleString());

    watchEffect(() => {
        time.value;
        setTimeout(() => (time.value = new Date().toLocaleString()), 1000);
    });

    const constTime = computed(() => time.value);

    return { time: constTime };
};

export { useTime };
