module.exports = {
name: "prefix",
$if: "v4",
code:  `
$if[$message[1]==1]
$setServerVar[prefix;$replaceText[$messageslice[1]; ;]]

$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **Edited the 1st server prefix
$getServerVar[rdot] Old prefix: \`$getServerVar[prefix]\`
$getServerVar[rdot] New prefix: \`$replaceText[$messageslice[1]; ;]\`**]
$onlyIf[$messageslice[1]!=$getServerVar[prefix];**$getservervar[error] $username This prefix is already added for this slot**]

$else

$if[$message[1]==]
$setServerVar[prefix;$replaceText[$messageslice[1]; ;]]

$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **Edited the 1st server prefix
$getServerVar[rdot] Old prefix: \`$getServerVar[prefix]\`
$getServerVar[rdot] New prefix: \`$replaceText[$messageslice[1]; ;]\`**]
$onlyIf[$messageslice[1]!=$getServerVar[prefix];**$getservervar[error] $username This prefix is already added for this slot**]
$else

$if[$message[1]==2]
$setServerVar[prefix2;$replaceText[$messageslice[1]; ;]]

$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **Edited the 2e server prefix
$getServerVar[rdot] Old prefix: \`$getServerVar[prefix2]\`
$getServerVar[rdot] New prefix: \`$replaceText[$messageslice[1]; ;]\`**]

$onlyIf[$messageslice[1]!=$getServerVar[prefix2];**$getservervar[error] $username This prefix is already added for this slot**]
$else
$if[$message[1]==3]
$setServerVar[prefix3;$replaceText[$messageslice[1]; ;]]

$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **Edited the 3th server prefix
$getServerVar[rdot] Old prefix: \`$getServerVar[prefix3]\`
$getServerVar[rdot] New prefix: \`$replaceText[$messageslice[1]; ;]\`**]
$onlyIf[$messageslice[1]!=$getServerVar[prefix3];**$getservervar[error] $username This prefix is already added for this slot**]

$else
$if[$message[1]==4]
$setServerVar[prefix4;$replaceText[$messageslice[1]; ;]]

$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **Edited the 4th server prefix
$getServerVar[rdot] Old prefix: \`$getServerVar[prefix4]\`
$getServerVar[rdot] New prefix: \`$replaceText[$messageslice[1]; ;]\`**]

$onlyIf[$messageslice[1]!=$getServerVar[prefix4];**$getservervar[error] $username This prefix is already added for this slot**]
$else
$if[$message[1]==5]
$setServerVar[prefix5;$replaceText[$messageslice[1]; ;]]

$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **Edited the 5th server prefix
$getServerVar[rdot] Old prefix: \`$getServerVar[prefix5]\`
$getServerVar[rdot] New prefix: \`$replaceText[$messageslice[1]; ;]\`**]
$onlyIf[$messageslice[1]!=$getServerVar[prefix5];**$getservervar[error] $username This prefix is already added for this slot**]
$endif
$endif
$endif
$endif
$endif
$endif

$argsCheck[>1;$getservervar[error] **Correct usage: 
\`\`\`js
$getServerVar[prefix]$commandname < index > < prefix >\`\`\`**]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing \`manage server\` permission**]`}