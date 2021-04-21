import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col sm:flex-row">
            <Navbar />
            <div className="w-full h-full ml-0 sm:ml-20">
                <div className="container mx-auto mt-16 sm:my-10 py-4 px-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
