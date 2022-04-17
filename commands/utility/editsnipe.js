module.exports = [{
 name: 'editsnipe',
 $if: 'v4',
 code: `
$getServerVar[check] **Snipe results from <#$mentionedchannels[1;yes]>**
 $color[1;$getServerVar[color]]
$thumbnail[1;$userAvatar[$getChannelVar[esnipe_author;$mentionedChannels[1;yes]]]]
$author[1;$userTag[$getChannelVar[esnipe_author;$mentionedChannels[1;yes]]]]

 $description[1;<:reddot:953977080054415380> **Message:** $getChannelVar[esnipe_msg;$mentionedChannels[1;yes]]
<:reddot:953977080054415380> **Channel** - <#$getChannelVar[esnipe_channel;$mentionedChannels[1;yes]]> \`($getChannelVar[esnipe_channel;$mentionedChannels[1;yes]])\`
<:reddot:953977080054415380> **Time** - <t:$getChannelVar[esnipe_t;$mentionedChannels[1;yes]]:F> 
 [<t:$getChannelVar[esnipe_t;$mentionedChannels[1;yes]]:R>]
 ]

 $onlyIf[$getChannelVar[esnipe_msg;$mentionedChannels[1;yes]]!=;$getServerVar[error] **$username** There are no recently deleted messages in that channel]


$if[$getServerVar[sniperoles]!=undefined]
$onlyForRoles[$joinsplittext[;];$getServerVar[error] **$username** You are missing the snipe **\`role\`**]

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