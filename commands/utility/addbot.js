module.exports = {
name: "addbot",
code: `

$title[1;**$usertag[$findUser[$message;no]]**]
$color[1;$getservervar[color]]
$description[1;**Bot has been submitted**]
$setuservar[clientid;$findUser[$message[2]]]

$channelsendMessage[$channelid;{newEmbed: {image:$useravatar[$message[2]]} {title:<a:D_timer:953775784693207070> **Bot submition**} {color:$getServerVar[color]} {description: **
<:reddot:953977080054415380> Submitter: <@$authorid>
<:reddot:953977080054415380> Bot name: [$usertag[$findUser[$message[2];no]]](https://discord.com/api/oauth2/authorize?client_id=$message[2]&permissions=1479549643895&scope=bot%20applications.commands)
<:reddot:953977080054415380> Prefix: \`$message[1]\`
<:reddot:953977080054415380> Bot ID: \`$message[2]\`
<:reddot:953977080054415380> Description: $messageslice[2]**}{deletecommand}};no]


$onlyIf[$isbot[$message[2]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **That is not a bot**}}]

$onlyIf[$message[2]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [prefix] [ID] [description]\`**}}]

$onlyIf[$message[1]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [prefix] [ID] [description]\`**}}]

$onlyIf[$messageSlice[2]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [prefix] [ID] [description]\`**}}]

$onlyforChannels[$getServerVar[abc];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You can only add bots in <#$getservervar[abc]>**}}]

$onlyIf[$getservervar[abc]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Add bot channel has not been setupped yet**}}]`
}