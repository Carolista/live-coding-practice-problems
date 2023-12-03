## Exact Change

#### Instructions to Interviewee
You're out shopping and your debit card is nowhere to be found! You dig around and find a few bills and coins. Is it enough? You'll have to do the math.

Write a function with two parameters — `amountNeeded` (number) and `currency` (object). The `currency` object that is passed in should have keys for different denominations of dollars (10 and below) and coins (quarters, dimes, nickels, and pennies). 

Your function should print `"Not enough money..."` if you cannot afford the purchase, or `"Cash it is!"` if you can. 

---
#### Test Data
- $6.47 (1 $5 bill, 3 $1 bills, 1 quarter, 3 dimes, 2 nickels, and 4 pennies)
- $14.81 (1 $10 bill, 4 $1 bills, 1 quarter, 1 dime, and 2 pennies)

---
#### Expected Result
```
Cash it is!
Not enough money...
```
