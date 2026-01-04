"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  HeartHandshake,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/animations/FadeInSection";

const MAP_IMAGE = "/images/maps/thailand-laos-map-white.png";
const HERO_IMAGE = "/images/hero/baptism.jpg";

const impactStats = [
  { label: "Communities served", value: "160+" },
  { label: "Students & trainees", value: "1,800+" },
  { label: "Local leaders equipped", value: "1,000+" },
] as const;

const heroGallery = [
  { src: "/images/projects/telling-the-gospel-through-sports.png", alt: "Sharing the gospel through sports outreach" },
  { src: "/images/projects/christmas-local-community.png", alt: "Christmas celebration with the local community" },
  { src: "/images/projects/vocational-coffee-lab.jpg", alt: "Vocational coffee lab training" },
] as const;

const pillars = [
  {
    id: "spiritual",
    title: "Spiritual Pillar",
    shortSummary: "Equipping local believers to share the gospel and transform their communities through leadership training, discipleship, and outreach.",
    summary:
      "The Spiritual Pillar is the heartbeat of Mekong Evangelical Mission. Everything we do begins with one purpose: to share the love of Christ and help people encounter Him personally. We believe true transformation happens when local believers are equipped, empowered, and sent back into their communities with a passion for the gospel.",
    stats: [
      { label: "Local leaders equipped", value: "1,000+" },
      { label: "Communities reached", value: "160+" },
      { label: "Churches & fellowships", value: "160+" },
    ],
    image: "/images/pillars/spiritual.jpg",
    images: [
      "/images/pillars/spiritual.jpg",
      "/images/slides/spiritual-pillar/church-members.jpg",
      "/images/slides/spiritual-pillar/woman-getting-baptized.jpg",
      "/images/slides/spiritual-pillar/worship-hands-raised.jpg",
      "/images/slides/spiritual-pillar/worship-leader.jpg",
    ],
    gradient: "from-[#F9F9F9] via-[#F0F0F0] to-[#F0F0F0]",
    highlights: [
      {
        title: "Leadership Development & Local Empowerment",
        body: "At the center of our spiritual ministry is leadership training. We focus on raising strong, faithful leaders who can serve and disciple their own communities. Through our training programs, we have equipped over 1,000 local believers in Thailand and Laos with biblical foundations, ministry skills, and practical tools for serving others. These leaders return to their villages with a renewed heart for mission. Because of their faithfulness, new churches have been planted, fellowships formed, and the gospel shared in places we could never reach alone — impacting more than 10 communities in Thailand and over 150 in Laos. These are not our accomplishments, but the fruit of empowered local believers living out their calling.",
      },
      {
        title: "Discipleship & Spiritual Growth",
        body: "We walk alongside believers at every stage of their spiritual journey. Through mentoring, Bible studies, and discipleship programs, we help individuals deepen their faith, study God’s Word, and grow into disciple-makers who can influence others.",
      },
      {
        title: "Seasonal & Community Outreach",
        body: "Throughout the year, we engage with communities through meaningful outreach programs. These include sports tournaments, Teacher Appreciation Day, Thanksgiving celebrations, and other gatherings that bring people together. Each outreach often includes community meals, worship, preaching, and performances  — moments that open the door to fellowship and sharing Christ’s love. Christmas is one of our most impactful seasons of ministry. Through gift giving, worship, performances, and shared meals, we celebrate the birth of Christ and extend His love to families who may be hearing the gospel for the first time.",
      },
      {
        title: "Conferences & Teaching",
        body: "We also host conferences focused on marriage, leadership, spiritual renewal, and biblical teaching. These gatherings strengthen families, encourage believers, and equip leaders with wisdom and confidence to serve their communities.",
      },
    ],
  },
  {
    id: "education",
    title: "Education Pillar",
    shortSummary: "Providing quality education where children and youth grow academically, emotionally, and spiritually in safe, faith-filled environments.",
    summary:
      "Education is a powerful tool for transformation. We believe, as Proverbs 22:6 teaches, that when a child is guided in the right path, that truth will shape them for life. Knowledge becomes both a shield and a sword — protecting, empowering, and opening doors that many rural communities have never had access to. In many parts of Thailand and Laos, quality education is still limited. That is why Mekong Evangelical Mission is committed to providing learning environments where children and youth can grow academically, emotionally, and spiritually.",
    stats: [
      { label: "Students at Mercy School", value: "800+" },
      { label: "Students at Charisa College", value: "90+" },
      { label: "Total students served", value: "1,000+" },
    ],
    image: "/images/pillars/education.jpg",
    images: [
      "/images/pillars/education.jpg",
      "/images/slides/education-pillar/college-students.jpg",
      "/images/slides/education-pillar/school-bus.jpg",
      "/images/slides/education-pillar/students-praying.jpg",
      "/images/slides/education-pillar/college-student-praying.jpg",
    ],
    gradient: "from-[#f2f7ff] via-[#e8f2ff] to-[#d4e8ff]",
    highlights: [
      {
        title: "Mercy Christian School (K–12)",
        body: "Mercy Christian School was founded to give children in rural communities a chance to receive a quality education rooted in love, character, and Christian values. Our mission goes beyond academics — we seek to plant seeds of faith in the hearts of our students, trusting that one day these seeds will grow into strong and beautiful trees that bless their families and communities. As a charitable school, students do not need to pay tuition. We strive to support every child who walks through our doors, providing scholarships whenever we can. Today, the school has grown to serve over 800 students, offering them a safe, nurturing space to learn and discover their God-given potential.",
      },
      {
        title: "Charisa Technological College",
        body: "Charisa Technological College was created to meet another significant need: access to higher education and vocational training for youth who cannot afford traditional colleges or live too far from urban centers. We offer vocational programs that equip students with skills for real careers, while also shaping their character, faith, and life purpose. The college now serves around 90 students, many of whom are the first in their families to pursue higher education. Our goal is to empower them not only with technical skills, but also with a heart to serve their communities and a foundation of Christian values that guides their future.",
      },
      {
        title: "Building Futures, Changing Generations",
        body: "Through our schools and college, we create pathways for students to dream bigger, grow stronger, and step into opportunities that were once out of reach. We believe that education is more than the classroom — it is discipleship, mentorship, and the planting of seeds that will bear fruit for generations.",
      },
    ],
  },
  {
    id: "vocation",
    title: "Vocation Pillar",
    shortSummary: "Creating meaningful work opportunities so families can thrive close to home, finding stability, purpose, and dignity through employment.",
    summary:
      "Work is more than income — it is dignity, stability, and one of the core securities of life. When people can provide for themselves and their families, they gain confidence, purpose, and the ability to build a better future. Yet in many rural areas of Thailand and Laos, stable job opportunities remain limited. While some are able to move to larger cities to find work, many cannot. As a result, entire communities remain trapped in cycles of financial insecurity. At Mekong Evangelical Mission, we believe that meeting people where they truly are includes supporting them in the area of vocation. Providing meaningful work is part of how we care for the whole person — spiritually, educationally, and economically.",
    stats: [
      { label: "Jobs created", value: "50+" },
      { label: "Workers trained", value: "100+" },
      { label: "Families supported", value: "100+" },
    ],
    image: "/images/pillars/vocation.jpg",
    images: [
      "/images/pillars/vocation.jpg",
      "/images/slides/vocation-pillar/business-team.jpg",
      "/images/slides/vocation-pillar/fixing-tractor.jpg",
      "/images/slides/vocation-pillar/lady-planting.jpg",
      "/images/slides/vocation-pillar/worker-pipe.jpg",
    ],
    gradient: "from-[#f2faf7] via-[#e3f5ed] to-[#c8eadb]",
    highlights: [
      {
        title: "Nathan Trading Co., Ltd. — A Cause-Driven Mission",
        body: 'Nathan Trading Co., Ltd. is a cause-driven manufacturer and exporter, producing two main lines: supplements and medical supplies. Although we operate as a business, our heartbeat is ministry. The company exists to serve people by creating meaningful and accessible jobs where opportunities are limited. We provide both long-term stable jobs and seasonal work, ensuring families can rely on consistent income throughout the year. As an SME, we offer hands-on training and skill development to help workers grow in their abilities, confidence, and long-term potential.<br><br>Our philosophy is simple - <strong>"Teach a man to fish, and you feed him for a lifetime."</strong><br><br>Job security is a major struggle in rural areas, and by offering real employment, we meet people at one of the deepest needs in their daily lives. Through work, we can walk alongside them, build relationships, and plant seeds of faith in their hearts.',
      },
      {
        title: "Supporting Ministries Through Business",
        body: "The proceeds from Nathan Trading Co. directly support the ministries of Mekong Evangelical Mission. Although there is no fixed percentage, funds are given based on the needs of each season — whether supporting charitable schools, vocational colleges, community development projects, or local leadership training. This model allows our business to be both financially sustainable and missionally impactful.",
      },
      {
        title: "A Calling to Empower Through Vocation",
        body: "The Vocation Pillar is our commitment to helping individuals rise above circumstance, find stability close to home, and discover that their work carries meaning. By supporting jobs in rural areas, we strengthen families, reduce economic migration, and build a foundation that allows communities to thrive.",
      },
    ],
  },
] as const;

const focusIcons: Record<string, JSX.Element> = {
  spiritual: <Sparkles className="h-5 w-5 text-brand-brown" />,
  education: <BookOpen className="h-5 w-5 text-brand-brown" />,
  vocation: <BriefcaseBusiness className="h-5 w-5 text-brand-brown" />,
};

function ImageCarousel({ images, alt }: { images: readonly string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startInterval = React.useCallback(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up new interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-slide every 4 seconds
  }, [images.length]);

  React.useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval]);

  const goToPrevious = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    startInterval(); // Restart the timer
  };

  const goToNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startInterval(); // Restart the timer
  };

  return (
    <div className="relative overflow-hidden rounded-[18px] bg-[#f3efe8]">
      <div className="relative h-[320px] w-full md:h-[400px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              width={760}
              height={520}
              className="h-full w-full rounded-[18px] object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={goToPrevious}
          className="rounded-full bg-white/50 p-2 shadow-lg transition hover:bg-white/70"
          aria-label="Previous image"
        >
          <ArrowLeft className="h-5 w-5 text-brand-brown" />
        </button>
        <button
          onClick={goToNext}
          className="rounded-full bg-white/50 p-2 shadow-lg transition hover:bg-white/70"
          aria-label="Next image"
        >
          <ArrowRight className="h-5 w-5 text-brand-brown" />
        </button>
      </div>
    </div>
  );
}

export default function MissionPage() {
  return (
    <div className="bg-[#f7f3ec] text-brand-text-dark">
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Mission background"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-8 py-16 md:px-12 md:grid-cols-[1.15fr,0.85fr] md:items-center">
          <FadeInSection direction="fade-up" delay={200}>
            <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                What we do
              </p>
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Share the gospel and meet real needs in Thailand and Laos through the love of Christ.
              </h1>
              <p className="max-w-2xl text-lg text-white/85">
                We disciple, educate, and equip for dignifying work so families can flourish close to home.
                Every program is rooted in Christ&apos;s love and led alongside local communities.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-full bg-white px-6 py-5 text-brand-brown hover:bg-white/90"
              >
                <Link href="/projects">
                  Support our projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/60 bg-white/10 px-6 py-5 text-white hover:bg-white/15"
                onClick={() => {
                  const element = document.getElementById("pillars");
                  if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 60;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Explore the pillars
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-4 py-5 text-center backdrop-blur-sm"
                >
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs uppercase font-semibold text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
            </div>
          </FadeInSection>
          <div className="flex items-center justify-center">
            <Image
              src={MAP_IMAGE}
              alt="Thailand and Laos map"
              width={420}
              height={630}
              className="h-[480px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fdf9f1]">
        <FadeInSection direction="fade-up">
          <div className="mx-auto grid max-w-6xl gap-10 px-8 py-16 md:px-12 md:grid-cols-[1.1fr,0.9fr] md:items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-text-medium">Why we go</p>
            <h2 className="text-3xl font-semibold">
              We meet people right where they are.
            </h2>
            <p className="text-base leading-7 text-brand-text-medium">
            Our three pillars guide us to serve people in a holistic and intentional way. We walk alongside individuals and communities by raising leaders and discipling believers, nurturing faith that is lived out in everyday life. We invest deeply in education so that children and youth are not only equipped with knowledge, but are given hope, confidence, and a clear path toward a better future. And through meaningful vocational opportunities, we create dignified work that allows families to remain rooted in their communities, building stability, purpose, and the ability to thrive close to home.
            </p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "What we do",
                  icon: <Sparkles className="h-5 w-5 text-brand-brown" />,
                  body: "Share Christ, equip believers, and serve communities in Thailand and Laos.",
                },
                {
                  title: "How we focus",
                  icon: <HeartHandshake className="h-5 w-5 text-brand-brown" />,
                  body: "Three reinforcing pillars — spiritual formation, education, and vocation.",
                },
                {
                  title: "Why it matters",
                  icon: <BookOpen className="h-5 w-5 text-brand-brown" />,
                  body: "Transformation lasts when faith, opportunity, and stability grow together.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-brand-cream bg-white p-4 shadow-sm transition hover:shadow-sm ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f3eee7]">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-text-medium">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-text-medium">
              Focus of each pillar
            </p>
            <div className="mt-2 space-y-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="rounded-2xl border border-brand-cream bg-[#f7f3ec] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                        {focusIcons[pillar.id]}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-brand-text-medium">
                          Pillar
                        </p>
                        <p className="text-lg font-semibold">{pillar.title.replace(" Pillar", "")}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="rounded-full border border-transparent px-4 py-1 text-brand-brown hover:border-brand-brown hover:bg-transparent hover:text-brand-brown"
                      onClick={() => {
                        const element = document.getElementById(pillar.id);
                        if (element) {
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - 60;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      View focus <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-brand-text-medium">{pillar.shortSummary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </FadeInSection>
      </section>

      <div id="pillars" className="space-y-5">
        {pillars.map((pillar, index) => {
          const directions: Array<"fade-up" | "fade-left" | "fade-right"> = ["fade-up", "fade-left", "fade-right"];
          return (
          <FadeInSection key={pillar.id} direction={directions[index % directions.length]}>
            <section
              id={pillar.id}
              className="relative overflow-hidden bg-white"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-40`} />
              <div className="relative mx-auto max-w-6xl px-8 py-14 md:px-12">
            <div className="space-y-8">
              {/* Title, Description, and Image Section */}
              <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-brand-text-dark">{pillar.title}</h2>
                    <p className="text-base leading-7 text-brand-text-medium max-w-4xl">{pillar.summary}</p>
                  </div>
                  
                  {/* Statistics Section */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    {(pillar.stats || impactStats).map((stat) => (
                      <div
                        key={`${pillar.id}-${stat.label}`}
                        className="rounded-2xl border border-brand-brown/20 bg-brand-brown/5 p-4 text-center shadow-sm"
                      >
                        <p className="text-2xl font-semibold text-brand-brown">{stat.value}</p>
                        <p className="mt-1 text-xs uppercase font-medium text-brand-text-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Support Button */}
                  <div>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-brand-brown px-6 py-5 text-brand-brown hover:bg-brand-brown hover:text-white"
                    >
                      <Link href="/projects">
                        Support this pillar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <ImageCarousel images={pillar.images || [pillar.image]} alt={`${pillar.title} illustration`} />
              </div>

              {/* How This Pillar Takes Shape Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e7e3dc]">
                    <div className="h-3 w-3 rounded-full bg-brand-brown/60" />
                  </div>
                  <div className="h-px flex-1 bg-[#e7e3dc]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-text-medium">
                    How this pillar takes shape
                  </p>
                </div>

                {/* Highlights Cards */}
                <div className="space-y-4">
                  {pillar.highlights.map((item) => (
                    <div
                      key={`${pillar.id}-${item.title}-card`}
                      className="rounded-[16px] bg-[#f6f2ec] p-5 md:p-6"
                    >
                      <h3 className="text-lg font-semibold text-brand-text-dark mb-3">{item.title}</h3>
                      <p 
                        className="text-base leading-7 text-brand-text-medium"
                        dangerouslySetInnerHTML={{ __html: item.body.replace(/<br>/g, '<br />') }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
            </section>
          </FadeInSection>
          );
        })}
      </div>

      <section className="bg-gradient-to-b from-[#f6efe4] to-[#e7dcc8]">
        <FadeInSection direction="fade-up">
          <div className="mx-auto max-w-4xl px-8 py-20 md:px-12">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-text-medium font-semibold">Why it matters</p>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-brand-text-dark font-medium max-w-3xl mx-auto">
                Our three pillars — Spiritual, Education, and Vocation — work together to bring holistic transformation to communities in Thailand and Laos.
              </p>
              
              <div className="flex items-center justify-center gap-8 pt-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-brown/10">
                  <HeartHandshake className="h-6 w-6 text-brand-brown" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-brown/10">
                  <BookOpen className="h-6 w-6 text-brand-brown" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-brown/10">
                  <BriefcaseBusiness className="h-6 w-6 text-brand-brown" />
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-base leading-7 text-brand-text-medium max-w-3xl mx-auto">
                  Through the Spiritual Pillar, we equip local leaders, disciple believers, and share Christ's love through outreach, conferences, and community engagement. Through the Education Pillar, we provide free, quality schooling and vocational training for children and youth who lack access to opportunities, planting seeds that will shape future generations. Through the Vocation Pillar, we create meaningful jobs and offer skill development, giving individuals the stability and dignity that come from sustainable work.
                </p>
              </div>
              
              <div className="pt-8 border-t border-brand-cream/50">
                <p className="text-lg leading-8 text-brand-text-dark max-w-3xl mx-auto">
                  Together, these pillars allow us to meet people where they truly are — in their faith, in their learning, and in their livelihood. Each pillar strengthens the other, creating long-lasting impact that uplifts individuals, strengthens families, and builds hope-filled communities rooted in the love of Christ.
                </p>
              </div>
            </div>
            
            <div className="pt-6">
              <Button
                asChild
                className="rounded-full bg-brand-brown px-8 py-6 text-white hover:bg-brand-brown/90 text-base font-semibold"
              >
                <Link href="/projects">
                  Be part of the story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        </FadeInSection>
      </section>
    </div>
  );
}
