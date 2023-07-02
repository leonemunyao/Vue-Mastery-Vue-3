const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true
        }
    },

    methods: {
        updateCart() {
            this.cart +=1
        },
        removeFromCart() {
          if (this.cart >= 1) {
              this.cart -= 1
          }
        }
    }
   
}) 