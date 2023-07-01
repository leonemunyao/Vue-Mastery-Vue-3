const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "T-Shirts",
            image: "./Assets/Images/3.jpeg",
            InStock: true,
            details: ["60% cotton", "20% wool", "20% polyester"],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 3340, color: "red", image: "./Assets/Images/3.jpeg" },
                { id: 3341, color: "black", image: "./Assets/Images/2.jpeg" },
                { id: 3342, color: "grey", image: "./Assets/Images/7.jpeg" }
            ],
            
        }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },
        
        // solution
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        // solution
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})