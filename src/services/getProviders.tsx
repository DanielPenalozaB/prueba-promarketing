import { ProviderInterface } from "@/interfaces";

// Fetches a list of available providers from the API.
export default async function getProviders(): Promise<
	ProviderInterface[] | string
> {
	// This constant defines the request configuration for fetching providers.
	const PAYLOAD = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/provider`,
	};

	try {
		// Fetches data from the API endpoint using the defined payload.
		const response = await fetch(PAYLOAD.url, PAYLOAD);

		// Parses the JSON response from the API.
		const data = await response.json();

		// Returns the parsed data (assumed to be an array of ProviderInterface).
		return data;
	} catch (error) {
		// Handles errors during the API call.
		return "Error fetching providers";
	}
}
