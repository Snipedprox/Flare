module.exports = {
 name: "joincall",
 $if: "v4",
 code: `
$if[$getVar[match]==]
$sendMessage[📱 Searching for open calls...;no]
$setVar[match;$authorID]
$setGlobalUserVar[channel;$channelID]
$else
$sendMessage[Match!;no]
$sendMessage[📱 Searching for open calls...;no]
$setVar[match;]
$channelSendMessage[$getGlobalUserVar[channel;$getVar[match]];📱 Call found ( $randomtext[dont be rude;dont give out personal information;dont share your token] )]
$setGlobalUserVar[chat;true;$getVar[match]]
$setGlobalUserVar[chat;true]
$setGlobalUserVar[user;$authorID;$getVar[match]]
$setGlobalUserVar[user;$getVar[match]]
$setGlobalUserVar[channel;$channelID]
$endif
`}