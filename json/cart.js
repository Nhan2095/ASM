const addCart = (id) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  
    var check = false;
    cart.forEach((element) => {
      if (element.id === id) {
        element.quantity = element.quantity + 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        check = true;
      }
    });
    if (!check) {
      const url = "http://localhost:3000/product";
  
      fetch(url)
        .then((response) => response.json()) // dùng câu lệnh này để tự động về parse => hướng đối tượng Js
        .then((data) => {
          const product = data.filter((products) => products.id === id);
          console.log(product);
          productNew = {
            id: product[0].id,
            img: product[0].img,
            title: product[0].title,
            price: product[0].price,
            quantity: 1,
          };
          cart.push(productNew);
          localStorage.setItem("cart", JSON.stringify(cart));
        })
        .catch((error) => {
          console.error("Lỗi", error);
        });
    }
    // count();
  };
 
  const sumTotal = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  
    Total = 0;
    cart.forEach((item, index) => {
      Total += item.quantity * item.price;
    });
    document.querySelector("#total-price").innerHTML = Total + " VNĐ";
  };
  sumTotal();

  const showCart = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  
    const listproducts = document.querySelector("#giohang");
    let productListHTML = ""; // Khởi tạo một chuỗi rỗng để tích luỹ HTML
    console.log(productListHTML)
    cart.forEach((item, index) => {
      productListHTML += `
      <tr>
        <td class="text-left">
          <div class="seller-box align-flax w-100">
            <div class="seller-img">
              <a href="product-detail.html" class="display-b">
                <img src="${item.img}" alt="shoes" class="transition">
              </a>
            </div>
            <div class="seller-contain pl-15">
              <a href="product-detail.html" class="product-name text-uppercase">${item.title}</a>
            </div>
          </div>
        </td>
        <td><span class="price">${item.price} VNĐ</span></td>
        <td>
        <form>
          <div class="value-button" id="decrease" onclick='decQuantity(${item.id})' value="Decrease Value">-</div>
          <input type="number" id="number" value="${item.quantity}" />
          <div class="value-button" id="increase" onclick="incQuantity(${item.id})" value="Increase Value">+</div>
        </form>
        </td>
        <td><span class="price">${item.price * item.quantity} VNĐ</span></td>
        <td>
          <ul>
            
            <li><a onclick='deleteCart(${item.id})'>X</a></li>
          </ul>
        </td>
      </tr>
        
      
      `;
  
    });
  
    // Sau khi vòng lặp hoàn thành, đặt innerHTML của listproducts
    listproducts.innerHTML = productListHTML;
  };
    showCart();


    const incQuantity = (id) => {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    
      cart.forEach((element) => {
        if (element.id === id) {
          element.quantity = element.quantity + 1;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
      sumTotal();
      showCart();
    };
    const decQuantity = (id) => {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    
      cart.forEach((element) => {
        if (element.id === id) {
          if (element.quantity > 1) {
            element.quantity = element.quantity - 1;
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
      });
      showCart();
      sumTotal();
    };

    const deleteCart = (id) => {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    
      const updatedProducts = cart.filter((product) => product.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      showCart();
      count();
    };
    