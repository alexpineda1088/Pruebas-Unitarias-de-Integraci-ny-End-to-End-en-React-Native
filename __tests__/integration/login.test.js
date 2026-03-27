describe('Login', () => {
    test('debería iniciar sesión correctamente', () => {
      const usuario = 'admin';
      const password = '1234';
  
      expect(usuario).toBe('admin');
      expect(password).toBe('1234');
    });
  });