import { DepositInterface, ProviderInterface } from "@/interfaces";

interface PostDepositInterface {
	dailyAmount: number;
	weeklyAmount: number;
	monthlyAmount: number;
	minimumAmount: number;
	id: string;
}

export default async function postDeposit(
	body: DepositInterface
): Promise<PostDepositInterface | string> {
	const PAYLOAD = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/self-limitation`,
		body: JSON.stringify(body),
	};

	try {
		const response = await fetch(PAYLOAD.url, PAYLOAD);
		const data = await response.json();

		return data;
	} catch (error) {
		return "Error fetching providers";
	}
}
