module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level10]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level10]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level10]]==false;]
$onlyIf[$getUserVar[level]==10;]
$endif
`
}
