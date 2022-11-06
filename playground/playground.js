const XMLHttpRequest = require('xmlhttprequest');
const API = '';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.onreadystatechange === 4) {
            if(xhttp.status === 200) {

            }
        }
    }

}


export function runCode(url) {
    const xhttp = new XMLHttpRequest();
  
    xhttp.open('GET', url, true);
  
    xhttp.onreadystatechange = function (event) {
      if (xhttp.onreadystatechange === 4) {
        if (xhttp.status === 200) {
          const data = JSON.parse(xhttp.responseText)
  
          return data
  
            
        } else if (xhttp.status === 400) {
          let error;
          error = new Error('error: Invalid URL');
          return error;
  
  
        } else if (xhttp.status === 404) {
          
          error = new Error('error: Something was wrong');
          return error;
          }
        }
    }
  }