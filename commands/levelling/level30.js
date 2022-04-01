module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level30]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level30]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level30]]==false;]
$onlyIf[$getUserVar[level]==30;]
$endif`
}