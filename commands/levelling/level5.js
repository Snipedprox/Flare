module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level5]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level5]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level5]]==false;]
$onlyIf[$getUserVar[level]==5;]
$endif`
}
