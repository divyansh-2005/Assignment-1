import fetch from 'node-fetch'; // Import the fetch module
import querystring from 'node:querystring';

const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6';

let recordList = [];

const createRequestUrl = (offset) => {
    const parameters = {
        'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
        format: 'json',
        offset,
        limit: 3,
        // 'filters[deliverystatus]': 'Delivery',
        // 'filters[divisionname]': 'Nagpur City',
    }
    return baseUrl + '?' + querystring.stringify(parameters);
}

const fetchData = (requestUrl) => {
    return fetch(requestUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            recordList = [...recordList, ...data.records];
            console.log(`Received records: ${data.records.length}`);
            return data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

const fetchAllData = async () => {
    const offsets = [31, 51, 61];
    const promises = offsets.map(offset => fetchData(createRequestUrl(offset)));
    try {
        const results = await Promise.all(promises);
        const combinedData = results.reduce((acc, curr) => acc.concat(curr.records), []);
        console.log('All records received:');
        console.log(combinedData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAllData();
