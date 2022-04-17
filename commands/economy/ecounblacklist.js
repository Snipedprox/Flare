module.exports = {
name: "ecounblacklist",
code: `
$author[1;$username[$get[u]] has been unblacklisted;$useravatar[$get[u]]]
$color[1;$getServerVar[color]]

$setUserVar[ecobl;false;$get[u]]

$onlyIf[$get[u]!=$authorid;$getServerVar[error] **$username You need to mention a member**]
$onlyIf[$memberexists[$get[u]]==true;$getServerVar[error] **$username That member does not exist**]
$onlyIf[$get[u]!=;$getServerVar[error] **$username You need to mention a member**]
$onlyIf[$getUserVar[ecobl;$get[u]]==true;$getServerVar[error] **$username That member is not blacklisted]
$onlyIf[$hasPerms[$guildID;$authorid;admin]==true;**$getServerVar[error] $username You are missing the \`administrator\` permissions**]

$let[u;$findMember[$message;yes]]`}