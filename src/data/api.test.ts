import * as api from './index';

const API_KEY = '323fb606f44b43b4febb6470be051f2c';

test('should fetch province API successfully', async () => {
    const res = await api.getProvince({ key: API_KEY });

    expect(res.rajaongkir.status.code).toBe(200);
});

test('should fetch city API successfully', async () => {
    const res = await api.getCity({ key: API_KEY, province: '6' });

    expect(res.rajaongkir.status.code).toBe(200);
});

test('should fetch cost API successfully', async () => {
    const payload = {
        key: API_KEY,
        origin: '154',
        destination: '80',
        weight: 1000,
        courier: 'jne',
    };
    const res = await api.postCost(payload);

    expect(res.rajaongkir.status.code).toBe(200);
});
