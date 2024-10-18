import Navbar from "./Navbar";
import Footer from "./Footer";
const Blog = () => {
  const posts = [
    { title: 'Be A Volunteer Today', date: 'July 26, 2018' },
    { title: 'You May Save The Life of A Child', date: 'July 26, 2018' },
    { title: 'Children That Needs Care', date: 'July 26, 2018' },
  ];

  return (
    <div className="container mx-auto p-6">
      <Navbar />
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center">Blog Posts & News</h1>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-5">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-700">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Read More</a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;