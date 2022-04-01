module.exports = {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$roleExists[$getServerVar[level70]]==true]
$giveRole[$guildid;$authorID;$getServerVar[level70]]
$onlyIf[$hasRoles[$guildid;$authorID;$getServerVar[level70]]==false;]
$onlyIf[$getUserVar[level]==70;]
$endif`
}