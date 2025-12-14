import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import sgcFavicon from "./assets/sgc-logo.png";

const ensureFavicon = () => {
	const href = new URL(sgcFavicon, import.meta.url).toString();
	const existing = document.querySelector<HTMLLinkElement>("link[rel~='icon']");

	if (existing) {
		existing.href = href;
	} else {
		const link = document.createElement("link");
		link.rel = "icon";
		link.href = href;
		document.head.appendChild(link);
	}
};

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
