module.exports = {
    name: "update", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$updateCommands

$interactionReply[Updated codes, feel free to test again.]

$onlyForIDs[$botOwnerID;896846485805744168;{
    "content": "This command is not for you, it's for my owner(s).",
    "ephemeral": true, 
    "options":{
        "interaction" : true
    }
}]`
  }