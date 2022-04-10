module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level50]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level50]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level50]]==false;]
$onlyIf[$getUserVar[level]==50;]
$endif`
}