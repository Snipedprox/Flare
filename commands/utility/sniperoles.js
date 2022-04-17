module.exports = {
name: "sniperoles",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Set $rolename[$findRole[$message]] to snipe roles**]
$setServerVar[sniperoles;$findRole[$message]]



$onlyIf[$roleExists[$findRole[$message]]!=false;$getServerVar[error] That role does not exist]


$argsCheck[>0;$getServerVar[error] **Correct usage: $tolowercase[$commandname] [@role]**]


$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]`}