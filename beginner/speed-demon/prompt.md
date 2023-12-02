## Speed Demon

#### Instructions to Interviewee
You are driving down the road and see a police car lying in wait. Upon glancing down quickly at your speedometer, you are alarmed to find that you are speeding! Whether or not he pulls you over and gives you a ticket will depend on how many miles per hour you were exceeding the limit.
 
On a highway, he will probably let you get away with going as fast as 12 mph over the limit before giving you a ticket. But on a regular road, you won't be able to get away with more than 7 mph over the limit.

Write a function that accepts three values: `limit` (string), `speed` (string), and `isHighway` (boolean). Print `"Pull over, citizen!"` if you are getting a ticket; otherwise print `"Phew! Close call."`

---
#### Hints and Clarifications
- The speed should always be greater than the limit. 
- Begging and pleading with the officer won't help. (Sorry.)

---
#### Test Data
- `70`, `87`, `true`
- `35`, `42`, `false`
- `65`, `77`, `true`
- `40`, `49`, `false`

---
#### Expected Result
```
Pull over, citizen!
Phew! Close call.
Phew! Close call.
Pull over, citizen!
```
