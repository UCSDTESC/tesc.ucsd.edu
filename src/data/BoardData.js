const board = [
    {
        name: 'Shree Venkatesh',
        role: 'Co-President',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2024/SHREE-COPREZ_2024.jpg',
        email: 'shree@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/shree-venkatesh/',
        bio: "",
    },

    {
       name: 'Jasper Huang',
       role: 'Co-President',
       img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2024/JASPER-COPREZ_2024.jpg',
       email: 'jasper@tesc.ucsd.edu',
       link: 'https://www.linkedin.com/in/yj-huang/',
       bio: "",
    },

    {
        name: 'Rohan Sachdeva',
        role: 'VP Internal',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2024/ROHAN-VPI_2024.jpg',
        email: 'rohan@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/rohanvsachdeva/',
        bio: "",
    },

    {
        name: 'Christine Nguyen',
        role: 'VP External',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2024/CHRISTINE-VPE_2024.png',
        email: 'christine@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/christine-nguyen-79538a1b8',
        bio: "",
    },

    {
        name: 'Pearl Wen',
        role: 'VP Finance',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2024/PEARL-VPF_2024.png',
        email: 'pearl@tesc.ucsd.edu',
        link: 'http://www.linkedin.com/in/pearl-wen-3a66a8263',
        bio: "",
    },

    //2024 Edit: Past year old people  
    /*
    {
        name: 'Shane Kim',
        role: 'Co-President',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2023/SHANE-COPREZ_2023.jpeg',
        email: 'shane@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/shane-kim-0bb4371b0/',
        bio: "",	
    },

    {
       name: 'Ryan Wang',
       role: 'Co-President',
       img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2023/RYAN-COPREZ_2023.jpeg',
       email: 'ryan@tesc.ucsd.edu',
       link: 'https://www.linkedin.com/in/ryanwang01/',
       bio: "",
    },

    {
        name: 'Sithu Soe',
        role: 'VP Internal',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2023/SITHU-VPI_2023.jpg',
        email: 'sithu@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/sithu-soe-86ba34219/',
        bio: "",
    },
    
    {
        name: 'Lele Zhao',
        role: 'VP External',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2023/LELE-VPE_2023.jpeg',
        email: 'l5zhao@ucsd.edu',
        link: '',
        bio: "",
    },

    {
        name: 'James Shen',
        role: 'VP Finance',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2023/JAMES-VPF_2023.jpg',
        email: 'jjshen@ucsd.edu',
        link: 'https://www.linkedin.com/in/jingxiuhuang/',
        bio: "",
    },

    {
        name: 'John Zhou',
        role: 'Tech Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/JOHN-TECH_2022.jpeg',
        email: 'jozhou@ucsd.edu',
        link: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2023/JOHN-TECH_2023.jpeg',
        bio: "",
    },

    {
        name: 'Shane Kim',
        role: 'Co-President',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/SHANE-COPREZ_2022.JPG',
        email: 'shane@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/shane-kim-0bb4371b0/',
        bio: "",	
    },

    {
       name: 'Ryan Wang',
       role: 'Co-President',
       img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/RYAN-COPREZ_2022.jpg',
       email: 'ryan@tesc.ucsd.edu',
       link: 'https://www.linkedin.com/in/ryanwang01/',
       bio: "",
    },

    {
        name: 'Divyam Rana',
        role: 'VP Internal',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/DIVYAM-VPINT_2022.jpg',
        email: 'divyam@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/divyamrana/',
        bio: "",
    },
    
    {
        name: 'Jingxiu Huang',
        role: 'VP finance',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/JINGXIU-VPFIN_2022.jpeg',
        email: 'jingxiu@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/jingxiuhuang/',
        bio: "",
    },

    {
        name: 'John Zhou',
        role: 'Tech Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/JOHN-TECH_2022.jpeg',
        email: 'jozhou@ucsd.edu',
        link: 'https://www.linkedin.com/in/jjzee/',
        bio: "",
    },

    {
        name: 'Lele Zhao',
        role: 'ProDev Lead',
        img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/LELE-PRODEV_2022.jpg',
        email: 'l5zhao@ucsd.edu',
        link: '',
        bio: "",
    },
    
    {
	name: 'Warren Chang',
	role: 'Co-President',
	img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/WarrenChang-CoPrez-2022.jpg',
	email: 'warren@tesc.ucsd.edu',
	link: 'https://www.linkedin.com/in/warren-chang-051213158/',
	bio: "I am a third-year mechanical engineering major from San Diego. As one of TESC’s Co-Presidents, it is my responsibility to support and lead our organization to be one of the best resources for Jacobs School of Engineering students. Together with Kenneth Chen, I will ensure that students returning to campus are welcomed with the in-person experience they deserve. In my free time, you can catch me servicing mechanical watches or reading a book.",
    },


    {
	name: 'Kenneth Chen',
	role: 'Co-President',
	img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/Kenneth-CoPrez-2022.jpg',
	email: 'kenneth@tesc.ucsd.edu',
	link: 'https://www.linkedin.com/in/efeichen/',
	bio: "I'm a third-year studying computer science. Last year, I was the VP Internal. I want to become a ramen connoisseur.",
    },

    {
	name: 'Rosey Bugayong',
	role: 'Vice President of Events',
	img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/VP-Events2022.jpeg',
	email: 'rosey@tesc.ucsd.edu',
	link: 'https://www.linkedin.com/in/rosey-bugayong/',
	bio: "Hi! My name is Rosey Bugayong and I am the vp of events. I help to coordinate the amazing events that TESC puts on throughout the year. I am a third year computer science major with a minor in cognitive science. Some things I enjoy doing on my free time are running, going to the gym, and hanging out with friends.",
    },

    {
	name: 'Tien Nguyen',
	role: 'Townhall Director',
	img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/TownhallDirector2022.PNG',
	email: 'tienguyen213@gmail.com',
	link: '',
	bio: "Hey! I am the Town Hall director for TESC and a third-year aerospace engineering major with a passion for physical activities. During the weekdays, I can be spotted at the gym. When the weekends are here, I am usually out with friends or on a hike.",
    },

    {
	name: 'William Hu',
	role: 'Sponsorship Lead',
	img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/SponsorLead2022.jpg',
	email: 'william@tesc.ucsd.edu',
	link: 'https://www.linkedin.com/in/william-hu-2165b5173/',
	bio: "Hi! I'm a second-year math-cs major. I'll be serving as the TESC Sponsorship Lead this year, where I'll be working together with my committee to reach out to sponsoring companies and create meaningful partnerships with them. I'm usually pretty swamped with school work, but whenever I have time, I like to play the piano, read, and go on boba runs with friends.",
    },
    
    {
	name: 'Wendy Alaniz',
	role: 'ProDev Lead',
	img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/ProvDevLead-2022.jpeg',
	email: 'wendy@tesc.ucsd.edu',
	link: 'https://www.linkedin.com/in/wendy-alaniz-57972b17b',
	bio: "As my role of ProDev, I work very closely with Decaf and other events to make sure they are able to run smoothly. I am currently a third year aerospace engineering major. On my free time, I enjoy exploring different restaurants and small coffee or ice cream shops.",
    },

    {
	name: 'Elise Bushnell',
	role: 'Design Lead',
	img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/DesignLead-2022.JPG',
	email: 'ebushnel@ucsd.edu',
	link: '',
	bio: "Hi, I'm the Design Lead which means I am responsible for ensuring that all of the graphics for TESC are created! I am a second-year computer science major. In my free time, I love hiking and just getting outside in general.",
    },

    {
	name: 'Nigam Vadecha',
	role: 'Social Lead',
	img: 'https://tesc-website.s3.us-east-2.amazonaws.com/board/TESC-Pictures-2022/SocialLead-2022.jpg',
	email: 'nvadecha@ucsd.edu',
	link: '',
	bio: "Hi! My name is Nigam Vadecha and I am currently a second-year structural engineer. My position is TESC Social Lead and this means that I will do my best to plan and make social events, such as EOTG. In my free time I like to play Valorant, hike, and play basketball.",
    },
    */
];




    

{/*

    {
        name: 'Summer Joyce Batasin',
        role: 'President',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/president-2020.JPG',
        email: 'summer@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/summer-joyce/',
        bio:
            "I am a fourth-year bioengineering: biotechnology major and next year's President for TESC. I am really excited to work with such a great team this year and see how we’re able to build upon our previous success. This year will be a lot different than past ones, especially with the challenges that have arisen due to COVID-19, but I think this will be a catalyst for innovation and new ideas. As President, I want to be a resource and help support TESC’s wonderful board members, committees, and council orgs in any way I can. Outside of TESC, I enjoy baking, going to the beach, and playing with my pet bunnies, Marshmallow and Blueberry!",
    },
    {
        name: 'Jeremiah Alindogan',
        role: 'VP External',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-external-2020.JPG',
        email: 'jeremiah@tesc.ucsd.edu',
        bio:
            "Hi! I'm the TESC VP External. I'm also a fourth-year computer science major who loves software development but also really values aesthetics. A couple things about me: I love to rock climb and boulder. I love movies. And I love trying new foods.",
        link: 'https://www.linkedin.com/in/jeremiahalindogan/',
    },
    {
        name: 'Kenneth Chen',
        role: 'VP Internal',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-internal-2021.jpg',
        email: 'kenneth@tesc.ucsd.edu',
        bio:
            "I'm a second-year studying computer science. Last year, I was a member of the Technical Committee and worked on projects like tesc.events and expo. I want to become a ramen connoisseur.",
        link: 'https://www.linkedin.com/in/efeichen/',
    },
    {
        name: 'Robert Tatum',
        role: 'VP Finance',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-finance-2020.jpg',
        link: 'https://www.linkedin.com/in/robertmtatum/',
        email: 'robert@tesc.ucsd.edu',
        bio:
            "I'm the current VP Finance for TESC, and before that I was the financial analyst. At UCSD, I study computer science, and I've developed an interest in the applications of AI and entrepreneurship. In my free time, I enjoy watching the Lakers and hiking around the San Diego county.",
    },
    {
        name: 'Cindy Alberto',
        role: 'VP Events',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-events-2020.png',
        email: 'cindy@tesc.ucsd.edu',
        bio:
            "I am a fourth-year mechanical engineering major and this year's VP of Events. I was previously the Social Events Lead of TESC. This year I will be overseeing, and assisting in, the creation of all TESC events. In my free time I like to bake, crochet, watch Netflix and hang out with friends.",
        link: 'www.linkedin.com/in/cindyalberto',
    },
    {
        name: 'Siddharth Nag',
        role: 'SD Hacks Co-Director',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/sd-hacks-director-sid-2020.jpeg',
        email: 'siddharth@tesc.ucsd.edu',
        bio:
            "Hello! I'm a second-year computer engineering major and SD Hacks Director for next year! I'm super excited to be planning the hackathon and working with everyone! In my free time, I enjoy spending time in the sun, spilling tea with friends, and doing Bollywood dance.",
        link: 'https://www.linkedin.com/in/siddharth-nag/',
    },
    {
        name: 'Anurag Pamuru',
        role: 'SD Hacks Co-Director',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/sd-hacks-director-anurag-2020.jpg',
        email: 'anurag@tesc.ucsd.edu',
        bio:
            "Hi everyone! I'm a third-year data science student serving as the TESC Co-Director for SD Hacks 2021. I enjoy learning languages and hiking in my free time.",
        link: 'https://www.linkedin.com/in/anuragpamuru/',
    },
    {
        name: 'Maria Sckaff',
        role: 'Town Hall Co-Director',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/town-hall-director-maria-2020.jpg',
        bio:
            'Hello, everyone! I am one of your town hall directors in TESC, helping bring you an easy way to connect and share your ideas with those running your departments. I am in my final year studying bioengineering at UCSD and falling further in love with biomechanics and tissue regeneration. Hopefully, when it is safe again, you will find me eating sushi at the bistro, drinking some freshly squeezed juices in warren, or dancing in revelle.',
        email: 'maria@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/mariasckaff/',
    },
    {
        name: 'David Dempsey',
        role: 'Town Hall Co-Director',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/town-hall-director-david-2020.jpg',
        bio:
            "Hey! My name is David and I'm a third-year Computer Science major and Physics minor. This year, I'll be serving as the TESC Town Hall Director, where I'll be hosting town hall events for various departments in the Jacobs School of Engineering. When I'm not working, I like to go surf or snowboard, play games, and attempt to cook.",
        email: 'david.dempsey@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/davidgdempsey/',
    },
    {
        name: 'Warren Chang',
        role: 'Sponsorship Lead',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/sponsorship-lead-2020.PNG',
        link: 'https://www.linkedin.com/in/warren-chang-051213158/',
        email: 'warren@tesc.ucsd.edu',
        bio:
            'I am a second-year mechanical engineering major from San Diego. As the Sponsorship Lead for TESC, my job is to ensure that our programs are well-funded through the creation and maintenance of strong relationships with sponsoring companies. When I have free time, I typically use it servicing mechanical watches or reading a good book.',
    },
    {
        name: 'Ankur Duggal',
        role: 'ProDev Lead',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/prodev-lead-2020.jpg',
        email: 'ankur@tesc.ucsd.edu',
        bio:
            "I'm a third-year math-cs major. I am the opposite of a homebody, I love to go out and socialize However, I love to play video games and watch basketball if I am chilling at home. As TESC's ProDev Lead, I work on hosting DECAF and other professional development events!",
        link: 'https://www.linkedin.com/in/ankurduggal/',
    },
    {
        name: 'Elias Fang',
        role: 'Technical Lead',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/tech-lead-2021.jpg',
        bio:
            "Hello! I'm a second-year computer engineering major in Warren. This is my first year in TESC and I'm super excited to be serving the engineering community through this role. I'm also a member of Kairos Christian Fellowship and Duly Noted, a marketing director for ACM, and a developer at TSE. I love Jesus, food, sunsets, and hanging out with friends!",
        link: 'https://www.linkedin.com/in/elias-fang/',
        email: 'elias@tesc.ucsd.edu',
    },
    {
        name: 'Vincent Santos',
        role: 'Visual Design Lead',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/design-lead-2020.JPG',
        bio:
            "Hello! I'm a fourth-year CS major and this year's Design Lead. I've served under the Design Committee for a year now, and helped with creating the graphics, assets, and themes for all our major events. Fun facts about me: I'm a huge foodie and I have a smoothie addiction.",
        link: 'https://www.linkedin.com/in/jvincentsantos/',
        email: 'vincent@tesc.ucsd.edu',
    },
    {
        name: 'Emma Yuan',
        role: 'Outreach Lead',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/outreach-lead-2020.jpeg',
        bio:
            'I am a second-year Math-CS major. As Outreach Lead, I am in charge of TESC events like Enspire and Splash. I enjoy cooking, baking, and hanging out with friends in my free time!',
        email: 'emma@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/emma-yuan/',
    },
    {
        name: 'Johnny Nguyen',
        role: 'Social Lead',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/social-lead-2020.jpeg',
        email: 'johnny@tesc.ucsd.edu',
        bio:
            'I’m a second-year mechanical engineering major and this year’s Social Lead! My role is to plan fun events that enrich the engineering community like Engineers on the Green. In my free time, I’m usually eating out with friends, playing Minecraft, or discovering the best coffee shops in town.',
        link: 'http://linkedin.com/in/johnnyhieunguyen',
    },
    {
        name: 'Callie Boskin',
        role: 'Council Lead',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/council-lead-2020.jpg',
        email: 'callie@tesc.ucsd.edu',
        bio:
            "Hello! My name is Callie, and I'm a bioengineering: bioinformatics major from Warren. This is my third year in TESC, and I'll be tackling the role of Council Lead! I have previously held roles as fruit-snack eater, shirt hander-outer, and some finance stuff. In my free time, I like taking pictures of identical landscapes, walking my dog, smelling herbs at the grocery store, and pretending to be a beekeeper.",
        link: 'https://www.linkedin.com/in/callie-boskin-a50b47132/',
    },
    {
        name: 'Prothit Halder',
        role: 'Marketing Lead',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/marketing-lead-2020.jpeg',
        email: 'prothit@tesc.ucsd.edu',
        link: 'https://www.linkedin.com/in/prothit-halder-96794219a/',
        bio:
            'Hello! I’m Prothit, and my pronouns are he/him/his! I’m a second year mathematics computer science major. TESC introduced me to a lot orgs, I am a part of today, so I’m excited to be TESC’s Marketing Lead! In my free time, I love going to watch the sunset, and going to concerts!',
    },
    {
        name: 'Arsh Mehta',
        role: 'Project Spaces Lead',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/project-spaces-lead-2020.jpg',
        email: 'arsh@tesc.ucsd.edu',
        link: 'www.linkedin.com/in/arshmehta3',
        bio:
            'I am a third year structural engineering student. I have always heard of TESC ever since I started my freshman year, however I never became deeply involved until now. I am currently the Project Space Lead for TESC. In my free time, I love watching FRIENDS and napping on a daily basis! ',
    },
    {
        name: 'Vicki Cai',
        role: 'Internal Projects Lead',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/internal-projects-lead-2020.jpeg',
        link: 'https://www.linkedin.com/in/vicki-cai-1ab964176',
        email: 'vicki@tesc.ucsd.edu',
        bio:
            "Hi I am a 3rd-year CS major. As this year's internal projects lead, I work on TESC's technical processes. Outside of school, I love food adventures, drawing/graphic design, and getting too emotionally invested in fictional stories.",
    },
    {
        name: 'Sally Poon',
        role: 'Financial Analyst',
        img:
            'https://tesc-website.s3.us-east-2.amazonaws.com/board/financial-analyst-2020.JPG',
        email: 'sally@tesc.ucsd.edu',
        bio:
            "Hi, my name is Sally and I'm the financial analyst for TESC this year! I am currently a third year data science major and in my free time I like playing video games or napping. I occasionally like to participate in hackathons for fun!",
    },
];

*/}
export default board;
