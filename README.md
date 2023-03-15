# DC Games
(Developer: Jamie Letts)

![Mockup image](docs/.png)

[Live webpage]( https://jamie2210.github.io/)

This is the website for DC Games, it is designed to be responsive and accessible on all devices. It consists of 2 games, a hangman game, and a multiple-choice quiz. Both games are themed around the comic Batman.

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requrements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device testing](#performing-tests-on-various-devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#testing-user-stories)
8. [Bugs](#bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals

Primary goal is to provide a user-friendly, fun, and good-looking interactive website which offers the game Hangman and a multiple-choice quiz.

### User Goals
- Play both games that are fun and engaging.
- Easily find the rules of each game.
- Easily get in touch via a contact form.

### Site Owner Goals
- Create a website with entertaining games.
- Create visually appealing designs throughout.
- Easy navigation throughout.
- Provide a fully responsive and accessible design. 

### Developer Goals
- A clean design that stands out and catches the users attention.
- A website that responds correctly on all devices where design and effectiveness is not hindered on any device.
- An easy to navigate website with clear pathways to specific pages such as rules, each game, home, and contact.

## User Experience

### Target Audience
- Ages 8 to 12.
- It is specific to those who have an in interest in DC comics, particularly Batman.

### User Requirements and Expectations

- A simple and intuitive navigation system.
- Quickly and easily find relevant information.
- Links and functions that work as expected.
- Good presentation and a visually appealing design regardless of device used.
- Easy to follow the games and rules.
- Simple content that the user can follow and understand.
- An easy way to contact the developer for feedback.
- Accessibility.

### User Stories

#### Site User 
1. I want to easily understand the rules of each game.
2. I want to easily navigate to my chosen game.
3. I want to know how I did at the end of the game.
4. I want a means to contact the developer.
5. I want a means to contact the developer and have confirmation the message has been sent.


##### Hangman
6. I want to play the game both by clicking the mouse and using the keyboard.
7. I want to know which letters I’ve used already.
8. I want to know how many guesses I have left.
9. I want the gallows image to add on sections of the hangman each time a letter is guessed incorrectly.
10. I see to my score of wins vs losses.
11. I want the word to be revealed if I don’t guess it.

##### Quiz
12. I want to see the timer.
13. I want to know which answer is correct if answered incorrectly.
14. I want to know the answer if I run out of time.
15. I want to see my score at the end.
16. I want to easily pay again or quit once I have finished.

#### Site Owner 
17. I want the user to get a genuine feel this is a DC Batman themed site. 
18. I want the user to easily understand and pay the games.
19. I want both games to be fully responsive.
20. While some users may want the word revealed if it is not guessed in Hangman, the words are limited so to increase the difficulty and longevity of the game, the word will not be revealed.
21. I want to be able to contact me for any reason they feel fit.
22. I want the user to come to a 404 page and be automatically re-directed to the home page should they enter an invalid url. 

## Design

### Design Choices
The design has been influenced by the comics like keeping the buttons square and grey to present comments in comic books. Each game has been designed around the colours and personality of the characters in the comics. 

### Colour

DC uses a specific blue which is used sparingly throughout the website.

Batman colours are predominantly black and yellow.

Both The Riddler and Joker are themed by purples and greens.

<details><summary>Colours Used</summary>
<img src="docs/colour-pallet.png">
</details>

### Fonts

Google fonts were used to import the ‘Anton’ font used with a sans-serif fallback throughout the website:

- [Anton]( https://fonts.google.com/specimen/Anton?query=anton)

I chose this font as it stood out to me as a strong and bold font that represented Batman well. It is also easy to read which is good for the target audience.

### Structure
The page is structured in a user friendly and visually appealing way. Upon arriving the user will see a simple display with clear instructions to what the site offers and where to find the rules of each game.

The website consists of four separate pages with rules and result modals: 
- A homepage with a with clear navigation to the games and rules.
- The Batman Hangman game page
- The Riddler’s Quiz game page.
- A contact page with a form that will directly send messages to the developer.
- Modals with the rules of each game.
- There is also a 404 page that directs the user back to the home.

### Wireframes

<details><summary>Home</summary>
<img src="docs/wireframes/home.png">
</details>
<details><summary>Batman Hangman</summary>
<img src="docs/wireframes/hangman.png">
</details>
<details><summary>The Riddler’s quiz</summary>
<img src="docs/wireframes/quiz.png">
</details>
<details><summary>The Rules</summary>
<img src="docs/wireframes/rules.png">
</details>
<details><summary>Contact</summary>
<img src="docs/wireframes/contact.png">
</details>
<details><summary>404</summary>
<img src="docs/wireframes/404.png">
</details>


## Technologies Used

### Languages
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks and Tools
- [Bootstrap v5.3](https://getbootstrap.com/)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)
- [GitPod](https://www.gitpod.io/)
- [Tiny PNG](https://tinypng.com/)
- [Balsamiq](https://balsamiq.com/wireframes/)
- [Google Fonts](https://fonts.google.com/about)
- [Adobe Suite (Illustrator, Photoshop & InDesign)](https://www.adobe.com/uk/)
- [Font Awesome](https://fontawesome.com/search)
- [Favicon](https://favicon.io/)
- [Giphy](https://giphy.com/)
- [W3C validator](https://validator.w3.org/)
- [Jigsaw CSS validator](https://jigsaw.w3.org/css-validator/)
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)

## Features
The page consists of four pages and eleven features.

### Home Page

#### DC Logo and introduction

- Introduces the user to what the website offers and how to navigate through it.
- User stories covered:

<details><summary>Intro</summary>
<img src="docs/features/intro.png">
</details>

#### Navigation Buttons & Character Images (Navigation buttons featured on all pages)
- Navigation buttons are featured on all pages.
- Link to each game and the home page.
- It allows users to easily navigate through the website.
- The buttons are animated depending on which page they are on, matching the theme.
- User stories covered:

<details><summary>Buttons & Characters</summary>
<img src="docs/features/buttons.png">
</details>

#### Rules Modal
-   Clicking the question mark under the selected character will bring up the rules for that game.
<details><summary>Modal</summary>
<img src="docs/features/modal.png">
</details>

#### Footer (displayed on all pages)
- Featured on all pages.
- Details who the developer is, a link to Github and contact page.
- User stories covered: 

<details><summary>Footer</summary>
<img src="docs/features/footer.png">
</details>

### Batman Hangman

#### Game Function & Game Screen
- Consists of empty gallows, empty score, and wrong guesses.
- Letter tabs for entry guesses, allows user to use either mouse or keyboard for entries.
- If the letter is guessed correclty the letter is revealed in replace of the '_'
- If the phrase is guessed correctly a modal is presented confirming the win with the total number of wins and losses.
- If the letter is guessed incorreclty the hangman image increases as does the number of wrong guesses.
- If the phrase is guessed incorreclty a modal is presented confirming the loss with the total number of wins and losses.
- Reset button resets the game but keeps trakc the total wins and losses until page is refreshed.

#### Win Modal
- Displays current score, wins v losses.
- Close Button that resets the game.

#### Lose Modal
- Displays current score, wins v losses.
- Close Button that resets the game.

<details><summary>Game Screen</summary>
<img src="docs/features/hangman-screen.png">
</details>
<details><summary>Win Modal</summary>
<img src="docs/features/win-modal.png">
</details>
<details><summary>Lose Modal</summary>
<img src="docs/features/lose-modal.png">
</details>


### The Riddler’s Quiz

#### Game Function & Game Screen
- Start Button.
- Navigation buttons.
- Game modal is presented once start button is pressed.
- Game consists of a timer and multiple choice questions the user can click to select.
- At the end fo the game the score is tallied and revealed in a modal.

#### Results Modal
- Displays score.
- Replay button that resets the game.
- Quit button that refreshes the page.

<details><summary>Game Screen</summary>
<img src="docs/features/quiz-screen.png">
</details>
<details><summary>Game Modal</summary>
<img src="docs/features/game-modal.png">
</details>
<details><summary>Results Modal</summary>
<img src="docs/features/results-modal.png">
</details>

### Contact Form Page

- Allows user to directly contact the developer
- Alert box pops up when message has been sent successfully.
- User stories covered:

<details><summary>Contact Form</summary>
<img src="docs/features/contact-form.png">
</details>

### 404
- Explains to the user they have landed on an unrecognised page.
- It automatically returns the user back to the home page after 10 seconds, detailed by a count down.
- There is also a home button should user wish to use it.
- User Stories covered: 

<details><summary>404 Page</summary>
<img src="docs/features/contact-form.png">
</details>

## Testing

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors.

index.html [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjamie2210.github.io%2FCI_MS2_DCG%2Findex.html)

hangman.html [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjamie2210.github.io%2FCI_MS2_DCG%2Fhangman.html) 

quiz.html [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjamie2210.github.io%2FCI_MS2_DCG%2Fquiz.html) 

contact.html [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjamie2210.github.io%2FCI_MS2_DCG%2Fcontact.html) 

404.html [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjamie2210.github.io%2FCI_MS2_DCG%2F404.html)

### CSS Validation
The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website.
When pasting in my index url 16 Parse Errors are flagged, all linked to Bootstrap as well as 286 warnings.

style.css [results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjamie2210.github.io%2FCI_MS2_DCG%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
<br>

When validating just my own custom CSS file it passes with no errors and flagged three warnings using pointer-events twice used and 1 warning for the google fonts import used.
<details><summary>style.css</summary>
<img src="docs/validation/validation-css.png">
</details>

### JavaScript Validation

JSHint JS Validation Service was used to validate the Javascript files. No significant issues were found.

<details><summary>index.js</summary>
<img src="docs/validation//jshint/">
</details>
<details><summary>hangman.js</summary>
<img src="docs/validation/jshint/">
</details>
<details><summary>questions.js</summary>
<img src="docs/validation/jshint/">
</details>
<details><summary>quiz.js</summary>
<img src="docs/validation/jshint/">
</details>
<details><summary>contact.js</summary>
<img src="docs/validation/jshint/">
</details>
<details><summary>404.js</summary>
<img src="docs/validation/jshint/">
</details>

### Accessibility
The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards. All pages pass with 0 errors apart from quiz.html that has 3. They are all contrasting errors to which I disagree with, the white on purple to me is perfectly visible and matches the colour scheme so have chosen to leave it as is.

index.html [results](https://wave.webaim.org/report#/https://jamie2210.github.io/CI_MS2_DCG/index.html) 

hangman.html [results](https://wave.webaim.org/report#/https://jamie2210.github.io/CI_MS2_DCG/hangman.html)

quiz.html [results](https://wave.webaim.org/report#/https://jamie2210.github.io/CI_MS2_DCG/quiz.html)

contact.html [results](https://wave.webaim.org/report#/https://jamie2210.github.io/CI_MS2_DCG/contact.html)

404.html [results](https://wave.webaim.org/report#/https://jamie2210.github.io/CI_MS2_DCG/404.html)

### Performance 
Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website. All results scoring 90 or above.

<details><summary>index.html</summary>
<img src="docs/lighthouse/lighthouse-index.png">
</details>
<details><summary>hangman.html</summary>
<img src="docs/lighthouse/lighthouse-hangman.png">
</details>
<details><summary>quiz.html</summary>
<img src="docs/lighthouse/lighthouse-quiz.png">
</details>
<details><summary>contact.html</summary>
<img src="docs/lighthouse/lighthouse-contact.png">
</details>
<details><summary>404.html</summary>
<img src="docs/lighthouse/lighthouse-404.png">
</details>