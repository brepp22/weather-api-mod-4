# Sprint 5 Module 4 Project

## Introduction

Welcome to Module 4 Project! In this project, you will practice using "vanilla" JavaScript to manipulate the DOM. Your goal is to build a Weather Widget.

This time, you will use weather information obtained from an API to turn a fake Weather Widget displaying hard-coded information into the real thing.

To complete this project, you will need the following technical skills:

1. **Selecting elements** and groups of elements from the DOM.
1. **Creating listeners** for certain events.
1. **Making requests** with Axios to an API.
1. **Handling promises** and accessing the resolved data.
1. **Looping over data** and using the data to build a page.
1. **Manipulating the text** content of elements.

In addition to these technical skills, the following soft skills will significantly impact your performance:

1. Attention to detail. Make sure there isn't a single character out of place!
1. Perseverance. Keep trying until you figure it out!
1. Patience. Make sure to read the entire README for important information.

## Instructions

You have been given a take-home coding assessment as part of the hiring process for a Web Developer position. Your task is to turn static HTML into a real application capable of displaying weather information obtained from an API, using only JavaScript.

You can find a [detailed mock](https://w-s5m4-project.herokuapp.com/) showing the desired result. Check out the Network Tab in Dev Tools as you investigate!

Make sure to read and follow the instructions below carefully. Good luck!

### 💾 Setup

**Here are the steps to set up this project:**

1. **Clone this repository** to your computer, allowing you to run the software locally for development and testing purposes.

1. Within your terminal, navigate to the project folder **and execute `npm install`**.

1. After successful installation, open two terminal windows at the project folder and **execute `npm start` in your first terminal and `npm test` in your second**.

1. You will load the app in Chrome by **navigating the browser to `http://localhost:3003`**.

1. If you haven't already, install the [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode.

1. You will also need [Postman](https://www.postman.com/downloads/) to experiment with the `[GET] /api/weather` endpoint before you start coding.

### 🥷 Tasks

**Here is important information for completing your tasks:**

- You will complete your tasks inside the `frontend/index.js` file. Do not modify any other files. Detailed instructions for each task can be found below.

- The JSON data needed to build the weather widget comes from just one endpoint: `[GET] http://localhost:3003/api/weather`.

- If you test this endpoint in Postman or in the browser, you should see the server returning JSON containing weather data for the city of San Francisco.

- The API currently supports four cities: **Detroit, Honolulu, New York, and San Francisco** (the default).

- We request weather information for a particular city by using a query string parameter. Here are two examples:

  ```txt
  http://localhost:3003/api/weather?city=Detroit
  http://localhost:3003/api/weather?city=New+York
  ```

- Query string parameters are the key-value pairs that appear at the end of a URL after a question mark "?" symbol. Ampersands "&" separate them if there is more than one, but in this case there is a single "city" parameter.

- Try **hitting the endpoint in Postman**. Ensure you can obtain the weather JSON from all four cities before coding.

- Experiment in Postman with deliberately misspelled URLs and city names. Doing so will show you how the request can return errors. Knowing this detail can help you down the line.

- As you make progress, the behavior of the website will start matching that of the [mock](https://w-s5m4-project.herokuapp.com/).

- As you complete your tasks, tests will start passing in the terminal. The tests are not exhaustive, but more like "smoke tests" that look for obvious breakage.

- Use your attention-to-detail skills to ensure that your site matches the look and behavior of the mock exactly.

- Have fun, and check out the Solution Video for this project if you need help!

#### 👉 TASK 1 - Hide the div#weatherWidget

<details>
  <summary>Click to read</summary>

  ---

  The div#weatherWidget element should only render once a city is requested. Use an inline style to set a display to "none" to hide before making a request.

  ❗ In a future task, you will make it so that the display reverts to "block" on successful weather data retrieval.

  ---

</details>

#### 👉 TASK 2 - Add an event listener to the dropdown

<details>
  <summary>Click to read</summary>

  ---

1. Research **what type** of event fires when a user selects an option using the dropdown.

1. Add an **event listener** to the dropdown that listens for this event involved in selecting a city, and log something to the console.

1. Research how to use JavaScript within the listener to find out **which city was selected**, and log its name to the console.

❗ It's possible more than one type of event could be used—research pros and cons of each.

  ---

</details>

#### 👉 TASK 3 - Prepare to fetch the weather data

<details>
  <summary>Click to read</summary>

  ---

Because fetching operations can take anywhere from milliseconds to several seconds, it's customary to perform some DOM surgery just before launching the API request that shows the app is waiting for the response.

Always working inside your event listener:

1. Disable the dropdown after researching how. We want users making a new selection **after** the weather data for the selected location arrives!

1. Modify the inline style on the **div#weatherWidget** by setting display to 'none'. Whenever a user selects a new city, the widget should hide until the request succeeds.

1. Inject text content into p.info that reads `Fetching weather data...`. This text acts as loading indicator. Research shows users don't mind waiting for a bit, *as long as they're properly informed and entertained* by spinners, "wait" messages, and animations.

❗ These little things don't sound very interesting but are, in fact, very important for a good user experience. Most users on the planet leverage slow networks and slow hardware.

  ---

</details>

#### 👉 TASK 4 - Launch a request to the weather API

<details>
  <summary>Click to read</summary>

  ---

1. **Form a proper URL** using your JavaScript skills, and then use Axios to initiate a GET request to the URL. Make sure to request the weather for the correct city! You can find out which city got selected by inspecting `event.target.value` inside your event listener.

1. Use Axios to make a GET request to the API.

1. Handle promise rejection by logging the `error.message` to the console or by setting a [break point](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) in the code.

❗ You can test your error logging code by deliberately mistyping the URL to [get a 404 "Not Found" error](./images/error-console.png).

❗ You can also see failures in Dev Tool's [Network tab](./images/error-networktab.png). In this example, the server returns JSON data containing an error message.

❗ We will handle successful requests in the next task.

  ---

</details>

#### 👉 TASK 5 - Handle data fetching success

<details>
  <summary>Click to read</summary>

  ---

Now that the data is available, some house-keeping operations are needed before we start working with the weather data:

1. Empty out the text content of **p.info**.

1. Re-enable the **dropdown**.

1. Modify the inline style on the **div#weatherWidget** to make the element visible again.

Finally, the main course! Use the API data to inject the correct information into the DOM, replacing the "placeholder" information in the HTML.

Raw JSON **rarely can be used in the DOM unchanged**. More often than not, you'll need to transform the data before updating the DOM.

For example, the `weather_description` needs to be **translated into the proper emoji**, by using a mapping object found inside `index.js`:

```js
let descriptions = [
  ["Sunny", "☀️"],
  ["Cloudy", "☁️"],
  ["Rainy", "🌧️"],
  ["Thunderstorm", "⛈️"],
  ["Snowy", "❄️"],
  ["Partly Cloudy", "⛅️"],
]
```

Use your JavaScript powers to extract the emoji for a given `weather_description`.

Another complication is that the dates are in the `yyyy-mm-dd` format. JavaScript can be used to figure out which day of the week a given date corresponds to. But since time-related code can be particularly tricky, it's OK to ask ChatGPT for a bit of help here, as long as you study the code it produces to the point where you can re-write it yourself.

❗ Match the mock exactly! If, for example, an element should contain the text "Thursday", then the text "thurday" is incorrect. Be very detail-oriented.

  ---

</details>

## FAQ

<details>
  <summary>I feel very stuck. What can I do?</summary>

Check out the Solution Video for this project in your learning platform. In it, an industry expert will walk you through their thinking in detail while they solve the tasks. The Solution Videos are highly recommended even if you are not stuck: you will learn lots of tricks.

</details>

<details>
  <summary>Why use Postman at all?</summary>

Understanding the behavior of real-world APIs is crucial when working with Axios code. Before diving into the code, it's beneficial to familiarize yourself with the endpoints and what they return. Postman enables you to efficiently conduct manual tests and offers  comfortable interface to quickly observe the success or failure of requests, making it an invaluable tool in API development.

</details>

<details>
  <summary>What are query string parameters?</summary>

They are a mechanism for the client to send **non-sensitive data** (never credit card numbers, passwords, etc) to a server, which can read it and do something with it. For example, this is how the search term travels to Google when we make a search. For more information, give ChatGPT the following prompt: "How would you explain query string parameters to an audience of new web developers?"

</details>

<details>
  <summary>I am getting a linting error regarding Axios. What can I do?</summary>

Axios is loaded on the window object by another script in the HTML, and Eslint doesn't know this and considers it a variable that we are trying to use without having declared it first. If you need to disable Eslint for a particular line, add this comment **at the end of the line**:

```js
// eslint-disable-line
```

</details>

<details>
  <summary>I am getting errors when I run npm install or npm start. What is going on?</summary>

This project requires Node to be correctly installed on your computer to work. Your learning materials should have covered the installation of Node. Sometimes Node can be installed but misconfigured. You can try executing `npm run fixit` (check `package.json` to see what this does), but if Node errors are recurrent, it indicates something is wrong with your machine or configuration, so you should request assistance from learner assistants.

</details>

<details>
  <summary>Do I need to install libraries or add scripts to the HTML?</summary>

No. Everything you need should be installed already, including Axios.

</details>

<details>
  <summary>Why am I not allowed to edit the CSS file?</summary>

The CSS is the domain of a different team, and in this particular project we're not supposed to touch it. Do not use inline styles to get around this limitation.

</details>

<details>
  <summary>Why am I not allowed to edit the HTML file?</summary>

This particular part of the product is a Single Page Application, so the HTML is mostly empty and the page is generated automatically using JavaScript and raw data. We would not want to manually edit HTML files in a website that changed all the time! It would be untenable.

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

Save your changes and reload the site in Chrome. If your code has a syntax problem, the app will print error messages in the console. Focus on the first message. Place console logs right before the crash site (errors usually inform of the line number where the problem originates) and see if your variables contain the data you think they do.

Suppose there are no errors, but the page is not doing what it should. In that case, the debugging technique is similar: put console logs to ensure that the code you are working on is executing and check that all variables in the area hold the correct data.

</details>

<details>
  <summary>How do I run tests against my code?</summary>

Execute `npm test` in your terminal. If a particular test is giving you grief, don't jump straight to the code to try and fix it. Go to Chrome first, and make sure you can replicate the problem there. A problem we can reliably replicate is a problem mostly fixed.

</details>

<details>
  <summary>I believe my code is correct and the test is wrong. What do I do?</summary>

On occasion the test runner will get stuck. Use CTRL-C to kill the tests, and then `npm test` to launch them again. Try to reproduce the problem the test is complaining about by interacting with the site in Chrome, and do not code "to make the test happy". Code so that **your app does exactly what the mock does**. The tests are there for confirmation. Although it's possible that a particular test be flawed, statistically it's more likely that the bug is in your own code. Check all your texts to make sure they match the mock exactly! If the problem persists, please request assistance from learner assistants and instructors.

</details>

<details>
  <summary>The output of the test script is just too overwhelming! What can I do?</summary>

If you need to disable all tests except the one you are focusing on, edit the `mvp.test.js` file and, as an example, change `test('👉 focus on this', () => { etc })` to be `test.only('👉 focus on this', () => { etc })`. (Note the "only".)

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

**Do NOT delete your repository from GitHub!** Instead, commit frequently as you work. Make a commit whenever you achieve anything and the app isn't crashing in Chrome. This in practice creates restore points you can use should you wreak havoc with your app. If you find yourself in a mess, use git reset --hard to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well, but it is advised that you request assistance from a learner assistant.

</details>

<details>
  <summary>Why are there so many files in this project?</summary>

Although a small, "old-fashioned" website might be made of just HTML, CSS and JS files, these days we mostly manage projects with Node and its package manager, NPM. Node apps typically have a `package.json` file and several other configuration files placed at the root of the project. This project also includes automated tests and a web server, which adds a little bit of extra complexity and files.

</details>

<details>
  <summary>Is this how web projects are normally organized?</summary>

Web projects can be organized in many ways and there aren't many standards. Some developers like the freedom, while others prefer to use opinionated frameworks, which can do a lot of magic but require folders and files be structured and named just so.

</details>

<details>
  <summary>Why is my code inside index.js wrapped in a function?</summary>

This way we can easily import your code as a single function in the `mvp.test.js` test suite. The export syntax is at the bottom of `index.js`.

</details>

<details>
  <summary>What are the package.json and package-lock.json files?</summary>

The `package.json` file contains meta-information about the project like its version number, scripts that the developer can execute, and a list of the dependencies that are downloaded when you execute `npm install`. There can be some wiggle room to allow newer versions of the dependencies to be installed, so the `package-lock.json` file, when present, makes sure the exact same versions of everything are used every time the project is installed from scratch.

</details>

<details>
  <summary>What is the "start" script in the package.json doing? It looks confusing.</summary>

Give ChatGPT the following input for a detailed breakdown:

```txt
Hello, I'm looking at a JavaScript project on GitHub, and inside the package.json file I am seeing the following "script":

"start": "fkill :3003 -s && node ./backend/server.js"

Can you explain in detail, but with simple terms, to an audience of inexperienced web developers, what the "start" script is doing?
```

</details>

<details>
  <summary>What is the .eslintrc.js file?</summary>

This file works in combination with the Eslint extension for VSCode to highlight syntax errors and problems in your code. By editing this file you can customize your linting rules.

</details>

<details>
  <summary>What is Jest?</summary>

Jest is a framework that allows you to write tests and execute them, to alert you very quickly of problems with the code. Jest can do in seconds what an entire Quality Assurance team would take hours or even days. In the context of the Sprint Challenge, Jest is used to check your code against specification and give you a grade (% of tests passing).

</details>
