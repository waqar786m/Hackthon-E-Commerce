// _app.tsx or App.tsx
import type { AppProps } from 'next/app';
import { CartProvider } from '@/app/Context/CartContext';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;