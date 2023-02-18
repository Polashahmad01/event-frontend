const baseUrlFromEnv =  import.meta.env.VITE_BASE_API_URL

export class HttpClient {
  constructor(baseURL = baseUrlFromEnv, defaultHeaders = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = defaultHeaders
  }

  async request(url, method = "GET", body = null, headers = {}) {
    const options = {
      method,
      headers: {
        ...this.defaultHeaders,
        ...headers
      }
    }

    if(body) {
      options.body = JSON.stringify(body)
      options.headers['Content-Type'] = "application/json"
    }

    const response = await fetch(`${this.baseURL}/${url}`, options)
    const responseData = await response.json()

    if(!response.ok){
      throw new Error(responseData.message || response.statusText)
    }

    return responseData
  }

  async get(url, headers = {}) {
    return this.request(url, "GET", null, headers)
  }

  async post(url, body, headers = {}) {
    return this.request(url, "POST", body, headers)
  }

  async put(url, body, headers = {}) {
    return this.request(url, "PUT", body, headers)
  }

  async patch(url, body, headers = {}) {
    return this.request(url, "PATCH", body, headers)
  }

  async delete(url, headers = {}) {
    return this.request(url, "DELETE", null, headers)
  }
}
