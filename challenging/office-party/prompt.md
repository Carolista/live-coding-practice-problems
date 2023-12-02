## Office Party

#### Instructions to Interviewee
At your office, a party is considered fun if there are at least 3 different kinds of desserts, and at least 2 different salty snacks. However, if there is both cake and fun music, your office mates will be having such a good time they won't even pay attention to how many desserts and snacks there are. 

Write a function that accepts an array of objects. Each object will have three keys: `desserts` (an array of strings), `snacks` (an array of strings), and `hasMusic` (a boolean). For each party object in the array, the function should print a boolean `true` if the party is fun or `false` if it is not.

---
### Hints and Clarifications
- The arrays could possibly be empty.
- A helper function to check for substrings in an array of strings could be useful.

---
#### Test Data
Party 1
- `["cookies", "brownies", "cake"]`
- `["chips", "pretzels"]`
- `false`

Party 2
- `["carrot cake"]`
- `["pretzels"]`
- `true`

Party 3
- `["brownies"]`
- `["chips"]`
- `true`

Party 4
- `["brownies"]`
- `[]`
- `false`

---
#### Expected Result
```
true
true
false
false
```

---
#### Additional Prompts
A new employee has an unfortunate tendency to bring poor food choices. Update your logic so that if there is anything containing fish or if there is burnt popcorn, no one will even enter the room. (Definitely not fun!)

Party 5
- `["cookies", "fudge", "ice cream"]`
- `["tuna fish sandwiches", "popcorn"]`
- `false`

Party 6
- `["brownies", "devil's food cake", "M&Ms", "cookies"]`
- `["pretzels", "burnt popcorn"]`
- `true`

Expected result:
```
false
false
```
