app.component("product-display", {
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :class="{ 'out-of-stock-img': !inStock }" v-bind:src="image">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="InStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <!-- <ul>
                <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
            </ul> -->
            <div v-for="(variant, index) in variants" 
                 :key="variant.id" 
                 @mouseover="updateVariant(index)"
                 class="color-circle"
                 :style="{ backgroundColor: variant.color }">
            </div>
            
            <button 
                class="button"
                :class="{ disabledButton: !InStock }"
                :disabled="!InStock" 
                @click="addToCart">
                Add To Cart</button>
            <button 
                class="button"
                :class="{ disabledButton: !InStock }"
                :disabled="!InStock" 
                @click="removeFromCart">
                Remove From Cart</button>
        </div>
    </div>
</div>`,
data() {
    return {
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