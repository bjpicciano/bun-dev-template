import { serve } from 'bun';
import index from '@/index.html';

const server = serve({
	routes: {
		'/': index,

		'/api/status': {
			GET: () => new Response('OK'),
			POST: async (req) => {
				const body: unknown = await req.json();
				return Response.json({ status: 'OK', version: '1.0.0', echo: body });
			},
		},

		'/*': new Response('404 Not Found', { status: 404 }),
	},

	development: process.env.NODE_ENV !== 'production' && {
		// Enable browser hot reloading in development
		hmr: true,

		// Echo console logs from the browser to the server
		console: true,
	},
});

console.log(`🚀 Server running at ${server.url}`);
