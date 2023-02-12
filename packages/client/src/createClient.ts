import type { AppRouter } from '../../../core-packages/api';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

export function createClient() {
	const trpcClient = createTRPCProxyClient<AppRouter>({
		transformer: superjson,
		links: [
			httpBatchLink({
				url: 'http://localhost:3000/trpc',
			}),
		],
	});

	const getPage = () => {
		return {
			components: [
				{
					id: '5f9f1c5c-8c1f-4b1f-8c1f-4b1f8c1f4b1f',
					type: 'text',
					props: {
						text: 'Hello world',
					},
				},
			],
		};
	};

	return {
		getPage,
	};
}
