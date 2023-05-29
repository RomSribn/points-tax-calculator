import { saveToLocalStorage, loadFromLocalStorage } from '@utils/localStorage';
import { LocalStorageMock } from '@utils/tests';

const localStorageMock = new LocalStorageMock();

describe('localStorageUtils', () => {
  beforeAll(() => {
    // Replace the global localStorage with the mock
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock
    });
  });

  afterEach(() => {
    // Clear the mock storage after each test
    localStorageMock.clear();
  });

  describe('loadFromLocalStorage', () => {
    test('Should returns the parsed value from localStorage', () => {
      const key = 'testKey';
      const value = { foo: 'bar' };
      const serialisedValue = JSON.stringify(value);

      localStorageMock.setItem(key, serialisedValue);

      const loadedValue = loadFromLocalStorage(key);
      expect(loadedValue).toEqual(value);
    });

    test('Should returns null if the value is not found in localStorage', () => {
      const key = 'nonExistentKey';

      const loadedValue = loadFromLocalStorage(key);
      expect(loadedValue).toBeNull();
    });

    test('Should returns the raw value if parsing fails', () => {
      const key = 'invalidKey';
      const invalidValue = 'invalidJSON';

      localStorageMock.setItem(key, invalidValue);

      const loadedValue = loadFromLocalStorage(key);
      expect(loadedValue).toBe(invalidValue);
    });
  });

  describe('saveToLocalStorage', () => {
    test('Should saves the value to localStorage', () => {
      const key = 'testKey';
      const value = { foo: 'bar' };

      saveToLocalStorage(key, value);

      const storedValue = localStorageMock.getItem(key) || '{}';
      expect(JSON.parse(storedValue)).toEqual(value);
    });
  });
});
