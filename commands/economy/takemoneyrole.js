module.exports = {
name: "takemoneyrole",
aliases: "tmr",
usage: "takemoneyrole < amount > < @role >",
code:`$forEachMember[1;{};takemoney;]
$getServerVar[check] **$username** Taking $numberSeparator[$message[1];,]$getServerVar[symbol] to the role \`$roleName[$findrole[$message[2]]]\`

$setServerVar[sending;$message[1]]
$onlyif[$roleexists[$findrole[$message[2]];$guildid]==true;$getservervar[error] **$username** You provided an **invalid** role]

$onlyif[$isnumber[$message[1]]==true;$getServerVar[error] **$username** You provided an **invalid** number]

$argsCheck[2;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount > < @role >\`\`\`]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]

`}