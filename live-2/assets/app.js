const app = new Vue({
    el: '#app',

    data: {
        style_color: 'text-red'

    },
    methods: {
        changeColor() {
            this.style_color.color = 'text-blu'
        }
    }
})