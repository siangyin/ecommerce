import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";

const product = [
	{ id: 1, name: "shoes", description: "running shoes", price: "$5" },
	{ id: 2, name: "macbook", description: "apple", price: "$5" },
];

import useStyles from "./styles";

const Products = () => {
	const classes = useStyles();

	return (
		<main>
			<Grid container justify="center" spacing={4}>
				{product.map((product) => {
					return (
						<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
							<Product product={product} />
						</Grid>
					);
				})}
			</Grid>
		</main>
	);
};

export default Products;
