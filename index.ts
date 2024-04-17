const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validateEmail = (email: string): boolean => emailRegex.test(email);

const emailFormatter = (email: string): string | null => {
  if (!validateEmail(email)) {
    return null;
  }

  let [username, domain] = email.split("@");

  if (domain === "googlemail.com") {
    domain = "gmail.com";
  }

  return (username.replace(/\./g, "") + "@" + domain).toLowerCase();
};

export default emailFormatter;
