import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';

export const projectRouter = createTRPCRouter({
	all: publicProcedure
		.input(
			z.object({
				organizationId: z.string(),
			}),
		)
		.query(({ input, ctx }) => {
			return ctx.prisma.project.findMany({
				where: {
					organizationId: input.organizationId,
				},
				orderBy: { name: 'asc' },
			});
		}),

	findById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
			return ctx.prisma.project.findFirst({ where: { id: input }, include: { organization: true } });
		}),

	allWithAppClients: publicProcedure
		.input(
			z.object({
				organizationId: z.string(),
			}),
		)
		.query(({ input, ctx }) => {
			return ctx.prisma.project.findMany({
				where: {
					organizationId: input.organizationId,
				},
				orderBy: { name: 'asc' },
				include: {
					appClients: {
						orderBy: { name: 'asc' },
					},
				},
			});
		})
});
