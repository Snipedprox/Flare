module.exports = {
        name:"timeout",
        type: 'interaction', 
        prototype: 'slash', 
        code:`$interactionreply[$username timeouted $userTag[$slashOption[user]] with $replaceText[$interactionData[options.data[3].value];undefined;no reason] <t:$truncate[$divide[$get[time];1000]]:R>, timeout will be removed.]

$let[time;$timeoutMember[$guildId;$slashOption[user];$slashOption[time]$slashOption[unit_of_time];yes;$replaceText[$interactionData[options.data[3].value];undefined;no reason]]]

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

$onlyBotPerms[moderatemembers;{
    "content":"I need \`MODERATE_MEMBERS\` permission.",
    "options":{
        "interaction" : true
    }
}]`
    }