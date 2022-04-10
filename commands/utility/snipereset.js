module.exports = {
name: "snipereset",
code: `
$setServerVar[sniperoles;undefined]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Snipe roles disabled**]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]`
}