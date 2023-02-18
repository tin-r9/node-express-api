import request from 'supertest';

describe('GET /tshirt', () => {
    test('It should respond with a tshirt', async () => {
        const response = await request(app).get('/tshirt');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            tshirt: '👕',
            size: 'large'
        });
    });
});