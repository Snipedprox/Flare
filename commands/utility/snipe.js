module.exports = [{
 name: 'snipe',
 $if: 'v4',
 code: `
 $color[1;$getServerVar[color]]

 $author[1;$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]

 $description[1;<a:D_Loading1:954025328718798898> **Message:** $getChannelVar[snipe_msg;$mentionedChannels[1;yes]]
<a:D_Loading1:954025328718798898> **Channel** - <#$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]> \`($getChannelVar[snipe_channel;$mentionedChannels[1;yes]])\`
<a:D_Loading1:954025328718798898> **Time** - <t:$getChannelVar[snipe_t;$mentionedChannels[1;yes]]:F> 
 [<t:$getChannelVar[snipe_t;$mentionedChannels[1;yes]]:R>]
 ]

 $onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **There is nothing to snipe**}}]


$if[$getServerVar[sniperoles]!=undefined]
$onlyForRoles[$joinsplittext[;];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have one of the snipe roles**}}]

$textsplit[$getservervar[sniperoles];/]
$endif


`
},{
 type: 'messageDelete',
 channel: '$channelID',
 code:`
 $setChannelVar[snipe_msg;$message]
 $setChannelVar[snipe_author;$authorID]

 $setChannelVar[snipe_channel;$channelID]

 $setChannelVar[snipe_t;$truncate[$divide[$dateStamp;1000]]]`
}]