const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: "T-Shirts",
            brand: "Adidas",
            selectedVariant: 0,
            details: ["60% cotton", "20% wool", "20% polyester"],
            // sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 3340, color: "red", image: "./Assets/Images/3.jpeg", quantity: 40 },
                { id: 3341, color: "black", image: "./Assets/Images/2.jpeg" , quantity: 0 },
                { id: 3342, color: "grey", image: "./Assets/Images/7.jpeg", quantity: 60 }
            ],
            
        }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image 
        },
        InStock() {
            return this.variants[this.selectedVariant].quantity 
        }  
    }
}) 