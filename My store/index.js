const products = [
    { id: 1, name: "P1", price: 34 },
    { id: 2, name: "P2", price: 50 },
    { id: 3, name: "P3", price: 40 },
  ];
  const cart = {};
  const decrement = (id) => {
    cart[id] = cart[id]-1
    showCart()
  }
  const increment = (id) => {
    cart[id] = cart[id]+1
    showCart()
  }
  const displayCart=()=>{
    cartBox.style.display="block"
    prodBox.style.display="none"
  }
  const hideCart = () => {
    cartBox.style.display="none"
    prodBox.style.display="block"
  }
  const del = (id) =>{
    delete cart[id]
    showCart()
  }
  const addToCart = (id) => {
    if(!cart[id]){
        cart[id] = 1
    }
    showCart()
  }
  const showTotal = (id) => {
      let total = products.reduce((sum, value) => {
        return sum + value.price * (cart[value.id] ?? 0);
      }, 0);
      order.innerHTML = total
  }
  const showCart = () => {
    let count = Object.keys(cart).length
    items.innerHTML = count
    showTotal()
    let str = "";
    products.map((value) => {
      if (cart[value.id]) {
        str += `<div>
        ${value.id}-${value.name}-${value.price}-
        <button onclick="decrement(${value.id})">-</button>
        ${cart[value.id]}
        <button onclick="increment(${value.id})">+</button>
        -${value.price*cart[value.id]}
         <button onclick="del(${value.id})">Delete</button>
        </div>`
      }
    });
    divCart.innerHTML = str;
  };
  const showProducts = () => {
    let str = "";
    products.map((value) => {
      str += `<div>
      ${value.id}-${value.name}-${value.price}-
      <button onclick='addToCart(${value.id})'>
      Add to Cart
      </button></div>`;
    });
    divProducts.innerHTML = str;
  };