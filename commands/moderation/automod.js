module.exports = {
name: "automod",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==]
$author[1;Automod commands]
$color[1;$getServerVar[color]]
$description[1;
<:D_rightarrow:953778843389399131> \`$getservervar[prefix]automod links true/false\`: enables / disables antilink**]
$else
$if[$toLowerCase[$message[1]]==spam]
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Anti spam set to $replaceText[$replaceText[$toLowerCase[$message[2]];true;enabled];false;disabled]**]
$setServerVar[spam;$tolowercase[$message[2]]]

$onlyIf[$tolowercase[$checkcontains[$message[2];true;false]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to add \`true\` or \`false\`**}}]
$else
$if[$toLowerCase[$message[1]]==links]
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Anti links set to $replaceText[$replaceText[$toLowerCase[$message[2]];true;enabled];false;disabled]**]
$setServerVar[links;$tolowercase[$message[2]]]

$onlyIf[$tolowercase[$checkcontains[$message[2];true;false]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to add \`true\` or \`false\`**}}]
$endif
$endif
$endif


$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage messages](https://top.gg/bot/$clientid) permission**}}]`}