const { validate } = require("../models/profile");

async function adduser(user) {
  const { error } = validate(user);

  if (error) {
    return { error: error.details[0].message };
  }

  return { status: "sucess" };
}

module.exports.adduser = adduser;
