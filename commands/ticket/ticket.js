module.exports = {
name: "ticket",
$if: "v4",
code: `

$modifyChannelPerms[$authorid;$get[id];+viewchannel]
$modifyChannelPerms[$guildid;$get[id];-viewchannel]

<:M_ticket:957022854069755904> **Generated your ticket <#$get[id]>**

$setChannelVar[ticket;$channelID]

$channelSendMessage[$get[id];**<:M_ticket:957022854069755904> <@$authorid> generated the ticket **;no]
$setChannelTopic[$get[id];<:M_ticket:957022854069755904> <@$authorid> ticket generated]
$let[id;$createChannel[$guildID;Ticket-$discriminator[$authorid];text;yes]]
`}