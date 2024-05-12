import { DepositInterface, ProviderInterface } from "@/interfaces";

// This interface defines the expected structure of the response from the API
// after a successful deposit creation. (Assuming it includes the deposit details
// and an ID)
interface PostDepositInterface {
	dailyAmount: number;
	weeklyAmount: number;
	monthlyAmount: number;
	minimumAmount: number;
	id: string;
}

// Sends a POST request to the API to create a new deposit.
export default async function postDeposit(
	body: DepositInterface
): Promise<PostDepositInterface | string> {
	// This constant defines the request configuration for creating a new deposit.
	const PAYLOAD = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/self-limitation`,
		body: JSON.stringify(body),
	};

	try {
		// Fetches data from the API endpoint using the defined payload.
		const response = await fetch(PAYLOAD.url, PAYLOAD);

		// Parses the JSON response from the API.
		const data = await response.json();

		// Returns the parsed data (assumed to be a PostDepositInterface).
		return data;
	} catch (error) {
		// Handles errors during the API call.
		return "Error fetching providers";
	}
}
