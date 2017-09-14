import axios from 'axios';

export function showAll() {

    let dogs = [
        {
            _id: 1,
            name: 'kiko'
        }
    ]

    return {
        type: 'SHOW_ALL',
        dogs
    }
}