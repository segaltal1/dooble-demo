import { AppBoard } from './cmps/AppBoard';
import { WatchList } from './pages/WatchList';

const routes = [
    {
        path: '/',
        component: AppBoard,
    },
    {
        path: '/watchlist',
        component: WatchList,
    },
    {
        path: '/:kraken',
        component: AppBoard,
    },

]

export default routes;