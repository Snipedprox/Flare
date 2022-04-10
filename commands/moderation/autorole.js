module.exports = {
name: "autorole",
$if: "v4",
aliases: "joinrole",
usage: "autorole [add/remove/addbot/removebot]",
code: `
$if[$toLowerCase[$message[1]]==]
$color[1;$getServerVar[color]]
$description[1;
$getServerVar[rdot] **\`$getServerVar[prefix]autorole add < role >\`: adds a role to people who join the server.
$getServerVar[rdot] **\`$getServerVar[prefix]autorole remove\`: disabled auto role.
$getServerVar[rdot] **\`$getServerVar[prefix]autorole addbot < role >\`: adds a role to bots who join the server.
$getServerVar[rdot] **\`$getServerVar[prefix]autorole removebot < role >\`: disables autorole for bots.**]

$else

$if[$tolowercase[$message[1]]==add]
$author[1;Autorole#COLON# add;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** i will add \`$rolename[$get[id]]\` to users who join the guild]
$setServerVar[aru;$get[id]]
$setServerVar[ars;enabled]



$onlyIf[$roleExists[$findRole[$message[2]]]!=false;$getServerVar[error] **$username** You provided an **invalid** role]
$let[id;$findrole[$message[2]]]

$else

$if[$tolowercase[$message[1]]==remove]
$author[1;Autorole#COLON# remove;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Auto role has been disabled]
$setServerVar[ars;disabled]

$onlyIf[$getServerVar[ars]!=disabled;$getServerVar[error] **$username** Module was already disabled]

$else

$if[$tolowercase[$message[1]]==removebot]
$author[1;Autorole#COLON# removebot;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Auto role has been disabled for bots]
$setServerVar[arsb;disabled]

$onlyIf[$getServerVar[ars]!=disabled;$getServerVar[error] **$username** Module was never enabled]

$else

$if[$tolowercase[$message[1]]==addbot]
$author[1;Autorole#COLON# addbot;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** i will add \`$rolename[$get[id]]\`to bots who join the guild]
$setServerVar[arub;$get[id]]
$setServerVar[arsb;enabled]



$onlyIf[$roleExists[$findRole[$message[2]]]!=false;$getServerVar[error] **$username** You provided an **invalid** role]

$let[id;$findrole[$message[2]]]
$endif
$endif
$endif
$endif
$endif

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **$username** You are missing **\`manage roles\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **$username* I am missing **\`manage roles\`** permission]`}
