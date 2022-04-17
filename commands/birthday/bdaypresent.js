module.exports = {
name: "bdaypresent",
aliases: "bdaypres",
usage: "bdaypresent < @role >",
code: `
$author[1;Birthday present set;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1; **$username** Birthday present has been set to \`$rolename[$get[id]]\`]


$setservervar[present;$get[id]]
$let[id;$findRole[$message]]

$onlyIf[$roleExists[$findRole[$message]]!=false;<:ZeroWorried:955637230939033660> **$username** You provided an **invalid** role]

$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < @role >\`\`\`]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]`}