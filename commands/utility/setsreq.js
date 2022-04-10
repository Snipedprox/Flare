module.exports = {
name: "setsreq",
$if: "v4",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] ** Starboard req is set to \`$message\`**]

$setServerVar[sreq;$message]

$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < amount >**]


$onlyIf[$isNumber[$message]!=false;$getServerVar[error] You provided an **invalid** number]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing \`manage channel\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] ** I am missing \`manage messages\` permission**]`}