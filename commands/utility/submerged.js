module.exports = {
name: "submerged",
$if: "v4",
code: `
$if[$tolowercase[$message[1]]==1]
$color[1;$getServerVar[color]]
$title[1;**Submerged**]
$description[1;
*"Hey, I said wake up... SCARLETT WAKE THE FUCK UP"*
I opened my eyes and saw Tony staring at me with an annoyed expression on his face.
*"Jesus Christ were you planning to sleep forever"* he said *"You know what mission you have today idiot"* he followed.
*"Yeah yeah, I have to see if I can retrieve shit from the wreck we found on our radar"*
I got up and put on my clothes, I saw Tony staring at me and I said *"Tony I swear to god if you don't stop staring at me while I'm tryna get dressed."*
*"I am not above hitting you Tony, I don't care how long we've been friends!"*
He turned around and walked to the deck. I was right behind him, we arrived at where I was gonna get info on my mission and we waited for our captain to arrive.
He came in and looked at me and then at Tony and said: *"Who had the mission again?"* 
*"Me sir!"* I said.
*"Ok, you know what you have to do?"*
*"Slightly sir"* 
*"Ok I’ll run it by you again: We found an old wreck, we need you to see if you can find anything, if you find anything of worth take it with you, if you can’t carry it just let us know through the radio."*
*"Got it sir, anything else?"*
*"Nope that’s all, go get ready"*]
$footer[1;You are on page 1/4]

$else

$if[$tolowercase[$message[1]]==2]
$color[1;$getServerVar[color]]
$title[1;**Submerged**]
$description[1;
:I got up and grabbed a diving suit from my locker, the goggles looked old but they should do fine, nothing wrong with slightly old goggles right?
While chatting with Tony about the mission I walked to the changing room to get ready for my mission, as soon as I finished I could grab an oxygen tank.
The suit felt a bit tight around my hips but it’d do fine.
I got done changing and got out of the changing room when I heard Tony yell:
*"Hey Scarlett! Come look at this shit!"*
*"What’s up?"* I said walking to where he was standing.
*"Look at the water, something is off about it’s movement"*
*"I don't see anything wrong with it Tony, you sure you doing alright"* I said
*"Why can’t you see?! I'm not saying it's obvious but doesn't something feel off to you?"*
*"It's water Tony, just plain old water okay?"* I replied annoyed and walked away, my mission was about to start and I had to be there
*"Alright Scarlett, grab your oxygen tank and get ready to jump in the water, we’ve slowed down to a halt."* I heard the captain say.
*"Yes sir"* I replied grabbing an oxygen tank and getting ready to jump into the deep blue abyss  below me waiting for the chance to swallow me alive.
I sat down on the side of the boat and waited for my orders.
*"See you soon guys!"*
*"See you soon Scarlett, good luck"* I heard Tony say.
*"Alright, all set? In T-Minus Three... Two... One... And jump in!"*
I leaned back and my vision was absorbed by the waves, I looked up and was relieved to see my rope was still attached.
I started swimming downwards, my light slowly illuminating a few meters in front of me.
I swam further and further down until I couldn't see the boat above me anymore, all I could see was the rope.
I had swam down but I found nothing, where was the damn wreck!
I looked up to find out if I could see the boat again, but all I saw was the rope dangling and  then descending.

*"Wait! Descending?!"* I thought as I looked at the rope slowly falling and falling down, had something happened to the captain? Had something happened to the rope? It couldn't be right? My mind was racing as I saw the end of the rope approach me, bite marks were visible on the end.]
$footer[1;You are on page 2/4]
$else

$if[$tolowercase[$message[1]]==3]
$color[1;$getServerVar[color]]
$title[1;**Submerged**]
$description[1;
How deep had I gone? How were there fishes here that could bite through a rope as thick and tough as that?  What was it even?
I was trying to get a hold of myself when I felt a presence behind me, if I looked back would it grant me some clarity on what was going on.
As soon as I tried to look at what I felt behind me I was dragged down with a strong pull, something had grabbed the rope and was dragging me into the deep and I couldn't do anything about it but watch as I was dragged deeper and deeper into the abyss below me.
I felt the pressure increase and increase when \*plop\*. 
My oxygen tank had detached...
** **
** **
*"Captain, I think you should get her back, she’s putting a lot of strain on the rope, she might break something."* I said
*"Hmm... You’re right."* The captain replied pressing a button activating the mechanism that would get Scarlett out of the water.
Something wasn't right, I had that same feeling that I had when the water seemed off.
The captain and I waited for Scarlett to emerge, when she did, I found out that my gut feeling was right...]
$footer[1;You are on page 3/4]


$else

$if[$tolowercase[$message[1]]==4]
$color[1;$getServerVar[color]]
$title[1;**Submerged**]
$description[1;
As soon as Scarlett emerged from the water she started going mad as if she was having a seizure.
*"Captain, did Scarlett ever tell you about any disorders she had, if so was it epilepsy or anything else that makes you sensitive to strobe lights?"* I said.
*"Can’t say she did, pretty sure her health record was clean."* he replied.
I ran to Scarlett and attempted to help but as I came closer it started looking less and less like a seizure and more like a panic attack or going crazy.
*"Captain, I don't think this is a seizure, I think this is a panic attack, maybe she’s hallucinating!"* I said
** **
** **
As I was trying to get lose from the rope dragging me down I realized I didn't have long before I’d run out of oxygen.
I struggled until I finally managed to get myself free and started swimming towards the surface, I knew I wouldn't make it I had to try.
*"This is how I’ll die...*" I thought as I swam up until somehow I had found fresh air, how had I reached the surface?
A few seconds ago I had seen the surface so far away from me that I wouldn't reach it in even multiple minutes.
*"Huh... What... How did I-"* I said when I heard a voice near me, it sounded like Tony.
*"Tony?"* I said looking where I heard the voice as soon as my vision became clear I saw him sitting near me.
*"Tony, how did I... reach the surface?"* I muttered.
*"What do you mean? You’ve been here for like five minutes."* he replied.
*"But I was dragged down, the rope was severed by some creatures teeth, something was behind me and was planning to ki-" I was interrupted by Tony.
*"You were hallucinating, you were still attached to the rope, nothing was severed."*
*"but-"*
*"Scarlett... Stop, we're going back, fuck the treasure, you're a member of the crew and we want you to be happy and healthy."*]
$footer[1;You are on page 4/4]
$image[1;https://cdn.discordapp.com/attachments/883632242004467712/885629836159254619/image0.png]


$endif
$endif
$endif
$endif





$argsCheck[>0;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < page ( 1 , 2 , 3 , 4) >**]`}