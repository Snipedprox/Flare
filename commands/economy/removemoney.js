module.exports ={
name: "removemoney",
code: `
$color[1;$getServerVar[color]]
$description[1;**Removed $numberSeparator[$get[amount];,]$getServerVar[symbol] from <@$get[u]>**]
$setUserVar[cash;$sub[$getUserVar[cash;$get[u]];$get[amount]];$get[u]]

$onlyIf[$isNumber[$get[amount]]!=false;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**That is not a number**}}]


$argsCheck[>0;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**Did you mean \`$getServerVar[prefix]removemoney < amount > < @user >\`**}}]

$let[amount;$truncate[$message[1]]]
$let[u;$findMember[$message[2];yes]]
$suppressErrors[wrong usage]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the [manage server](https://u.com) permission**}}]`}