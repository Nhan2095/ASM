const signup = async () => {
    
   
    const name = document.querySelector('#name').value
    // const lastname = document.querySelector('#lastname').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    
    
        // Kiểm tra email và username trùng lặp
        const existingUsers = await fetch("http://localhost:3000/user");
        const existingUserData = await existingUsers.json();
        const isDuplicate = existingUserData.some(user => user.email === email);

        if (isDuplicate) {
            // Hiển thị thông báo cho người dùng rằng email hoặc username đã tồn tại
            alert("Email hoặc username đã tồn tại. Vui lòng chọn thông tin khác.");
        } else {
            // Email và username không bị trùng lặp, thêm người dùng mới vào cơ sở dữ liệu
            const data ={
                name, email, password
            }
    
            const response = await fetch("http://localhost:3000/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            window.location.href = "login.html";
            alert("Đăng ký thành công.");
    
            // Sau khi thêm người dùng mới, bạn có thể thực hiện các hành động khác, chẳng hạn chuyển hướng người dùng đến trang đăng nhập.
        } 
        
    }
    
    const login = async () => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
      
        // Gửi yêu cầu đăng nhập đến JSON Server
        const response = await fetch("http://localhost:3000/user", {
          method: "GET",
        });
      
        if (response) {
          const userData = await response.json();
      
          // Kiểm tra xem thông tin đăng nhập có hợp lệ hay không
          const user = userData.find((user) => user.email === email && user.password === password);
          alert("Đăng nhập thành công.");
          if (user) {
            // Đăng nhập thành công, chuyển hướng người dùng đến trang chính (ví dụ: "index.html")
            window.location.href = "./index.html";
            return; // Dừng hàm tại đây
          } else {
            alert("Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.");
          }
        } else {
          // Xử lý lỗi nếu không thể lấy dữ liệu người dùng từ JSON Server
          alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
        }
      };