
const Header = () => {
    return (
        <header className="sticky top-0 z-50">
            <nav
                className="container mx-auto px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/30 rounded-b-xl neumorphic-flat"
            >
                <a href="#" className="text-2xl font-bold text-gradient">AuraUI</a>

                <div className="hidden md:flex items-center space-x-8">
                    <a
                        href="#features"
                        className="hover:text-gradient font-medium transition-colors"
                    >Features</a
                    >
                    <a
                        href="#testimonials"
                        className="hover:text-gradient font-medium transition-colors"
                    >Testimonials</a
                    >
                    <a
                        href="#contact"
                        className="hover:text-gradient font-medium transition-colors"
                    >Contact</a
                    >
                </div>

                <a
                    href="#contact"
                    className="hidden md:block px-6 py-2 rounded-full font-semibold neumorphic-flat hover:neumorphic-pressed"
                >Get Started</a
                >

                <button
                    id="mobile-menu-button"
                    className="md:hidden p-2 rounded-full neumorphic-flat hover:neumorphic-pressed"
                >
                    <i data-lucide="menu"></i>
                </button>
            </nav>

            <div
                id="mobile-menu"
                className="hidden md:hidden container mx-auto px-6 pb-4"
            >
                <div className="mt-4 p-4 neumorphic-flat rounded-xl">
                    <a
                        href="#features"
                        className="block py-2 text-center hover:text-gradient font-medium"
                    >Features</a
                    >
                    <a
                        href="#testimonials"
                        className="block py-2 text-center hover:text-gradient font-medium"
                    >Testimonials</a
                    >
                    <a
                        href="#contact"
                        className="block py-2 text-center hover:text-gradient font-medium"
                    >Contact</a
                    >
                    <a
                        href="#contact"
                        className="block mt-4 w-full text-center py-3 rounded-full font-semibold neumorphic-flat hover:neumorphic-pressed"
                    >Get Started</a
                    >
                </div>
            </div>
        </header>
    )
}

export default Header