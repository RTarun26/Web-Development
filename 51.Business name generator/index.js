let rand = Math.random();
let first,second,third;

// lets generate the first word
    if (rand < 0.33) {
        first = "Crazy";
    }
    else if (rand < 0.66 && rand>=0.33) {
        first = "Amazing";
    }
    else {
        first = "Fire";
    }
    // lets generate the second word
    rand = Math.random();
    if (rand < 0.33) {
        Second = "Engine";
    }
    else if (rand < 0.66 && rand>=0.33) {
        Second = "Foods";
    }
    else {
        Second = "Garments";
    }
    // lets generate the third word
    if (rand < 0.33) {
        third = "Bros";
    }
    else if (rand < 0.66 && rand>=0.33) {
        third = "Limited";
    }
    else {
        third = "hub";
    }
    console.log(`${first} ${second} ${third}`)