module.exports = {
name: "xpall",
aliases: "xpeveryone",
usage: "xpall < amount >",
code:`$forEachMember[1;{};egivexp;]
$author[1;Exp sent out]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** Sending **[$numberSeparator[$message[1];,] XP](https://u.com)** to all members]

$setServerVar[sending;$message[1]]

$onlyif[$isnumber[$message[1]]==true;$getServerVar[error] **$username** You provided an **invalid** number]

$argsCheck[1;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount >\`\`\`]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]

`}