module.exports = {
name: "addemoji",
aliases: "add",
usage: "addemoji < image link > < name >",
code: `
$author[1;Emote added;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**Successfully added the emoji to the server  $get[emote]**]


$let[emote;$addemoji[$guildid;$message[1];$message[2];yes]]


$onlyIf[$isValidLink[$message[1]]==true;$getServerVar[error] **$username** Invalid image link]
$onlyIf[$charCount[$message[1]]>=1;$getServerVar[error] **Correct usage: \`\`\`js
$tolowercase[$commandname] [image link] [name]\`\`\`**]
$onlyIf[$charCount[$message[2]]>=1;$getServerVar[error] **Correct usage: \`\`\`js
$tolowercase[$commandname] [image link] [name]\`\`\`**]

$onlyIf[$hasPerms[$guildid;$authorid;manageemojisandstickers]==true;$getServerVar[error] **You are missing the \`manage emojis\` permission**]


$onlyIf[$hasPerms[$guildid;$clientid;manageemojisandstickers]==true;$getServerVar[error] **I am missing the \`manage emojis\` permission**]
`
}