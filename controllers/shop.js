const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Trang chủ ctl',
        path: '/index',
      });
    });
  };
  exports.getCart = (req, res, next) => {
    res.render('shop/giohang', {
      path: '/giohang',
      pageTitle: 'Your Cart'
    });
  };
  exports.getOrders = (req, res, next) => {
    res.render('shop/dathang', {
      path: '/dathang',
      pageTitle: 'Your Orders'
    });
  };
  exports.getCheckout = (req, res, next) => {
    res.render('shop/thanhtoan', {
      path: '/thanhtoan',
      pageTitle: 'thanh toan'
    });
  };
  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('../views/shop/sanpham', {
        prods: products,
        pageTitle: 'Sản phẩm',
        path: '/shop/sanpham',
      });
    });
  };
  
  exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
      res.render('shop/chitetsanpham', {
        product: product,
        pageTitle: product.title,
        path: '/chitetsanpham'
      });
    });
  };
  exports.getCart = (req, res, next) => {
    res.render('shop/giohang', {
      path: '/giohang',
      pageTitle: 'Your Cart'
    });
  };
  exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
      Cart.addProduct(prodId, product.price);
    });
    res.redirect('/giohang');
  };