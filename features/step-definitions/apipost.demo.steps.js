const { Given, When, Then } = require('@wdio/cucumber-framework');
const jsonData = require('../utils/data.js');

Given(/^I am doing post call$/, async   () => {
    try {
        const res = await callPost(jsonData['postCallEndPoint'],
            payLoad()
        )
        //console.log(res)
        console.log('****reading data from resposnes**** = '+res.data.name)
      } catch (error) {
        console.error(error)
      }
});


function callPost(endpoint, body, headers, options = {}) {
    const commonHeaders = {
      'Content-Type': 'application/json',
      'x-api-key': 'A298535C-B6AE-4EE4-B9B2-A07C996E76A7'
    };
    const commonOptions = {
      method: 'POST',
      responseType: 'json',
      ...options,
    };
    return axios.post(endpoint, body,
      {
        ...commonOptions,
        headers: { ...commonHeaders, ...headers },
      })
      .then(response => response.data)
      .catch((error) => {
        throw new CustomException(error);
      });
  }

  let payLoad = function () {
    let data = {
        "email": "rizky@orderonline.id",
        "password": "123456789"
    };
 return data;
}
