// Q6: Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log("After Increment:", count);

    function inner() {
        console.log("Inner Increment Check:", count);
    }
    inner();
}

function decrement() {
    count--;
    console.log("After Decrement:", count);

    function inner() {
        console.log("Inner Decrement Check:", count);
    }
    inner();
}

// Simulating button clicks
increment();
increment();
decrement();
