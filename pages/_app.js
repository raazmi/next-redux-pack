import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import store from '../store/index';

import 'react-toastify/dist/ReactToastify.css';
import '../sass/style.scss';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      return {pageProps};
  }

  render() {
      const {Component, pageProps, store} = this.props;
      return (
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
      );
  }

}

export default withRedux(store)(MyApp);