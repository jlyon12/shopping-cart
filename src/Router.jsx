import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <PageLayout />,
		},
		{ path: "*", element: <PageNotFound /> },
	]);

	return <RouterProvider router={router} />;
};

export default Router;
