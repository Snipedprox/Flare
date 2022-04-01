module.exports = {
name: "snipereset",
code: `
$setServerVar[sniperoles;undefined]
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Snipe roles module has been set to \`@everyone\`**]

$onlyIf[$hasperms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`
}