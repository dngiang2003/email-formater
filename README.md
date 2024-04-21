# Email Formatter

The Email Formatter library helps format email addresses according to specific rules.

## Installation

You can install this library via npm by running the following command:

```bash
npm install email-formatter
```

Or if you are using yarn, run:
```bash
yarn add email-formatter

```
## Usage

First, import the library into your project:
```javascript
const emailFormatter = require('email-formatter');
```

Then, you can use the emailFormatter function to format email addresses:

```javascript
const formattedEmail = emailFormatter('Your.email@gmail.com');
console.log(formattedEmail); // Output: 'youremail@gmail.com'
```

## Features
This library provides a `emailFormatter` function that takes an email address as input and returns the formatted email address. If the email address is not valid, the function will return `null`.

The formatting rules for email are as follows:

- If the email domain is `googlemail.com` or `gmail.com`, all dots in the username part will be removed, and the domain will be changed to `gmail.com`.

- All characters in the email will be converted to lowercase.

## Note

This library simply checks email formatting using a regular expression. It does not perform any other form of email validation.
