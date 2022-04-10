module.exports = {
name: "goodbye-message",
$if: "v4",
aliases: ['message-goodbye','gmessage'],
code: `
$author[1Goodbye message edited;;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**Goodbye message set to** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;<name>;$username];<mention>;<@$authorid>];<tag>;$usertag[$authorid]];<servername>;$servername];<count>;$memberscount]]

$setServerVar[gmessage;$message]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] You are missing **\`manage server\`**]

$onlyIf[$message!=;$getServerVar[error] **Your command usage was invalid ( \`$getservervar[prefix]$commandname < message >\` )**
<:DiscordBotMaker:955637250518056971> **Possible tags**
\`\`\`js
<servername> - Displays the guild name
<tag> - Displays the users tag
<count> - Displays the new memberscount
<name> - Dispalys the user name
<mention> - Mentions the user among arrival\`\`\`]`}