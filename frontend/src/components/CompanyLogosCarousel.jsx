import React from "react";

const CompanyLogosCarousel = () => {
  // Add your company logo URLs here
  const companyLogos = [
    {
      name: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com",
    },
    {
      name: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
    },
    {
      name: "Netflix",
      logo: "https://logo.clearbit.com/netflix.com",
    },
    {
      name: "IBM",
      logo: "https://logo.clearbit.com/ibm.com",
    },
    {
      name: "Google",
      logo: "https://logo.clearbit.com/google.com",
    },
    {
      name: "Apple",
      logo: "https://logo.clearbit.com/apple.com",
    },
    {
      name: "Meta",
      logo: "https://logo.clearbit.com/meta.com",
    },
    {
      name: "Tesla",
      logo: "https://logo.clearbit.com/tesla.com",
    },
    {
      name: "Spotify",
      logo: "https://logo.clearbit.com/spotify.com",
    },
    {
      name: "Uber",
      logo: "https://logo.clearbit.com/uber.com",
    },
    {
      name: "Airbnb",
      logo: "https://logo.clearbit.com/airbnb.com",
    },
    {
      name: "Slack",
      logo: "https://logo.clearbit.com/slack.com",
    },
    {
      name: "Dropbox",
      logo: "https://logo.clearbit.com/dropbox.com",
    },
    {
      name: "Adobe",
      logo: "https://logo.clearbit.com/adobe.com",
    },
    {
      name: "Salesforce",
      logo: "https://logo.clearbit.com/salesforce.com",
    },
    {
      name: "Oracle",
      logo: "https://logo.clearbit.com/oracle.com",
    },
    {
      name: "Intel",
      logo: "https://logo.clearbit.com/intel.com",
    },
    {
      name: "Nvidia",
      logo: "https://logo.clearbit.com/nvidia.com",
    },
    {
      name: "PayPal",
      logo: "https://logo.clearbit.com/paypal.com",
    },
    {
      name: "LinkedIn",
      logo: "https://logo.clearbit.com/linkedin.com",
    },
  ];

  // Duplicate the logos for seamless infinite scroll
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-lg font-medium text-center mb-6 text-gray-600">
          Trusted by leading companies
        </h3>

        <div className="relative overflow-hidden">
          <div className="flex animate-logo-scroll items-center">
            {duplicatedLogos.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0  transition-all duration-300 flex items-center justify-center"
                style={{ minWidth: "160px" }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain hover:opacity-100 transition-opacity duration-300 mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-logo-scroll {
          animation: logo-scroll 7s linear infinite;
          width: calc(200%);
        }
        .animate-logo-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CompanyLogosCarousel;
