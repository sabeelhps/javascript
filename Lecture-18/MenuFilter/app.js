
let menu = ["Chhole Puri", "Pizza", "Chicken Tikka", "Egg Curry",
    "Dosa", "Onion Rings", "Biryani", "Chicken Biryani",
    "Kadhai Paneer", "Garlic Bread", "Paneer Paratha",
    "Garlic Naan", "Onion Pizza"];



function isVeg(food) {
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(food) {
    
    if (food.toLowerCase().indexOf('onion') !== -1 || food.toLowerCase().indexOf('garlic')!==-1) {
        return false;
    }

    return true;
}


let vegMenu = menu.filter(isVeg);
console.log(menu);
console.log(vegMenu);

let onionGarlicFree = menu.filter(isVeg).filter(isOnionGarlicFree);
console.log(onionGarlicFree);



