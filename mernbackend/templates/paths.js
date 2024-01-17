//const path = require("path");
   // const profilePath = path.join(__dirname,"views","profile.hbs");
//module.exports = {profilePath}

//const regcard = path.join(__dirname,"views","card.hbs");
//module.exports = {regcard}

const path = require("path");

module.exports = {
 homePath: path.join(__dirname, "views", "home.hbs"),
 profilePath: path.join(__dirname, "views", "profile.hbs"),
 regcard: path.join(__dirname, "views", "card.hbs"),
 contactPath: path.join(__dirname, "views", "contact.hbs")
};