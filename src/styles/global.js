import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
	}

	:root {
		--background: #fff;
		--color-name-product: #333333;
		--background-header: #F5F5F5;
		--border-product: #E0E0E0;
		--color-description: #828282;
		--background-product-button: #27AE60;
		--background-product-button-hover: #93D7AF;
		--color-subtitulo: #EB5757;
		--color-remover-cart: #BDBDBD;
	}

	body {
		background: var(--background);
		color: var(--color-name-product);
		font-family: 'Inter', sans-serif;
	}

	input, button {
		font-size: 1rem;
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	.container {
		display: flex;
		justify-content: center;
		padding: 20px;
	}

	@media screen and (max-width: 800px) {
		.container {
			margin-top: unset;
			display: unset;
		}
	}
`;
