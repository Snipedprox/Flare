module.exports = {
name: "ccnsfw",
aliases: "cnsfw",
usage: "ccnsfw",
code: `
$author[1;Nsfw enabled;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Succesfully set the channel to nsfw]

$editChannel[$channelID;$default;$default;$default;$default;yes;$default;yes]


$onlyIf[$channelID==$getUserVar[cid;$authorid];$getServerVar[error] **$username** You are not the creator of this channel]
`}