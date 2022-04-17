module.exports = {
name: "xptakeall",
aliases: "xptakeeveryone",
usage: "xptakeall < amount >",
code:`$forEachMember[1;{};etakexp;]
$author[1;Exp taken]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** Taking **[$numberSeparator[$message[1];,] XP](https://u.com)** from all members]

$setServerVar[sending;$message[1]]

$onlyif[$isnumber[$message[1]]==true;$getServerVar[error] **$username** You provided an **invalid** number]

$argsCheck[1;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount >\`\`\`]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]

`}