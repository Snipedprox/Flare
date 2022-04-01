module.exports = [{
name: "nightcore",
code: `  


$replaceText[$setFilter[{"atempo": "0.720", "asetrate": "48000*1.3"}];[object Object];]
$channelsendMessage[$channelid;{newEmbed: {color:$getServerVar[color]} {author:$replaceText[**Filter applied;*;]:$useravatar[$clientid]} {description:**I applied the \`nightcore\` filter**}};no]


$onlyIf[$voiceID[$authorid]!=undefined;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You need to join a vc**}}]

$onlyIf[$voiceID[$authorid]!=0;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You need to join a vc**}}]


$onlyIf[$queueLenth!=0;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**I dont think a song is playing at this moment**}}]

$onlyIf[$voiceID[$clientid]!=undefined;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You should use the \`$getservervar[prefix]join\` command so i can join**}}]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[djrole]]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the <@&$findRole[$getServerVar[djrole]]> role**}}]


$onlyIf[$getServerVar[djrole]!={BLANKEDOUT};{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**DJ role needs to get set in order for the usage of thisa command**}}]`}]
