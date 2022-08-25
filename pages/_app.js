import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import EmptyLayout from '../components/layout/empty';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout ?? EmptyLayout;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
