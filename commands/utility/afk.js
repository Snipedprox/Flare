module.exports = {
name: "afk",
$if: "v4",
code: `
$if[$authorid==$ownerid]
$author[1;Afk set;https://images-ext-1.discordapp.net/external/yqI36lWljGkYOLAhmgc6u3YVk5zP--SgpOdwljSmdK4/https/i.ibb.co/5TCYr8h/success.png]
$color[1;$getServerVar[color]]
$description[1;**$username** You are now afk
reason: $message]
$setUserVar[afk;true]
$setUserVar[afkt;$dateStamp]
$setUserVar[afkr;$message]
$else

$author[1;Afk set;https://images-ext-1.discordapp.net/external/yqI36lWljGkYOLAhmgc6u3YVk5zP--SgpOdwljSmdK4/https/i.ibb.co/5TCYr8h/success.png]
$color[1;$getServerVar[color]]
$description[1;**$username** You are now afk
reason: $message]
$setUserVar[afk;true]
$setUserVar[afkt;$dateStamp]
$setUserVar[afkr;$message]
$endif


$onlyIf[$getUserVar[afk]==false;$getServerVar[error] You are **already** afk]
$argsCheck[>0;$getServerVar[error] **Correct usage: $tolowercase[$commandname]  < reason >**]

$if[$getServerVar[afkroles]!=undefined]
$onlyForRoles[$joinsplittext[;];$getServerVar[error] You dont have one of the **afk** roles]

$textsplit[$getservervar[afkroles];/]
$endif`}