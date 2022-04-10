module.exports = {
name: "giverole",
aliases: "addrole",
usage: "role < userID > < @role >",
code: `
$giveRoles[$guildID;$get[u];$get[id]]
$author[1;Role taken;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Gave the role \`$rolename[$get[id]]\` to \`$usertag[$get[u]]\`]

$onlyIf[$hasRoles[$guildID;$get[u];$get[id]]==false;$getServerVar[error] **$username** That member already has that role]


$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]

$argsCheck[>0;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < @role >\`\`\`**]

$let[id;$findRole[$message[2]]]
$let[u;$findMember[$message[1];yes]]`}