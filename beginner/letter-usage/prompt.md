## Letter Usage

#### Instructions to Interviewee
Write a function that accepts a string as input. It should return an object with key/value pairs where each key is a unique character found in the string and the value is the number of times that character appears in the string.

---
#### Hints and Clarifications
- If a character does not appear in the string, it does not need to be included as a key in the object.
- Spaces are valid characters

---
#### Test Data
`"St. Louis, Kansas City, and Philadelphia"`

---
#### Expected Result
```
{
  S: 1,
  t: 2,
  ".": 1,
  " ": 5,
  L: 1,
  o: 1,
  u: 1,
  i: 4,
  s: 3,
  ",": 2,
  K: 1,
  a: 5,
  n: 2,
  C: 1,
  y: 1,
  d: 2,
  P: 1,
  h: 2,
  l: 2,
  e: 1,
  p: 1
}
```

#### Additional Prompts
Make your algorithm case-insensitive.
```
{
  s: 4,
  t: 2,
  ".": 1,
  " ": 5,
  l: 3,
  o: 1,
  u: 1,
  i: 4,
  ",": 2,
  k: 1,
  a: 5,
  n: 2,
  c: 1,
  y: 1,
  d: 2,
  p: 2,
  h: 2,
  e: 1
}
```