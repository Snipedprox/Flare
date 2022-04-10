module.exports = [{
name: "tickets",
$if: "v4",
aliases: "ticket",
usage: "ticket [deny/approve/solv/unsolve/staff/claim/unclaim/close/open/ban/unban/archive/unarchive/category/involve/uninvolve/transcript/help]",
code: `
$if[$toLowerCase[$message[1]]==deny]
$getServerVar[check] **$username** You have denied the ticket of **$usertag[$getChannelVar[topener]]**
**Reason:** $messageSlice[1]


$sendDM[**$getServerVar[error] $usertag[$getChannelVar[topener]]** Your ticket has been denied ( \`$usertag\` )
**Reason:** $messageslice[1];$getChannelVar[topener]]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyIf[$getChannelVar[tclaim]==yes;$getServerVar[error] **$username** This ticket has not been claimed yet by a staff member]
$onlyIf[$getChannelVar[tsolve]==no;$getServerVar[error] **$username** This ticket has already been solved]
$onlyIf[$getChannelVar[topener]!=undefined;$getServerVar[error] **$username** This ticket has no author]
$onlyIf[$messageSlice[1]!=;$getServerVar[error] **$username** You need to specify the reason for denying]
$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]
$onlyPerms[manageserver;]
$else

$if[$toLowerCase[$message[1]]==approve]
$getServerVar[check] **$username** You have approved the ticket of **$usertag[$getChannelVar[topener]]**
**Reason:** $messageSlice[1]


$sendDM[**$getServerVar[check] $usertag[$getChannelVar[topener]]** Your ticket has been approved ( \`$usertag\` )
**Reason:** $messageslice[1];$getChannelVar[topener]]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyIf[$getChannelVar[tclaim]==yes;$getServerVar[error] **$username** This ticket has not been claimed yet by a staff member]
$onlyIf[$getChannelVar[tsolve]==no;$getServerVar[error] **$username** This ticket has already been solved]
$onlyIf[$getChannelVar[topener]!=undefined;$getServerVar[error] **$username** This ticket has no author]
$onlyIf[$messageSlice[1]!=;$getServerVar[error] **$username** You need to specify the reason for approving]
$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]
$else

$if[$toLowerCase[$message[1]]==solve]
$getServerVar[check] **$username** You have solved the ticket of **$usertag[$getChannelVar[topener]]**
**Reason:** $messageSlice[1]
$setChannelVar[tsolve;yes]


$sendDM[**$getServerVar[check] $usertag[$getChannelVar[topener]]** Your ticket has been solved ( \`$usertag\` )
**Reason:** $messageslice[1];$getChannelVar[topener]]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyIf[$getChannelVar[tclaim]==yes;$getServerVar[error] **$username** This ticket has not been claimed yet by a staff member]
$onlyIf[$getChannelVar[tsolve]==no;$getServerVar[error] **$username** This ticket has already been solved]
$onlyIf[$getChannelVar[topener]!=undefined;$getServerVar[error] **$username** This ticket has no author]
$onlyIf[$messageSlice[1]!=;$getServerVar[error] **$username** You need to specify the reason for solving]
$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]


$else

$if[$toLowerCase[$message[1]]==unsolve]
$getServerVar[check] **$username** You have unsolved the ticket of **$usertag[$getChannelVar[topener]]**
**Reason:** $messageSlice[1]
$setChannelVar[tsolve;no]


$sendDM[**$getServerVar[error] $usertag[$getChannelVar[topener]]** Your ticket has been unsolved ( \`$usertag\` )
**Reason:** $messageslice[1];$getChannelVar[topener]]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyIf[$getChannelVar[tclaim]==yes;$getServerVar[error] **$username** This ticket has not been claimed yet by a staff member]
$onlyIf[$getChannelVar[tsolve]==yes;$getServerVar[error] **$username** This ticket has already been solved]
$onlyIf[$getChannelVar[topener]!=undefined;$getServerVar[error] **$username** This ticket has no author]
$onlyIf[$messageSlice[1]!=;$getServerVar[error] **$username** You need to specify the reason for unsolving]
$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]


$else

$if[$toLowerCase[$message[1]]==staff]
$color[1;$getservervar[color]]
$description[1;**$getServerVar[check] Ticket staff been set to <@&$findRole[$message[2]]>**]

$setServerVar[tstaff;$findRole[$message[2]]]



$onlyIf[$roleExists[$findRole[$message[2]]]!=false;$getServerVar[error] **Role is invalid**]
$onlyIf[$message[2]!=;$getServerVar[error] **Correct usage: $tolowercase[$commandname] < staff > < @role >**]
$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]

$else

$if[$toLowerCase[$message[1]]==claim]
$getServerVar[check] **$username** You have claimed the ticket of **$usertag[$getChannelVar[topener]]**
$setChannelVar[tclaim;yes]


$sendDM[**$getServerVar[check] $usertag[$getChannelVar[topener]]** Your ticket has been claimed ( \`$usertag\` );$getChannelVar[topener]]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyIf[$getChannelVar[tclaim]==no;$getServerVar[error] **$username** This ticket has already been claimed yet by a staff member]
$onlyIf[$getChannelVar[tsolve]==no;$getServerVar[error] **$username** This ticket has already been solved]
$onlyIf[$getChannelVar[topener]!=undefined;$getServerVar[error] **$username** This ticket has no author]
$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]
$else

$if[$toLowerCase[$message[1]]==unclaim]
$getServerVar[check] **$username** You have unclaimed the ticket of **$usertag[$getChannelVar[topener]]**
$setChannelVar[tclaim;no]


$sendDM[**$getServerVar[error] $usertag[$getChannelVar[topener]]** Your ticket has been unclaimed ( \`$usertag\` );$getChannelVar[topener]]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyIf[$getChannelVar[tclaim]==yes;$getServerVar[error] **$username** This ticket has already been unclaimed yet by a staff member]
$onlyIf[$getChannelVar[tsolve]==no;$getServerVar[error] **$username** This ticket has already been solved]
$onlyIf[$getChannelVar[topener]!=undefined;$getServerVar[error] **$username** This ticket has no author]
$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]
$onlyPerms[manageserver;]
$else

$if[$toLowerCase[$message[1]]==close]
$deletechannel[$channelid]


$sendDM[**$getServerVar[error] $usertag[$getChannelVar[topener]]** Your ticket has been deleted ( \`$usertag\` );$getChannelVar[topener]]


$onlyIf[$getChannelVar[topener]!=undefined;$getServerVar[error] **$username** This ticket has no author]
$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]

$else


$if[$toLowerCase[$message[1]]==timebomb]
$getServerVar[check] **$username** You have set the ticket autoclose to \`$message[2]$message[3]\`
$setServerVar[tbomb;$message[2]$message[3]]


$onlyIf[$tolowercase[$checkContains[$message[2];1;2;3;4;5;6;7;8;9;0]]==true;$getServerVar[error] **$username** Your cooldown must start with a number]
$onlyIf[$tolowercase[$checkContains[$message[3];s;h;w;d;m]]==true;$getServerVar[error] **$username** Your autoclose must end with \`s\`,\`h\`,\`w\`,\`d\`,\`m\` ]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyPerms[manageserver;]
$else


$if[$toLowerCase[$message[1]]==open]
$modifyChannelPerms[$authorid;$get[id];+viewchannel]
$modifyChannelPerms[$clientid;$get[id];+viewchannel]
$modifyChannelPerms[$guildid;$get[id];-viewchannel]


$getServerVar[check] **$username** You have opened a ticket <#$get[id]>
$setChannelVar[topener;$authorid;$get[id]]


$let[id;$createChannel[$guildID;T-$discriminator[$authorid];text;yes;$getServerVar[tcat]]]
$onlyIf[$getServerVar[tcat]!=;$getServerVar[error] **$username** ticket category has not been set yet]
$onlyIf[$getUserVar[tban]==no;$getServerVar[error] **$username** You are banned from ever opening tickets]

$else


$if[$toLowerCase[$message[1]]==ban]
$getServerVar[check] **$username** You have banned \`$usertag[$get[id]]\` from opening tickets**
$setUserVar[tban;yes;$get[id]]


$let[id;$findMember[$message[2];yes]]
$onlyIf[$getUserVar[tban;$findMember[$message[2]]]==no;$getServerVar[error] **$username** They have already been banned from opening tickets]
$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyIf[$message[2]!=;$getServerVar[error] **$username** Specify a **\`userid\`**,**\`mention\`**,**\`username\`**]
$onlyPerms[manageserver;]

$else


$if[$toLowerCase[$message[1]]==unban]
$getServerVar[check] **$username** You have unbanned \`$usertag[$get[id]]\` from opening tickets**
$setUserVar[tban;no;$get[id]]


$let[id;$findMember[$message[2];yes]]
$onlyIf[$getUserVar[tban;$findMember[$message[2]]]==yes;$getServerVar[error] **$username** They have already been unbanned from opening tickets]
$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyIf[$message[2]!=;$getServerVar[error] **$username** Specify a **\`userid\`**,**\`mention\`**,**\`username\`**]
$onlyPerms[manageserver;]
$else
$if[$tolowercase[$message[1]]==]
$getServerVar[check] **Ticket help menu**
\`\`\`js
deny - Deny a ticket.
approve - Approve a ticket.
solve - Solve a ticket.
unsolve - Unsolve a ticket.
staff - Set ticket staff role.
claim - Claim a ticket.
unclaim - Unclaim a ticket.
close - Close a ticket.
open - Open a ticket.
ban - Ban users from opening tickets.
unban - Unban users from opening tickets.
archive - Archive a ticket.
unarchive - Unarchive a ticket.
category - Set ticket category.
help - View ticket help menu.\`\`\`
$else
$if[$tolowercase[$message[1]]==help]
$getServerVar[check] **Ticket help menu**
\`\`\`js
deny - Deny a ticket.
approve - Approve a ticket.
solve - Solve a ticket.
unsolve - Unsolve a ticket.
staff - Set ticket staff role.
claim - Claim a ticket.
unclaim - Unclaim a ticket.
close - Close a ticket.
open - Open a ticket.
ban - Ban users from opening tickets.
unban - Unban users from opening tickets.
archive - Archive a ticket.
unarchive - Unarchive a ticket.
category - Set ticket category.
involve - Involve a member with the ticket.
uninvolve - Uninvolve a member with the ticket.
transcript - Get the ticket transcript.
help - View ticket help menu.\`\`\`
$else

$if[$toLowerCase[$message[1]]==archive]
$modifyChannelPerms[$authorid;$channelid;+viewchannel]
$modifyChannelPerms[$getChannelVar[topener];$channelid;-viewchannel]

$getServerVar[check] **$usertag** Archived this ticket


$sendDM[**$getServerVar[error] $usertag[$getChannelVar[topener]]** Your ticket has been archived ( \`$usertag\` );$getChannelVar[topener]]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyIf[$getChannelVar[topener]!=undefined;$getServerVar[error] **$username** This ticket has no author]
$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]
$onlyPerms[manageserver;]
$else

$if[$toLowerCase[$message[1]]==unarchive]
$modifyChannelPerms[$authorid;$channelid;+viewchannel]
$modifyChannelPerms[$getChannelVar[topener];$channelid;+viewchannel]

$getServerVar[check] **$usertag** Unarchived this ticket


$sendDM[**$getServerVar[check] $usertag[$getChannelVar[topener]]** Your ticket has been unarchived ( \`$usertag\` );$getChannelVar[topener]]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[tstaff]]==true;$getServerVar[error] **$username** You need to have a ticket staff role]
$onlyIf[$getChannelVar[topener]!=undefined;$getServerVar[error] **$username** This ticket has no author]
$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]
$onlyPerms[manageserver;]
$else
$if[$toLowerCase[$message[1]]==category]


$getServerVar[check] **$username** You have set ticket category to \`$message[2]\`
$setServerVar[tcat;$message[2]]
$onlyIf[$message[2]!=;$getServerVar[error] **$username** You need to specify the category]
$onlyPerms[manageserver;]
$else
$if[$tolowercase[$message[1]]==uninvolve]

$getServerVar[check] **$username**  Uninvolved **$usertag[$get[u]]** from the ticket

$modifyChannelPerms[$get[u];$get[id];-viewchannel;-attachfiles;-embedlinks]
$onlyIf[$get[u]!=$authorid;$getServerVar[error] $username** Specify the user id]

$let[u;$findUser[$message[2];yes]]
$let[id;$channelID]

$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]
$else
$if[$tolowercase[$message[1]]==involve]

$getServerVar[check] **$username** Involved **$usertag[$get[u]]** with the ticket

$modifyChannelPerms[$get[u];$get[id];+viewchannel;+attachfiles;+embedlinks]
$onlyIf[$get[u]!=$authorid;$getServerVar[error] $username** Specify the user id]

$let[u;$findUser[$message[2];yes]]
$let[id;$channelID]

$onlyIf[$channelCategoryID[$channelID]==$getServerVar[tcat];$getServerVar[error] **$username** This is an invalid ticket]
$else
$if[$tolowercase[$message[1]]==transcript]
$tranScript
$onlyPerms[manageserver;]
$endif 
$endif
$endif 
$endif
$endif 
$endif
$endif 
$endif
$endif 
$endif
$endif 
$endif
$endif
$endif
$endif
$endif 
$endif
$endif 
$endif
$endif`
},{
type: "timeout",
name: "tbomb",
code: `
$deletechannels[$timeoutdata[id]]`}]
