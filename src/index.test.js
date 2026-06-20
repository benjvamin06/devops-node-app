const request = require('supertest');
const { app, server } = require('../src/index'); 

afterAll((done) => {
    server.close(done); 
});

describe('Pruebas Unitarias del Microservicio', () => {
    
    it('Debería responder 200 OK', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Microservicio DevOps operando en AWS CloudWatch');
    });

    it('Debería responder 200 Healthy', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toBe("UP"); 
    });
    
});