## Exact Change

#### Instructions to Interviewee
You're out shopping and your debit card is nowhere to be found! You check your wallet and find a few bills. Is it enough? You'll have to do the math.

PART 1 (Easy)
Write a function with two parameters — `cost` (number) and `currency` (object). The `currency` object that is passed in should have keys for different denominations of dollars (1, 5, 10, and 20). 

Initially, your function should print `"Not enough money..."` if you cannot afford the purchase, or `"Cash it is!"` if you can. 

PART 2 (Challenging)
Write one or more helper functions that will determine if you have exact change for the amount needed. Refactor your first function to print `"Hey, look, I have exact change!"` if you have the right combination of bills and coins to not need change back when you pay.

---
#### Test Data
- $24 (1 $20 bill, 1 $5 bill, and 3 $1 bills)
- $16 (1 $10 bill and 4 $1 bills)
- $112 (4 $20 bills, 3 $10 bills, 2 $5 bills, and 7 $1 bills)

---
#### Expected Result
```
Cash it is!
Not enough money...
Hey, look, I have exact change!
```
