module.exports = {
name: "ccunnsfw",
aliases: "cunnsfw",
usage: "ccunnsfw",
code: `
$author[1;Removed nsfw;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Succesfully removed the channel from nsfw]

$editChannel[$channelID;$default;$default;$default;$default;no;$default;yes]

$onlyIf[$channelID==$getUserVar[cid;$authorid];$getServerVar[error] **$username** You are not the creator of this channel]`}