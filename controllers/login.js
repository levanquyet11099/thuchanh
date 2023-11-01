
const fs = require('fs');
const bodyParser = require('body-parser');

exports.renderpage = (req, res) => {
    res.render('login/login',{
      pageTitle: 'Đăng nhập',
      path: '/login/login',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
      
    });
    //res.redirect('/shop/index');
  };
  exports.singupaccountpage = (req, res) => {
    res.render('login/singup',{
      pageTitle: 'Đăng ký',
      path: '/login/login',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
      
    });

    //res.redirect('/shop/index');
  };
exports.postsngupaccountpage = (req, res) => {
  // Lấy dữ liệu từ form và lưu vào biến
  const gmail = req.body.gmail;
  const phoneNumber = req.body.phoneNumber;
  const username = req.body.username;
  const password = req.body.password;

  // Tạo chuỗi dữ liệu để lưu vào file
  const data = `Gmail: ${gmail}\nSố điện thoại: ${phoneNumber}\nTên đăng nhập: ${username}\nMật khẩu: ${password}\n\n`;

  // Ghi vào file taikhoan.txt
  fs.appendFile('taikhoan.txt', data, (err) => {
      if (err) {
          console.log(err);
          res.send('Lỗi khi lưu dữ liệu!');
      } else {
          console.log('Dữ liệu đã được lưu thành công!');
          res.send('Dữ liệu đã được lưu thành công!');
      }
  });
};

exports.loginpage = (req, res) => {
  //res.pageTitle = 'trang chu';
  const username = req.body.username;
  const password = req.body.password;
  console.log(username,password);         
  fs.readFile('taikhoan.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }          
    const users = data.split(' ').map(line => {
      const  [name, pass] = line.split(':');
      return {name,pass}; 
      console.log(users);         
    });

    const user = users.find(u => u.name === username && u.pass === password);
    
    if (user) {
      //res.send('Đăng nhập thành công!');
    //    res.render('../views/shop/index',{
    //   pageTitle: 'Trang chủ',
    //   path: '/index',
    //   formsCSS: true,
    //   productCSS: true,
    //   activeAddProduct: true             
    // });
   
    res.redirect('/index');
    
 
      
    } else {
      res.send('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
    
    //res.redirect('../views/shop/index');
  });
};