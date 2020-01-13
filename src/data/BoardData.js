const board = [
    {
        name: 'Caitlyn Liu',
        role: 'President',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/president.jpeg',
        email: 'caitlyn@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/caitlynmliu/',
        bio: "I am a 4th-year Math-CS Major. I joined TESC in my freshman year, initially serving on the Professional Development Committee, and served as VP External last year. As President of TESC, I do a lot of talking and a little of everything -- my team makes my job a breeze. I work with an exceptional team whom I share a vision with - to help connect students with as many resources as possible in UCSD’s Jacobs School of Engineering and to empower future engineers."
    },
    {
        name: 'Summer Joyce Batasin',
        role: 'VP External',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-external.jpeg',
        email: 'summer@tesc.ucsd.edu',
        bio: 'I am a third-year bioengineering: biotechnology major and this year’s VP External for TESC. I will be supporting our marketing, sponsorship, and design teams to help TESC put on some great events for UCSD’s engineering community. When I’m not doing research or studying, I love to bake and relax at the beach.',
        link: 'https://www.linkedin.com/in/summer-joyce'
    },
    {
        name: 'Subhankar Panda',
        role: 'VP Internal',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-internal.jpg',
        email: 'subhankar@tesc.ucsd.edu',
        bio: "I'm Panda, I'm a 4th year Math-CS major. I've been in TESC since my sophomore year, primarily working on the tech team. As VP Internal this year, my job is to maintain TESC's internal health and to provide our board members with the resources they need to be successful. Outside of TESC, you can find me at the rock climbing gym, watching Formula 1 or on the quest to find San Diego's best california burrito.",
        link: "https://www.linkedin.com/in/subhankar-panda/"
    },
    {
        name: 'Kyle Gillaspy',
        role: 'VP Finance',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-finance.jpg',
        link: 'https://www.linkedin.com/in/kylegillaspy/',
        email: 'kyle.gillaspy@tesc.ucsd.edu',
        bio: "I am a third-year computer science major with an interest in finance. As the VP Finance for TESC I help maintain the funding cycle and internal financial metrics to help maximize our support of the engineering community! In my free time I enjoy hiking and UEFA football."
    },
    {
        name: 'Sergio Villazon',
        role: 'VP Events',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-events.jpg',
        email: 'sergio@tesc.ucsd.edu',
        bio: "I am the incoming VP Events. I am a fourth-year computer science major. I've been involved with TESC since my freshman-year and am really excited to work with everyone this year!"
    },
    {
        name: 'Jimmy Dang',
        role: 'SD Hacks Director',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/sd-hacks-director.jpg',
        email: 'jimmy@tesc.ucsd.edu',
        bio: "My name is Jimmy Dang and I will be serving as the SD Hacks Director. I am a third-year computer science major who enjoys going out and getting food. You can also find me looking at dog pictures while playing Minecraft all day.",
        link: "https://www.linkedin.com/in/jimmydang1/"
    },
    {
        name: 'Alex Fong',
        role: 'Sponsorship Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/sponsorship-lead.JPG',
        link: 'https://www.linkedin.com/in/alexmatthewfong/',
        email: 'alex@tesc.ucsd.edu',
        bio: "I am a third-year mathematics/computer science major. As Sponsorship Lead, my job is to make sure that TESC’s events are financially well supported by exceeding the expectations of our wonderful sponsors. When I’m not on calls with our company representatives or studying, you can find me at data science and startup events!"
    },
    {
        name: 'Jocelyn Wei',
        role: 'ProDev Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/prodev-lead.jpeg',
        email: 'jocelyn@tesc.ucsd.edu',
        bio: "I'm a fourth-year computer science major from northern California. When I'm not at work on my laptop, you can find me at home or in Geisel, probably still on my laptop. I'm also TESC's ProDev chair - feel free to talk to me about Decaf!",
        link:"https://www.linkedin.com/in/joswei"
    },
    {
        name: 'Lisa Luo',
        role: 'Technical Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/tech-lead.jpg',
        bio: "I am Lisa Luo, and as the Technical Lead, I am responsible for developing websites and applications for TESC. I am a third-year computer science major and psychology minor. When I'm not obsessing over Marvel, musicals, and video games, I'm buying Lego sets, drinking coffee, and playing with jigsaw puzzles.",
        link: 'https://www.linkedin.com/in/lisa--luo/',
        email: 'lisa@tesc.ucsd.edu'
    },
    {
        name: 'Jasmine Hoang',
        role: 'Visual Design Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/visual-design-lead.HEIC',
        bio: "I'm a third-year computer science major and this year's Visual Design Lead! I'm in charge of designing websites and other media for TESC events. When I'm not doing that, I'm probably playing Minecraft or painting.",
        link: 'https://www.linkedin.com/in/jasminenhoang/',
        email: 'jasmine@tesc.ucsd.edu'
    },
    {
        name: 'Nicholas Fu',
        role: 'Outreach Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/outreach-lead.png',
        bio: "My name is Nicholas Fu and I will be serving as the Outreach Lead. I am a third-year Aerospace Engineering major who is in charge of TESC events like Enspire and Splash. In my free time I like to snowboard, drive my car, and watching basketball.",
        email: 'nicholas.fu@tesc.ucsd.edu',
        link: "https://www.linkedin.com/in/nicholas-fu-oc/"
    },
    {
        name: 'Cindy Alberto',
        role: 'Social Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/social-lead.jpeg',
        email: 'cindy@tesc.ucsd.edu',
        bio: "I am a third-year mechanical engineering major and Social Lead for TESC. Outside of school I enjoy reading, watching TV, and hanging out with friends."
    },
    {
        name: 'Ysabelle Lam',
        role: 'Council Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/council-lead.jpg',
        email: 'ysabelle@tesc.ucsd.edu',
        bio: "I'm a fourth-year aerospace engineering major with a minor in business. I joined TESC as the Council Lead with a hope to better serve the engineering community and facilitate an environment of collaboration and opportunities for academic and professional growth. Outside of school, I host outreach workshops for K-12 students, attend hackathons, or spend time outdoors.",
        link: 'https://www.linkedin.com/in/ysabellelam/'
    },
    {
        name: 'Katie Chen',
        role: 'Marketing Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/marketing-lead.jpg',
        email: 'katie@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/katie-c-5827aa121',
        bio: "I am a third-year majoring in cognitive science with a specialization in human-computer interaction and minoring in design at UCSD. As Marketing Lead, I am in charge of sharing stories, leading campaigns, and curating marketing material for TESC. When I have free time, I like to go on food adventures with friends, drink A LOT of boba, and work on my graphic design skills, to name a few things."
    },
    {
        name: 'Natalie Chen',
        role: 'HackXX Director & Project Spaces Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/project-spaces-lead.JPG',
        email: 'natalie@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/natalie-chen-6b68a2142/',
        bio: 'I am a fourth-year bioengineering major and I currently serve as the HackXX Director as well as the Project Spaces Lead. I enjoy cooking, baking, and cuddling with my dog Photon!'
    },
    {
        name: 'Thant Htoo Zaw',
        role: 'Internal Projects Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/internal-projects-lead.JPG',
        link: 'https://www.linkedin.com/in/htoo97/',
        email: 'thant@tesc.ucsd.edu',
        bio: "I'm Thant, a fourth-year Computer Engineering major. As Internal Projects Lead, I am always looking for ways to improve TESC's technical processes. I like planning events, which have ranged from SD Hacks and HackXX to a fashion show back in high school. These days, I'm either on road trips, playing board games or testing my limits for spicy food."
    },
    {
        name: 'Bobby Tatum',
        role: 'Financial Analyst',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/financial-analyst.jpg',
        email: 'robert@tesc.ucsd.edu',
        bio: 'I am a second-year computer science major serving as the Financial Analyst within TESC. I assist Kyle, the VP Finance, with building the budget, disbursing funds, and tracking expenditures. In my free time, I watch plenty of basketball, supporting the Lakers and Suns. In the future, I hope to use my degree to work on Wall Street.'
    },
    {
        name: 'Amal Eldick',
        role: 'Assistant HackXX Director',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/assistant-hackxx-director.jpg',
        email: "amal@tesc.ucsd.edu",
        bio: "I am a fourth-year math-CS major and this year's HackXX Assistant Director. Outside of school, I help organize other female-centric hackathons, and love finding new boba & dessert spots in San Diego!",
        link: "https://www.linkedin.com/in/amal-eldick/"
    }
]

export default board;