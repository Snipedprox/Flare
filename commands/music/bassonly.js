module.exports = [{
name: "bassonly",
code: `  


$replaceText[$setFilter[{"aresample": "1000"}];[object Object];]

$channelsendMessage[$channelid;{newEmbed: {color:$getServerVar[color]} {author:$replaceText[**Filter applied;*;]:$useravatar[$clientid]} {description:<:TT_love:942521075596656700> **I applied the \`bassonly\` filter**}};no]



$onlyIf[$voiceID[$authorid]!=0;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You need to join a vc**}}]

$onlyIf[$voiceID[$authorid]!=undefined;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You need to join a vc**}}]


$onlyIf[$queueLenth!=0;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**I dont think a song is playing at this moment**}}]

$onlyIf[$voiceID[$clientid]!=undefined;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You should use the \`$getservervar[prefix]join\` command so i can join**}}]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[djrole]]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the <@&$findRole[$getServerVar[djrole]]> role**}}]


$onlyIf[$getServerVar[djrole]!={BLANKEDOUT};{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**DJ role needs to get set in order for the usage of thisa command**}}]`}]
