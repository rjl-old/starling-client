const fs = require("fs");
const colours = ["red", "green", "blue"];
let colourList = [];

colours.map((colour) => {
  let colourData = {};
  colourData["bgColour"] = `bg-${colour}-500`;
  colourData["badgeTextColour"] = `text-${colour}-800`;
  colourData["badgeBgColour"] = `bg-${colour}-100`;
  colourList.push(colourData);
});
fs.writeFile("colours.json", JSON.stringify(colourList), (err) => {
  if (err) throw err;
});
console.log(colourList);
