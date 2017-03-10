import "whatwg-fetch"

interface Response {
  flag: "true" | "false",
  data?: any[],
  msg: string
}

const headers = {
  'Accept': 'application/json',
  "Content-Type": "application/json",
  "if-api": "true"
}

function errorHandle(res: Response) {

}

export default {
  get(url: string) {
    return fetch(url, {
      headers: headers,
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then(errorHandle)
  },
  post(url: string, body = {}) {
    return fetch(url, {
      method: "POST",
      headers: headers,
      credentials: 'same-origin',
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(errorHandle)
  },
  put(url: string, body = {}) {
    return fetch(url, {
      method: "PUT",
      headers: headers,
      credentials: 'same-origin',
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(errorHandle)
  },
  delete(url: string, body: {}) {
    return fetch(url, {
      method: "DELETE",
      headers: headers,
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(errorHandle)
  }
}