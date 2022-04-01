module.exports = [{
    name: "tempo",
    code: `  


$replaceText[$setFilter[{
"atempo": 1.05
}];[object Object];]

$channelsendMessage[$channelid;{newEmbed: {color:$getServerVar[color]} {author:$replaceText[**Filter applied;*;]:$useravatar[$clientid]} {description:**I applied the \`tempo\` filter with value $replaceText[$replaceText[$checkCondition[$message==];true;1.05];false;$message]**}};no]
$onlyIf[$replaceText[$replaceText[$checkCondition[$message==];true;1.05];false;$message]<=4;Max \`4\`]
$onlyIf[$replaceText[$replaceText[$checkCondition[$message==];true;1.05];false;$message]>=0.5;Min \`0.5\`]



$onlyIf[$voiceID[$authorid]!=undefined;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You need to join a vc**}}]

$onlyIf[$voiceID[$authorid]!=0;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You need to join a vc**}}]


$onlyIf[$queueLenth!=0;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**I dont think a song is playing at this moment**}}]

$onlyIf[$voiceID[$clientid]!=undefined;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:**You should use the \`$getservervar[prefix]join\` command so i can join**}}]`}]
