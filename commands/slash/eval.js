module.exports = {
    name: "eval", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionFollowUp[$eval[$slashOption[code]]]

$interactionDefer

$onlyForIDs[$botOwnerID;896846485805744168;{
    "content": "This command is not for you, it's for my owner(s).",
    "ephemeral": true, 
    "options": {
        "interaction" : true
    }
}]

$onlyBotPerms[embedlinks;{
    "content": "I need \`EMBED_LINKS\` permission.",
    "ephemeral": true, 
    "options":{
        "interaction" : true
    }
}]`
  }