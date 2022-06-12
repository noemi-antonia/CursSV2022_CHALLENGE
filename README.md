### Challenge - Homework 7
##### New Features:

- [x] Players can enter their names or play as guests.
  - The list of available rooms also includes the name of the person who created it (or *Guest* if they didn't enter a name)
  ![feature1-1](screenshots/F1-01.png)
  - After starting the game, the entered names(or *Guest*) are displayed instead of the words *You* and *Opponent*, respectively in the chat, the name of the person who sent the message appears
- [x] Each player has 60 seconds to act, otherwise he/she will lose the game. 
  ![feature2-1](screenshots/F2-01.png)
  ![feature2-2](screenshots/F2-02.png)

##### To run the Project:

`cd server`
`npm install`
`npm run devStart`

`cd client`
`npm install`
`npm start`