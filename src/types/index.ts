export type MarkdownPost = {
  id: string;
  authorProfileImage: string;
  title: string;
  authorName: string;
  description: string;
  content: string;
  previewImage: string;
  publicationTimestamp: number;
};

export type Post = MarkdownPost;
