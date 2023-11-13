# polling_system
Polling System is a web application which is useful for posting questions with multiple choices to conduct a survey regarding a particular topic

Task: Need to create an API where anyone can create questions with options and also add votes to it

---

## Features
- Create a question
- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it

## Required Routes
- /questions/create (To create a question)
- /questions/:id/options/create (To add options to a specific question)
- /questions/:id/delete (To delete a question)
- /options/:id/delete (To delete an option)
- /options/:id/add_vote (To increment the count of votes)
- /questions/:id (To view a question and it’s options)

## Folder Structure
```
CSV_Upload/
|── |config/
│   ├── mongoose.js
|   |
├── routes/
│   ├── index.js
│   ├── options.js
|   ├── questions.js
|   |
├── controllers/
│   ├── options_controller.js
│   ├── questions_controller.js
|   |
├── models/
│   ├── option.js
│   ├── question.js
|   |
├── index.js
├── package-lock.json
├── package.json
├── README.md