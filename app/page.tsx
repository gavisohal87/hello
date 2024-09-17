import Link from 'next/link';
import { ChevronRight, Mail, Phone } from 'lucide-react';
import { ThreeDCardDemo } from '@/components/Cards';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export default function Component() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gray-800 text-gray-100 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-200">IronWorks</h1>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
              <li>
                <Link href="#products" className="hover:text-blue-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 bg-black">
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <div className="flex items-center justify-center bg-black">
              <div
                className="pb-3 justify-center flex bg-gradient-to-r items-center from-blue-500 -teal-500 to-pink-500 bg-clip-text text-5xl md:text-6xl font-extrabold text-transparent text-center select-auto"
              >
                Quality Iron Products
              </div>
            </div>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <div className="flex items-center justify-center bg-black">
              <div
                className="justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-5xl md:text-6xl font-extrabold text-transparent text-center select-auto"
              >
                for Your Needs
              </div>
            </div>
          </h3>
          <p className="text-lg md:text-xl text-white">
            Discover our  wide range of iron products.
          </p>
        </section>

        <section id="products" className="mb-12 bg-black pb-8">
          <h3 className="text-2xl font-semibold text-white mb-6 pt-4 text-center">
            Our Products
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ThreeDCardDemo
                title="ERW Pipes"
                subHeading="High-quality erw pipes for various industrial applications."
                link="https://img.freepik.com/premium-photo/large-steel-pipes-bunch-stock-illustration-image-ai-generated-art_856480-961.jpg"
              />
              <ThreeDCardDemo
                title="Iron Plates"
                subHeading="High-quality iron plates for various industrial applications."
                link="https://static.wikia.nocookie.net/industrialist/images/5/51/Iron_Plate.png/revision/latest?cb=20240604092423"
              />
              <ThreeDCardDemo
                title="Iron rods"
                subHeading="High-quality iron rods for various industrial applications"
                link="https://media.istockphoto.com/id/906641610/photo/metal-armature-metal-rods-3d-illustration.jpg?s=612x612&w=0&k=20&c=3HGFMsf-aoItlh-hat4xVk6EN8ByYjHomLh6-gHnFdI="
              />
              <ThreeDCardDemo
                title="Iron Billets"
                subHeading="High-quality iron billets for various industrial applications."
                link="https://www.shutterstock.com/image-photo/iron-foundry-continuous-casting-machine-600nw-1724545600.jpg"
              />
            </div>
          </div>
        </section>

        <section id="about" className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h3>
          <p className="text-gray-600">
            IronWorks is a leading supplier of high-quality iron products. With
            years of experience in the industry, we pride ourselves on delivering
            durable and reliable iron solutions for various industrial needs.
          </p>
        </section>

        <section id="contact">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <p className="text-gray-600 mb-4">Get in touch with us for inquiries or orders:</p>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:info@ironworks.com"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" /> info@ironworks.com
              </a>
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" /> +1 (234) 567-890
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-100 py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 IronWorks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
