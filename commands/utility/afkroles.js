module.exports = {
name: "afkroles",
code: `
$author[1;Afk role set;https://images-ext-1.discordapp.net/external/yqI36lWljGkYOLAhmgc6u3YVk5zP--SgpOdwljSmdK4/https/i.ibb.co/5TCYr8h/success.png]
$color[1;$getServerVar[color]]
$description[1;Set <@&$findRole[$message]> to afk roles]
$setServerVar[afkroles;$findRole[$message]]



$onlyIf[$roleExists[$findRole[$message]]!=false;$getServerVar[error] You provided an invalid **role**]


$argsCheck[>0;$getServerVar[error] **Correct usage: $tolowercase[$commandname] $getservervar[prefix]$commandname < @role >**]


$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]`}