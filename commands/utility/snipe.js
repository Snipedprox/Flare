module.exports = [{
 name: 'snipe',
 $if: 'v4',
 code: `
$getServerVar[check] **Snipe results from <#$mentionedchannels[1;yes]>**
 $color[1;$getServerVar[color]]
$thumbnail[1;$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
$author[1;$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]

 $description[1;<:reddot:953977080054415380> **Message:** $getChannelVar[snipe_msg;$mentionedChannels[1;yes]]
<:reddot:953977080054415380> **Channel** - <#$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]> \`($getChannelVar[snipe_channel;$mentionedChannels[1;yes]])\`
<:reddot:953977080054415380> **Time** - <t:$getChannelVar[snipe_t;$mentionedChannels[1;yes]]:F> 
 [<t:$getChannelVar[snipe_t;$mentionedChannels[1;yes]]:R>]
 ]

 $onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;$getServerVar[error] **$username** There are no recently deleted messages in that channel]


$if[$getServerVar[sniperoles]!=undefined]
$onlyForRoles[$joinsplittext[;];$getServerVar[error] **$username** You are missing the snipe **\`role\`**]

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