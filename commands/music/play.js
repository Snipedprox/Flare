module.exports = {
name: "play",
code: `
$color[1;$getservervar[color]]
$description[1;**<:876127257972842516:946761780233912350> $playTrack[youtube;$message]**]


$onlyIf[$voiceID[$authorid]!=0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to join a voice channel**}}]

$onlyIf[$voiceID[$authorid]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to join a voice channel**}}]


$onlyIf[$message!=;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username Specify a song**}}]`}