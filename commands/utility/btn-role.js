module.exports = {
name: "btn-role",
code: `
$setChannelVar[btn$message[1];$findRole[$message[2]];$findChannel[$message[3];yes]]
$setChannelVar[rbtn$message[1];$findRole[$message[2]];$findChannel[$message[3];yes]]
$deletecommand
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Button role set to \`rolename[$findrole[$message[2]]]\`**]

$channelSendMessage[$findChannel[$message[3];yes]; {
 "content" : "**React to this message to get the role \`$rolename[$findRole[$message[2]]]\`**",
 "embeds" : "**React to this message to get the role \`$rolename[$findRole[$message[2]]]\`**",
 "components" : "{actionRow:{button:Click for role:primary:btn$message[1]}{button:Remove role:danger:rbtn$message[1]}}"
 };no]


$onlyIf[$isNumber[$message[1]]==true;$getServerVar[error] You provided an **invalid** number]

$onlyIf[$channelExists[$findChannel[$message[3]]]!=false;$getServerVar[error] You provided an **invalid** channel]

$onlyIf[$roleExists[$findRole[$message[2]]]!=false;<:ZeroWorried:955637230939033660> **$username** You provided an **invalid** role]



$argsCheck[3;$getServerVar[error] **$tolowercase[$commandname] [index] [@role] [#channel]**]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]


$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;<:ZeroWorried:955637230939033660> **$username** You are missing **\`manage roles\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;<:ZeroWorried:955637230939033660> **$username** I am missing **\`manage roles\`** permission]`}