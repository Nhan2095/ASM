
let RenderProductSaleIndex = () => {
  var urlproductsale = "json/productsale.JSON"
  fetch(urlproductsale)
  .then((response) => response.json()) // dùng câu lệnh này để tự động về parse => hướng đối tượng Js  
    .then((data) => {
      const listproductsale = document.querySelector("#listproductsale")
      let productsalehtml = '';
      data.forEach((item) => {
          productsalehtml += `
          <div class="seller-box align-flax w-100 pb-20">
          <div class="seller-img">
              <a href="product-detail.html" class="display-b">
              <img src="${item.img}" alt="shoes" class="transition">
              </a>
          </div>
          <div class="seller-contain pl-15">
              <a href="product-detail.html" class="product-name text-uppercase">${item.title}</a>
              <span class="product-pricce">${item.price} VNĐ</span>
          </div>
      </div>
                 

          
          `
      });
      
      listproductsale.innerHTML = productsalehtml;
  
    });
};
RenderProductSaleIndex();