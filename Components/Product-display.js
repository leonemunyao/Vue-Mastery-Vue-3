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

})