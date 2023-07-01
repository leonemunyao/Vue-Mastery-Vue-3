const app = Vue.createApp({
    data() {
        return {
            product: "T-Shirts",
            image: "./Assets/Images/3.jpeg",
            InStock: true,
            details: ["60% cotton", "20% wool", "20% polyester"],
            variants: [
                { id: 3340, color: "red" },
                { id: 3341, color: "black" },
                { id: 3342, color: "grey" }
            ],
            sizes: [ 32, 33, 34 ]
        }
    }
})