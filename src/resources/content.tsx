import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Lovish",
  lastName: "Kumar",
  name: `Lovish Kumar`,
  role: "Data Scientist",
  avatar: "/images/profile_picture.jpg",
  email: "iamlovsihkumar@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lovishkumar02",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lovishkumar07",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/amlavishgrover/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>From data pipelines to decisive leadership.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Lovish's</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I’m Lovish, an engineer focused on building robust backend systems and intelligent digital products. Beyond writing code, I lead initiatives that transform ideas into scalable, high-impact solutions.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
Lovish is an India-based engineer with a vision to engineer change beyond code. 
His work blends technical depth with leadership, 
transforming complex challenges into scalable solutions and meaningful impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ruhil Future Technologies",
        timeframe: "June 2025 - August 2025",
        role: "Produt Intern",
        achievements: [
          <>
            Led end-to-end development across UI/UX and backend systems, 
            building scalable features with Python and Flask while delivering a 
            seamless and performance-optimized user experience.
          </>,
          <>
            Drove cross-functional execution—from product design to technical implementation and 
            teaching—developing course modules and translating complex 
            engineering concepts into impactful learning experiences.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images

        ],
      },
      {
        company: "Climate Cadets Collective - C3",
        timeframe: "2025 - Present",
        role: "Director of Coummunity and Engagement",
        achievements: [
          <>
            Lead community strategy and engagement for a 400+ member youth climate network, designing initiatives that
            make climate action more accessible, inclusive, and research-driven.

          </>,
          <>
            Build partnerships with national and international organisations, supporting programs like the Climate
            Ambassadors Initiative, youth diplomacy forums, and advocacy dialogues with policymakers and climate leaders.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "UIET, Maharshi Dayanand University, Rohtak, India",
        description: <>Studing Computer Science & Engineering.</>,
      },
      {
        name: "Indian Institute of Technology, Madras, India",
        description: <>Studing BS Degree in Data Science and Applications</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Analysis and Visualization",
        description: (
          <>Turning raw data into strategy through analysis, modeling, and visualization.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Panadas",
            icon: "pandas",
          },
          {
            name: "Numpy",
            icon: "numpy",
          },
          {
            name: "SQL",
            icon: "sql",
          },
          {
            name: "Tableau",
            icon: "tableau",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Analysis and Visualization",
        description: (
          <>Engineering scalable systems through backend architecture, APIs, and data pipelines.</>
        ),
        tags: [
          {
            name: "Flask",
            icon: "flask",
          },
          {
            name: "FastAPI",
            icon: "fastapi",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/hpair.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ACONF25_0082.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ACONF25_0094.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/tokyo_tower.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/utoyo_board.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/tokyo_celeb.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/impact_challenge.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/minister_uzbek.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
