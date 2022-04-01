module.exports = [{
    name: "resetfilter",
    $if: "v4",
    code: `  
$resetFilters
$channelsendMessage[$channelid;{newEmbed: {color:$getServerVar[color]} {author:$replaceText[**Filter applied;*;]:$useravatar[$clientid]} {description:**Filters have been reset**}};no]

$onlyIf[$voiceID[$authorid]!=0;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You need to join a vc**}}]

$onlyIf[$voiceID[$authorid]!=undefined;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You need to join a vc**}}]


$onlyIf[$queueLenth!=0;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**I dont think a song is playing at this moment**}}]

$onlyIf[$voiceID[$clientid]!=undefined;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You should use the \`$getservervar[prefix]join\` command so i can join**}}]`}]
