module.exports = {
name: "takeall",
aliases: "takeeveryone",
usage: "takeall < amount >",
code:`$forEachMember[1;{};etakemoney;]
$getServerVar[check] **$username** Taking $numberSeparator[$message[1];,]$getServerVar[symbol] from all members

$setServerVar[sending;$message[1]]

$onlyif[$isnumber[$message[1]]==true;$getServerVar[error] **$username** You provided an **invalid** number]

$argsCheck[1;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount >\`\`\`]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl]==false;$getServerVar[error] **$username** You are economy blacklisted]
`}