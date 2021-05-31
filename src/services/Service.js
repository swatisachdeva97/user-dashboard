import axios from 'axios';

export default class Service {

    static async getUserData() {

            const response = await fetch('https://random-data-api.com/api/users/random_user?size=50');
            const json = await response.json();
            if (response.status == 200) {
                return json;
            }
    }

    static async getUserData2() {

        const response = await fetch('https://random-data-api.com/api/users/random_user?size=50');
        const json = await response.json();
        if (response.status == 200) {
            return json;
        }
    }
    static saveUserProfile(data) {

        fetch('https://example.com/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

}