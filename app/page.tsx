import Link from 'next/link';
import { ChevronRight, Mail, Phone } from 'lucide-react';
import { ThreeDCardDemo } from '@/components/Cards';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export default function Component() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gray-800 text-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-200">IronWorks</h1>
          <nav>
            <ul className="flex space-x-4">
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
          <h2 className="text-4xl font-bold text-white mb-4">
            {/* Quality Iron Products for Your Needs  */}
            <div className="flex  items-center justify-center bg-black">
              <div
                className="  justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                Quality Iron Products
              </div>
            </div>
          </h2>
          <h3 className="text-4xl font-bold text-white mb-4">
            {/* Quality Iron Products for Your Needs  */}
            <div className="flex  items-center justify-center bg-black">
              <div
                className="  justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
                 for Your Needs
              </div>
            </div>
          </h3>
          <p className="text-xl text-white">
            Discover our range of iron ERW pipes, plates, sheets, and rods.
          </p>
        </section>

        <section id="products" className="mb-12 bg-black pb-8">
          <h3 className="text-2xl font-semibold text-white mb-6 pt-4 text-center ">
            Our Products
          </h3>
          <div className='flex justify-center'>
            <div className="grid grid-cols-2 gap-6">
              <ThreeDCardDemo title="ERW Pipes" subHeading="High-quality erw pipes for various industrial applications." link='https://img.freepik.com/premium-photo/large-steel-pipes-bunch-stock-illustration-image-ai-generated-art_856480-961.jpg' />
              <ThreeDCardDemo title="Iron Plates" subHeading="High-quality iron plates for various industrial applications." link='https://5.imimg.com/data5/SELLER/Default/2023/1/CT/EW/JG/8984314/black-iron-pipe.jpg' />
              <ThreeDCardDemo title="Iron Sheets" subHeading="High-quality iron sheets for various industrial applications" link='' />
              <ThreeDCardDemo title="Iron Rods" subHeading="High-quality iron rods for various industrial applications." link='' />


            </div>
          </div>

        </section>

        <section id="about" className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            About Us
          </h3>
          <p className="text-gray-600">
            IronWorks is a leading supplier of high-quality iron products. With
            years of experience in the industry, we pride ourselves on
            delivering durable and reliable iron solutions for various
            industrial needs.
          </p>
        </section>

        <section id="contact">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <p className="text-gray-600 mb-4">
              Get in touch with us for inquiries or orders:
            </p>
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
