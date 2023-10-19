
let RenderProductHotIndex = () => {
  var urlproducthot = "json/producthot.JSON"
  fetch(urlproducthot)
  .then((response) => response.json()) // dùng câu lệnh này để tự động về parse => hướng đối tượng Js  
    .then((data) => {
      const listproducthot = document.querySelector("#listproducthot")
      let producthothtml = '';
      data.forEach((item) => {
          producthothtml += `
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
      
      listproducthot.innerHTML = producthothtml;
  
    });
};
RenderProductHotIndex();

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




  let renderproductShop = (currentPage, itemsPerPage) => { 
    const apiUrl = "http://localhost:3000/product"; // Thay thế bằng URL API thực tế của bạn
  
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const listproducts = document.querySelector("#show-product");
      let productListHTML = '';
      // console.log(data)
      
      // Tính toán chỉ mục bắt đầu và kết thúc dựa trên trang hiện tại và số sản phẩm trên mỗi trang
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      
      // Lấy danh sách sản phẩm cho trang hiện tại
      const currentPageData = data.slice(startIndex, endIndex);
  
      currentPageData.forEach((item) => {
        productListHTML += `
        <div class="featured-product mb-25">
            <div class="product-img transition mb-15">
                <a href="product-detail.html?id=${item.id}">
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
      });
  
      listproducts.innerHTML = productListHTML;
  
      // Tạo phân trang
      const totalPages = (data.length / itemsPerPage);
      const paginationContainer = document.getElementById("pagination");
      let paginationHTML = '';
  
      for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<li><a href="#" onclick="changePage(${i})">${i}</a></li>`;
      }
  
      paginationContainer.innerHTML = paginationHTML;
  
  
  
  
    })
    // .catch((error) => {
    //   console.error("Lỗi", error);
    // });
  };
  
  // Hàm để thay đổi trang khi người dùng click vào phân trang
  function changePage(page) {
    // Gọi lại hàm renderproductShop với trang mới
    renderproductShop(page, itemsPerPage);
  }
  
  const itemsPerPage = 8; // Số sản phẩm trên mỗi trang
  renderproductShop(1, itemsPerPage); // Hiển thị trang đầu tiên khi trang web được tải lên
  
  