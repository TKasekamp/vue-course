const reverseText = (value) => {
    return value.split('').reverse().join('');
};

export const mixin = {
    data() {
        return {
            text: 'Very important stuff'
        }
    },
    filters: {reverseText},
    computed: {
        reversedText() {
            return reverseText(this.text)
        }
    }
};
