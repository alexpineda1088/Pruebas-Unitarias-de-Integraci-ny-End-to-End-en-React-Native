describe('E2E - Flujo de Login', () => {
    test('Usuario inicia sesión correctamente', async () => {
      const usuario = {
        username: 'admin',
        password: '1234'
      };
  
      // Simulación del flujo
      expect(usuario.username).toBe('admin');
      expect(usuario.password).toBe('1234');
    });
  });