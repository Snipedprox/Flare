module.exports = {
  name: 'swearconfig',
  $if: "v4",
  aliases: ['configswear'],
  code: `
$if[$message[1]==defaultwords]
$color[1;$getservervar[color]]
$description[1;**<a:red_tick:954025324943917148> Antiswear has been set to $message[2]**]
$setServerVar[defaultwordsenabled;$message[2]]
$setServerVar[antiswear;$replaceText[$replaceText[$message[2];true;on];false;off]]
$onlyIf[$checkContains[$message[2];true;false]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Invalid option**}}]
$endif
$onlyIf[$toLowerCase[$checkContains[$message[1];defaultwords]]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Invalid option**}}]

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage messages](https://top.gg/bot/$clientid) permission**}}]

`
}