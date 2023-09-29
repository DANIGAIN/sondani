const bcrypt = require("bcrypt");

async function hashPassword(password) {
  return bcrypt.hash(password, 12);
}

const userSeedData = [
    {
        'name':"Dani Gain",
        'email':"danigain1234@gmail.com",
         'role':0
    },
    {
        'name':"Ms x",
        'email':"x@gmail.com",
        'role':0
    },
    {
        'name':"Mr y",
        'email':"y@gmail.com",
        'role':0
    }
];

(async() => {
    for (const user of userSeedData) {
      user.password = await hashPassword("12345678");
    }
})();

module.exports = {
    userSeedData
}