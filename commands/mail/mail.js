module.exports = [{
name: "maildelete",
code: `
$setGlobalUserVar[mail$messageo;;$authorID]
  $setGlobalUserVar[mail$messaged;;$authorID]
  $setGlobalUserVar[mail$message;;$authorID]
  $setGlobalUserVar[not;;$authorID]

:incoming_envelope: **Deleted the mail from \`$getGlobalUserVar[mail$messageo;$authorID]\`**`
},{
name: "inbox",
$if: "v4",
code: `
$sendmessage[{newEmbed:{title:$username's inbox} {color:WHITE} {description: Your mails
$if[$getGlobalUserVar[not;$authorID]!=]
:warning: **Warning**
Your mailbox is full! All mails send to you from now on wont get recieved!
$endif
$if[$getGlobalUserVar[mail1;$authorID]!=]
:mailbox_with_mail: **1.**
From \`$getGlobalUserVar[mail1o;$authorID]\`
Date \`$getGlobalUserVar[mail1d;$authorID]\`
$endif
$if[$getGlobalUserVar[mail2;$authorID]!=]
:mailbox_with_mail: **2.**
From \`$getGlobalUserVar[mail2o;$authorID]\`
Date \`$getGlobalUserVar[mail2d;$authorID]\`
$endif
$if[$getGlobalUserVar[mail3;$authorID]!=]
:mailbox_with_mail: **3.**
From \`$getGlobalUserVar[mail3o;$authorID]\`
Date \`$getGlobalUserVar[mail3d;$authorID]\`
$endif
$if[$getGlobalUserVar[mail4;$authorID]!=]
:mailbox_with_mail: **4.**
From \`$getGlobalUserVar[mail4o;$authorID]\`
Date \`$getGlobalUserVar[mail4d;$authorID]\`
$endif
$if[$getGlobalUserVar[mail5;$authorID]!=]
:mailbox_with_mail: **5.**
From \`$getGlobalUserVar[mail5o;$authorID]\`
Date \`$getGlobalUserVar[mail5d;$authorID]\`
$endif} {footer:$username#$discriminator[$authorID]}};;no]`
},{
name: "mail",
$if: "v4",
code: `
$sendmessage[{newEmbed:{title:Mail $message} {color:WHITE} {description:#COLON#incoming_envelope#COLON# **Detials**
Sender: \`$getGlobalUserVar[mail$messageo;$authorID]\`
Date: \`$getGlobalUserVar[mail$messaged;$authorID]\`
Content: 
**$getGlobalUserVar[mail$message;$authorID]**} {footer:$username#$discriminator[$authorID]}};no]`},{
name: "dmmail",
$if: "v4",
code: `
$if[$getGlobalUserVar[mail5;$findUser[$message[1]]]==]

$setGlobalUserVar[amail;$sum[$getGlobalUserVar[amail;675316333780533268];1];675316333780533268]

  $sendmessage[{newEmbed:{title:Send mail}{color:WHITE}{description:You send a mail!\n#COLON#incoming_envelope#COLON# **Details**
Date#COLON# \`$formatDate[$dateStamp]\`
Receiver#COLON# \`$userTag[$findUser[$message[1]]]\`
Content#COLON#
**$messageslice[1]**}{footer:$userTag[$findUser[$message[1]]]}};no]

$if[$getGlobalUserVar[mail1;$findUser[$message[1]]]==]
$setGlobalUserVar[mail1;$messageslice[1];$findUser[$message[1]]]
$setGlobalUserVar[mail1o;$userTag[$authorID];$findUser[$message[1]]]
$setGlobalUserVar[mail1d;$formatDate[$dateStamp];$findUser[$message[1]]]

$elseif[$getGlobalUserVar[mail2;$findUser[$message[1]]]==]
$setGlobalUserVar[mail2;$messageslice[1];$findUser[$message[1]]]
$setGlobalUserVar[mail2o;$userTag[$authorID];$findUser[$message[1]]]
$setGlobalUserVar[mail2d;$formatDate[$dateStamp];$findUser[$message[1]]]
$endelseif

$elseif[$getGlobalUserVar[mail3;$findUser[$message[1]]]==]
$setGlobalUserVar[mail3;$messageslice[1];$findUser[$message[1]]]
$setGlobalUserVar[mail3o;$userTag[$authorID];$findUser[$message[1]]]
$setGlobalUserVar[mail3d;$formatDate[$dateStamp];$findUser[$message[1]]]
$endelseif

$elseif[$getGlobalUserVar[mail4;$findUser[$message[1]]]==]
$setGlobalUserVar[mail4;$messageslice[1];$findUser[$message[1]]]
$setGlobalUserVar[mail4o;$userTag[$authorID];$findUser[$message[1]]]
$setGlobalUserVar[mail4d;$formatDate[$dateStamp];$findUser[$message[1]]]
$endelseif

$elseif[$getGlobalUserVar[mail5;$findUser[$message[1]]]==]
$setGlobalUserVar[mail5;$messageslice[1];$findUser[$message[1]]]
$setGlobalUserVar[mail5o;$userTag[$authorID];$findUser[$message[1]]]
$setGlobalUserVar[mail5d;$formatDate[$dateStamp];$findUser[$message[1]]]
$endelseif
$endif

$else

#COLON#incoming_envelope#COLON# This user has no space left in their inbox!

$setGlobalUserVar[not;full;$findUser[$message[1]]]

$endif`}]