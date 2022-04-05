module.exports = {
name: "takeall",
code:`$forEachMember[1;{};etakemoney;]
**Taking $numberSeparator[$message[1];,]$getServerVar[symbol] to everyone**

$setServerVar[sending;$message[1]]
$onlyif[$isnumber[$message[1]]==true;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**Invalid number**}}]

$argsCheck[1;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**Did you mean \`$getServerVar[prefix]takeall < amount >\`**}}]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the [manage server](https://u.com) permission**}}]

`}