const Footer = () => {
    return (
        <footer className="py-12">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-6">
                    <a
                        href="#"
                        className="p-3 rounded-full neumorphic-flat hover:neumorphic-pressed"
                    >
                        <i data-lucide="twitter" className="w-6 h-6"></i>
                    </a>
                    <a
                        href="#"
                        className="p-3 rounded-full neumorphic-flat hover:neumorphic-pressed"
                    >
                        <i data-lucide="github" className="w-6 h-6"></i>
                    </a>
                    <a
                        href="#"
                        className="p-3 rounded-full neumorphic-flat hover:neumorphic-pressed"
                    >
                        <i data-lucide="dribbble" className="w-6 h-6"></i>
                    </a>
                </div>
                <p>
                    © 2024 AuraUI. All Rights Reserved. Designed with
                    <i data-lucide="heart" className="inline-block w-4 h-4 text-red-500"></i>.
                </p>
            </div>
        </footer>
    )
}

export default Footer