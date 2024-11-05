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
import getDailyProblem from "./GetProblem";
export default {
	async fetch(request, env, ctx): Promise<Response> {
		const res = await getDailyProblem();
		// Assuming 'res' contains the URL as a string
		const url = res; // Make sure this is a valid URL string

		// Return a redirect response
		return Response.redirect(url, 302);
	},
} satisfies ExportedHandler<Env>;
