module.exports = {
name: "queue",
code: `
$thumbnail[1;$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]]]
$author[1;Music queue;https://cdn.discordapp.com/emojis/946761780590428160.webp?size=56&quality=lossless]
$color[1;$getServerVar[color]]
$description[1;**
<:reddot:953977080054415380> Currently playing → [$songInfo[title]]($songInfo[url]) "$advancedTextSplit[$songInfo[title]; ;1] | $replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com];true;YouTube];false;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;SoundCloud];false;Audio]]"

<:reddot:953977080054415380> Duration → $replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;$humanizeMS[$songInfo[duration];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]

<:reddot:953977080054415380> Song author → [$songinfo[author]]($Songinfo[url])**

($numberSeparator[$queueLength]) Queue | Page 1-$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.4]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.4]]]
$queue[1;5;\`{position} |\` [{title}]({url})]]

$onlyIf[$voiceID[$authorid]!=0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to join a voice channel**}}]

$onlyIf[$voiceID[$authorid]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to join a voice channel**}}]

$onlyIf[$voiceID[$clientid]!=0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I need to join a voice channel**}}]

$onlyIf[$voiceID[$clientid]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I need to join a voice channel**}}]


$onlyIf[$queueLenth>=2;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Atleast 2 songs shold be playing**}}]

`}