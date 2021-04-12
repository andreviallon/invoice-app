import Narbar from './Narbar';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col sm:flex-row">
            <Narbar />
            <div className="w-full h-full">
                <div className="container mx-auto my-10 p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
