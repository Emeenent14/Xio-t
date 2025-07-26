import './App.css';

function App() {
  return (
    <div className="w-screen h-screen flex">
      {/* Left Side - Image Background */}
      <div className="flex items-center justify-center" style={{ width: '350px' }}>
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: "url('/Image 3 (1).png')",
            width: '350px',
            height: '400px'
          }}
        ></div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 overflow-y-auto bg-white font-mono">
        <div className="w-full min-h-screen py-6 px-8">
          {/* Hero Section */}
          <section className="py-6">
            <p className="inline-block bg-red-200 px-4 py-1 rounded-3xl mb-4 border border-[#BB304F]">
              Self Hosted
            </p>
            <h1 className="mb-3 font-mono font-medium text-4xl leading-tight">
              AI support for your complete team
            </h1>
            <p className="font-mono text-base leading-relaxed text-gray-700">
              Xio offers hosted and self-hosted versions enabling your whole team
              to harness the power of AI, ensuring multi-user access and privacy.
            </p>
          </section>

          {/* Feature Row */}
          <section className="flex py-6">
            <div className="flex-1 py-[18px] px-[20px] border-t border-[#BB304F]">
              <h2 className="text-xl font-semibold mb-2">White-Labeled</h2>
              <p>
                Xio can be readily customized and white-labeled to match your
                company's branding and identity.
              </p>
            </div>
            <div className="flex-1 py-[18px] px-[20px] border-t border-l border-[#BB304F]">
              <h2 className="text-xl font-semibold mb-2">Customizable</h2>
              <p>
                Adapt features and designs to fit your organization's workflow
                without breaking security.
              </p>
            </div>
          </section>

          {/* Image Section */}
          <section className="flex justify-center py-12">
            <div className="w-[300px] h-[300px]">
              <img
                src="/Frame 1000001711.png"
                alt="Hexagon"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </section>

              {/* Feature Row */}
              <section className="flex py-6">
            <div className="flex-1 py-[18px] px-[20px] border-b border-[#BB304F]">
              <h2 className="text-xl font-semibold mb-2">White-Labeled</h2>
              <p>
                Xio supports multiple users on the same server, ensuring complete 
                isolation between tenants.
              </p>
            </div>
            <div className="flex-1 py-[18px] px-[20px] border-b border-l border-[#BB304F]">
              <h2 className="text-xl font-semibold mb-2">Customizable</h2>
              <p>
                Fine-grained admin controls allow you to regulate what your 
                users can access and perform
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;