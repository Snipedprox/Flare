module.exports = [{
 name: 'editsnipe',
 $if: 'v4',
 code: `
 $color[1;$getServerVar[color]]

 $author[1;$userTag[$getChannelVar[esnipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[esnipe_author;$mentionedChannels[1;yes]]]]

 $description[1;<a:D_Loading1:954025328718798898> **Old message:** $getChannelVar[esnipe_msg;$mentionedChannels[1;yes]]
<a:D_Loading1:954025328718798898> **New message:** $getChannelVar[nesnipe_msg;$mentionedChannels[1;yes]]
<a:D_Loading1:954025328718798898> **Channel** - <#$getChannelVar[esnipe_channel;$mentionedChannels[1;yes]]> \`($getChannelVar[esnipe_channel;$mentionedChannels[1;yes]])\`
<a:D_Loading1:954025328718798898> **Time** - <t:$getChannelVar[esnipe_t;$mentionedChannels[1;yes]]:F> 
 [<t:$getChannelVar[esnipe_t;$mentionedChannels[1;yes]]:R>]
 ]

 $onlyIf[$getChannelVar[esnipe_msg;$mentionedChannels[1;yes]]!=;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **There is nothing to snipe**}}]


$if[$getServerVar[sniperoles]!=undefined]
$onlyForRoles[$joinsplittext[;];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have one of the snipe roles**}}]

$textsplit[$getservervar[sniperoles];/]
$endif


`
},{
 type: 'messageUpdate',
 channel: '$channelID',
 code:`
 $setChannelVar[esnipe_msg;$oldMessage]
 $setChannelVar[esnipe_author;$authorID]
 $setChannelVar[nesnipe_msg;$Message]
 $setChannelVar[esnipe_channel;$channelID]

 $setChannelVar[esnipe_t;$truncate[$divide[$dateStamp;1000]]]`
}]