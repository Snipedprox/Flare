module.exports = {
  name: "qotd", 
  code: `
$channelSendMessage[$getservervar[qotdc];**Hey <@&$getServerVar[qotd]> heres a question of the day** {newEmbed: {color:$getservervar[color]} {author:Qotd} {description: 
**___Question___ → ** $message 
✄ - - - - - - - - - - - - - - - -
**___Put answers in___ → <#$getServerVar[aotd]>**
✄ - - - - - - - - - - - - - - - -
}};no]
$onlyForRoles[$getServerVar[qotd];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have a qotd role**}}]
$onlyIf[$getServerVar[qotdc]!=;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Qotd channel has not been set yet**}}]
$onlyIf[$getServerVar[qotd]!=;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Qotd role has not been set yet**}}]
$onlyIf[$getServerVar[aotd]!=;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Aotd role has not been set yet**}}]
$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [question]\`**}}]`}