module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$toLowerCase[$checkContains[$message;https;http;https://;http://;discord.gg]]==true]
$deleteCommand
$sendMessage[<:876127257767338005:946761779839631380> **Please do not use links <@$authorid>**;no]
$endif

$onlyIf[$getServerVar[links]==true;]
$onlyIf[$hasperms[$guildid;$authorid;managemessages]==true;]`}