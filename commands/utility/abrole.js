module.exports = {
name: "abrole",
code: `
$setChannelVar[btn$message[1];$findRole[$message[2]];$findChannel[$message[3];yes]]
$setChannelVar[rbtn$message[1];$findRole[$message[2]];$findChannel[$message[3];yes]]
$deletecommand
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Button role set to <@&$findrole[$message[2]]> ( Pos: \`$message[1]\` )**]

$channelSendMessage[$findChannel[$message[3];yes]; {
 "content" : "**$messageSlice[3]**",
 "embeds" : "$messageSlice[3]**",
 "components" : "{actionRow:{button:Click for role:primary:btn$message[1]}{button:Remove role:danger:rbtn$message[1]}}"
 };no]


$onlyIf[$isNumber[$message[1]]==true;$getServerVar[error] **Invalid number**]

$onlyIf[$channelExists[$findChannel[$message[3]]]!=false;$getServerVar[error]**Channel is invalid**]

$onlyIf[$roleExists[$findRole[$message[2]]]!=false;$getServerVar[error] **Role is invalid**]


$argsCheck[>3;$getServerVar[error] **$tolowercase[$commandname] [index] [@role] [#channel] [message]**]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]`}