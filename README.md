# Live Coding Practice Problems
#### by Carrie Jones

[Navigating the Files](#navigating-the-practice-problem-files) |
[Updating Your Forked Repo](#updating-your-forked-repository-with-my-changes) | 
[Practicing Live Coding](#practicing-the-live-coding-process) |
[Most Important](#most-important)

This collection of practice problems is intended for students/graduates preparing for their first rounds of technical interviews. It is recommended to put in a few hours of practice every week for several weeks ahead of any mock interviews or real interviews. You can also pair with peers to "interview" one another and get more comfortable with having a conversation throughout the process.

## Navigating the Practice Problem Files
In each subdirectory you will generally find three files:
 - `practice.js` - code this in the `main` branch
 - `prompt.md` - read if practicing solo, or have a peer prompt you if practicing with others
 - `solution.js` - view this in the `solution` branch _after_ you've solved it your own way

## Updating Your Forked Repository with My Changes
From time to time I will add or change content in this repository. If you forked and cloned this repo, you will need to pull in my changes. 

### Step 1 - Set an upstream link to my repository
If you run `git remote -v` and you see only your `origin` remote repo, run the following command:
```
git remote add upstream https://github.com/Carolista/live-coding-practice-problems
```
You can confirm with `git remote -v` and you should see the `upstream` repo listed.

### Step 2 - Fetch from upstream
Run `git fetch upstream` to ensure your local repository has updated knowledge of what changes I have made to my original repo.

### Step 3 - Pull & merge the `main` branch
First, if you are not in the `main` branch, use `git checkout main` to switch. Then run the following command:
```
git merge upstream/main
```
You should now have my changes incorporated into yours. Push your newly merged version of `main` to your own remote repository:
```
git push
``` 

### Step 4 - Pull & merge the `solution` branch
Use `git checkout solution` to switch branches again. Then run the following command:
```
git merge upstream/solution
```
Push your newly merged version of `solution` to your own remote repository:
```
git push
```

## Practicing the Live Coding Process

### Understand the requirements
1. Have someone read you the prompt (or read it yourself if practicing solo).
2. Take notes using comments in `practice.js` and confirm you understand the requirements and expected result.
3. Ask clarifying questions, if possible.
4. Take note of any test data that is provided.
5. Take note of any expected results that are provided.

### Break it down
1. Talk through how you want to approach solving the problem.
2. Think about variables and mechanisms like conditionals, loops, etc. needed.
3. Consider if a helper function would be useful.
4. TALK ALOUD even if you're by yourself — this practice is essential!

### Pseudocode a possible solution
1. Using a comment block (`/* */`), write out pseudocode.
2. Don't use actual code syntax.
3. DO structure your pseudocode a bit, using indenting where helpful to indicate control flow.

### Start writing actual code
1. Keep talking aloud as you code.
2. Try to use proper technical vocabulary _(Example: Pronounce `words[i]` as "words at index i", etc.)_
3. Seriously, keep talking OUT LOUD. This is a skill that has to be built over time, with practice.
4. If you are practicing with a peer, talk to them like they are your interviewer. Ask them questions if you are second-guessing something or are still unsure of the end goal. They might give you hints.

### Verify your solution
1. Don't be too quick to run the file. You may not always be able to do that in an interview.
2. Instead, practice talking through the solution. What would happen to the test data as your code would be executed? Talk it out line by line. If there are loops, talk it through one loop at a time.
3. See it through to the end and make sure the result is as expected.
4. Run the file to verify the result _after_ talking it through.

### Fix mistakes and re-verify
1. If your code doesn't produce the expected result, show off your debugging skills.
2. Keep refactoring as needed.

### Get feedback
If working with a peer, discuss how things went and get feedback on what you can do to improve even more for the next time.


## Most Important
Be patient with yourself! It is difficult to get comfortable with this process and takes a lot of practice. Put the time in, follow the process, and it will pay off. The more you practice, the more you'll see yourself improve over time.
