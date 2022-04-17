module.exports = {
name: "leveltakeall",
aliases: "leveltakeeveryone",
usage: "leveltakeall < amount >",
code:`$forEachMember[1;{};etakelevel;]
$author[1;Levels taken]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** Taking **[$numberSeparator[$message[1];,] Levels](https://u.com)** from all members]

$setServerVar[sending;$message[1]]

$onlyif[$isnumber[$message[1]]==true;$getServerVar[error] **$username** You provided an **invalid** number]

$argsCheck[1;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount >\`\`\`]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]

`}