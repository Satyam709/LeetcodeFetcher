/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import getDailyProblem from './GetProblem';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const now = new Date();
		const todayDateUTC = now.toISOString().split('T')[0]; // Gets the date in UTC format (e.g., "2024-11-05")

		// Parse cookies from the request header
		const cookies = parseCookies(request.headers.get('Cookie'));
		const cachedUrl = cookies['daily_problem_url'];
		const cachedDate = cookies['daily_problem_date']; // Track the date when the URL was last fetched

		// Check if we need to fetch a new URL (if no date is set or if it's a new day in UTC)
		if (!cachedUrl || cachedDate !== todayDateUTC) {
			console.log('fetching new url');

			try {
				const url = await getDailyProblem();

				// Set the new URL and the current date in the cookie
				const headers = new Headers();
				headers.set('Set-Cookie', `daily_problem_url=${url}; Path=/; Secure; HttpOnly`);
				headers.append('Set-Cookie', `daily_problem_date=${todayDateUTC}; Path=/; Secure; HttpOnly`);

				// Redirect with the updated URL
				headers.set('Location', url);
				return new Response(null, { status: 302, headers });
			} catch (error) {
				console.log(error);
			}
		}
		console.log(cookies);

		console.log('found in cookie');

		// If URL is cached and up-to-date, redirect to the cached URL
		return Response.redirect(cachedUrl, 302);
	},
} satisfies ExportedHandler<Env>;

// Helper function to parse cookies
function parseCookies(cookieHeader: any) {
	if (!cookieHeader) return {};

	return Object.fromEntries(
		cookieHeader.split('; ').map((cookie: any) => {
			const [name, ...rest] = cookie.split('=');
			return [name, rest.join('=')];
		})
	);
}
