import { AppBoard } from './cmps/AppBoard';
import { ChartList } from './pages/ChartList';

const routes = [
    {
        path: '/',
        component: AppBoard,
    },
    {
        path: '/charts',
        component: ChartList,
    },
]

export default routes;