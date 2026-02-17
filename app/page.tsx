import Image from 'next/image'

const page = () => {
  return (
    <main>
      <section className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Experience Design
            <span className="block text-gradient">Redefined.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-12">
            AuraUI brings a fresh, tactile feel to your digital interfaces.
            Discover the beauty of neomorphism and create stunning, intuitive
            user experiences.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="#features"
              className="px-8 py-4 rounded-full text-lg font-bold neumorphic-flat hover:neumorphic-pressed"
            >Learn More</a
            >
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Why AuraUI?</h2>
            <p className="mt-2 text-lg">
              The next generation of user interface design is here.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div
              className="p-8 text-center rounded-2xl neumorphic-flat hover:-translate-y-2"
            >
              <div className="inline-flex p-5 rounded-full neumorphic-inset">
                <i data-lucide="layers" className="w-10 h-10 text-gradient"></i>
              </div>
              <h3 className="text-2xl font-bold mt-6 mb-2">Soft & Tactile</h3>
              <p>
                Our components feel like they&apos;re extruded from the screen,
                providing a unique, physical-like interaction.
              </p>
            </div>

            <div
              className="p-8 text-center rounded-2xl neumorphic-flat hover:-translate-y-2"
            >
              <div className="inline-flex p-5 rounded-full neumorphic-inset">
                <i data-lucide="smartphone" className="w-10 h-10 text-gradient"></i>
              </div>
              <h3 className="text-2xl font-bold mt-6 mb-2">Fully Responsive</h3>
              <p>
                Beautifully crafted to look and work perfectly on any screen
                size, from mobile phones to large desktops.
              </p>
            </div>

            <div
              className="p-8 text-center rounded-2xl neumorphic-flat hover:-translate-y-2"
            >
              <div className="inline-flex p-5 rounded-full neumorphic-inset">
                <i data-lucide="settings-2" className="w-10 h-10 text-gradient"></i>
              </div>
              <h3 className="text-2xl font-bold mt-6 mb-2">Easy to Customize</h3>
              <p>
                Built with clean HTML and Tailwind CSS, making it incredibly
                simple to adapt and extend to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Loved by Creatives</h2>
            <p className="mt-2 text-lg">
              Don&apos;t just take our word for it. Here&apos;s what others are saying.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl neumorphic-flat">
              <p className="italic text-lg">
                &quot;This is a game-changer. The neomorphic design adds a level of
                sophistication I haven&apos;t seen before. My users love the new feel
                of my app.&quot;
              </p>
              <div className="flex items-center mt-6">
                <Image
                  src="https://i.pravatar.cc/150?img=11"
                  alt="Avatar"
                  width={14}
                  height={14}
                  className="w-14 h-14 rounded-full neumorphic-flat p-1"
                />
                <div className="ml-4">
                  <p className="font-bold text-lg">Sarah Johnson</p>
                  <p className="text-sm">Lead Designer, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl neumorphic-flat">
              <p className="italic text-lg">
                &quot;I was skeptical about neomorphism, but AuraUI made me a
                believer. It&apos;s clean, modern, and surprisingly easy to
                implement. Highly recommended!&quot;
              </p>
              <div className="flex items-center mt-6">
                <Image
                  src="https://i.pravatar.cc/150?img=32"
                  alt="Avatar"
                  width={14}
                  height={14}
                  className="w-14 h-14 rounded-full neumorphic-flat p-1"
                />
                <div className="ml-4">
                  <p className="font-bold text-lg">Michael Chen</p>
                  <p className="text-sm">Freelance Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div
            className="max-w-3xl mx-auto text-center p-12 rounded-3xl neumorphic-flat"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Elevate Your Design?
            </h2>
            <p className="text-lg mb-8">
              Join our newsletter to get the latest updates, design tips, and
              exclusive access to new components.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full neumorphic-inset focus:outline-none focus:ring-2 focus:ring-(--accent-color-start)"
              />
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 rounded-full font-bold text-lg neumorphic-flat hover:neumorphic-pressed whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page