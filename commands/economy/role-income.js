module.exports = {
name: "role-income",
aliases: "rincome",
usage: "role-income < index > < @role > < amount >",
code: `
$setServerVar[rincome$message[1];$get[id]]
$setServerVar[princome$message[1];$message[3]]

$getServerVar[check] **Role income set**
\`\`\`js
Role: $rolename[$get[id]]
Index: $message[1]
Amount: $numberSeparator[$message[3];,]$getServerVar[symbol]\`\`\`

$onlyIf[$roleExists[$get[id]]!=false;$getServerVar[error] **$username** You provided an **invalid** role]

$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < index > < @role > < amount >\`\`\`]


$let[id;$findRole[$message[2]]]


$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **$username** You are missing **\`manage roles\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **$username* I am missing **\`manage roles\`** permission]`}