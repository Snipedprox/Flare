module.exports = {
  name: "suggest", 
  usage: "suggest <suggestion>`", 
  code: `
$sendMessage[**Sent your suggestion.**;no]

$channelSendMessage[$getServerVar[schannel];{
"embeds":"{newEmbed:{field:Submitter:$getServerVar[rdot]  $userTag[$authorID] \`[$authorID]\`}{field:Suggestion:$message}{color:$getServerVar[color]}{footer:PENDING | $authorID }{timestamp}{thumbnail:$authorAvatar}}",
"fetchReply" : true,
"options": {
  "reactions" : ["$getServerVar[check]", "$getServerVar[error]"],
  "interaction" : false
}
};no]
$onlyIf[$getServerVar[schannel]!=undefined;$getServerVar[error] **Suggestion channel** Not set]
`
};