const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validateEmail = (email) => emailRegex.test(email);

const emailFormatter = (email) => {
  if (!validateEmail(email)) {
    return null;
  }

  let [username, domain] = email.split("@");

  if (domain === "googlemail.com" || domain === "gmail.com") {
    domain = "gmail.com";
    return (username.replaceAll(/\./g, "") + "@" + domain).toLowerCase();
  }

  return email.toLowerCase();
};

module.exports = emailFormatter;
