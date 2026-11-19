const U=(i,w=800)=>`https://images.unsplash.com/${i}?auto=format&fit=crop&w=${w}&q=70`;
const CR=[
["Nadia Putri","nadiaputri","Beauty","Instagram",125,"photo-1494790108377-be9c29b29330","Jakarta"],
["Rafael Adrian","rafaeladrian","Fashion","Instagram",89,"photo-1500648767791-00dcc994a43e","Bandung"],
["Clara Michelle","claramichelle","Food","TikTok",210,"photo-1438761681033-6461ffad8d80","Surabaya"],
["Dimas Pratama","dimaspratama","Technology","YouTube",75,"photo-1507003211169-0a1dd7228f2d","Jakarta"],
["Alya Safira","alyasafira","Beauty","TikTok",180,"photo-1534528741775-53994a69daeb","Bandung"],
["Kevin Mahendra","kevinmahendra","Gaming","YouTube",95,"photo-1531746020798-e6953c6e8e04","Medan"],
["Jessica Tan","jessicatan","Travel","Instagram",145,"photo-1544005313-94ddf0286df2","Bali"],
["Fajar Ramadhan","fajarramadhan","Lifestyle","TikTok",65,"photo-1506794778202-cad84cf45f1d","Yogyakarta"],
["Olivia Amanda","oliviaamanda","Fashion","Instagram",320,"photo-1524504388940-b1c1722653e1","Jakarta"],
["Reza Akbar","rezaakbar","Technology","YouTube",110,"photo-1472099645785-5658abf4ff4e","Jakarta"],
["Celine Putri","celineputri","Food","Instagram",98,"photo-1517841905240-472988babdf9","Semarang"],
["Andre Wijaya","andrewijaya","Travel","TikTok",155,"photo-1463453091185-61582044d556","Bali"]
].map((a,i)=>({id:i+1,name:a[0],user:a[1],cat:a[2],plat:a[3],f:a[4],img:a[5],loc:a[6],er:(3.2+(i*7%30)/10).toFixed(1)}));
const PJ=[
["Glow Up Your Day","Lumea Skin","Beauty",2025,"photo-1522335789203-aabd1fc54bc9","A morning-routine series that turned skincare into a daily ritual people filmed themselves doing."],
["Everyday Moves","Stride Atelier","Fashion",2025,"photo-1490481651871-ab68de25d43d","Street-cast creators wore one capsule collection through ordinary city days."],
["Taste The Moment","Kopi Senja","Food & Beverage",2024,"photo-1504674900247-0877df9cc836","Food creators chased the first sip, the first bite and the story behind both."],
["Beyond The Ordinary","Nova Devices","Technology",2025,"photo-1518770660439-4636190af475","Honest hands-on films that showed a new phone line in real, unglamorous use."],
["Your Style, Your Story","Maison Rue","Fashion",2024,"photo-1469334031218-e382a71b716b","Ten creators styled the same jacket ten ways and told why it mattered to them."],
["Better Every Day","Habitly","Lifestyle",2024,"photo-1511707171634-5f897ff02aa9","Small-habit challenges documented across thirty days by everyday creators."],
["Explore More","Wanderly","Travel",2025,"photo-1488646953014-85cb44e25828","A travel-booking launch told through unplanned detours and local tips."],
["Play Beyond Limits","Volt Arena","Gaming",2024,"photo-1542751371-adc38448a05e","Live streams and a weekend tournament built around a new gaming peripheral line."]
].map((a,i)=>({id:i+1,name:a[0],brand:a[1],cat:a[2],year:a[3],img:a[4],desc:a[5]}));
const SV=[["Influencer & KOL Marketing","We match brands with relevant creators for campaigns that feel authentic and earn real engagement.","Matching brands with the right voices, so campaigns feel authentic and earn real engagement instead of passing views.",["Influencer discovery","Creator selection","Campaign planning","Collaboration management","Campaign evaluation"],"photo-1611162617213-7d7a39e9b1d7"],
["Creator Management","We discover, develop, and grow long-term relationships with talented creators.","Helping creators grow their presence, build their personal brand, and unlock collaboration opportunities.",["Creator discovery","Talent relationship management","Personal branding","Brand collaboration opportunities","Creator development"],"photo-1598550476439-6847785fcea6"],
["Content Production","We create scroll-stopping visual stories for social media and digital platforms.","Creating visually compelling content, built for the first second people give it on today's digital platforms.",["Photography","Videography","Short-form video","Social media content","Creative direction"],"photo-1492691527719-9d1e07e534b4"],
["Creative Campaign","We build campaign concepts and creative strategies that help brands stand out and get remembered.","Developing creative ideas and campaign strategies that make brands stand out.",["Campaign concept","Creative strategy","Content direction","Digital activation","Campaign execution"],"photo-1557804506-669a67965ba0"],
["Talent Affiliator & Talent Streamer","We place trained affiliate and live-streaming talents who turn attention into orders, from product briefing to tracked sales.","Ready-to-go affiliate and live-streaming talents who turn views into orders, briefed on your product and tracked down to the last sale.",["Affiliate talent sourcing","Live streamer matching","Product and script briefing","Commission and link tracking","Sales performance reporting"],"photo-1511512578047-dfb367046420"]];

const BR=[["Lumea Skin","Beauty"],["Stride Atelier","Fashion"],["Kopi Senja","Food & Beverage"],["Nova Devices","Technology"],["Maison Rue","Fashion"],["Habitly","Lifestyle"],["Wanderly","Travel"],["Volt Arena","Gaming"],["Aurelia Beauty","Beauty"],
["Bumi Botanica","Wellness"],["Rasa Nusantara","Food & Beverage"],["Orbit Mobile","Technology"],["Kala Denim","Fashion"],["Cloudnine Stay","Travel"],["Fitra Active","Sports"],["Mintly","Personal Care"],["Tokoloka","E-commerce"],["Playloop","Gaming"]];
const TS=[
["De Klikers didn't hand us a list of influencers, they handed us a story. Months later, people are still posting under our campaign tag.","Maya Anggraini","Brand Manager","Lumea Skin","photo-1573496359142-b8d87734a5a2"],
["The creators actually drank the coffee on camera and meant it. Outlet visits climbed 38% during the campaign month.","Bayu Setiawan","Marketing Lead","Kopi Senja","photo-1560250097-0b93528c311a"],
["Honest, hands-on films and zero scripted hype. Our new phone line finally felt real to people who had never heard of us.","Rina Kusuma","Head of Digital","Nova Devices","photo-1580489944761-15a19d654956"],
["Their streamers sold out our first controller batch in one weekend. The live sessions felt like a community, not an ad break.","Dion Hartono","Brand Director","Volt Arena","photo-1519085360753-af0119f7cbe7"],
["Ten creators, one jacket, ten completely different stories. The team protected each creator's voice and still hit every deadline.","Sinta Maharani","Creative Director","Maison Rue","photo-1573497019940-1c28c88b4f3e"],
["The affiliator program gave us tracked sales from week one, and the weekly reports told us exactly where to put the next rupiah.","Gilang Prakoso","Growth Lead","Habitly","photo-1507003211169-0a1dd7228f2d"]];
const FQ=[
["What does De Klikers do?","We are a creative and influencer marketing agency. We match brands with creators, manage talent, produce content, build creative campaigns, and place affiliate and live-streaming talents who drive sales."],
["How do you choose the right creators for my brand?","We start with your audience and goals, then shortlist creators whose content, values and community already fit your brand. You review the shortlist and have the final say before anything is booked."],
["How much does a campaign cost?","It depends on scope, number of creators and content formats. Most campaigns start around IDR 30M. Tell us your goal and budget range and we will propose a plan that fits it."],
["How long does a typical campaign take?","Most campaigns run four to eight weeks from brief to final report: about one week for strategy, one to two for creator selection and briefing, two to four for production and publishing, and a wrap-up review."],
["What is a Talent Affiliator and a Talent Streamer?","A Talent Affiliator promotes your products through short videos and unique tracked links, earning commission per sale. A Talent Streamer sells live on platforms like TikTok and Shopee Live. We recruit, brief and manage both for you."],
["Can we choose the creators ourselves?","Absolutely. Bring your own favorites or pick from our network of 50+ creators. We handle outreach, contracts, briefing and coordination either way."],
["How do you measure results?","Every campaign starts with clear goals such as reach, engagement, traffic or sales. You get honest reporting on what worked, what did not, and what we recommend next."],
["I'm a creator. How can I join De Klikers?","We would love to hear from you. Send us your details through the <a href=\"contact.html?type=creator\">creator form</a> with your platform, niche and a link to your best work, and our team will get back to you."]];
