module.exports = {
  name: "poll", 
    type: 'interaction', 
    prototype: 'slash',
  code: `$sendMessage[{
    "content":"$slashOption[question]",
    "fetchReply" : true,
    "options": {
      "reactions" : ["✅","❎"],
      "interaction" : true
    }
}] 

$onlyBotPerms[addreactions;{
    "content":"I'm missing \`ADD_REACTIONS\` permission.",
    "ephemeral": "true", 
    "options": {
        "interaction": true
    }
}]`
}