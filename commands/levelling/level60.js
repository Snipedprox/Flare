module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level60]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level60]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level60]]==false;]
$onlyIf[$getUserVar[level]==60;]
$endif`
}