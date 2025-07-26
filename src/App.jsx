import { SlidersVertical, RefreshCw, Users, Shield } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col md:flex-row w-screen min-h-screen">
      {/* Left */}
      <div className="flex items-center justify-center w-full md:w-[35%] bg-white pt-8 md:pt-0">
        <img
          src="/Image 3 (1).png"
          alt="logo xio"
          className="w-[90%] max-w-[400px] object-contain"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 bg-white font-mono">
        <div className="w-full min-h-screen py-6 px-8">
          {/* Hero Section */}
          <section className="py-6">
            <p className="inline-block bg-red-100 px-4 py-1 rounded-3xl my-3 border border-[#BB304F]">
              Self Hosted
            </p>
            <h1 className="mb-3 font-mono font-medium text-4xl leading-tight py-2">
              AI support for your complete team
            </h1>
            <p className="text-base leading-relaxed text-gray-800 font-jakarta font-normal tracking-[0.13px]">
              Xio offers hosted and self-hosted versions enabling your whole team
              to harness the power of AI, ensuring multi-user access and privacy.
            </p>
          </section>

          {/* Feature Row 1 */}
          <section className="flex flex-col md:flex-row py-3">
            <div className="flex-1 py-[18px] px-[20px] border-t md:border-t border-[#BB304F]">
              <SlidersVertical className="text-[#BB304F] w-6 h-7 mb-3" />
              <h2 className="text-xl font-[18px] mb-2">White-Labeled</h2>
              <p className="font-jakarta font-normal tracking-[0.13px] text-gray-700">
                Xio can be readily customized and white-labeled to match your
                company's branding and identity.
              </p>
            </div>
            <div className="flex-1 py-[18px] px-[20px] border-t md:border-t md:border-l border-[#BB304F]">
              <RefreshCw className="text-[#BB304F] w-6 h-7 mb-3" />
              <h2 className="text-xl font-[18px] mb-2">Ecosystem</h2>
              <p className="font-jakarta font-normal tracking-[0.13px] text-gray-700">
                Adapt features and designs to fit your organization's workflow
                without breaking security.
              </p>
            </div>
          </section>

          {/* Center Image */}
          <section className="flex justify-center py-1">
            <div className="w-[300px] h-[300px]">
              <img
                src="/Frame 1000001711.png"
                alt="Hexagon"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </section>

          {/* Feature Row 2 */}
          <section className="flex flex-col md:flex-row py-3">
            <div className="flex-1 py-[18px] px-[20px] border-b md:border-b border-[#BB304F]">
              <Users className="text-[#BB304F] w-6 h-7 mb-3" />
              <h2 className="text-xl font-[18px] mb-2">Multi-user</h2>
              <p className="font-jakarta font-normal tracking-[0.13px] text-gray-700">
                Xio supports multiple users on the same server, ensuring complete 
                isolation between tenants.
              </p>
            </div>
            <div className="flex-1 py-[18px] px-[20px] border-b md:border-b md:border-l border-[#BB304F]">
              <Shield className="text-[#BB304F] w-6 h-7 mb-3" />
              <h2 className="text-xl font-[18px] mb-2">Admin Control</h2>
              <p className="font-jakarta font-normal tracking-[0.13px] text-gray-700">
                Fine-grained admin controls allow you to regulate what your 
                users can access and perform.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;