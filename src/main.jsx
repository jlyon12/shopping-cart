import React from "react";
import ReactDOM from "react-dom/client";
import CartProvider from "./context/CartProvider";
import Router from "./Router";

import "./sass/_index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CartProvider>
			<Router />
		</CartProvider>
	</React.StrictMode>
);
