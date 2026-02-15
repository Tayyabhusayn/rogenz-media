'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

// Dynamic import for ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('create');
  
  // Form State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('News');
  const [author, setAuthor] = useState('RoGenZ Team');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Check Auth
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      const token = localStorage.getItem('token');
      
      const res = await axios.post('/api/articles', {
        title,
        slug,
        content,
        category,
        author,
        image,
        featured: false // Default to false for now
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.data.success) {
        setMessage('Article published successfully!');
        // Reset form
        setTitle('');
        setContent('');
        setImage('');
      }
    } catch (err: any) {
      setMessage('Failed to publish article. ' + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white hidden md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-red-500">RoGenZ Admin</h1>
        </div>
        <nav className="mt-6">
          <button 
            onClick={() => setActiveTab('create')}
            className={`w-full text-left px-6 py-3 hover:bg-gray-800 ${activeTab === 'create' ? 'bg-gray-800 border-r-4 border-red-500' : ''}`}
          >
            Write Article
          </button>
          <button 
             onClick={() => alert("List view coming soon in v2")}
             className="w-full text-left px-6 py-3 hover:bg-gray-800"
          >
            Manage Articles
          </button>
          <button 
             onClick={() => {
               localStorage.removeItem('token');
               document.cookie = 'token=; Max-Age=0';
               router.push('/admin');
             }}
             className="w-full text-left px-6 py-3 hover:bg-gray-800 text-red-400"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {activeTab === 'create' ? 'Create New Article' : 'Dashboard'}
        </h2>

        {activeTab === 'create' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            {message && (
              <div className={`p-4 mb-4 rounded ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>News</option>
                    <option>Human Rights</option>
                    <option>Culture</option>
                    <option>Opinion</option>
                    <option>Technology</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Author</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700">Featured Image URL</label>
                   <input
                    type="url"
                    required
                    placeholder="https://..."
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <div className="h-64 mb-12">
                  <ReactQuill 
                    theme="snow" 
                    value={content} 
                    onChange={setContent} 
                    className="h-full"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                >
                  {loading ? 'Publishing...' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
