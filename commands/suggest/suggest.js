module.exports = {
  name: "suggest", 
  aliases: ['928828282828828abcaiwhs'], 
  usage: "\`%suggest <suggestion>\`", 
  $if: "v4", 
  code: `
$sendMessage[**Sent your suggestion.**;no]
$channelSendMessage[$getServerVar[schannel];{
"embeds":"{newEmbed:{field:Submitter:<:reddot:953977080054415380>  $userTag[$authorID] \`[$authorID]\`}{field:Suggestion:$message}{color:$getServerVar[color]}{footer:PENDING | $authorID }{timestamp}{thumbnail:$authorAvatar}}",
"fetchReply" : true,
"options": {
  "reactions" : ["<:checkmark:953987845696135188>", "<:reddx:953987871319162890>"],
  "interaction" : false
}
};no]
$onlyIf[$getServerVar[schannel]!=undefined;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username Suggestion channel needs to be setupped**}}]
`
};