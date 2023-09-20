const bcrypt = require("bcrypt");

async function hashPassword(password) {
  return bcrypt.hash(password, 12);
}

const userSeedData = [
    {
        'name':"Dani Gain",
        'email':"danigain1234@gmail.com",
        'isAdmin':true
    },
    {
        'name':"Ms x",
        'email':"x@gmail.com",
        'isAdmin':true
    },
    {
        'name':"Mr y",
        'email':"y@gmail.com",
        'isAdmin':true
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