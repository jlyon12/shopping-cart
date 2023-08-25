import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/PageLayout";

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <PageLayout />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
