module.exports = {
name: "ecoblacklist",
code: `
$author[1;$username[$get[u]] has been blacklisted;$useravatar[$get[u]]]
$color[1;$getServerVar[color]]

$setUserVar[ecobl;true;$get[u]]

$onlyIf[$get[u]!=$authorid;$getServerVar[error] **$username You need to mention a member**]
$onlyIf[$memberexists[$get[u]]==true;$getServerVar[error] **$username That member does not exist**]
$onlyIf[$get[u]!=;$getServerVar[error] **$username You need to mention a member**]
$onlyIf[$getUserVar[ecobl;$get[u]]==false;$getServerVar[error] **$username That member is already blacklisted]
$onlyIf[$hasPerms[$guildID;$authorid;admin]==true;**$getServerVar[error] $username You are missing the \`administrator\` permissions**]


$let[u;$findMember[$message;yes]]`}