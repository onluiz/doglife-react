import axios from 'axios';

export function showAll() {

    let dogs = [
        {
            _id: 1,
            name: 'kiko'
        }
    ]

    console.log('showAllaaa');

    return {
        type: 'SHOW_ALL',
        dogs
    }
}