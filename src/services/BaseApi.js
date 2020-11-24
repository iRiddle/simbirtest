class BaseApi {
    static apiUrl = 'https://jsonplaceholder.typicode.com'

    static request = (url, method, headers = {}, body) => {
        return fetch(`${BaseApi.apiUrl}${url}`, {
            method,
            headers: {
                ...headers,
                "Content-Type": 'application/json'
            },
            ...(body && { body: JSON.stringify(body) }),
        }).then(response => response.json()).then(data => data).catch(err => { throw new Error(err) })
    }

    static get = (url, options) =>
        BaseApi.request(url, 'GET', options);
}

export default BaseApi