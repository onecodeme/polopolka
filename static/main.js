const App = new Vue ({
    el: "app",
        data () {
        return {
            products: []
        }
    },
    async mounted() {
        fetch("http://localhost/api/products")
            .then(response => response.json())
            .then(data => (this.products = data));
    }
})