const emailRegex = (value) => {
  const emailPattern = /^[a-zA-Z0-9.-]+@[a-z-]+\.[a-z]{2,5}$/;
  return emailPattern.test(value);
};

const nationalCodeRegex = (value) => {
  const nationalCodePattern = /^[0-9]{10}$/;
  return nationalCodePattern.test(value);
};

const phoneNumberRegex = (value) => {
  const phoneNumberPattern =
    /^(09)(1[0-9]|3[1-9]|2[1-9]|9[1-9])-[0-9]{3}-[0-9]{4}$/;
  return phoneNumberPattern.test(value);
};

export default {
  emailRegex,
  nationalCodeRegex,
  phoneNumberRegex,
};
