import React from 'react';

const attendingOrgs = [
    {
        name: 'Association of Computing Machinery',
        acronym: 'ACM',
        description: 'The Association for Computing Machinery is UCSD’s largest tech organization, with over 1,000 members. We are an org dedicated to helping students interested in computing develop their technical skills and professional networks. Not only are we coders, engineers, designers, and startup CEOs, we are also a community of gamers, boba addicts, bookworms, and much more. Regardless of background or technical experience, anyone is welcome to join the ACM community!',
        department: 'Computer Science & Engineering, Electrical & Computer Engineering',
        link: 'https://acmucsd.com',
        email: '',
        day: 'Monday'
    },
    {
        name: 'ACM Cyber',
        description: 'ACM Cyber is a sub-org of ACM UC San Diego Chapter with a special interest in cybersecurity! We have teams that will compete in various CTFs but we’ll also host workshops, industry panels, seminars, etc. throughout the year. We welcome everyone -- no experience or knowledge of cybersecurity is needed to join!',
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering, Data Science',
        link: 'https://www.facebook.com/cyberucsd',
        email: '',
        day: 'Monday'
    },
    {
        name: 'Data Science Student Society ',
        acronym: 'DS3',
        description: 'The Data Science Student Society, or DS3, is a student organization created in order to be a hub for all students interested in Data Science, regardless of their skill level or major. The goal of our organization is to provide resources and a community where UC San Diego students can learn new data science tools and further their career. We hold both social and professional events throughout the school year where students can connect with other students with similar interests, meet with industry professionals, and build their data science skill set.',
        department: 'Data Science',
        link: 'https://www.facebook.com/DS3UCSD/',
        email: '',
        day: 'Monday'
    },
    {
        name: 'ECE Undergraduate Student Council',
        acronym: 'ECE USC',
        description: 'ECE USC strives to bridge the gap between the ECE department and student body, and enrich the ECE experience for undergraduates though various mentorship, community building, professional development, etc... events and programs.',
        department: 'Electrical and Computing Engineering',
        link: 'http://eceusc.ucsd.edu',
        email: '',
        day: 'Monday'
    },
    {
        name: 'Eta Kappa Nu',
        acronym: 'HKN',
        description: 'Eta Kappa Nu (HKN) at UCSD is highly active in Jacobs School of Engineering community, hosting 80+ events an academic year. We strive to develop the technical, academic, and professional skills of the engineering community. Members and alumni form a tight knit community where we help each other grow and give back to the broader engineering community. Our member base goes back to 2005, and has been rapidly growing. We are now inducting over 70 members a school year, and hope you can join us soon!',
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering, Mathematics and Computer Science, Cognitive Science',
        link: 'https://hkn.ucsd.edu/',
        email: 'hkn@eng.ucsd.edu',
        day: 'Monday'
    },
    {
        name: 'Institute of Electrical and Electronics Engineers',
        acronym: 'IEEE',
        description: "IEEE UC San Diego Student Branch is part of a larger organization that spans internationally and focuses on innovating technology. Here at UCSD, our organization offers multiple projects and workshops throughout the year as well as other events, such as socials and professional development. Come check us out if you're interested in gaining project experience or even just to make new friends!",
        department: 'All',
        link: 'http://ieeeucsd.org',
        email: '',
        day: 'Monday'
    },
    {
        name: 'Project in a Box',
        acronym: 'PiB',
        description: "We. Build. Projects. Our goal at Project in a Box is to change the educational paradigm of our engineering community at UC San Diego to ensure our engineers are trained and leading in skills sought out by industry. Identifying the lack of hands-on skills in our students, we started with developing self-contained project kits that taught students specific hands-on skills to complement their theoretical classes. We identify the real world problems and develop viable and practical innovative engineering solutions that meet client needs. Since then, we've launched programs, courses, research projects, and much more!",
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering',
        link: 'https://www.pibucsd.org/',
        email: 'pib@eng.ucsd.edu',
        day: 'Monday'
    },
    {
        name: 'Women in Computing',
        acronym: 'WIC',
        description: "We're coders and engineers - both women and men - who support the female presence in computing. We run events, from tech talks to socials, and provide opportunities for female engineers to connect and succeed.",
        department: 'Computer Science and Engineering',
        link: 'https://wic.ucsd.edu/',
        email: '',
        day: 'Monday'
    },
    {
        name: 'Amateur Radio Club at UCSD (KK6UC)',
        acronym: '',
        description: "The Amateur Radio Club at UCSD (KK6UC) is a student club that explores wireless communications through FCC radio licensing classes, maintains a high-frequency radio room in Atkinson Hall and a repeater on Mt. Soledad, and seeks connections with industry professionals who utilize radio in their lines of work.",
        department: 'Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering',
        link: 'http://kk6uc.ucsd.edu',
        email: '',
        day: 'Tuesday'
    },
    {
        name: 'Biomedical Engineering Society',
        acronym: 'BMES',
        description: "The Biomedical Engineering Society (BMES) at the University of California, San Diego (UCSD) is dedicated to enriching the undergraduate experience for those in the Department of Bioengineering and for those interested in Biomedical Engineering by fostering personal growth and professional development. We encourage undergraduates to get involved with their education and start making a difference today!",
        department: '',
        link: 'https://bmes.ucsd.edu/',
        email: '',
        day: 'Tuesday'
    },
    {
        name: 'Chem-E-Car Project',
        acronym: 'Chem-E-Car',
        description: "The ChemE Car Project is a non-profit organization whose main objective is to design and develop a miniature-sized vehicle that runs exclusively on chemical reactions.",
        department: 'Bioengineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering',
        link: 'http://chemecar.ucsd.edu',
        email: 'chemecar.ucsd@gmail.com',
        day: 'Tuesday'
    },
    {
        name: 'International Society of Pharmaceutical Engineering',
        acronym: 'ISPE',
        description: <>Our student chapter, active since 2009, is a subset of a global not-for-profit association that strives to advance pharmaceutical manufacturing professionals in their industry. The primary goal of UCSD ISPE is to educate and connect its student members with the biotechnology & biomedical industry by providing them with professional development opportunities. We do this through events such as: 
            <ol>
                <li>Interview & resume building workshops</li>
                <li>Info sessions</li>
                <li>Internship opportunities</li>
                <li>Industry tours</li>
                <li>Mentorship Program</li>
                <li>Leadership Development Program</li>
            </ol>
            Previous events have included industry tours at Genentech and Life Technologies, internships at Abbott Vascular, attendance at the ALA Conference, and discussion panel with Biosite's top scientists.</>,
        department: 'Bioengineering',
        link: 'http://ispeucsd.weebly.com/',
        email: '',
        day: 'Tuesday'
    },
    {
        name: 'NanoEngineering & Technology Society',
        acronym: 'NETS',
        description: "We are an undergraduate student organization dedicated to building and supporting an inclusive community around nano science and engineering, involving students, faculty, and corporate affiliates. We are open to anyone with an interest in learning more about this exciting field. As part of our mission, we conduct social, academic, networking, and professional development events. In addition, we support multiple research and outreach opportunities. Join us and be alongside some of the most innovative minds at UCSD in the new and exciting field of NanoEngineering!",
        department: 'NanoEngineering',
        link: 'http://nets.ucsd.edu/',
        email: 'https://www.facebook.com/NETSUCSD',
        day: 'Tuesday'
    },
    {
        name: 'Society of Civil and Structural Engineers',
        acronym: 'SCSE',
        description: "The Society of Civil and Structural Engineers (SCSE) is the UC San Diego student chapter of the American Society of Civil Engineers (ASCE) and the Structural Engineers Association of San Diego (SEAOSD). Our purpose is to supplement the engineering education of UCSD students, promote the personal and professional development of our members, and improve the community of which we are part through outreach and community service. We accomplish this mission through various professional and social events, project teams, and outreach programs.",
        department: 'Structural Engineering',
        link: 'http://scse.ucsd.edu',
        email: '',
        day: 'Tuesday'
    },
    {
        name: 'The American Institute of Chemical Engineers',
        acronym: 'AICHE',
        description: "AIChE at UCSD is an organization that brings together undergraduate and graduate chemical engineering students and introduces them to employment and education opportunities post-graduation. Each quarter, AIChE at UCSD invites industry representatives from a wide range of specialties (e.g. petroleum, alternative energy, biotechnology, nanotechnology, materials, semiconductor, and consulting) to speak at our seminars. At these seminars, representatives often speak about what their sector of industry does and explain the skill sets their engineers and scientists need.",
        department: 'NanoEngineering',
        link: 'https://aiche.ucsd.edu/index.html',
        email: '',
        day: 'Tuesday'
    },
    {
        name: 'Undergraduate Bioinformatics Club',
        acronym: 'UBIC',
        description: "UBIC is a vibrant community of undergraduate bioinformaticians serving to expand, strengthen, and support UCSD's bioinformatics majors. we have been organizing chalk talk series for bioinformatics research, a bioinformatics bootcamp for freshman & sophomore, and also bioinformatics conference annually.",
        department: 'Bioengineering',
        link: 'https://www.facebook.com/ubic.ucsd',
        email: '',
        day: 'Tuesday'
    },
    {
        name: 'American Institute of Aeronautics and Astronautics',
        acronym: 'AIAA',
        description: "The American Institute of Aeronautics and Astronautics at UCSD (AIAA@UCSD) is a pre-professional student organization here to serve our members by providing an inclusive and supportive group that emphasizes mentorship, learning, and interconnectivity. Our goal is to prepare and empower our members for a future in aerospace. We aim to connect students to a national network of industry and academic professionals, hiring managers, and high-profile members of the aerospace community.",
        department: 'Mechanical and Aerospace Engineering',
        link: 'http://aiaa.ucsd.edu/about.html',
        email: 'iwidjaja@ucsd.edu',
        day: 'Wednesday'
    },
    {
        name: 'Design/Build/Fly (American Institute of Aeronautics and Astronautics)',
        acronym: 'DBF (AIAA)',
        description: "The Design/Build/Fly (DBF) project team designs, fabricates, and demonstrates the flight capabilities of an electric-powered, radio-controlled aircraft that can best meet a given mission profile. The goal is a balanced design possessing good demonstrated flight handling qualities and practical manufacturing requirements while providing high vehicle performance. The contest provides a real-world aircraft design experience for engineering students by giving them the opportunity to validate their analytical studies. The competition is hosted by the American Institute of Aeronautics and Astronautics (AIAA) engineering society.",
        department: 'Mechanical and Aerospace Engineering',
        link: 'http://dbf.ucsd.edu/',
        email: '',
        day: 'Wednesday'
    },
    {
        name: 'Construction Management',
        acronym: 'CMAA',
        description: "The mission of the Construction Management Association of America at UCSD is to promote the profession of construction management at UCSD, and to provide students with resources and professional development opportunities in the construction industry.",
        department: 'Structural Engineering',
        link: '',
        email: '',
        day: 'Wednesday'
    },
    {
        name: 'Rocket Propulsion Laboratory',
        acronym: 'RPL',
        description: "The Rocket Propulsion Laboratory (RPL) is a diverse, multidisciplinary team of passionate students with the common goal to design, test, and launch unique and innovative rockets.  We believe that everyone, no matter their major, skill level, or origins, should have the opportunity to pursue their dreams among the stars in a friendly, supportive, hands-on learning environment.  To that end, we seek to make RPL a team where everyone feels comfortable to think outside the box and develop strong professional, technical, and social skills while crafting the most complex and challenging rocket systems.",
        department: 'Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, Structural Engineering, Physics, Chemistry, Chemical Engineering',
        link: 'http://rocketproplab.org',
        email: 'info@rocketproplab.org',
        day: 'Wednesday'
    },
    {
        name: 'Students for the Exploration and Development of Space',
        acronym: 'SEDS',
        description: "We are a bunch of undergrad and graduate students that are currently designing a variety of liquid fueled rocket engines, a cube sat, and a rocket lander. We test rocket engines on our mobile test stand and are finishing off a liquid bi-propellant rocket.",
        department: 'Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, Structural Engineering',
        link: 'https://www.sedsucsd.org/',
        email: 'seds.ucsd@gmail.com',
        day: 'Wednesday'
    },
    {
        name: 'Triton Racing',
        acronym: 'TR',
        description: "The Society of Automotive Engineers at UC San Diego, or Triton Racing, is dedicated to the design, fabrication and testing of an open-wheel race car for the FSAE competition held this year in Fontana, California. Triton Racing places students in an optimal position to gain hand-on knowledge while applying classroom theory in a real world setting. As a team, we strive to push and test our engineering and design capabilities so that we may extend the boundaries of innovation and establish ourselves in the forefront of FSAE. Formula SAE is a world-wide engineering design competition held by the Society of Automotive Engineers (SAE). The competition provides a unique way to test students’ theoretical knowledge base in a practical, real-world context through manufacturing and fabrication of their designs. Along the way students create and hone their skills in engineering, design, management, and teamwork. Since its inaugural competition in 1979, the competition has grown to over 1000 universities in 10 locations, is the largest undergraduate engineering design competition of any kind in the world.",
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering',
        link: 'http://sae.eng.ucsd.edu/',
        email: 'ucsdtritonracing@gmail.com',
        day: 'Wednesday'
    },
    {
        name: 'Triton Robosub',
        acronym: 'Robosub',
        description: "Triton Robosub builds, programs, and tests autonomous underwater vehicles. We explore all aspects of underwater autonomy, from digital signal processing to deep learning-aided computer vision, and compete in an international competition every summer!",
        department: 'Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering, Business',
        link: 'https://robosub.ucsd.edu/',
        email: 'robosub@ucsd.edu',
        day: 'Wednesday'
    },
    {
        name: 'Triton Robotics',
        acronym: 'TR',
        description: "Triton Robotics is the ultimate robotics student organization that competes in RoboMaster, an international, collegiate robotics competition. We have mechanical, embedded, and computer divisions to assemble 7 robots for competition. If you are looking to make an immediate impact, this young and upcoming club will help develop you into a respectable engineer. Whether you like to have a stable position or an evolving role, there is a place for you!",
        department: 'All',
        link: 'http://tritonrobotics.org/',
        email: 'tritonrobotics@ucsd.edu',
        day: 'Wednesday'
    },
    {
        name: 'Triton Unmanned Aerial Systems',
        acronym: 'TUAS',
        description: "We are a student-run, multi-disciplinary project team which designs, builds, tests, and flies our own UAV to compete each year in the Student UAS Competition put on by the AUVSI Seafarer Chapter against over 70 teams from around the world. We are broken into 4 subteams: the airframe team, the embedded team, the software team, and the business team. The airframe team is responsible for everything from design to manufacturing for both our plane and the autonomous ground vehicle. The embedded team is responsible for all the electronics on the plane, especially the power and communication systems, as well as controls systems for our antenna tracker and unmanned ground vehicle. The software team is responsible for our path planning algorithm and computer vision suite, as well as front end and web development. The business team is responsible for corporate outreach, public relations, and finances. Also, we are looking for people who are interested in piloting the plane for testing and tuning, and to serve as a safety pilot during full missions.",
        department: 'Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, Structural Engineering, Data Science',
        link: 'http://tuas.ucsd.edu',
        email: '',
        day: 'Wednesday'
    },
    {
        name: 'UCSD Solar Car',
        acronym: '',
        description: "We are UCSD Solar Car. Our goal is to design and build a Solar Powered Race Vehicle to learn new skills in engineering and compete in Solar Car races. We will also discover the challenges that come with using solar power to peak our interest in the importance of studying renewable energy for the better of our planet. If you have any skills in design, coding, mechanical engineering, and electrical engineering this is a great team to gain some experience.",
        department: 'Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering',
        link: 'https://www.facebook.com/ucsdsolarcar',
        email: 'saorella@ucsd.edu',
        day: 'Wednesday'
    },
    {
        name: 'Yonder Dynamics',
        acronym: 'YNDR',
        description: "Yonder Dynamics is a student-run robotics organization that designs and builds a Mars rover to compete in the annual University Rover Challenge.",
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering',
        link: 'http://yonderdynamics.org',
        email: 'yonder.dynamics@gmail.com',
        day: 'Wednesday'
    },
    {
        name: 'Engineering World Health',
        acronym: 'EWH',
        description: "Engineering World Health (EWH) is a global organization working to inspire, educate, and empower the biomedical engineering community to improve health care delivery in the developing world. EWH at UC San Diego is a student-run, university chapter that focuses on improving the state of global healthcare by spreading awareness and developing members' interdisciplinary engineering skills required to design low-resource medical devices. Through student-run projects and activities, we offer students the opportunity to develop engineering research and design skills, communication skills, and the chance to network with motivated, internationally aware individuals, all while contributing to solving vital international medical problems. We accept students from all majors and walks of life who share our passion for improving global healthcare. We hope you'll check us out!",
        department: 'All',
        link: 'http://ewh.ucsd.edu/',
        email: '',
        day: 'Thursday'
    },
    {
        name: 'Engineers for a Sustainable World',
        acronym: 'ESW',
        description: "We are the University of California, San Diego chapter of Engineers for a Sustainable World, a student-run organization dedicated to bringing communities together to develop, implement, and share sustainable technologies and practices worldwide.",
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering, Sustainability Department',
        link: 'https://eswtritons.wordpress.com/',
        email: 'athridan@ucsd.edu',
        day: 'Thursday'
    },
    {
        name: 'Engineers Without Borders at UCSD',
        acronym: 'EWB@UCSD',
        description: "EWB@UCSD is a humanitarian engineering organization working on international, research, community development, and outreach projects from Kenya to Hoover High. It is our firm belief that meeting a basic standard of living should not be seen as a privilege, but rather as a fundamental human right. Therefore, our mission is to empower the next generation of leaders to responsibly tackle projects aimed at improving the conditions of communities in need.",
        department: 'All',
        link: 'https://www.facebook.com/groups/ewb.ucsd',
        email: 'ewb@ucsd.edu',
        day: 'Thursday'
    },
    {
        name: 'Envisionaries',
        acronym: 'EnV',
        description: <>Envisionaries is an org dedicated to growing the campus maker community! We are run out of the Envision maker studio, and we host technical skills workshops, speaker series, and a variety of activities to help you grow as a maker. Meetings are every Monday from 7-8 pm. RSVP for the meeting here! <a href="https://forms.gle/YVzaGHGNWAqrd2Cm7" target="_blank" rel="noopener noreferrer">https://forms.gle/YVzaGHGNWAqrd2Cm7</a></>,
        department: 'All',
        link: 'https://www.facebook.com/envisionariesUCSD/',
        email: '',
        day: 'Thursday'
    },
    {
        name: 'National Society of Black Engineers',
        acronym: 'NSBE',
        description: "NSBE mission is to increase the number of culturally responsible Black engineers who excel academically, succeed professionally and positively impact the community. NSBE is committed to supporting diverse programs that enrich underrepresented engineering student professionally and academically. NSBE also promotes programs that encourage and influence young students in impoverished urban communities to pursue science and engineering degrees. NSBE's outreach programs create more dynamic interactive pre-college outreach programs that target minority into science and engineering study.",
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering',
        link: 'http://nsbe.ucsd.edu/',
        email: 'nsbe.ucsd@gmail.com',
        day: 'Thursday'
    },
    {
        name: 'Out in Science, Technology, Engineering, and Mathematics at UCSD',
        acronym: 'oSTEM',
        description: "oSTEM is a nationally-recognized organization that is geared towards the personal and professional development of LGBTQIA+ students who are interested in Science, Technology, Engineering, and Mathematics through social, educational, professional, and outreach programming. It is also focused on helping students throughout UC San Diego connect to a broader community of queer students and professionals whose academic interests lie in similar fields.",
        department: 'NanoEngineering',
        link: 'http://ostem.ucsd.edu',
        email: 'ucsd@chapters.ostem.org',
        day: 'Thursday'
    },
    {
        name: 'Society of Asian Scientists and Engineers',
        acronym: 'SASE',
        description: "The Society of Asian Scientists and Engineers, or, SASE, for short, at UCSD is a pre-professional organization dedicated to promoting professional development and preparing undergraduates for their futures, whether it be graduate school, research in a lab, an engineer, or anything in-between. We help students by organizing professional events and workshops, such as our annual networking event Dining with Professionals, resume workshops, and more.",
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering, Science majors (Biology, Chemistry, etc.)',
        link: 'https://saseatucsd.weebly.com/about-us.html',
        email: 'ucsd@saseconnect.org',
        day: 'Thursday'
    },
    {
        name: 'Society of Hispanic Professional Engineers at UC San Diego',
        acronym: 'SHPE',
        description: "SHPE at UCSD is dedicated to helping the Hispanic community reach its fullest potential within engineering, but we welcome anyone who is interested to get involved with us (you do not have to be Hispanic to join)! SHPE at UCSD can inform you about internship and scholarship opportunities, can help you academically, provide you with information about grad school, can introduce you to lifelong friends, and can provide you with powerful speakers who are eager to share their inspiring experiences with you. That is not all, also SHPE provides various opportunities to network with company representatives and professional engineers at events like our GBM’s, our annual REACH Hardhack competition, and the SHPE National Convention, amongst other events. There are so many opportunities for you to get involved. We have multiple committees and always welcome any help relating to the planning and organizing of our events!",
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering',
        link: 'https://sites.google.com/view/shpeucsd/home',
        email: 'shpe@eng.ucsd.edu',
        day: 'Thursday'
    },
    {
        name: 'Society of Women Engineers',
        acronym: 'SWE',
        description: "Society of Women Engineers at UC San Diego informs, nurtures, and encourages women to attain high levels of education and professional achievement. Our members serve as role models to pre-college and engineering students.",
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering',
        link: 'https://swe-ucsd.netlify.app/',
        email: 'swe@eng.ucsd.edu',
        day: 'Thursday'
    },
    {
        name: 'Computer Science & Engineering Society',
        acronym: 'CSES',
        description: "Computer Science and Engineering Society is the longest standing computer science organization at UCSD. At CSES, we aim to form a passionate community of computer scientists and engineers. As one of the widest-reaching CSE organizations at UCSD, CSES runs a variety of events to provide resources for the professional, social, & technical development of the CSE community on campus.",
        department: 'Computer Science and Engineering',
        link: 'https://cses.ucsd.edu/',
        email: '',
        day: 'Friday'
    },
    {
        name: 'CS foreach',
        acronym: '',
        description: "CS foreach is student outreach organization at UC San Diego dedicated to increasing access to computer science education in the San Diego area. Our work is focused on mentorship, education, and outreach with K-12 students.",
        department: 'Computer Science and Engineering',
        link: 'https://csforeach.ucsd.edu/',
        email: 'csforeach@ucsd.edu',
        day: 'Friday'
    },
    {
        name: 'Open Source at UCSD',
        acronym: 'OS @ UCSD',
        description: "Open Source @ UCSD (OS) is an organization that contributes to and creates open source projects. Open source projects are projects for all interested UCSD students can participate in. Participation can vary between fixing known bugs or glitches to improving the project by adding new features. Open Source @ UCSD will be using these projects to help teach students core open source practices, which include Git and basic coding principles, in an inclusive environment. We will be providing technical workshops, projects, and contribute-a-thons throughout the year!",
        department: 'Computer Science and Engineering, Electrical and Computing Engineering',
        link: 'https://www.facebook.com/groups/OpenSourceUCSD',
        email: 'vyl003@ucsd.edu',
        day: 'Friday'
    },
    {
        name: 'Tau Beta Pi',
        acronym: 'TBP',
        description: "We are the UCSD chapter of Tau Beta Pi, the oldest and most prestigious engineering honor society in the nation. Our officers keep our chapter active across all engineering departments through hosting professional development workshops and industry info sessions, as well as community service and outreach events. Our chapter comes alive through our variety of social events for our initiates and members to bond with each other! Our members have forged long-lasting friendships through Tau Beta Pi.",
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering',
        link: 'http://tbp.ucsd.edu',
        email: 'tbp@ucsd.edu',
        day: 'Friday'
    },
    {
        name: 'Themed Entertainment Association',
        acronym: 'TEA @ UCSD',
        description: "Are you interested in bringing stories to life? The Themed Entertainment Association (TEA) Club at UCSD exists for growing aspiring theme park designers, engineers, and creators. Conveniently situated in Southern California, members of this club are based near critically-acclaimed world-class experiences and have an opportunity to learn the deep understanding of themed entertainment. TEA at UCSD’s main goal is to further develop its members’ creative and professional skills through educational projects, guided tours, and competitive skill-based competitions. TEA at UCSD currently has completed one large animatronic and two record-breaking Halloween mazes on our own campus, and is developing a design competition of its own. After existing for a little over a year, several teams from this club already boast first-place wins in the 2019 TEA@UNLV NextGen Design Competition and the 2019 Cornell Theme Park Design Competition, and they hope to keep up the momentum with future successes. No experience is required to join TEA at UCSD, we're all here to learn and have fun!",
        department: 'Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, Structural Engineering',
        link: 'http://tea.ucsd.edu/',
        email: '',
        day: 'Friday'
    },
    {
        name: 'Theta Tau',
        acronym: 'ΘT',
        description: "Theta Tau, Epsilon Delta Chapter is the only co-ed professional engineering fraternity at UCSD. We pride ourselves with our strong pillars of professionalism, philanthropy, and brotherhood. We aim to promote the social and professional development of our members during and after their college years. Come check us out!",
        department: 'Bioengineering, Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering, NanoEngineering, Structural Engineering',
        link: 'https://www.ucsdthetatau.org/',
        email: 'officialucsdtt@gmail.com',
        day: 'Friday'
    },
    {
        name: 'Triton AI',
        acronym: '',
        description: "Triton AI enables members to study machine learning through robotic competitions and hands-on projects. We develop autonomous scale robotic cars and compete in in-state & international races. Members all get their chance to work on different aspects of the vehicle: 3D CAD, PCB design, Microcontrollers, ML algorithm research, etc. We welcome people with any backgrounds, including beginners!",
        department: 'Computer Science and Engineering, Electrical and Computing Engineering, Mechanical and Aerospace Engineering',
        link: 'http://triton-ai.eng.ucsd.edu/',
        email: 'triton-ai@eng.ucsd.edu',
        day: 'Friday'
    },
    {
        name: 'Triton Software Engineering',
        acronym: 'TSE',
        description: "We're an organization of engineers, designers, and problem solvers offering pro-bono technical and web development services for nonprofits. We believe that technology should be utilized to better the community. Something as simple as a sleek, static, and easy-to-use website or as complicated as a mobile app to track donations to your organizations can have a huge impact on an organization of any size. Let us help you help the community.",
        department: 'Computer Science and Engineering',
        link: 'http://tse.ucsd.edu',
        email: 'tse@ucsd.edu',
        day: 'Friday'
    }
]

export { attendingOrgs };