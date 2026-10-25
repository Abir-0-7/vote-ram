export const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const cats = [
  { id: "compete", label: "Compete" },
  { id: "learn", label: "Learn" },
  { id: "connect", label: "Connect" },
  { id: "run", label: "Run it openly" },
];

const raw = [
  ["compete", "Hackathons for every interest", "At least three: data/ML, web development, and AI. Each has mentors, a beginner-friendly track, and certificates."],
  ["compete", "A contest every month", "Programming, problem solving, or tech quizzes. Results feed a yearly leaderboard."],
  ["learn", "Seminars and workshops", "Industry speakers, alumni, and researchers, plus hands-on workshops on Git, Linux, cloud, AI, and research writing."],
  ["learn", "100 Days Challenge", "A guided 100-day track covering Python, problem solving, and machine learning, with a roadmap and a progress tracker."],
  ["learn", "Learning tracks for different skill levels", "Beginner, intermediate, and advanced tracks in programming, problem solving, and AI/ML."],
  ["connect", "Connecting every student to the club", "A welcome session for new members, a simple feedback form, and beginner-friendly activities every month."],
  ["connect", "Mentorship program", "Each junior is paired with a senior for guidance on learning paths, projects, and career questions."],
  ["learn", "Student project showcase", "Members present projects to peers, teachers, and guests, with feedback and certificates."],
  ["compete", "IUPC for Chattogram", "An Inter-University Programming Contest open to all universities in Chattogram, hosted by PCIU Computer Club as the flagship event of the year."],
  ["connect", "Two sports events", "One online gaming tournament and one offline sports day, to build friendships beyond coding."],
  ["connect", "Collaboration with clubs across Bangladesh", "Joint contests, workshops, and knowledge-sharing sessions with other university clubs."],
  ["learn", "Resource library and recorded sessions", "Slides, recordings, and roadmaps from every session kept in one shared place."],
  ["learn", "Soft skills sessions", "Short sessions on public speaking, English communication, and teamwork."],
  ["run", "Recognition system", "Member of the Month, volunteer certificates, and a contest leaderboard."],
  ["run", "Transparency", "An event calendar at the start of each semester and a short monthly activity report."],
] as const;

export const plan = raw.map(([c, t, d], i) => ({ n: i + 1, c, t, d }));

export const credentials = [
  "Former Section Representative, PCIU Computer Club",
  "AWS Student Builder Group Leader at PCIU, organizing cloud and AI learning sessions",
  "Assistant Event Coordinator, IEEE PCIU Student Branch, co-organizing workshops",
  "Codeforces Specialist with 4,350+ problems solved across platforms",
  "Champion (November 2024) and 1st runner-up (January 2025), PCC Monthly Programming Contest",
  "Best Dedicated SR of December, PCIU Computer Club",
  "Active research, hackathon, and datathon experience in AI and data science",
];

export const profiles = [
  { label: "Codeforces", stat: "1562", note: "Specialist · 1,216 problems solved", handle: "Abir_07", url: "https://codeforces.com/profile/Abir_07" },
  { label: "CodeChef", stat: "1666", note: "3★ · 2,455 problems solved", handle: "abir30", url: "https://www.codechef.com/users/abir30" },
  { label: "LeetCode", stat: "1875", note: "686 problems solved", handle: "Abir_0_7", url: "https://leetcode.com/u/Abir_0_7/" },
  { label: "Kaggle", stat: "Top 14%", note: "596 of 4,370 teams, Predicting Heart Disease", handle: "abir0007", url: "https://www.kaggle.com/abir0007" },
  { label: "GitHub", stat: "", note: "Projects and code", handle: "Abir-0-7", url: "https://github.com/Abir-0-7" },
  { label: "LinkedIn", stat: "", note: "Experience and certificates", handle: "Md Abdullah Al Mamun", url: "https://www.linkedin.com/in/md-abdullah-al-mamun-358104327/" },
];

export const emailParts = ["abir909814", "gmail.com"];
export const learning = "Verified courses from Stanford Online, DeepLearning.AI, DataCamp, 365 Data Science, and CodeChef. Datathons (private events) in AI and data science.";

export const events = [
  { title: "PCC Sports Week 2025: runners-up, cricket tournament", image: "/events/sports-week.jpg" },
  { title: "Workshop: Let's Code Your Career Through Problem Solving", image: "/events/workshop.jpg" },
];

// Add real awards here. The "Awards and certificates" section only appears when these have items.
// Put images in /public/certs and reference them as "/certs/file.jpg".
export type Honor = { title: string; by: string; year?: string; image?: string; url?: string };
export const awards: Honor[] = [
  { title: "Champion, PCC Monthly Programming Contest", by: "PCIU Computer Club", year: "November 2024", image: "/certs/champion.jpg" },
  { title: "1st runner-up, PCC Monthly Programming Contest", by: "PCIU Computer Club", year: "January 2025", image: "/certs/pcc-contest.jpg" },
  { title: "Best Dedicated SR of December", by: "PCIU Computer Club", image: "/certs/sr-december.jpg" },
  { title: "Runners-up, cricket tournament (team)", by: "PCC Sports Week", year: "2025" },
];

// "url" adds a Verify link.
export const certificates: Honor[] = [
  { title: "Machine Learning Specialization (3 courses)", by: "Stanford Online and DeepLearning.AI, Coursera", year: "Jan 2026", image: "/certs/ml-specialization.jpg", url: "https://coursera.org/verify/specialization/JN2BSWYVVHO9" },
  { title: "Unsupervised Learning, Recommenders, Reinforcement Learning", by: "DeepLearning.AI and Stanford, Coursera", year: "Jan 2026", image: "/certs/unsupervised.jpg", url: "https://coursera.org/verify/JCDXG0FDZIWY" },
  { title: "Advanced Learning Algorithms", by: "DeepLearning.AI and Stanford Online, Coursera", year: "Jul 2025", image: "/certs/advanced-learning.jpg", url: "https://coursera.org/verify/X7A5C5V9YQ44" },
  { title: "Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming", by: "Stanford Online, Coursera", year: "Jan 2026", image: "/certs/greedy-dp.jpg", url: "https://coursera.org/verify/507BFAGG66JZ" },
  { title: "Shortest Paths Revisited, NP-Complete Problems and What To Do About Them", by: "Stanford Online, Coursera", year: "Jan 2026", image: "/certs/shortest-paths-np.jpg", url: "https://coursera.org/verify/7L4EUDUU77WE" },
  { title: "Game Theory", by: "Stanford and UBC, Coursera", year: "Jan 2025", image: "/certs/game-theory.jpg", url: "https://coursera.org/verify/4WSC9VM06FDC" },
  { title: "AWS AI Practitioner Challenge", by: "Udacity", year: "2026", url: "https://www.udacity.com/certificate/e/51ad5ec4-2a3e-11f1-839b-57a401ca6ecd" },
  { title: "Understanding Machine Learning", by: "DataCamp", year: "Oct 2026", image: "/certs/datacamp-ml.jpg", url: "https://www.datacamp.com/skill-verification/UML0017665401673" },
  { title: "Deep Learning with TensorFlow 2", by: "365 Data Science", year: "Nov 2025", image: "/certs/tensorflow2.jpg" },
  { title: "Data Analysis & Visualization Projects", by: "CodeChef", year: "Jan 2026", image: "/certs/codechef-data.jpg", url: "https://www.codechef.com/certificates/public/12976d6" },
  { title: "Build with Flask: Web Development for Beginners", by: "CodeChef", year: "Jun 2025", image: "/certs/codechef-flask.jpg", url: "https://www.codechef.com/certificates/public/6fbaac8" },
];

export const papers = [
  { title: "Beyond Prior Diagnoses: A Machine Learning and Statistical Hypothesis Testing Analysis of Behavioral and Clinical Determinants of Heart Attack Risk Across Generations in Indo-East Asia", venue: "ICSDEHE 2026", status: "Camera-ready submitted", note: "Track: Computer Science and Engineering." }, // change status to "Accepted" once confirmed
  { title: "Robustness Benchmarking of CNN & Transformer Models for Ocular Disease Classification", venue: "Springer", status: "In preparation", note: "Original clinical retinal image dataset built with Chevron Eye Hospital, Chattogram. Six architectures benchmarked; ConvNeXt led at 77.85% validation accuracy." },
  { title: "Edge-AI Microclimate Control & Acoustic Welfare Monitoring for Poultry Housing", venue: "ICCIT 2026", status: "Under review", note: "Edge-deployed sensing with acoustic classification for automated livestock welfare monitoring." },
  { title: "VeriLexis: A Hybrid Extrinsic-Intrinsic Framework for Document Plagiarism Detection", venue: "ICCIT 2026", status: "Under review", note: "Combines external corpus matching with intrinsic stylometric signals to detect paraphrased and AI-generated text." },
  { title: "Validating Cricket's Batting Paradigm Shift with AI", venue: "ICCIT 2026", status: "Under review", note: "Tests whether modern batting strategy is a measurable regime change, using historical ball-by-ball data." },
];
export const ongoing = ["RLHF for Bangla large language models", "Renewable energy"];

export const competitions = [
  { title: "PoliMemeDecode: Humor That Speaks Politics", result: "79th", of: "of 151 teams · 3rd among Chattogram universities", note: "Datathon on categorizing memes by political context." },
  { title: "Predicting Heart Disease", result: "596th", of: "of 4,370 teams · top 14%", note: "Kaggle Playground Series, Season 6 Episode 2." },
];
export const alsoCompeted = "Also: bKash NSUCEC Cybernauts Datathon (207 teams), MemeDecode (64 teams), Diabetes Prediction Challenge (4,206 teams), and more.";
