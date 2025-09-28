export interface BlogPost {
  title: string;
  date: string;
  image?: string;
  description: string;
  draft: boolean;
  content: string;
  slug: string;
}

export const blogData: BlogPost[] = [
  {
    title: "Moving to Berlin",
    date: "2019-05-12T12:14:34+06:00",
    image: "/images/blog/post-3.jpg",
    description: "This is meta description.",
    draft: true,
    slug: "moving-to-berlin",
    content: `I moved to Berlin in 2019. I didn't know if it was a good idea but I felt it was an opportunity I had to take.

# Hello!`
  },
  {
    title: "Amazon Increase Income",
    date: "2023-01-15T10:00:00+00:00",
    description: "Thoughts on Amazon's income strategies",
    draft: false,
    slug: "amazon-increase-income",
    content: "Content about Amazon income strategies..."
  },
  {
    title: "German Language Tools",
    date: "2023-02-20T14:30:00+00:00", 
    description: "Tools for learning German",
    draft: false,
    slug: "german-language-tools",
    content: "Content about German language learning tools..."
  }
];
