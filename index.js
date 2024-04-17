const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = (email) => emailRegex.test(email);

const emailFormater = (email) => {
  if (!validateEmail(email)) {
    return null;
  }

  let [username, domain] = email.split("@");

  if (domain === "googlemail.com") {
    domain = "gmail.com";
  }

  return (username.replaceAll(".", "") + "@" + domain).toLowerCase();
};

module.exports = emailFormater;
