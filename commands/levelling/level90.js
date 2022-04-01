module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level90]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level90]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level90]]==false;]
$onlyIf[$getUserVar[level]==90;]
$endif`
}