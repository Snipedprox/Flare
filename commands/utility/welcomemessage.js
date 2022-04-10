module.exports = {
name: "welcome-message",
$if: "v4",
aliases: ['message-welcome','wmessage'],
code: `
$author[1;Welcome message edited;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**Join message has been set to** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;<name>;$username];<mention>;<@$authorid>];<tag>;$usertag[$authorid]];<servername>;$servername];<count>;$memberscount]]

$setServerVar[wmessage;$message]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing \`manage server\` permission**]

$onlyIf[$message!=;$getServerVar[error] **$getservervar[prefix]$commandname < message >**
<:DiscordBotMaker:955637250518056971> **Possible tags**
\`\`\`js
<servername> - Displays the guild name
<tag> - Displays the users tag
<count> - Displays the new memberscount
<name> - Dispalys the user name
<mention> - Mentions the user among arrival\`\`\`]`}