module.exports = {
name: "takemoneyrole",
code:`$forEachMember[1;{};takemoney;]
**Taking $numberSeparator[$message[1];,]$getServerVar[symbol] to the role $roleName[$findrole[$message[2]]]**

$setServerVar[sending;$message[1]]
$onlyif[$roleexists[$findrole[$message[2]];$guildid]==true;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**Role not found**}}]

$onlyif[$isnumber[$message[1]]==true;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**Invalid number**}}]

$argsCheck[2;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**Did you mean \`$getServerVar[prefix]takemoneyrole < amount > < @role_mention >\`**}}]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the [manage server](https://u.com) permission**}}]

`}