
const fs = require('fs');

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
exports.singupaccount = (rq, res, next) => {

    const username = req.body.username;
    const password = req.body.password;
    const password1 = req.body.password1;
    if(password != password1 ) {
    res.send("Mật khẩu xác thực không đúng!");
    } else {
      res.send("Đăng ký thành công!");
  }

  

 }



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