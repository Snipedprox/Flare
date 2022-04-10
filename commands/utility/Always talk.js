module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: ` 
$if[$getGlobalUserVar[cembed]==off]
$channelSendMessage[$getGlobalUserVar[channel;$getGlobalUserVar[user]];$getGlobalUserVar[cymbol] **$getGlobalUserVar[cidentity]**: $message;no]
$else
$if[$getGlobalUserVar[cembed]==on]
$channelSendMessage[$getGlobalUserVar[channel;$getGlobalUserVar[user]];{newEmbed: {color:$getGlobalUserVar[cecolor]} {description:**$username[$authorid]**: $message} {thumbnail:$getGlobalUserVar[cicon]}};no]
$endif
$endif
$onlyIf[$getGlobalUserVar[chat]==true;]`}