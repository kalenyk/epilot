const apiURL = 'https://api.github.com/users/';

export const request: any = (user: number, method = 'GET', url = '') => {

    const fullURL = `${apiURL}${user}${url}`;

    return fetch(fullURL, {
        method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw response;
            }
            return response.json();
        })
        .then((response) => response)
        .catch(err => {
            throw err;
        });
};

export default request;
