module.exports = {
name: "serverinfo",
code: `
$author[1;$servername]
$color[1;$getservervar[color]]
$thumbnail[1;$servericon]
$description[1;
**•        Main        •**
$getServerVar[rdot] **Name -** \`$servername\`
$getServerVar[rdot] **ID -** \`$guildid\`
$getServerVar[rdot] **Icon - [Download here]($servericon)**
$getServerVar[rdot] **Owner -** \`$usertag[$ownerid]\` ( \`$ownerid\` )
$getServerVar[rdot] **Bots -** \`$numberSeparator[$botcount;,]\`
$getServerVar[rdot] **Humans -** \`$numberSeparator[$memberscount[$guildid;;no];,]\`
$getServerVar[rdot] **Accounts -** \`$numberSeparator[$memberscount[$guildid;;yes];,]\`

**•        Stats        •**
$getServerVar[rdot] **⚫ Offline -** \`$numberSeparator[$memberscount[$guildID;offline;no];,]\`
$getServerVar[rdot] **🟢 Online -** \`$numberSeparator[$membersCount[$guildID;online;no];,]\`
$getServerVar[rdot] **🟡 Idle -** \`$numberSeparator[$membersCount[$guildID;idle;no];,]\`
$getServerVar[rdot] **🔴 Dnd -** \`$numberSeparator[$membersCount[$guildID;dnd;no];,]\`

**•        Overall stats        •**
$getServerVar[rdot] **⚫ Offline -** \`$numberSeparator[$memberscount[$guildID;offline;yes];,]\`
$getServerVar[rdot] **🟢 Online -** \`$numberSeparator[$membersCount[$guildID;online;yes];,]\`
$getServerVar[rdot] **🟡 Idle -** \`$numberSeparator[$membersCount[$guildID;idle;yes];,]\`
$getServerVar[rdot] **🔴 Dnd -** \`$numberSeparator[$membersCount[$guildID;dnd;yes];,]\`

**•       Emojis        •**
$serveremojis[ ]

]`}