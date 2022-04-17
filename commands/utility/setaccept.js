module.exports = {
name: "setaccept",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Accepted role has been set to <@&$findRole[$message]>**]

$setServerVar[arole;$findRole[$message]]



$onlyIf[$roleExists[$findRole[$message]]!=false;$getServerVar[error] You provided an **invalid** role]

$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < @role >**]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] ** I am missing \`manage roles\` permission**]`}