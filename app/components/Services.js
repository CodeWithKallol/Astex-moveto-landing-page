'use client';


const StarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.445a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.367-2.445a1 1 0 00-1.176 0l-3.367 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.35 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const GlobeIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const HomeIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

const BuildingIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="18"></rect><line x1="8" y1="22" x2="8" y2="4"></line><line x1="16" y1="22" x2="16" y2="4"></line><line x1="12" y1="22" x2="12" y2="4"></line><line x1="4" y1="8" x2="20" y2="8"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="16" x2="20" y2="16"></line>
    </svg>
);

const CarIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 16H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9l4 4v7a2 2 0 0 1-2 2z"></path><circle cx="6.5" cy="16.5" r="1.5"></circle><circle cx="12.5" cy="16.5" r="1.5"></circle>
    </svg>
);

// ServiceItem Component used in the grid
const ServiceItem = ({ icon, title, text }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 text-orange-500 mt-1">{icon}</div>
    <div>
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  </div>
);


const ProfessionalServiceSection = () => {
  return (
    <section className="py-15 bg-gray-200 w-full">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={'/packing-5.png'}
              alt="Professional mover with clipboard"
              width={350}
              height={450}
              className="rounded-lg object-cover mix-blend-multiply mx-50"
            />
            <div className="absolute -top-6 left-0 sm:right-6 bg-white items-center justify-center px-8 shadow-lg w-48 flex gap-3 mt-10 hover:scale-105">
              <div className="mt-4">
              <p className="font-bold text-3xl text-orange-500">4.8</p>
              </div>
              <div className="grid">
              <div className="flex justify-center text-yellow-400 ">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
              </div>
              <p className="font-bold text-gray-600">From Google Business</p>
            </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional Service Ready For Your Moving Plan</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nulla nec id velit vitae rhoncus porta tellus ultrices scelerisque. Ornare orci in consequat id magna efficitur. Faucibus in sed risus. Hac purus pulvinar praesent nisl sed feugiat.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              <ServiceItem
                icon={<GlobeIcon />}
                title="International Moves"
                text="Condimentum cursus facilisis aliquam porttitor."
              />
              <ServiceItem
                icon={<HomeIcon />}
                title="Domestic Moves"
                text="Condimentum cursus facilisis aliquam porttitor."
              />
              <ServiceItem
                icon={<BuildingIcon />}
                title="Office Moves"
                text="Condimentum cursus facilisis aliquam porttitor."
              />
              <ServiceItem
                icon={<CarIcon />}
                title="Vehicle Transfer"
                text="Condimentum cursus facilisis aliquam porttitor."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalServiceSection;

