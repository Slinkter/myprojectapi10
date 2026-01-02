import { API_BASE_URL } from '@/shared/config/appConfig';

/**
 * A utility class for making API requests.
 */
class ApiService {
  /**
   * Creates an instance of ApiService.
   * @param {string} baseUrl - The base URL for the API.
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * Makes a GET request to the specified path.
   * @param {string} path - The path to make the request to.
   * @returns {Promise<any>} A promise that resolves with the response data.
   */
  async get(path) {
    try {
      const response = await fetch(`${this.baseUrl}${path}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API GET request failed:', error);
      throw error;
    }
  }
}

export default new ApiService(API_BASE_URL);
