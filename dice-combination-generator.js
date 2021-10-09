/*********************************
** Generates all combinations of dice given the number of sides and number of dice.
** Edit the const values of dice_sides and num_dice to your desired values.
**
** Formula to check calculations
** N = Number of Dice; S = Number of Sides;
** (N + S - 1)! / (N!(S - 1)!)
**
** In this example, the number is 252 combinations.
**********************************/

const dice_sides = 6;
const num_dice = 5;

// Uses recursion to move to the last die and begin incrementing each die to get each combination.
function increment_dice(pointer, current_val){
    if(pointer >= dice.length){
        return;
    }

    while(current_val <= dice_sides){
        dice[pointer] = current_val;
        increment_dice(pointer + 1, current_val);

        // If the current dice array == last inserted dice array, then ignore it
        // This generates a duplicate dice config every time it hits 6. So we ignore it.
        // There might be a better way to fix this but I can't be bothered to figure it out at the moment.
        if(JSON.stringify(dice) != JSON.stringify(dice_configs[dice_configs.length - 1])){
            dice_configs.push(JSON.parse(JSON.stringify(dice)));
        }

        current_val++;
    }
}

//set up dice and dice_configs array with all dice set to 1's.
var dice = new Array(num_dice);
dice.fill(1);
var dice_configs = [[...dice]];


increment_dice(0, 1);

console.log("Total Dice Configurations: ", dice_configs.length);
console.log(dice_configs);