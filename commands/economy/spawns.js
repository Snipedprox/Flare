module.exports = {
name:"spawns",
$if: "v4",
code:`$if[$message==disable]
**<:rewine:949696268303728670> Disabled spawning**
$setservervar[rs;false]
$else
$setservervar[ra;$message[1]/$message[2]]
$setservervar[rs;true]
**<:rewine:949696268303728670> Enabled spawning range from $numberSeparator[$message[1];,]$getServerVar[symbol] → $numberSeparator[$message[2];,]$getServerVar[symbol]**
$onlyif[$message[1]<$message[2];**Provide a \` < minimum > \` in first argument and \` maximum \` in second**]
$onlyif[$isnumber[$message[1]$message[2]]==true;**Enter \`two\` numbers or enter disable**]
$endif

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the [manage server](https://u.com) permission**}}]`}