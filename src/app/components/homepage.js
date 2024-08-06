import Head from 'next/head';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Head>
        <title>EasyEntry - Simplifying Global Travel</title>
        <meta name="description" content="Streamlined visa and travel information for the UK, Canada, and Australia." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold text-left mb-12">EasyEntry</h1>
        
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Simplify your journey to the UK, Canada, or Australia with EasyEntry. We provide comprehensive visa information and streamlined application processes for students, visitors, and immigrants.
        </p>

        <div className="grid grid-cols-1 gap-8 mb-16 text-center">
          <div className="border border-black p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Begin Your Journey</h2>
            <p className="mb-6">
              Take the first step towards your international adventure. Our intuitive form collects your details and matches you with the right visa options.
            </p>
            <a 
              href="https://forms.gle/AtMDdBPxkg5a3M6n6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block w-full text-center bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Start Your Application
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 text-center">
          <div className="border border-black p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">EasyEntry Advantages</h2>
            <ul className="space-y-3">
              <li>✓ Tailored visa guidance for three major destinations</li>
              <li>✓ User-friendly interface for effortless navigation</li>
              <li>✓ Expert support throughout your application</li>
              <li>✓ Secure document handling and submission</li>
              <li>✓ Real-time application status updates</li>
              <li>✓ Round-the-clock customer assistance</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="border-l-4 border-black pl-4 italic">
              "EasyEntry transformed my visa application from a daunting task to a smooth journey. Their support was invaluable!" 
              <footer className="mt-2 font-bold">- Emma L., Student in the UK</footer>
            </blockquote>
            <blockquote className="border-l-4 border-black pl-4 italic">
              "Thanks to EasyEntry, I navigated Canada's immigration process with confidence. Highly recommended for anyone considering a move abroad."
              <footer className="mt-2 font-bold">- Carlos M., New Resident in Canada</footer>
            </blockquote>
          </div>
        </div>

       
        
      </main>

      <footer className="mt-16 text-center text-sm">
        © 2024 EasyEntry. Empowering global journeys.
      </footer>
    </div>
  );
}