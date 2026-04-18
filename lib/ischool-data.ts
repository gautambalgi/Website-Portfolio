export const ischoolMeta = {
  programTitle: "MS in Applied Data Science",
  school: "Syracuse University, School of Information Studies",
  course: "IST 782: Applied Data Science Portfolio",
  submissionTerm: "Spring 2026",
  videoUrl: "https://www.loom.com/share/cd5b6c14c4744965a52552c198389895",
  videoEmbedId: "cd5b6c14c4744965a52552c198389895",
};

export const track = {
  name: "AI Track",
  rationale:
    "I picked the AI track because the work I most wanted to do, building intelligent systems that touch real users, sat squarely in that direction. The track gave me three courses that each pulled me deeper into a different layer of modern AI: how language is modeled, how networks are trained at scale, and how the systems we build hold up under ethical and societal scrutiny. Picking this track was less about prestige and more about giving myself a structured way to keep going further than I would have on my own.",
  courses: [
    {
      code: "IST 664",
      title: "Natural Language Processing",
      credits: 3,
      takeaway:
        "This was the course that demystified the entire transformer family for me. We went from classical NLP pipelines to fine-tuning attention-based models, and the assignments forced me to reason about tokenization, evaluation, and the messy edges of language data in ways that no tutorial ever made me do.",
    },
    {
      code: "IST 691",
      title: "Deep Learning in Practice",
      credits: 3,
      takeaway:
        "This course pushed me to actually train models end-to-end rather than just call APIs. I came out of it understanding why a model is overfitting, when batch normalization actually helps, and how to design a training loop you can trust. It also made me much more comfortable reading research papers and pulling pieces from them into my own work.",
    },
    {
      code: "IST 692",
      title: "Responsible AI",
      credits: 3,
      takeaway:
        "Easily the course that changed how I think about everything else I build. We worked through real case studies on fairness, bias, transparency, and harm, and it sharpened my instinct to ask 'who could this hurt' before 'how do I scale this'. The Sports Betting project I built later carried that question through every design decision.",
    },
  ],
  whatILearned:
    "What the AI track actually taught me is that modern AI is not one skill, it is a stack. The bottom of the stack is data discipline, the middle is the model, and the top is the system that puts the model in front of a person. The track forced me to operate at all three layers, which is the reason I now feel comfortable owning an AI feature from first dataset to deployed product.",
};

// The 6 official MS ADS Program Learning Outcomes
export const learningOutcomes = [
  {
    number: 1,
    short: "Collect, store, and access data",
    full: "Collect, store, and access data by identifying and leveraging applicable technologies.",
    inMyWords:
      "This outcome is about being able to actually get the data into a place where you can work with it. That means knowing when to use a relational database, when to reach for a NoSQL store, when to build a pipeline that ingests log files at scale, and when a CSV is genuinely all you need.",
    howIDemonstrated:
      "At HomeInheritance I designed Python-based backend services that ingested unstructured text, image, and log data, normalized it, and made it available to downstream ML pipelines. The result was a 37% improvement in platform data readiness and a 24% reduction in pipeline latency. In my E-Learning Database project I went the other direction and designed a normalized relational schema across eight tables to support a learning management system, which forced me to think carefully about keys, joins, and access patterns. Across both projects I learned that data infrastructure is rarely glamorous but it is what makes everything else possible.",
    projects: ["HomeInheritance Internship", "E-Learning Database Management"],
  },
  {
    number: 2,
    short: "Create actionable insight",
    full: "Create actionable insight across a range of contexts using data and the full data science life cycle.",
    inMyWords:
      "An insight is only useful if someone can do something with it. This outcome pushes you to go past charts and statistics and ask the harder question of what the next step should be for a stakeholder once they see your work.",
    howIDemonstrated:
      "My South Carolina Energy Demand Analysis is the clearest example. I started with 140 raw variables across 5,000 households and used correlation analysis and hypothesis testing to narrow them down to 42 drivers that actually mattered. The final Shiny dashboard let policymakers see which households were most at risk during peak demand, which is the kind of information you can directly act on. Similarly, the analytics work I did at HomeInheritance surfaced engagement bottlenecks in our product that led to an 18% lift after the team acted on them.",
    projects: ["South Carolina Energy Demand", "HomeInheritance Internship"],
  },
  {
    number: 3,
    short: "Apply visualization and predictive models",
    full: "Apply visualization and predictive models to help generate actionable insight.",
    inMyWords:
      "This is about choosing the right model and the right visual for the job. A confusion matrix is not always the answer. Sometimes a clean bar chart and a calibrated probability are worth more than a complex ensemble.",
    howIDemonstrated:
      "Across my projects I used XGBoost for calibrated probabilities, BERT for sentiment classification, YOLOv5 for object detection, and Deep Q-Networks for behavior modeling, and each choice was deliberate. On the visualization side I built Tableau dashboards at HomeInheritance, Power BI reports for the E-Learning project, and Shiny dashboards for the energy work. The skill that grew the most over time was knowing which model and which chart to reach for given the audience and the question, rather than defaulting to whatever I used last time.",
    projects: ["Ethics-Aware Sports Betting", "Smart Grocery Detection", "South Carolina Energy Demand"],
  },
  {
    number: 4,
    short: "Use programming languages",
    full: "Use programming languages such as R and Python to support the generation of actionable insight.",
    inMyWords:
      "Programming is the medium through which everything else happens. The outcome is not just being able to write code, it is being able to write code that other people can read, run, and trust.",
    howIDemonstrated:
      "Python is my main language and I used it across every internship and research role for backend services, data pipelines, model training, and evaluation. R was the right tool for the South Carolina Energy work because of the statistical packages and the Shiny ecosystem. SQL ran through the E-Learning database project and the analytics work at HomeInheritance and LTI Mindtree. Picking up TypeScript for backend integration and C++ for performance-sensitive ML inference rounded out the toolkit so I could pick the language that fit the job rather than fight my tools.",
    projects: ["All projects"],
  },
  {
    number: 5,
    short: "Communicate insights to broad audiences",
    full: "Communicate insights gained via visualization and analytics to a broad range of audiences including project sponsors and technical team leads.",
    inMyWords:
      "The hardest part of data science is not the modeling, it is getting a non-technical stakeholder to act on what you found. This outcome pushes you to learn to translate.",
    howIDemonstrated:
      "At the Whitman School I presented housing cost research at the BRC Conference, where the audience was a mix of academics, students, and administrators. At HomeInheritance the dashboards I built had to be readable by product managers and executives, not just engineers. Across course projects I learned to write executive summaries, build slide decks that stand on their own, and design visuals that lead with the story rather than the data. The blog you are reading right now is part of the same practice.",
    projects: ["Whitman GRA Research", "HomeInheritance Internship"],
  },
  {
    number: 6,
    short: "Apply ethics in development and use of data",
    full: "Apply ethics in the development, use, and evaluation of data and predictive models, including fairness, bias, transparency, and privacy.",
    inMyWords:
      "Ethics is not a final-step review you do before shipping. It is a design constraint that should be present from the first sketch of the system. The Responsible AI course completely rewired how I think about this.",
    howIDemonstrated:
      "The clearest example is my Ethics-Aware Sports Betting ML System. The whole point of the project was to build an AI decision pipeline that performed well on accuracy and stayed honest about uncertainty, bias, and the real-world harm of irresponsible recommendations. The DeBERTa ethics classifier I added reduced unsafe system actions from 7% down to 0.3%, which I treat as a working proof that responsible AI features can be measured the same way you measure accuracy. The same instinct shows up in my LLM evaluation work at Syracuse, where automated benchmarking against human annotations was specifically about catching the cases where a model agrees with a human for the wrong reason.",
    projects: ["Ethics-Aware Sports Betting", "Syracuse LLM Evaluation"],
  },
];

// Featured projects for the iSchool portfolio with course mapping
export const ischoolProjects = [
  {
    slug: "ethics-aware-betting",
    title: "Ethics-Aware Sports Betting ML System",
    course: "IST 692 · Responsible AI / Human-Centered AI",
    period: "Aug 2025 · Dec 2025",
    goals:
      "Build an end-to-end machine learning system that predicts sports betting outcomes well, models user behavior responsibly, and refuses to take actions that could push a user toward harm. The goal was to prove that responsible AI is not a tradeoff against accuracy, it is a feature you can engineer for.",
    technologies: [
      "XGBoost",
      "Deep Q-Network (Reinforcement Learning)",
      "DeBERTa",
      "Python",
      "PyTorch",
      "Real-time Odds API",
    ],
    contribution:
      "I owned the full pipeline from data ingestion to the ethics layer. I designed and trained the XGBoost calibration model on 2.7 million RetailRocket events, built the Deep Q-Network behavior module on 25,000 interaction transitions, integrated real-time odds via API, and developed the DeBERTa ethics classifier that sits as the final gate before any action is taken.",
    insight:
      "The ethics filter reduced unsafe system actions from 7% to 0.3% while balanced response rates climbed to 84.5%. Probability calibration improved by 22% and behavior stability by 31%. The takeaway was that responsible AI features are measurable and shippable, not vibes.",
    outcomesDemonstrated: [3, 4, 6],
    github: null,
  },
  {
    slug: "smart-grocery-detection",
    title: "Smart Grocery Detection and Recommendation",
    course: "Applied Machine Learning",
    period: "Jan 2025 · May 2025",
    goals:
      "Train a real-time computer vision system that can recognize grocery products from images and suggest top recommendations, with deployment latency low enough to feel instantaneous.",
    technologies: ["YOLOv5", "PyTorch", "Computer Vision", "CUDA", "Python"],
    contribution:
      "I led the dataset curation across more than 10,000 images and 15 product categories, trained and tuned the YOLOv5 detection model to 86% accuracy, designed the top-5 recommendation engine, and optimized the GPU inference path to cut latency by 32%.",
    insight:
      "The deployable system reduced product search time by 40% and increased engagement on the recommendation surface by 25%. More than the numbers, the project taught me how much of a real-world ML system is dataset and inference engineering rather than the model itself.",
    outcomesDemonstrated: [3, 4],
    github: "https://github.com/gautambalgi/SmartGrocerySystem",
  },
  {
    slug: "emotion-aware-voice",
    title: "Emotion-Aware Personalized Voice Messaging",
    course: "IST 664 · Natural Language Processing",
    period: "Jan 2025 · May 2025",
    goals:
      "Build an end-to-end pipeline that detects emotion in text using a 27-class GoEmotions classifier and then routes the message through the right text-to-speech model so that the spoken voice carries the same emotional signal.",
    technologies: ["GoEmotions", "Jenny TTS", "Bark", "Zonos", "PyTorch", "Python"],
    contribution:
      "I built the emotion classification pipeline, ran a head-to-head benchmark of three TTS systems across five emotional conditions, and designed the evaluation framework that scored 50+ generated samples for clarity, alignment, and tonal consistency.",
    insight:
      "The benchmark improved emotion-to-speech alignment by 22%. Beyond the metric, the project sharpened my appreciation for evaluation design in generative systems, where there is rarely a single correct answer and you have to construct a defensible scoring rubric yourself.",
    outcomesDemonstrated: [3, 4, 5],
    github: "https://github.com/gautambalgi/Emotion-Aware-Personalized-Voice-Messaging-System",
  },
  {
    slug: "sc-energy-demand",
    title: "South Carolina Energy Demand Analysis",
    course: "Introduction to Data Science",
    period: "Aug 2024 · Dec 2024",
    goals:
      "Identify the household-level drivers of peak energy demand in South Carolina and build a tool that lets policymakers explore blackout-risk scenarios.",
    technologies: ["R", "Shiny", "Statistical Modeling", "Hypothesis Testing"],
    contribution:
      "I led the variable reduction work, taking 140+ raw features down to 42 statistically significant drivers across 5,000 households using correlation and hypothesis testing. I then built the interactive Shiny dashboard that surfaces those drivers and supports scenario exploration.",
    insight:
      "The work showed that a small set of household characteristics explains the majority of peak-load risk, and the dashboard turned that insight into something a non-technical user could actually explore. It was the first project where I felt the whole data science life cycle click into place.",
    outcomesDemonstrated: [1, 2, 3, 4, 5],
    github: "https://github.com/gautambalgi/South-Carolina-Weather-Analysis",
  },
  {
    slug: "elearning-db",
    title: "E-Learning Database Management System",
    course: "Database Management Systems",
    period: "Aug 2024 · Dec 2024",
    goals:
      "Design and implement a normalized relational database for an e-learning platform, then layer SQL reporting and Power BI dashboards on top so administrators can monitor learner progress.",
    technologies: ["SQL", "Azure Data Studio", "Power BI"],
    contribution:
      "I designed the normalized schema across 8+ tables covering users, courses, enrollments, and performance, populated it with 500+ records of test data, wrote the analytical queries that surface completion and performance metrics, and built the Power BI dashboard that visualizes them.",
    insight:
      "The reporting workflow cut manual reporting effort by 30%. The deeper lesson was about discipline at the schema layer. A clean schema makes downstream analytics nearly free, while a messy one taxes every query you ever write.",
    outcomesDemonstrated: [1, 4, 5],
    github: "https://github.com/gautambalgi/E-Learning-Database-Management-Sysytem",
  },
];

// Blog post sections for the ~3,000 word reflection
export const blogPost = {
  title: "Two Years at the iSchool",
  subtitle:
    "A reflection on the MS in Applied Data Science program at Syracuse University",
  readTime: "12 min read",
  publishedDate: "Spring 2026",
  sections: [
    {
      heading: "What I expected, and what I actually got",
      paragraphs: [
        "When I applied to Syracuse for the Master of Science in Applied Data Science, I had a fair set of expectations going in. Syracuse has a strong name in the data and information sciences, the iSchool reviews online were consistently good, and I had spent enough time talking to alumni to know the program was real. I expected a decent education, a credential that opened doors, and the chance to spend two years in the United States working on data problems that were more ambitious than the ones I had access to back home.",
        "What I actually got was significantly more than that. The professors turned out to be the best part of the experience. Not in a generic 'they were knowledgeable' way, but in the sense that several of them genuinely changed how I think about my craft. The career support from the iSchool was another piece I underestimated. Between the dedicated career advisors, the workshops, the alumni network, and the way professors actively connect students to opportunities, the program is set up so that if you put in the effort, you are never doing the job search alone.",
        "There was also a quieter surprise that took me a few months to articulate. The cohort is full of people from very different backgrounds, and a lot of what I learned came from sitting next to a classmate who was a healthcare analyst, or a former product manager, or someone who had never written code before they started the program. Data science is a strange field because it touches every other field, and a cohort like this one means you are constantly being pulled into conversations about domains you would never have explored on your own.",
      ],
    },
    {
      heading: "The biggest surprise: how application-driven the program is",
      paragraphs: [
        "If I had to name the single biggest surprise, it would be how much of this program is built around doing rather than reading. I came in expecting a more traditional academic experience with heavy theoretical foundations and weekly problem sets. There is theory, but the center of gravity is the project. Almost every course I took had a substantial team or individual project where you had to deliver something that worked, defend the choices you made, and present it to people who were going to question those choices.",
        "I learned more from those projects than I expected to. Building the Smart Grocery Detection system in Applied Machine Learning forced me to confront the gap between a model that works on a clean test set and one that holds up when you point a phone camera at a real shelf. The Emotion-Aware Voice Messaging project in Natural Language Processing taught me that designing the evaluation rubric is often harder than building the model. The South Carolina Energy Demand project in Introduction to Data Science was the one where the full data science life cycle, from raw data to a tool a stakeholder could use, finally clicked for me as a single integrated practice rather than a sequence of disconnected steps.",
        "The application-first approach also means you fail more publicly. Models do not converge. Datasets are dirtier than the lecture suggested. Deadlines collide. But each of those failures came with a feedback loop tight enough that I actually internalized the lesson, which is something a textbook chapter never quite manages.",
      ],
    },
    {
      heading: "My favorite class: Human-Centered AI with Professor Jeffrey Saltz",
      paragraphs: [
        "If I had to pick a single favorite course from the program, it is Human-Centered AI taught by Professor Jeffrey Saltz. The course title sounds soft, but the work was anything but. We were asked to build AI applications that put a human at the center of the design loop, which meant thinking just as carefully about user research, ethics, transparency, and trust as about model accuracy.",
        "Professor Saltz has a way of teaching that pushes you toward the harder version of every question. When I would propose a project direction, his first response would often be something that reframed it entirely, not in a discouraging way, but in a way that made the original idea look small. By the time the semester ended, the standard for what counted as a good AI project had moved several rungs higher in my head, and the bar has stayed there since.",
        "The Ethics-Aware Sports Betting ML System I built later was a direct descendant of what I learned in that class. The instinct to wrap a predictive model in a measurable ethics layer, to treat unsafe actions as a metric you optimize against, came directly from how Professor Saltz framed responsible AI as a design constraint and not a footnote.",
      ],
    },
    {
      heading: "An aha moment: the second-place hackathon project",
      paragraphs: [
        "There is one moment from the program that I keep coming back to. I joined a hackathon during the program with a team, and we built what we thought was a fairly modest project. Nothing fancy, no breakthrough idea, just a clean execution of a familiar pattern. We submitted it half expecting nothing, and we ended up taking second place.",
        "The lesson was not that we deserved to win, although we were happy to. The lesson was about calibration. The bar we had set for ourselves through the regular coursework had quietly become higher than the bar of a competitive hackathon. What looked unremarkable to us, polished, well documented, properly evaluated, with a clean demo, turned out to be unusual enough to land on the podium.",
        "That moment changed how I think about my own work. The everyday standard the program had trained into me, the habit of doing the boring parts properly, was already worth more than I realized in the outside world. It also reminded me that the most useful skill is rarely a single dramatic talent. It is the consistent habit of finishing the work properly.",
      ],
    },
    {
      heading: "The hardest part: finding an internship",
      paragraphs: [
        "The honest answer to what I struggled with the most is the internship search. International student status, a tight market, a long visa pipeline, and a field where the title 'data scientist' means something different at every company combine to make the search genuinely difficult. There were stretches of weeks where I was sending applications into what felt like a void.",
        "What got me through it was a combination of professor support and the iSchool advisors. Several professors took the time to introduce me to people in their networks. The advisors helped me reframe my resume for different roles. I also leaned on the cohort, where comparing notes with classmates who were running the same gauntlet kept me from spiraling.",
        "I ended up landing the AI and Data Science internship at HomeInheritance about a week before the practical deadline I had set for myself. It was not the calm linear path I would have written for myself, but it turned out to be exactly the right role. I got to work on a real RAG system, ship internal tooling that employees actually used, and watch firsthand how a small AI startup makes architectural decisions under real constraints. The experience compressed a year of learning into a few months.",
      ],
    },
    {
      heading: "On the AI track and what it taught me",
      paragraphs: [
        "I selected the AI track and took IST 664 Natural Language Processing, IST 691 Deep Learning in Practice, and IST 692 Responsible AI. Looking back, the three courses lined up almost too cleanly with the work I have ended up doing.",
        "Natural Language Processing took me from classical NLP pipelines to fine-tuning transformer models, and it gave me the conceptual scaffolding I now use every time I work with BERT, RoBERTa, or any of the LLM families. Deep Learning in Practice forced me to actually train networks end-to-end, which is the difference between calling an API and being able to debug it. Responsible AI was the course that changed how I think about every system I build, by making the question of harm and fairness a first-class engineering concern.",
        "The track did not just teach me three subjects. It taught me how to operate at three layers of the modern AI stack at the same time, the data, the model, and the system, which is the reason I now feel comfortable owning an AI feature from first dataset to deployed product.",
      ],
    },
    {
      heading: "What I want to do next",
      paragraphs: [
        "Most of my classmates have a fairly conventional set of post-graduation goals. Big tech, established firms, predictable progression. My goal is honestly different. I am most interested in joining a wildly fast-growing startup, the kind of place where the product is changing every week and the team is small enough that you have visible impact. Mercor is the kind of company I have in mind, but the specific name matters less than the shape of the environment.",
        "The reason is simple. I am at a point in my career where the most valuable thing I can buy is rate of learning, not work-life balance, not a comfortable title, not predictability. I am genuinely curious about how AI products are built, scaled, and made trustworthy, and the fastest way to learn that is to be inside a company that is figuring it out in real time. I am aware that I do not yet know what I do not know, and the specific reason I want to work at the edge of where things are happening is so that I can find those gaps quickly and close them.",
      ],
    },
    {
      heading: "Closing thoughts",
      paragraphs: [
        "Two years is a strange amount of time. It is long enough to change you in ways you cannot quite track, and short enough that you only really see the change once you look back. The MS in Applied Data Science gave me a technical foundation I trust, a network of professors and classmates I will keep coming back to, an internship that taught me how AI gets shipped in the real world, and a portfolio of projects that I would not trade for any amount of theory.",
        "More than any of those, it gave me a way of working. Measure first. Ship the simplest thing. Build responsibly from the start. Finish the boring parts properly. Those four habits are what I am taking out of the program, and they are what every project I build going forward will be built on.",
      ],
    },
  ],
};

export const ethicsStatement = {
  heading: "How I think about responsible AI",
  body: "Responsible AI is the part of the work that I take most seriously, because it is the part that has the longest tail of consequences. I do not see ethics as a checklist you run through before shipping or a slide you add to a deck for compliance. I see it as a design constraint that belongs in the system from the first sketch, in the same way that latency or accuracy does. When I built the Ethics-Aware Sports Betting ML System, the entire architecture was organized around the idea that an unsafe action should be as measurable and as preventable as a wrong prediction. The DeBERTa ethics layer that brought unsafe outputs from 7% down to 0.3% is not a wrapper, it is part of the model of the product. My broader belief is that fairness, transparency, and harm reduction are engineering problems that deserve the same rigor as any other engineering problem, and that the field will be better off the moment we stop treating responsible AI as a separate department and start treating it as a property of well-built systems.",
};
