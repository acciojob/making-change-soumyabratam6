const makeChange = (c) => {
  // your name here
   let quarterValue = 0.25;
    let dimeValue = 0.10;
    let nickelValue = 0.05;
    let pennyValue = 0.01;

    // Convert the input to a number
    let amount = parseFloat(c);

    // Initialize variables to store the number of each coin
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    // Calculate the number of each coin needed
    quarters = Math.floor(amount / quarterValue);
    amount %= quarterValue;

    dimes = Math.floor(amount / dimeValue);
    amount %= dimeValue;

    nickels = Math.floor(amount / nickelValue);
    amount %= nickelValue;

    pennies = Math.round(amount / pennyValue);

    // Return the result as an object
    return { q: quarters, d: dimes, n: nickels, p: pennies };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
