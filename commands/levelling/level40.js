module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level40]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level40]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level40]]==false;]
$onlyIf[$getUserVar[level]==40;]
$endif`
}