module.exports = {
name: "starboard",
$if: "v4",
aliases: ['sb','sstarboard'],
code: `


$title[1;**Starboard system**]
$color[1;$getServerVar[color]]
$image[1;$get[sb]]
$description[1;
<:reddot:953977080054415380> **Author: \`$usertag[$get[author]]\`**
<:reddot:953977080054415380> **Original Message: [Jump To Message!](https://discord.com/channels/$guildid/$message[1]/$message[2])**
<:reddot:953977080054415380> **Message: **$getmessage[$message[1];$message[2];content]
<:reddot:953977080054415380> **Stars: $numberseparator[$reactioncount[$findChannel[$message[1];yes];$message[2];⭐];,]⭐**]

$let[sb;https://media.discordapp.net/attachments/953775397315686423/956675725824491641/sboard.JPG]
$let[author;$getMessage[$findChannel[$message[1];yes];$message[2];userID]]
$usechannel[$getservervar[schannel]]
$addcmdreactions[✅]


$onlyif[$reactioncount[$findChannel[$message[1];yes];$message[2];⭐]!=;$getServerVar[error] That message needs more **stars**]



$onlyif[$reactioncount[$findChannel[$message[1];yes];$message[2];⭐]>=$getservervar[sreq];$getServerVar[error] That message needs more **stars**]
$onlyIf[$message[1]!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < #channel > < messageID >**]

$onlyIf[$message[2]!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < #channel > < messageID >**]

$onlyIf[$messageexists[$message[2]]!=false;$getServerVar[error] You provided an **invalid** messageid]

$onlyIf[$channelexists[$findChannel[$message[1];yes]]!=false;$getServerVar[error] You provided an **invalid** channel]

$onlyIf[$getServerVar[schannel]!=;$getServerVar[error] **Starboard channel has not been set yet**]
`}