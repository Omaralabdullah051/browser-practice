const displayProductsBasedOnLocalStorage = () => {
    const cart = getItem();
    for (const keys in cart) {
        displayProducts(keys, cart[keys]);
    }
}

const getProducts = () => {
    const productNameInput = document.getElementById('product-name');
    const productNameValue = productNameInput.value;
    const productPriceInput = document.getElementById('product-price');
    const productPriceValue = productPriceInput.value;
    //display products on UI
    displayProducts(productNameValue, productPriceValue);
    //store products in local storage
    storeProductsInLocalStorage(productNameValue, productPriceValue);
}

const displayProducts = (productName, productPrice) => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = `${productName}=${productPrice}`;
    ul.appendChild(li);
}

const getItem = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const storeProductsInLocalStorage = (productName, productPrice) => {
    const cart = getItem();
    if (cart[productName]) {
        cart[productName] = parseFloat(cart[productName]) + parseFloat(productPrice);
    }
    else {
        cart[productName] = productPrice;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const placeOrders = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayProductsBasedOnLocalStorage();