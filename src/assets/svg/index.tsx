import { SVGAttributes } from "react";

export function CheckIcon(props: SVGAttributes<SVGElement>) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.7162 3.58224C13.9469 3.79371 13.9625 4.15217 13.751 4.38287L6.4177 12.3829C6.31326 12.4968 6.16681 12.5631 6.01229 12.5665C5.85776 12.5698 5.70857 12.5099 5.59928 12.4007L2.26595 9.06732C2.04465 8.84602 2.04465 8.48723 2.26595 8.26593C2.48725 8.04463 2.84604 8.04463 3.06734 8.26593L5.98218 11.1808L12.9156 3.61705C13.1271 3.38635 13.4855 3.37076 13.7162 3.58224Z"
			/>
		</svg>
	);
}
