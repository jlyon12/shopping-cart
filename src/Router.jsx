import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Error from "./components/Error/Errror";
import Home, { loader as homeLoader } from "./pages/Home/Home";
import ShopLayout from "./pages/Shop/ShopLayout";
import Collections, {
	loader as collectionsLoader,
} from "./pages/Shop/Collections";
import Products, { loader as productsLoader } from "./pages/Shop/Products";
import ProductPage, {
	loader as productPageLoader,
} from "./pages/Shop/ProductPage";
import Cart from "./pages/Cart/Cart";
const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <PageLayout />,
			errorElement: <Error />,
			children: [
				{
					index: true,
					element: <Home />,
					loader: homeLoader,
				},
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
							path: "products/:productHandle",
							element: <ProductPage />,
							loader: productPageLoader,
						},
					],
				},
				{ path: "/cart", element: <Cart /> },
				{ path: "*", element: <PageNotFound /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
