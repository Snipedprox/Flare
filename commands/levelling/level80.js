module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level80]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level80]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level80]]==false;]
$onlyIf[$getUserVar[level]==80;]
$endif
`
}