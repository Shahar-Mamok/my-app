import { PrismaClient, type Review } from '../generated/prisma';
import dayjs from 'dayjs';
const prisma = new PrismaClient();
export const reviewRepository = {
   async getReviews(productId: number, limit?: number): Promise<Review[]> {
      return prisma.review.findMany({
         where: { productId: productId },
         orderBy: { createdAt: 'desc' },
         take: limit,
      });
   },
   storeReviewSummary(productId: number, summary: string) {
      const now = new Date();
      const expiresAt = dayjs().add(7, 'day').toDate();
      const data = {
         expiresAt,
         generatedAt: now,
         productId,
         content: summary,
      };

      return prisma.summary.upsert({
         where: { productId },
         create: data,
         update: data,
      });
   },
};
