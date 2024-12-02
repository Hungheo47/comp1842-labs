const app = Vue.createApp({
    data() {
        return {
            product: `Hung's Socks`,
            image: './assets/images/socks_blue.jpg',
            inventory: 100,
            // solution
            onSale: true,
            // solution
            url: "https://www.example.com/product-details" 
        }
    }
})
