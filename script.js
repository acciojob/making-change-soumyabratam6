const makeChange = (c) => {
  // your name here
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;
    let amount = parseFloat(c);
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    quarters = Math.floor(amount / quarterValue);
    amount %= quarterValue;

    dimes = Math.floor(amount / dimeValue);
    amount %= dimeValue;

    nickels = Math.floor(amount / nickelValue);
    amount %= nickelValue;

    pennies = Math.round(amount / pennyValue);

    return { q: quarters, d: dimes, n: nickels, p: pennies };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
