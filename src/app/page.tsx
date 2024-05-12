"use client";

import { DepositForm, ProviderForm, Tab } from "@/components";
import { useState } from "react";

export default function Home() {
	const [screen, setScreen] = useState<"provider" | "deposit">("provider");

	return (
		<main className="flex w-full max-w-[781px] flex-col gap-2.5">
			<div className="flex">
				<Tab
					label="Crear Solicitud"
					isSelected={screen === "provider"}
					onClick={() => setScreen("provider")}
				/>
				<Tab
					label="Límite de depósito"
					isSelected={screen === "deposit"}
					onClick={() => setScreen("deposit")}
				/>
			</div>
			{screen === "provider" ? <ProviderForm /> : <DepositForm />}
		</main>
	);
}
