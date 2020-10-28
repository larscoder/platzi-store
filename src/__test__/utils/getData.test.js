import getData from '../../utils/getData';

describe('FetchApi', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar Api y retoenar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com/')
      .then((res) => {
        expect(res.data).toEqual('12345');
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com/');
  });
});
