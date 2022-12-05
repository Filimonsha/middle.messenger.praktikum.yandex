enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: object) {
    let str = '?';
    Object.entries(data).forEach((cortege, index) => {
        const name = cortege[0];
        const value = cortege[1];
        str += `${name}=${value}${index !== Object.entries(data).length - 1 ? '&' : ''}`;
    });
    return str;
    // Можно делать трансформацию GET-параметров в отдельной функции
}

type Options = { [optionName: string]: any }
type HTTPMethod = (url: string, data?: any, options?: Options) => Promise<unknown>

export class HTTPTransport {
    private readonly baseUrl: string;

    constructor(baseUrl: string, endpointEntity: string) {
        this.baseUrl = baseUrl + endpointEntity
    }

    get: HTTPMethod = (url, options = {}) => {
        return this.request(this.baseUrl + url, {...options, method: METHODS.GET});
    }

    put: HTTPMethod = (url, data, option = {}) => this.request(this.baseUrl + url, {
        ...option,
        method: METHODS.PUT,
        data
    });

    post: HTTPMethod = (url, data, option = {},) => this.request(this.baseUrl + url, {
        ...option,
        method: METHODS.POST,
        data
    });

    delete: HTTPMethod = (url, data, option = {}) => this.request(this.baseUrl + url, {
        ...option,
        method: METHODS.DELETE,
        data
    });
    request = (url: string, options: Options) => new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true
        if (options.method === METHODS.GET && options.data) {
            xhr.open(options.method, url + queryStringify(options.data));
        } else {
            xhr.open(options.method, url)
        }

        if (options.headers) {
            Object.entries<string>(options.headers).forEach((cartage) => {
                const name = cartage[0];
                const value = cartage[1];
                xhr.setRequestHeader(name, value);
            });
        }

        xhr.onload = function () {
            resolve(xhr);
        };

        const handleError = () => {
        };

        xhr.onabort = handleError;
        xhr.onerror = handleError;
        xhr.ontimeout = handleError;

        if (options.method === METHODS.GET || !options.data) {
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send();
        } else {
            if (options.data instanceof FormData) {
                xhr.send(options.data);
            } else {
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhr.send(JSON.stringify(options.data));
            }
        }
    });
}
