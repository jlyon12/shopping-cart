import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ShopLayout from "./pages/Shop/ShopLayout";
import Collections, {
	loader as collectionsLoader,
} from "./pages/Shop/Collections";
import Products, { loader as productsLoader } from "./pages/Shop/Products";
import ProductPage, {
	loader as productPageLoader,
} from "./pages/Shop/ProductPage";
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
						{
							path: "collections/:collectionHandle",
							element: <Products />,
							loader: productsLoader,
						},
						{
							path: "collections/:collectionHandle/:productHandle",
							element: <ProductPage />,
							loader: productPageLoader,
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
