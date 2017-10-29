import axios from 'axios';
/**
 * example using axios and a jwt token in headers
 */
export function getRequestExample() {
    axios.get('http://localhost:8080/dogs', { headers: {
        "Authorization": "bearer token2u2804820euewjidjfidsj"
    }})
    .then(res => {
        console.log('SUCCESS', res);
    })
    .catch(err => console.log('FAILURE', res))
}