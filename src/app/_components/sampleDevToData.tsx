import { DevToPostProps } from './devtoPost';

export const sampleDevToData: DevToPostProps = {
  post: {
    title: "Predictions for the future of startups:",
    date: "Aug 7",
    tags: ["startup", "ai", "saas", "founder"],
    content: [
      "1. The AI Model race will hit the wall, and all providers will be roughly on the same level, including the open-source players.",
      "2. The b2b digital SaaS will be heading toward commoditization, prices will be dropping, and at some point, we may even see the b2c model, where tools are free, but the user is \"the product\"."
    ],
    heartCount: 6,
    unicornCount: 2,
    explodingCount: 2,
    clapCount: 3,
    fireCount: 3,
    totalReactions: 16,
    commentCount: 5,
    saveCount: 1
  },
  author: {
    name: "John Rush",
    avatarUrl: "https://picsum.photos/seed/john/200",
    bio: "Building an Empire. 🌐 0.1M B2B users 💫 2M ARR 🚀 10M B2B2C users 1. MarsX.dev 2. UnicornPlatform.com 3. SEObotAI.com 4. allGPTs.co ...16 more",
    joinDate: "Jan 24, 2023"
  },
  comments: [
    {
      author: {
        name: "ANNA LAPUSHNER",
        avatarUrl: "https://picsum.photos/seed/anna/200"
      },
      date: "Aug 7",
      content: "I love this John. You are on point 100%, especially number five. AI made it and now coding is very marketer friendly. Already, marketers are looking at AI as the next generation marketing platform, especially futurists and realists who see this very tight symbiosis clearly evolving. You're so smart. Advertising money will carry on influencing behaviors and it is business as usual. I am excited and we should all enjoy this fun ride!",
      likes: 2
    },
    {
      author: {
        name: "Sarah Developer",
        avatarUrl: "https://picsum.photos/seed/sarah/200"
      },
      date: "Aug 8",
      content: "Interesting predictions! I'm particularly intrigued by the commoditization of B2B SaaS. As a developer, I wonder how this will affect the job market and the types of skills that will be in demand.",
      likes: 1
    }
  ],
  relatedPosts: [
    {
      title: "Raising Series A almost killed my startup :(",
      url: "#",
      tags: ["startup", "saas", "founder"]
    },
    {
      title: "I pay for 78 products to run my 24 projects.",
      url: "#",
      tags: ["saas", "startup", "learning"]
    },
    {
      title: "I built 30 startups in 20 years",
      url: "#",
      tags: ["startup", "learning"]
    }
  ]
};