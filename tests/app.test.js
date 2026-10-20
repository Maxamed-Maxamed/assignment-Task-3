const request = require('supertest');
const app = require('../src/app');

describe('DevOps web application', () => {
  test('GET / returns the home page', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('DevOps Web Application');
    expect(response.text).toContain(
      'The application is running successfully.'
    );
  });

  test('GET /health returns the application status', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 'UP',
      message: 'Application is running'
    });
  });

  test('GET /unknown returns 404', async () => {
    const response = await request(app).get('/unknown');

    expect(response.statusCode).toBe(404);
  });
});