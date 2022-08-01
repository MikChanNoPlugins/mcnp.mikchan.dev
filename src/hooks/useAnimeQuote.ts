import { ref, watchEffect } from "vue";
import { Random } from "animechan.js";

const useAnimeQuote = () => {
    const result = ref<string>("...");

    watchEffect(() => {
        (async () => {
            const { anime, character, quote } = await Random();
            result.value = `[${anime}] ${character}: ${quote}`;
        })();
    });

    return { quote: result };
};

export { useAnimeQuote };
