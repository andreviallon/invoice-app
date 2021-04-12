import Narbar from './Narbar';
import { ThemeEnum } from '../models/Theme';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col sm:flex-row">
            <Narbar />
            <div className="w-full h-full">
                <div className="container mx-auto mt-6 p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
