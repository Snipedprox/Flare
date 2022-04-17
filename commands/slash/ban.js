module.exports = {
        name: "ban", 
        type: 'interaction',
        prototype: 'slash', 
        code: `$ban[$findUser[$slashOption[user];no];$guildID;$replaceText[$interactionData[options.data[2].value];undefined;0];$replaceText[$interactionData[options.data[1].value];undefined;no reason.]]
        
$interactionFollowUp[$userTag[$slashOption[user]] banned in the server for $replaceText[$interactionData[options.data[2].value];undefined;permanent] days with $replaceText[$interactionData[options.data[1].value];undefined;no reason], by $userTag.]

$interactionDefer

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$slashOption[user]]];{
  "content":"The user is higher than me on role position.",
    "options":{
        "interaction" : true
    }
}]
    $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$slashOption[user]]];{
    "content":"The user is higher than you on role position.",
    "options":{
        "interaction" : true
    }
}]

$onlyPerms[ban;{
    "content":"You're missing \`BAN_MEMBERS\` permission.",
    "ephemeral": true, 
    "options": {
        "interaction": true
    }
}]

$onlyBotPerms[ban;{
    "content":"I'm missing \`BAN_MEMBERS\` permission.",
    "ephemeral": true, 
    "options": {
        "interaction": true
    }
}]`
}