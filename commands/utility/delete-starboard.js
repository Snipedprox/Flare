module.exports = {
name: "delete-starboard",
$if: "v4",
aliases: ['dsb','deletestarboard'],
code: `
$author[1;Starboard message removed;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**Starboard message deleted**]
$deletemessage[$message]



$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < messageID >**]


$onlyIf[$messageexists[$message]!=;$getServerVar[error] You provided an **invalid** messageID]


$onlyIf[$getServerVar[schannel]!=;$getServerVar[error] **Starboard channel has not been set yet**]

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing \`manage messages\`permission**]`}