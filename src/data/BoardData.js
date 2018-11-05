const board = [
    {
        name: 'Colin Feeney',
        role: 'President',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/president.jpg',
        email: 'colin@tesc.ucsd.edu'
    },
    {
        name: 'Caitlyn Liu',
        role: 'VP External',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/vp-external.jpg',
        email: 'caitlyn@tesc.ucsd.edu',
        bio: 'I am a Junior studying Math - Computer Science at UCSD. I enjoy problem solving and love probability and statistics in particular. When I’m not busy sending emails for TESC, I can be found in the CSE Building on duty as a tutor or curled up in bed reading TechCrunch.',
        link: 'https://www.linkedin.com/in/caitlynmliu/'
    },
    {
        name: 'Nick Thomson',
        role: 'VP Internal',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/vp-internal.jpg',
        email: 'nick.thomson@tesc.ucsd.edu',
        bio: 'I am a 4th year Mathematics-Computer Science major graduating in spring quarter. As VP Internal my role is to ensure that TESC has the resources it needs for each of the board members to operate efficiently. I always try to maintain a portfolio of side projects to stay in touch with emerging technologies. In my spare time I skate and play pool.',

    },
    {
        name: 'Callie Boskin',
        role: 'VP Finance',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/vp-finance.jpg',
        email: 'callie@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/callie-boskin-a50b47132/'
    },
    {
        name: 'Jonathan Luck',
        role: 'VP Events',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/vp-events.jpg',
        email: 'jonathan@tesc.ucsd.edu',
        bio: 'I am a fourth-year computer science major and VP Events for TESC. Outside of engineering, I love reading, quizbowl, and event planning. I am interested in the intersection of cyber, intelligence, and national security.'
    },
    {
        name: 'David Ding',
        role: 'Sponsorship Lead',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/sponsorship-lead.jpg',
        link: 'https://www.linkedin.com/in/david-ding-65514712a/',
        email: 'david@tesc.ucsd.edu',
        bio: 'Hi my name is David Ding, and I currently serve as the Sponsorship Lead for TESC. My most previous role was director of SD Hacks 2018, which took place Oct 12th-14th this year. I am a third year electrical engineering student focusing on devices and materials. Besides TESC, I also do research in the neuroelectronics group and perform tasks such as microfabrication, animal experiments, and paper writing.'
    },
    {
        name: 'Sergio Villazon',
        role: 'ProDev Lead',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/prodev-lead.jpg',
        email: 'sergio@tesc.ucsd.edu',
        bio: `
        My name is Sergio Villazon I’m a third year computer science major from Bolivia.
        
        My interests are generally focused on back-development and data analysis. I really enjoy working with statistics and Python. Although lately I’ve been expanding more into front-end and visual design but I’ve got some ways to go in terms of artistic skill.\n
        
        Outside of school, I enjoy watching fantasy and Sci-Fi movies, reading, and playing board games`,
        link:"https://www.linkedin.com/in/sergio-villazon/"
    },
    {
        name: 'Bilguun Bulgan',
        role: 'HackXX Director',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/hackxx-director-2.jpg',
        email: 'bilguun@tesc.ucsd.edu',
        bio: 'I’m a 3rd year computer science student who loves building software and teaching. I’ve been a tutor for the CS department for 10 classes now and counting. When I’m not programming, tutoring or doing TESC related things, I’m usually found sketching.',
        link: "https://www.linkedin.com/in/bilguun-bulgan/"
    },
    {
        name: 'Alice Lee',
        role: 'HackXX Director',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/hackxx-director-1.jpg',
        email: 'alice@tesc.ucsd.edu',
        bio: 'I’m a fourth year majoring Cognitive Science with a specialization in Human Computer Interaction and minoring in Computer Science and Global Health. I’ll be directing HackXX with Bilguun this year because I’m passionate about women’s empowerment, especially in STEM fields. I’m also a Service Leader for Side by Side, a social justice oriented service-learning org on campus, and I work as a barista at Audrey’s.',
        link: 'https://www.linkedin.com/in/alice-y-lee/'
    },
    {
        name: 'Subhankar Panda',
        role: 'Technical Lead',
        img: 'https://ca.slack-edge.com/T1598AR7T-U82KB5FG8-f5ea3a482fa2-1024',
        bio: "I'm Panda, 3rd year Mathematics & Computer Science major at UCSD. As TESC's Tech Lead, I build the websites and applications that TESC and its events use. In my free time I like to watch Formula 1, explore San Diego and mindlessly scroll through my Twitter feed",
        link: 'https://www.linkedin.com/in/subhankar-panda/',
        email: 'subhankar@tesc.ucsd.edu'
    },
    {
        name: 'Cora Xing',
        role: 'Design Lead',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/visualdesign-lead.jpg',
        bio: "I'm a second-year computer science major who loves to design and solve problems for social impact. I help people troubleshoot technical problems as an UCSD Information Technology Services (ITS) networking technician, and I read Webtoons in my spare time.",
        link: 'https://www.linkedin.com/in/coraxyc/',
        email: 'cora@tesc.ucsd.edu'
    },
    {
        name: 'Andy Li',
        role: 'Outreach Lead',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/outreach-lead.jpg',
        bio: 'I am a 3rd year computer engineering major and the Outreach Lead for TESC. At school, I really enjoy learning new things and understanding the complicated logic of how complicated systems like computers work. In my spare time, I watch sports, mainly basketball and baseball, and browse the internet looking for something to make me laugh.',
        email: 'andy@tesc.ucsd.edu',
        link: ""
    },
    {
        name: 'Catherine Xia',
        role: 'Social Lead',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/social-lead.jpg',
        email: 'catherine@tesc.ucsd.edu',
        bio: "I am a second-year computer engineering major. As the Social Lead of TESC, I would like to bring more students into our engineering community and let them enjoy connecting with people having the same passion. Also, I like constantly challenging myself, aiming for a better self every day. In my free time, I enjoy TV shows, food hunting and travelling.",
        link: 'https://www.linkedin.com/in/fengbo-xia/'
    },
    {
        name: 'Cameron Wilkinson',
        role: 'Council Relations Lead',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/council-lead.jpg',
        email: 'cameron@tesc.ucsd.edu',
        bio: '4th year mechanical engineering major with a passion to solve problems. Let’s make UCSD the best it can be.',
        link: 'http://linkedin.com/in/cameron-wilkinson'
    },
    {
        name: 'Evon Hung',
        role: 'Marketing Lead',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/marketing-lead.jpg',
        email: 'evon@tesc.ucsd.edu',
        link: 'linkedin.com/in/evonhung',
        bio: `I’m a fourth-year communication major, double minor in business and design, who loves to connect people with people, and people with opportunities. I craft and share stories, and lead campaigns that reach thousands. You can find me in conversations with new people, taste-testing ramen joints, and adventuring all around San Diego.`
    },
    {
        name: 'Joshua Hedgpeth',
        role: 'Project Spaces Lead',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/projectspaces-lead.jpeg',
        email: 'joshua@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/joshua-hedgpeth',
        bio: "I am an Aerospace Engineering major in my second year at UCSD. I have been involved with the Triton Engineering Student Council on the Project Spaces committee since Fall 2017, and in Spring 2018 became the Project Spaces Lead. I am also a Lead Structures Engineer in Rocket Propulsion Laboratory at UCSD, an aerospace club on campus and one of TESC's many member organizations. I am from Sierra Madre, CA, and outside of school I like to play intramural basketball and practice the guitar in my free time."
    },
    {
        name: 'Nick Lin',
        role: 'Data Analyst',
        img: 'https://s3.us-east-2.amazonaws.com/tesc-website/board/data-analyst.jpg',
        link: 'https://www.linkedin.com/in/nick-lin-2771a4139/',
        email: 'nick.lin@tesc.ucsd.edu',
        bio: "I'm Nick Lin, TESC's Data Analyst. This is my second year in data science even though I’m a third year student. I was one of those working kids that you see in Chinese restaurants. Currently I’m mostly busy helping researchers, and doing my own projects. I’m a big fan of old Hong Kong movies and stand up."
    }
]

export default board;