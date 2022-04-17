module.exports = {
name: "setvent",
$if: "v4",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Vent channel set to <#$get[id]>**]

$setservervar[vchannel;$get[id]]

$onlyIf[$channelExists[$get[id]]!=false;$getServerVar[error] You provided an **invalid** channel]

$onlyIf[$get[id]!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname #channel**]


$let[id;$findChannel[$message;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing \`manage server\` permission**]`}