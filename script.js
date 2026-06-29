let num=153;
let temp=num;
let sum=0;
while(temp>0){
    let digit=temp%10;
    sum=sum+digit;
    temp=(temp-digit)/10;
}
console.log("sum of digits:",sum);


// To check prime number
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Is it a prime number? Yes");
} else {
    console.log("Is it a prime number? No");
}


//To find Factors
let factors = "";
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        factors = factors + i + ", ";
    }
}

console.log("Factors:", factors);

//To check Armstrong
temp = num;
count = 0;
sum = 0;

while (temp > 0) {
    count++;
    let digit = temp % 10;
    temp = (temp - digit) / 10;
}

temp = num;

while (temp > 0) {
    let digit = temp % 10;

    let power = 1;
    for (let i = 1; i <= count; i++) {
        power = power * digit;
    }

    sum = sum + power;

    temp = (temp - digit) / 10;
}
if (sum == num) {
    console.log("Is it an armstrong? Yes");
} else {
    console.log("Is it an armstrong? No");
}