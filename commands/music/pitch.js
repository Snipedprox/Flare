module.exports = [{
name: "pitch",
code: `  

$replaceText[$setFilter[{
"asetrate": $math[48000*1.05]
}];[object Object];]

$channelsendMessage[$channelid;{newEmbed: {color:$getServerVar[color]} {author:$replaceText[**Filter applied;*;]:$useravatar[$clientid]} {description:<:TT_love:942521075596656700> **I applied the \`pitch\` filter with the value $replaceText[$replaceText[$checkCondition[$message==];true;1.05];false;$message]**}};no]
$onlyIf[$replaceText[$replaceText[$checkCondition[$message==];true;1.05];false;$message]<=2;Max \`2\`]
$onlyIf[$replaceText[$replaceText[$checkCondition[$message==];true;1.05];false;$message]>=0.5;Min \`0.5\`]

$onlyIf[$voiceID[$authorid]!=0;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You need to join a vc**}}]

$onlyIf[$voiceID[$authorid]!=undefined;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You need to join a vc**}}]


$onlyIf[$queueLenth!=0;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**I dont think a song is playing at this moment**}}]

$onlyIf[$voiceID[$clientid]!=undefined;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You should use the \`$getservervar[prefix]join\` command so i can join**}}
]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[djrole]]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the <@&$findRole[$getServerVar[djrole]]> role**}}]


$onlyIf[$getServerVar[djrole]!={BLANKEDOUT};{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**DJ role needs to get set in order for the usage of thisa command**}}]`}]
