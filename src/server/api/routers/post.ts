import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({
      title: z.string().min(1),
      content: z.string().min(1),
      draft: z.boolean().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const wordsPerMinute = 200;
      const wordCount = input.content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / wordsPerMinute);

      return ctx.db.post.create({
        data: {
          title: input.title,
          content: input.content,
          draft: input.draft ?? false,
          readTime: readTime,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return post ?? null;
  }),

  updatePost: protectedProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().min(1),
      content: z.string().min(1),
      draft: z.boolean().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const wordsPerMinute = 200;
      const wordCount = input.content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / wordsPerMinute);

      return ctx.db.post.update({
        where: { id: input.id },
        data: {
          title: input.title,
          content: input.content,
          draft: input.draft ?? false,
          readTime: readTime,
        },
      });
  }),

  deletePost: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.post.delete({
        where: { id: input.id },
      });
      return { success: true };
    }),

  getPost: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({
        where: { id: input.id },
      });
      return post;
    }),

  getAllPosts: protectedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      where: { createdBy: { id: ctx.session.user.id } },
    });
    return posts;
  }),

  getAllPostsPublic: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      where: { draft: false },
    });
    return posts;
  }),

  getCommentCount: publicProcedure
    .input(z.object({ postId: z.number() }))
    .query(async ({ ctx, input }) => {
      const count = await ctx.db.comment.count({
        where: { postId: input.postId },
      });
      return { count };
    }),

    getReactionCount: publicProcedure
      .input(z.object({ postId: z.number() }))
      .query(async ({ ctx, input }) => {
        const count = await ctx.db.reaction.count({
          where: { postId: input.postId },
        });
        return { count };
      }),
});