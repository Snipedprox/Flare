
module.exports = (bot) => {
    bot.status({
  text: "$numberseparator[$allmemberscount;.] members in $numberseparator[$servercount;.] guilds",
  type: "WATCHING",
  status: "dnd",
  time: 12
})
    
    bot.status({
  text: "My prefix: %",
  type: "PLAYING",
  status: "dnd",
  time: 12
})
} // you can change it to whatever you like
