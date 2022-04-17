module.exports = {
 name: "stopcall",
 aliases: "leavecall",
 $if: "v4",
 code: `
$if[$getVar[match]==$authorID]
$sendmessage[$getServerVar[check] **Call has been disconnected**;no]
$setVar[match;]
$setGlobalUserVar[channel;]
$else
$setGlobalUserVar[user;] 
$setGlobalUserVar[chat;false;$getGlobalUserVar[user]]
$setGlobalUserVar[chat;false]
$setGlobalUserVar[user;;$getGlobalUserVar[user]]
$setGlobalUserVar[channel;$getGlobalUserVar[user]]
$setGlobalUserVar[channel;]
$sendMessage[$getServerVar[check] **Call has been disconnected**;no]
$channelSendMessage[$getGlobalUserVar[channel;$getGlobalUserVar[user]];$getServerVar[check] **Call has been disconnected**]
$endif
`}