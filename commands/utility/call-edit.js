module.exports = {
name: "call-edit",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==]
$author[1;Call customization]
$color[1;$getservervar[color]]
$description[1;
**Welcome to call editor**
Here you can edit what your global chat looks like\

$getServerVar[rdot] **Color**
Customize your calling embed
$getServerVar[rdot] **Embed**
Enable or disable your embed\
$getServerVar[rdot] **Symbol**
Add a symbol when calling ( works for non embed )
$getServerVar[rdot] **Identity**
Could be dangerous, this shows your username in full ( non embed only )
$getServerVar[rdot] **Icon**
Change your icon ( embed only )]
$else
$if[$tolowercase[$message[1]]==color]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Caling embed color set to \`$message[2]\`]
$setGlobalUserVar[cecolor;$message[2]]

$onlyIf[$isValidHex[$message[2]]==true;$getServerVar[error] You provided an **invalid** hex code]
$onlyIf[$message[2]!=;$getServerVar[error] **Correct usage: $tolowercase[$commandname]  color < hex >**]

$onlyIf[$getGlobalUserVar[cembed]==on;$getServerVar[error] You need to enable **embeds**]

$else

$if[$tolowercase[$message[1]]==embed]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Set calling embed to \`$message[2]\`]
$setGlobalUserVar[cembed;$message[2]]

$onlyIf[$tolowercase[$checkContains[$message[2];on;off]]==true;$getServerVar[error] **Correct usage: $tolowercase[$commandname] embed < on / off >**]

$onlyIf[$message[2]!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname embed < on / off >**]


$else

$if[$tolowercase[$message[1]]==symbol]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Set calling symbol to $messageSlice[1]]
$setGlobalUserVar[cymbol;$messageSlice[1]]


$onlyIf[$message[2]!=;$getServerVar[error] **Correct usage: $tolowercase[$commandname]  symbol < symbol >**]


$onlyIf[$getGlobalUserVar[cembed]==off;$getServerVar[error] You need to  disable **embeds**]

$else

$if[$tolowercase[$message[1]]==identity]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Set calling identity to \`$message[2]\`]
$setGlobalUserVar[cidentity;$replaceText[$replaceText[$message[2];on;$usertag[$authorid]];off;$username]]

$onlyIf[$tolowercase[$checkContains[$message[2];on;off]]==true;$getServerVar[error] **Correct usage: $tolowercase[$commandname]  identity < on / off >]

$onlyIf[$message[2]!=;$getServerVar[error] **Correct usage: $tolowercase[$commandname]  identity < on / off >**]

$onlyIf[$getGlobalUserVar[cembed]==off;$getServerVar[error] You need to disable **embed**]
$else

$if[$tolowercase[$message[1]]==icon]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Caling embed icon set to ]
$image[1;$message[2]]
$setGlobalUserVar[cicon;$message[2]]

$onlyIf[$isValidlink[$message[2]]==true;$getServerVar[error] You provided an **invalid** image link]

$onlyIf[$message[2]!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname icon < image link >**]
$onlyIf[$getGlobalUserVar[cembed]==on;$getServerVar[error] You don't have **embeds** enabled]
$else
$author[1;Call customization]
$color[1;$getservervar[color]]
$description[1;
**Welcome to call editor**
Here you can edit what your global chat looks like\

$getServerVar[rdot] **Color**
Customize your calling embed
$getServerVar[rdot]**Embed**
Enable or disable your embed\
$getServerVar[rdot] **Symbol**
Add a symbol when calling ( works for non embed )
$getServerVar[rdot] **Identity**
Could be dangerous, this shows your username in full ( non embed only )
$getServerVar[rdot] **Icon**
Change your icon ( embed only )]
$endif
$endif
$endif
$endif
$endif
$endif`}