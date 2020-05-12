const supertest = require('supertest')
const app = require('../app')

const request = supertest(app)

describe('api v1', () => {
  it('should return all tracks on base route', async (done) => {
    const res = await request.get('/api/v1');
    const {status, body} = res;
    expect(status).toBe(200);
    expect(body.length).toBeGreaterThan(1);
    done();
  });

  it('should return a successful search on /tracks', async (done) => {
    const res = await request.get('/api/v1/tracks?search=artist&value=12');
    const {status, body} = res;
    expect(status).toBe(200);
    expect(body.length).toBe(2);
    done();
  });

  // etc
})