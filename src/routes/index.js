import AdminPage from "../page/AdminPage/AdminPage";
import HomePage from "../page/HomePage/HomePage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import OrderPage from "../page/OrderPage/OrderPage";
import ProductDetailPage from "../page/ProductDetailPage/ProductDetailPage";
import SignInPage from "../page/SignInPage/SignInPage";
import TypeProductPage from "../page/TypeProductPage/TypeProductPage";
import SearchPage from "../page/SearchPage/SearchPage";
import Cart from "../page/Cart/Cart";
import PaymentPage from "../page/SearchPage/SearchPage";
import MomoPage from "../page/MomoPage/Momo";


export const routes =[
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        isShowFooter: true

    },
    {
        path: '/search',
        page: SearchPage,
        isShowHeader: true,
        isShowFooter: true

    },
    {
        path: '*',
        page: NotFoundPage

    },
    {
        path: '/type/:id',
        page: TypeProductPage,
        isShowHeader: true,
        isShowFooter: true
        
    },
    {
        path: '/product-details/:id',
        page: ProductDetailPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/admin',
        page: SignInPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isShowFooter: true
    },
    {
        path: '/cart',
        page: Cart,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/pay',
        page: PaymentPage,
        isShowHeader: false,
        isShowFooter: true
    },
    {
        path: '/search/:data',
        page: SearchPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/momo',
        page: MomoPage,
        isShowHeader: true,
        isShowFooter: true
    },
]