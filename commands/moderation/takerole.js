module.exports = {
name: "takerole",
aliases: "tl",
usage: "takerole < userID > < @role >",
code: `
$takeRole[$guildID;$get[u];$get[id]]
$author[1;Role taken;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Took the role \`$rolename[$get[id]]\` from \`$usertag[$get[u]]\`]

$onlyIf[$hasRoles[$guildID;$get[u];$get[id]]==true;$getServerVar[error] **$username** That member already has that role]


$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]

$argsCheck[>0;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < @role >\`\`\`**]

$let[id;$findRole[$message[2]]]
$let[u;$findMember[$message[1];yes]]`}