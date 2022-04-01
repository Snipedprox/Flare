module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level100]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level100]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level100]]==false;]
$onlyIf[$getUserVar[level]==100;]
$endif`
}