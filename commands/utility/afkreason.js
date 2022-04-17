module.exports = {
name: "afkreason",
$if: "v4",
code: `
$author[1;Afk reason modified;https://images-ext-1.discordapp.net/external/yqI36lWljGkYOLAhmgc6u3YVk5zP--SgpOdwljSmdK4/https/i.ibb.co/5TCYr8h/success.png]
$color[1;$getServerVar[color]]
$description[1;Edited the afk role to $message**]

$setServerVar[afkr;$message]

$onlyIf[$getUserVar[afk]==true;$getServerVar[error] You are not afk]

$argsCheck[>0;$getServerVar[error] **Correct usage: $tolowercase[$commandname] $getservervar[prefix]$commandname < reason >**]


$if[$getServerVar[afkroles]!=undefined]
$onlyForRoles[$joinsplittext[;];$getServerVar[error] You are missing an **afk** role]

$textsplit[$getservervar[afkroles];/]
$endif`}