module.exports = {
    name: "exec", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionFollowUp[$exec[$slashOption[code]]]

$interactionDefer

$onlyForIDs[$botOwnerID;896846485805744168;{
    "content": "This command is not for you, it's for my owner(s).",
    "ephemeral": true, 
    "options": {
        "interaction" : true
    }
}]`
  }