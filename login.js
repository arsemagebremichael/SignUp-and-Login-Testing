function login (email, password) {
    if (!email || !password) {
        throw new Error('You have to put in user email and password.');
    }
    if (email === 'arsema@gmail.com' && password === 'password123') {
        return { success: true, message: 'Logined in successfully.' };
    } 
    else {
        return { success: false, message: 'can not login with invalid credentials.' };
    }
  };
  module.exports = { login};