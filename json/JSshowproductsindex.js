
let RenderProductIndex = () => {
  const url = "http://localhost:3000/product";

  fetch(url)
    .then((response) => response.json()) // dùng câu lệnh này để tự động về parse => hướng đối tượng Js  
    .then((data) => {
      const listproducts = document.querySelector("#show-product-outstanding");
      let productListHTML = ''; // Khởi tạo một chuỗi rỗng để tích luỹ HTML
  
      data.forEach((item, index) => {
        if (index < 10) {
        productListHTML += `
        <div class="featured-product mb-25">
        <div class="product-img transition mb-15">
            <a href="product-detail.html">
              <img src="${item.img}" alt="product" class="transition">
            </a>
            <div class="new-label">
                <span class="text-uppercase">New</span>
            </div>
            <div class="product-details-btn text-uppercase text-center transition">
                <a href="javascript:addCart(${item.id}) " class="quick-popup mfp-iframe">Mua ngay</a>
            </div>
        </div>
        <div class="product-desc">
            <a href="product-detail.html" class="product-name text-uppercase">${item.title}</a>
            <span class="product-pricce">${item.price} VNĐ</span>
        </div>
    </div>  
          `;
        }
      });
      console.log( productListHTML);
      // Sau khi vòng lặp hoàn thành, đặt innerHTML của listproducts
      listproducts.innerHTML = productListHTML;
  
    })
    .catch((error) => {
      console.error("Lỗi", error);
    });
}
RenderProductIndex()


