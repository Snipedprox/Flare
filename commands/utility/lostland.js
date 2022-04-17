module.exports = {
name: "lostland",
$if: "v4",
code: `
$if[$tolowercase[$message[1]]==1]
$color[1;$getServerVar[color]]
$title[1;**Lost land**]
$description[1;
Waking up, I had no idea how my life would change that day.
We had a college trip that day, so I had to wake up early and get dressed. Soon, I set out for the daily bus, since my bike had had a flat tire for a week now. *"You are gonna be late, Apollo!"*, I could hear mom shouting from downstairs. *"Yeah, yeah, just the clothes are left"*, I replied. Mom murmured something, but I couldn't quite make out what it was. After packing up, I boarded the bus to Newtowns Garden. According to our plans, Kirlia and Brook would pick me up from there. They were my best friends since middle grade, and we were very close. I had a small crush on Kirlia, but that's just between you and me. Back to the story now.
The rest of the trip passed uneventfully. At last, I reached the Newtowns Garden. Sure enough, I found both Brook and Kirlia standing there. Brook was enthusiastically waving his hand towards me. 
*"Sup' nerd!"*
*"Brook, I'm not a nerd."*
*"But you ar-"*

Kirlia snapped in between.
*"Cut it off, you two! Brook, man c'mon he just arrived. We can do this later okay?"*, she said.
*"Fine, fine, I'm sorry."*, Brook apologized.
*"You packed your stuff?"*
*"Yeah I did. Can we go now?"*, I said.
Brook went forward without us.
*"Hey, Kirlia, uh thanks, I guess."*, I thanked Kirlia.
*"No problem."*, she smiled.
I stared into her eyes like a statue. Needless to say, she was looking beautiful today.
*"You coming?"*, she shouted after getting inside the cab.
I broke out of my trance-like state and went after her.
Little did I know, that this trip would change my life...]
$footer[1;You are on page 1/2]

$else

$if[$tolowercase[$message[1]]==2]
$color[1;$getServerVar[color]]
$title[1;**Lost land**]
$description[1;
After reaching the picnic spot, we met up with the rest of the groups. There were about 300-400 of us in total. While going to meet up with our class teacher, I was suddenly thrown off balance. I fell face-first onto the ground and cried out in pain.

I could hear a loud laugh behind me. I turned back and tried to look at the person who pushed me. I gasped.
I was staring into the face of a lifeless husk, all I saw was a figure made out of bones in front of me, bits of bloody flesh still tethered to its face, arms and legs.
The thing that horrified me most were its eyes, those empty sockets filled me with a sense of dread that I'd never felt before. Then, it suddenly spoke.

*"It shall be then, when the stone is destroyed, the chosen one shall bring an end to our suffering and a new life. 
"* 
I immediately passed out.
When I woke up later, surrounded by my classmates, I asked them what happened. They said that I suddenly passed out. In utter confusion about what just happened, I looked around hoping to find good ol' Brook and Kirlia around me, but I couldn't find them anywhere. It was creeping me out.
I suddenly heard someone laughing behind me.

I turned around. It was Clarisse, the class bully.]
$footer[1;You are on page 2/2]
$endif
$endif








$argsCheck[>0;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < page ( 1 , 2) >**]`}