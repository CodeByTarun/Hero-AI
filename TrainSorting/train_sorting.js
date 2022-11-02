
/*
    n - number of cars
    trains - weights of the cars

    decreasing order of weight,heaviest in the front
    can only move cars from end or beginning
*/

function train_sort(n, trains) {

    // 0 cars case
    if (n === 0) return 0;

    // holder for max number of cars
    let maxNumOfCars = 0;

    // loop through the cars starting with the first one that arrives at the station
    for (let i = 0; i < n - 1; i++) {

        // need to track first and last car to determine if the next one can be added
        let firstAndLastCar = {
            first: trains[i], 
            last: trains[i]
        };

        let count = 1;

        // loop through remaining cars to see what can be added when this car right now is the first car
        for (let j = i + 1; j < n; j++) {

            // if the train is larger than the first car add it to the front and if its smaller than the last car add it to the back
            if (trains[j] > firstAndLastCar.first) {
                count += 1;
                firstAndLastCar.first = trains[j];
            } else if (trains[j] < firstAndLastCar.last) {
                count += 1;
                firstAndLastCar.last = trains[j];
            }
        }
        // update max number of cars if this check lead to a higher count of cars
        maxNumOfCars = (count > maxNumOfCars) ? count : maxNumOfCars;

        // if the number of cars remaining to check is less than or equal to the maxNumOfCars so far, there is no reason to continue checking
        if (maxNumOfCars > (n - 1 - i)) break;
    }

    return maxNumOfCars;
}

// test cases

console.log(train_sort(3, [1, 2, 3])) // should be 3
console.log(train_sort(5, [10, 2, 12, 20, 3])) // should be 4

