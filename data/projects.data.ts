import { Project } from "@/lib/filters";

// Helper to automatically calculate "days left" from a target end date.
// Update the date strings per project; this will always compare against "today".
function getDaysLeft(endDate: string): number {
  const today = new Date();
  const end = new Date(endDate);

  // Compare dates at midnight to avoid off‑by‑one issues from time of day
  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const startOfEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  const diffMs = startOfEnd.getTime() - startOfToday.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  return Math.max(0, diffDays);
}

export const projects: Project[] = [
  {
    id: "fuel-their-future",
    title: "Fuel Their Future",
    coverImage: "/images/slides/education-pillar/school-bus.jpg",
    category: "Education",
    collection: "Children & Youth Development",
    donateUrl: "https://givebutter.com/QZjkbk",
    goalAmount: 10000,
    raisedAmount: 0,
    status: "active",
    location: "Thailand",
    shortDescription:
      "Help provide daily transportation for children so they can attend school consistently and continue their education.",
    daysLeft: null,
    about:
      "Fuel Their Future supports underprivileged children by covering daily transportation costs, ensuring they can attend school consistently and grow in a Christ-centered learning environment.",
    overview:
      "For many children in rural communities, the desire to learn is present—but access to school is not guaranteed. Transportation costs, though small to some, become a daily barrier that prevents consistent attendance. School is more than a classroom; it is a place where children receive quality education, develop character, and grow in a Christ-centered environment where truth, love, and purpose are taught.",
    whyMatters:
      "The Bible teaches us to guide children in the right way so that when they grow older, they will not depart from it. Education is one of the most powerful ways to plant seeds of faith early in life. By supporting transportation costs, we ensure children can show up consistently, remain engaged in learning, and continue growing in a safe, Christ-like environment.",
    impact: [
      "Cover daily transportation costs for students",
      "Ensure consistent access to education",
      "Create stability for children from underserved families",
      "Plant seeds of Christ in young hearts"
    ],
    impactNote:
      "Sometimes, the journey to school is the first step in a much bigger journey of faith.",
    tags: ["Education", "Children", "Urgent", "Discipleship", "Access"],
    progressUpdates: [
      {
        date: "10 Jan 2026",
        content:
          "This project has officially launched. Funds raised will be used to support daily transportation for children in underserved communities across Thailand, helping ensure consistent access to education in a safe, Christ-centered environment. Updates will be shared as support is distributed to students."
      }
    ]
  },  
  {
    id: "college-scholarship-program",
    title: "Scholarship for College Students",
    coverImage: "/images/projects/college-students.jpg",
    category: "Education",
    collection: "Education Support",
    donateUrl: "https://givebutter.com/FzMreZ",
    goalAmount: 16000,
    raisedAmount: 0,
    status: "active",
    location: "Thailand & Lao",
    shortDescription:
      "Provide housing-based scholarships that allow underprivileged students from rural Thailand and Lao to study at our vocational college — free from financial barriers.",
    daysLeft: null,
    about:
      "This scholarship program supports college students from underserved rural communities by covering essential living, housing, and education costs so they can study, grow, and experience Christ’s love in a Christ-centered campus environment.",
    overview:
      "Every year, MEM travels to rural and underserved areas across Thailand and Lao to identify students who desire quality education but face barriers such as financial hardship, limited access, or geographic isolation. These students are invited to study at our vocational college, where they receive a housing-based scholarship that allows them to live and study on campus. While government education funds exist, they are often insufficient to fully cover the true cost of making education accessible. This scholarship helps bridge that gap — covering living expenses, housing costs, daily essentials, and part of the tuition shortfall — so students can focus fully on learning, growing, and preparing for their future.",
    whyMatters:
      "Education alone is not enough if students are weighed down by survival concerns. By providing housing-based scholarships, we remove the daily burden of cost and access, allowing students to study in stability and dignity. Living on campus also means students are immersed in a Christ-centered environment where they experience Christ’s love daily, learn biblical values, and grow both academically and spiritually. This program is not only about education — it is about shaping lives, character, and purpose for the long term.",
    impact: [
      "Support 25 – 30 students each year with access to higher education",
      "Cover essential living and housing expenses for students in need",
      "Bridge the tuition gap not covered by government funding",
      "Provide a stable, Christ-centered campus environment for holistic growth",
      "Equip students with education, character, and faith for their future"
    ],
    impactNote:
      "When students are given stability, community, and Christ-centered care, education becomes a foundation for lifelong transformation.",
    tags: ["Education", "Scholarship", "Youth", "Discipleship", "Vocational"],
    progressUpdates: [
      {
        date: "10 Jan 2026",
        content:
          "This scholarship program has officially launched. Our team is preparing for the upcoming student intake by coordinating with partner communities in rural Thailand and Lao, where we will begin identifying students who desire quality education but face significant financial and access barriers. Funds raised at this stage will be directed into a shared scholarship pool to support students’ housing, living expenses, and education needs for the coming academic cycle."
      },
    ]
  },
  {
    id: "leadership-training-conference-2026",
    title: "Conference for Leadership Training (2026)",
    coverImage: "/images/projects/conference-room.jpg",
    category: "Spiritual",
    collection: "Faith & Mission",
    donateUrl: "https://givebutter.com/5KvasP",
    goalAmount: 8000,
    raisedAmount: 0,
    status: "active",
    location: "Thailand & Lao",
    shortDescription:
      "Equip local leaders from Thailand and Lao through a Christ-centered leadership conference designed to strengthen ministries and communities.",
    daysLeft: null,
    about:
      "This conference brings together local leaders from Thailand and Lao to be equipped, encouraged, and strengthened through Christ-centered teaching, training, and fellowship.",
    overview:
      "Each year, MEM hosts a leadership training conference that gathers pastors, ministry workers, and community leaders from Thailand and Lao. The conference provides a space for leaders to step away from daily responsibilities and be refreshed through workshops, teaching sessions, networking, and the exchange of real-life ministry experiences. Through intentional training and Christ-centered leadership development, participants are equipped with practical tools, biblical foundations, and renewed vision to return to their communities ready to lead, serve, and strengthen their ministries.",
    whyMatters:
      "Healthy communities depend on healthy leadership. Many local leaders serve faithfully but lack access to training, resources, and peer support. This conference creates a rare opportunity for leaders to be poured into—spiritually, emotionally, and practically. By grounding leadership development in Christ and biblical principles, we help leaders grow not only in skill but also in character, faith, and purpose. The impact extends far beyond the conference as leaders return home equipped to disciple others and strengthen their communities.",
    impact: [
      "Equip 80+ local leaders with Christ-centered leadership training",
      "Provide practical tools and biblical foundations for ministry",
      "Create space for networking and peer learning across regions",
      "Support leaders with travel, accommodation, and training access",
      "Multiply impact as leaders return to serve their communities"
    ],
    impactNote:
      "When leaders are equipped and strengthened, the impact multiplies across churches, ministries, and communities.",
    tags: ["Leadership", "Discipleship", "Conference", "Ministry", "Training"],
    progressUpdates: [
      {
        date: "10 Jan 2026",
        content:
          "This project has officially launched for the 2026 Leadership Training Conference. Our team is currently preparing the conference framework, including program planning, speaker coordination, and logistical arrangements. Funds raised at this stage will support travel, accommodation, meals, venue costs, and workshop resources for leaders coming from Thailand and Lao."
      }
    ]
  },    
];

