module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level20]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level20]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level20]]==false;]
$onlyIf[$getUserVar[level]==20;]
$endif`
}