module.exports = {
name: "afkreset",
code: `
$setServerVar[afkroles;undefined]
$author[1;Afk roles removed;https://images-ext-1.discordapp.net/external/yqI36lWljGkYOLAhmgc6u3YVk5zP--SgpOdwljSmdK4/https/i.ibb.co/5TCYr8h/success.png]
$color[1;$getServerVar[color]]
$description[1;Afk roles have been reset]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]`
}