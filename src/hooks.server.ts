import redirects from '$lib/redirects.json';
import type { Handle } from '@sveltejs/kit';
const redirected: Record<string, string> = redirects;

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	if (event.url.pathname in redirected) {
		return new Response('Redirect', {
			status: 301,
			headers: { location: redirected[event.url.pathname] }
		});
	}
	return response;
};
