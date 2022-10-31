enum METHODS  {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE ='DELETE',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data:object) {
    let str = '?';
    Object.entries(data).forEach((cortege, index) => {
        const name = cortege[0];
        const value = cortege[1];
        str += `${name}=${value}${index !== Object.entries(data).length - 1 ? '&' : ''}`;
    });
    return str;
    // Можно делать трансформацию GET-параметров в отдельной функции
}
type Options = {[optionName:string]:any}
type HTTPMethod = (url: string, options?: Options,data?:any) => Promise<unknown>
export class HTTPTransport {
    get:HTTPMethod = (url, options = {}) => this.request(url, {...options, method: METHODS.GET});

    put:HTTPMethod = (url, option = {},data) => this.request(url, {...option, method: METHODS.PUT, data});

    post:HTTPMethod = (url,  option = {},data) => this.request(url, {...option, method: METHODS.POST, data});

    delete:HTTPMethod = (url,  option = {},data) => this.request(url, {...option, method: METHODS.DELETE, data});
    request = (url:string, options:Options) => new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        if (options.method === METHODS.GET && options.data) {
            xhr.open(options.method, url + queryStringify(options.data));
        } else xhr.open(options.method, url);

        xhr.setRequestHeader('Content-Type', 'text/plain');
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

        const handleError = (err) => {
        };

        xhr.onabort = handleError;
        xhr.onerror = handleError;
        xhr.ontimeout = handleError;

        if (options.method === METHODS.GET || !options.data) {
            xhr.send();
        } else {
            xhr.send(JSON.stringify(options.data));
        }
    });
}
