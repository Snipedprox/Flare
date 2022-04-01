module.exports = {
    name: 'config',
  aliases: ['modify'],
  code: `
$description[1;**<:checkmark:953987845696135188>  Changed the setting \`$message[1]\` to \`$toUppercase[$message[2]]\`**]
$color[1;$getServerVar[color]] 
$setServerVar[$message[1];$replaceText[$replaceText[$message[2];true;on;-1];false;off;-1]]
$onlyIf[$checkContains[$message[2];true;false]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to add \`true\` or \`false\`**}}]

$onlyIf[$checkContains[$message[1];invitetrack;antilink;antiswear;antiinvite]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Invalid setting**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]
`
}