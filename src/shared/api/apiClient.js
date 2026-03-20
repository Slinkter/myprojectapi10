import { API_BASE_URL } from "@/shared/config/appConfig";

/**
 * Custom error class for API failures
 */
export class ApiError extends Error {
  /**
   * @param {string} message
   * @param {number} status
   * @param {string} statusText
   * @param {any} [data]
   */
  constructor(message, status, statusText, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
    this.data = data;
  }
}

/**
 * Private request function
 * @param {string} endpoint
 * @param {RequestInit} [options]
 * @returns {Promise<any>}
 */
async function request(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

    if (response.status === 204) {
      return null;
    }

    if (!response.ok) {
      let data;
      try {
        data = await response.json();
      } catch (e) {
        data = null;
      }
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        response.status,
        response.statusText,
        data
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`API request failed [${options.method || "GET"} ${endpoint}]:`, error);
    throw error;
  }
}

export const apiClient = {
  /**
   * Makes a GET request
   * @param {string} path
   * @returns {Promise<any>}
   * @throws {ApiError}
   */
  get: (path) => request(path, { method: "GET" }),

  /**
   * Makes a POST request
   * @param {string} path
   * @param {any} body
   * @returns {Promise<any>}
   * @throws {ApiError}
   */
  post: (path, body) =>
    request(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),

  /**
   * Makes a DELETE request
   * @param {string} path
   * @returns {Promise<any>}
   * @throws {ApiError}
   */
  delete: (path) => request(path, { method: "DELETE" }),
};
