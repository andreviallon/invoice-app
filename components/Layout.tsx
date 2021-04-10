import Narbar from './Narbar';
import { ThemeEnum } from '../models/Theme';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col sm:flex-row">
            <Narbar theme={ThemeEnum.LIGHT} />
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    );
}
