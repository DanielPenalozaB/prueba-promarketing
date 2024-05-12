import { ButtonInterface } from "@/interfaces";
import React from "react";

export default function Button(props: ButtonInterface) {
	return <button {...props}>{props.label}</button>;
}
