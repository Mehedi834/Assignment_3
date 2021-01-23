// https://github.com/Mehedi834/Assignment_3

// ১. kilometerToMeter Convert --

function kilometerToMeter(killometer) {
    var meter = killometer * 1000;
    return meter;
}
var convertMeter = kilometerToMeter(3);
console.log(convertMeter)


// ২. budgetCalculator

//  ৩. hotelCost Nirnoy --

function hotelCost(days) {
    var totalCost = 0;
    if (days <= 10) {
        totalCost = days * 100;
    }
    else if (days <= 20) {
        var cost10 = 10 * 100;
        var remaining = days - 10;
        var cost20 = remaining * 80;
        totalCost = cost10 + cost20;
    }
    else {
        var cost10 = 10 * 100;
        var cost20 = 10 * 80;
        var remaining = days - 20;
        var cost30 = remaining * 50;
        totalCost = cost10 + cost20 + cost30;

    }
    return totalCost;
}
var totalMoney = hotelCost(11);
console.log(totalMoney);


// ৪. megaFriend ---

function megaFriend(bestFriend) {
    var maxWord = bestFriend[0].length;
    var result = bestFriend[0];
    for (var i = 1; i < bestFriend.length; i++) {
        var maximum = bestFriend[i].length;
        if (maximum > maxWord) {
            result = bestFriend[i];
            maxWord = maximum;
        }
    }
    return result;
}
var bestFriend = ["Masum", "Solayman", "Akash", 'MehediHassan', 'MdNiloyKhanPartho'];
console.log(megaFriend(bestFriend));





function budgetCalculator[2, 2, 2]{
var result = 2 + 2 + 2;
return result;
}
var totalTaka = budgetCalculator(50, 100, 500);
console.log(totalTaka);