import { ProviderInterface } from "@/interfaces";

export default async function getProviders(): Promise<
	ProviderInterface[] | string
> {
	const PAYLOAD = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/provider`,
	};

	try {
		const response = await fetch(PAYLOAD.url, PAYLOAD);
		const data = await response.json();

		return data;
	} catch (error) {
		return "Error fetching providers";
	}
}
