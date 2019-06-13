import cookie from 'react-cookies';

export const POST = (host, url, params = {}, appName = '') => new Promise(resolve => {
  fetch(host + url, {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(e => e.json())
    .then(e => {
      resolve(e);
    })
    .catch(e => {
      resolve(e);
    });
  }
);