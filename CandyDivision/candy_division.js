
function divide_candy(numberOfCandies) {

    // keep track of possible num of friends
    let possibleNumOfFriends = [];

    // only need to loop through half the number of candies
    for (let i = 0; i < numberOfCandies / 2; i++) {

        // if the remainder is zero when dividing it can be done equally 
        if (numberOfCandies % (i + 1) === 0) {
            possibleNumOfFriends.push(i);
        }
    }

    // add the case where everyone gets 1 candy
    possibleNumOfFriends.push(numberOfCandies - 1);

    return possibleNumOfFriends;
}

//Tests
console.log(divide_candy(30));
console.log(divide_candy(25));