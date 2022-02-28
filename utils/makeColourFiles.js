const fs = require("fs");
const colours = ["indigo", "orange", "blue"];
let colourList = [];

colours.map((colour) => {
  let colourData = {};
  colourData["bgColour"] = `bg-${colour}-500`;
  colourData["badgeTextColour"] = `text-${colour}-800`;
  colourData["badgeBgColour"] = `bg-${colour}-100`;
  colourList.push(colourData);
});
fs.writeFile(
  __dirname + "/../components/colours.json",
  JSON.stringify(colourList, null, 2),
  (err) => {
    if (err) throw err;
  }
);
console.log(colourList);
