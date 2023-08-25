import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ShopLayout from "./pages/Shop/ShopLayout";
import Collections, {
	loader as collectionsLoader,
} from "./pages/Shop/Collections";
const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <PageLayout />,
			children: [
				{
					path: "/shop",
					element: <ShopLayout />,
					children: [
						{
							path: "collections",
							element: <Collections />,
							loader: collectionsLoader,
						},
					],
				},
				{ path: "*", element: <PageNotFound /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
