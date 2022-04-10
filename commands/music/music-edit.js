module.exports = {
name: "music-edit",
$if: "v4",
usage: "music-edit [pause/resume/skip/stop/remove/errorjoin/errorqueue/errorloop/erroruser/errorsameuser/dc/leftvc/sendondleftvc]",
code: `
$author[1;Edited#COLON#$tolowercase[$message[1]];$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Edited \`$tolowercase[$message[1]]\`
**New error message:** $messageslice[1]]

$setServerVar[$message[1];$messageslice[1]]
$onlyIf[$messageslice[1]!=;**$getservervar[error] $username** Specify a new error]


$onlyIf[$tolowercase[$checkContains[$message[1];pause;resume;skip;stop;remove;errorjoin;errorqueue;errorloop;erroruser;errorsameuser;dc;leftvc;sendondleftvc;join]]==true;$getServerVar[error] You provided an **invalid** component
\`\`\`js
pause,resume,skip,stop,remove,errorjoin,errorqueue,errorloop,erroruser,errorsameuser,dc,leftvc,sendondleftvc\`\`\`

$getServerVar[check] **Sub commands with usuable components**
\`\`\`js
remove - {d-amount} 
errorsameuser - {voice}
join - {join}
errorloop - {amount}\`\`\`]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]`}