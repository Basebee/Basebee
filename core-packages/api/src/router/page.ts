import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';

export const pageRouter = createTRPCRouter({
	all: publicProcedure
		.input(
			z.object({
				appClientId: z.string(),
			}),
		)
		.query(({ input, ctx }) => {
			return ctx.prisma.page.findMany({
				where: {
					appClientId: input.appClientId,
				},
				orderBy: { name: 'asc' },
			});
		}),

    
});
