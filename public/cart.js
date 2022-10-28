const newLocal = `<div class="cart-block" v-show="visibility">
    <p v-if="!cartItems.length" class="epmty">Карзина пуста</p>

            <div class="cart-item" v-for="item of cartItems" 
            :key="item.id_product">
                      
            <div class="product-bio">
                    <div class="product-desc">
                    <div class="product-title">{{ item.product_name }}</div>
                    <div class="product-quantity">Количество: {{ item.quantity }}</div>
                    <div class="product-single-price"> {{ item.price }} рублей за штуку</div>
                </div>
            </div>
            <div class="right-block">
            <div class="product-price"> итого {{item.quantity*item.price}} рублей</div>
            <button class="del-btn" @click="$emit('remove', item)">Удалить</button>
            </div>
        </div>
    </div>`;
Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: newLocal
})