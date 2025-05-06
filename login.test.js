const { login} = require('./login');

describe('Login Authentication Tests', () => {
    describe('Login', () => {
        it('Should allow to successfully log in with valid credentials', () => {
            const result = login('arsema@gmail.com', 'password123');
            expect(result.success).toBe(true);
            expect(result.message).toBe('Logined in successfully.');
        });
        it('should not allow/fail to log in with invalid credentials', () => {
            const result = login('Pheobe@gmail.com', 'wrongpassword');
            expect(result.success).toBe(false);
            expect(result.message).toBe('can not login with invalid credentials.');
        });
        it('should throw an error if email or password is not provided', () => {
            expect(() => login('', 'password')).toThrow('You have to put in user email and password.');
            expect(() => login('email', '')).toThrow('You have to put in user email and password.');
            expect(() => login('', '')).toThrow('You have to put in user email and password.');
        });

    });
});
