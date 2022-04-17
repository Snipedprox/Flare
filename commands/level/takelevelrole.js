module.exports = {
name: "takelevelrole",
aliases: "tlr",
usage: "takelevelrole < amount > < @role >",
code:`$forEachMember[1;{};takelevel;]
$author[1;Levels taken]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** **[Taking $numberSeparator[$message[1];,] Levels](https://u.com)** from the role \`$roleName[$findrole[$message[2]]]\`]

$setServerVar[sending;$message[1]]
$onlyif[$roleexists[$findrole[$message[2]];$guildid]==true;$getservervar[error] **$username** You provided an **invalid** role]

$onlyif[$isnumber[$message[1]]==true;$getServerVar[error] **$username** You provided an **invalid** number]

$argsCheck[2;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount > < @role >\`\`\`]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]

`}