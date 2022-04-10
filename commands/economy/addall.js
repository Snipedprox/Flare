module.exports = {
name: "addall",
aliases: "addeveryone",
usage: "addall < amount >",
code:`$forEachMember[1;{};egivemoney;]
$getServerVar[check] **$username** Sending $numberSeparator[$message[1];,]$getServerVar[symbol] to all members

$setServerVar[sending;$message[1]]

$onlyif[$isnumber[$message[1]]==true;$getServerVar[error] **$username** You provided an **invalid** number]

$argsCheck[1;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount >\`\`\`]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]

`}