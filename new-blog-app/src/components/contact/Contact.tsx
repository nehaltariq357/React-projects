

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            placeholder="Your message..."
            className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
