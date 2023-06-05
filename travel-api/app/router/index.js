const { regisUser, jwtToken, orderUser } = require('../controllers/index');

module.exports = (app) => {
  //user
  app.post('/api/auth/signup', regisUser.verifySignUp);
  app.post('/api/auth/signin', regisUser.verifySignIn);

  //order
  app.post('/api/order', [jwtToken.verifyToken], orderUser.addOrder);
  app.get('/api/order', orderUser.listOrder);
  app.get('/api/order/:id', orderUser.getOrderById);
  app.put('/api/order/:id', [jwtToken.verifyToken], orderUser.updateOrder);
  app.delete('/api/order/:id', [jwtToken.verifyToken], orderUser.deleteOrder);
};
