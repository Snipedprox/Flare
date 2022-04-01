module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$setUserVar[spammsg;0]
$wait[4s]
$setUserVar[spammsg;$sum[$getUserVar[spammsg];1]]
$if[$getUserVar[spammsg]==5]
$clear[5;$authorid;;$channelid]
$setUserVar[spammsg;0]
$sendMessage[<:876127258350321674:946761780590428160> **Please do not spam <@$authorid>**;no]
$endif


$onlyIf[$getServerVar[spam]==true;]
$onlyif[$hasperms[$guildid;$authorid;managemessages]==false;]`}