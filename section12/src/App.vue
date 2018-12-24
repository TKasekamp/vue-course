<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-highlight:background.delayed="'green'">Some text</p>
                <p v-local-highlight.blink="'green'">Some text</p>

                <p v-my-on:click="myAlert('click')">Myon</p>
            </div>
        </div>
    </div>
</template>

<script>
    const localHighlight = {
        bind(el, binding) {
            const delay = binding.modifiers['delayed'] ? 3000 : 0;

            if (binding.modifiers['blink']) {
                const mainColor = binding.value;
                const secondColor = 'blue';
            } else {
                setTimeout(() => {
                    if (binding.arg === 'background') {
                        el.style.backgroundColor = binding.value;
                    } else {
                        el.style.color = binding.value;
                    }
                }, delay);
            }
        }
    };

    const myOn = {
        bind(el, binding) {
            el.addEventListener(binding.arg, binding.value)
        }
    };
    const myAlert = (a) => () => {
        alert(a)
    };

    export default {
        methods: {myAlert},
        directives: {localHighlight, myOn}
    }
</script>

<style>

</style>
