const response = [
    {
        "name": "Amit",
        "city": "Mumbai",
        "skills": [
            "Actng",
            "Singing",
            "Dancing"
        ],
        "vehicle": {
            "model": "BMW",
            "year": 2021
        }
    },
    {
        "name": "Rahul",
        "city": "Jaipur",
        "skills": [
            "Swiming",
            "Walking",
            "Dancing"
        ],
        "vehicle": {
            "model": "Scoda",
            "year": 2019
        }
    },
    {
        "name": "Vijay",
        "city": "Pune",
        "skills": [
            "Sarcasm",
            "Debate",
            "RTI"
        ],
        "vehicle": {
            "model": "M80",
            "year": 1999
        }
    }
]

const nameAndYear = response.map(item => {
    return{
        name: item.name,
        year: item.vehicle.year,
    }
})

console.log('Name and year of response objects:');
console.log(nameAndYear);


const filterByyear = response.filter(item => {
    return item.vehicle.year > 2020
})

console.log('List of vehicle with year higher than 2020:');
console.log(filterByyear);