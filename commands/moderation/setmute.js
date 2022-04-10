module.exports = {
name: "setmute",
aliases: "setstfu",
usage: "setmute < @role >",
code: `
$author[1;Mute role set;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Mute role has been set to \`$rolename[$findRole[$message]]\`]

$setServerVar[muterole;$findrole[$message]]



$onlyIf[$roleExists[$findRole[$message]]!=false;$getServerVar[error] **$username** You provided an **invalid** role]

$onlyIf[$message!=;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @role >\`\`\`**]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]`}