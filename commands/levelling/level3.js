module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$roleExists[$getServerVar[level3]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level3]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level3]]==false;]
$onlyIf[$getUserVar[level]==3;]
$endif`
}