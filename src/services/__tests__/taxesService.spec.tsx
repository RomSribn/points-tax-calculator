import fetchMock from 'jest-fetch-mock';
import { apiUrl } from '@utils/config';
import { taxesService } from '@services/taxesService';
import { setupStore } from '@redux/store';

describe('Taxes service', () => {
  const store = setupStore();

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('Should make a correct request for getting taxes brackets', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await store.dispatch<any>(taxesService.endpoints.getTaxesBrackets.initiate(2022));

    fetchMock.mockResponseOnce(JSON.stringify({}));

    expect(fetchMock).toBeCalledTimes(1);

    const { method, url } = fetchMock.mock.calls[0][0] as Request;

    expect(method).toBe('GET');
    expect(url).toBe(`${apiUrl}tax-calculator/tax-year/2022`);
  });
});
