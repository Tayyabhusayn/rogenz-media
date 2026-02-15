'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import { 
  PlusCircle, 
  LayoutDashboard, 
  LogOut, 
  Edit, 
  Trash2, 
  CheckCircle, 
  ExternalLink,
  ChevronRight,
  User,
  Calendar
} from 'lucide-react';

// Dynamic import for ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('list');
  const [articles, setArticles] = useState([]);
  
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
    } else {
       fetchArticles();
    }
  }, [router]);

  const fetchArticles = async () => {
     try {
        const res = await axios.get('/api/articles');
        if (res.data.success) {
           setArticles(res.data.data);
        }
     } catch (err) {
        console.error("Failed to fetch articles", err);
     }
  };

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
        featured: false 
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
        fetchArticles();
        setTimeout(() => setActiveTab('list'), 1500);
      }
    } catch (err: any) {
      setMessage('Failed to publish article. ' + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  const deleteArticle = async (id: string) => {
     if (!confirm("Are you sure you want to delete this article?")) return;
     alert("Delete functionality coming in next update! (v2.1)");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex selection:bg-red-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white hidden md:flex flex-col border-r border-gray-800">
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-10">
             <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-black text-xl">R</div>
             <h1 className="text-xl font-black tracking-tight">RoGenZ <span className="text-gray-500 font-medium">CMS</span></h1>
          </div>
          
          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('list')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'list' ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
            >
              <LayoutDashboard size={20} />
              <span className="font-bold">Manage News</span>
            </button>
            <button 
              onClick={() => setActiveTab('create')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'create' ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
            >
              <PlusCircle size={20} />
              <span className="font-bold">Write Story</span>
            </button>
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-gray-800">
           <button 
             onClick={() => {
               localStorage.removeItem('token');
               document.cookie = 'token=; Max-Age=0';
               router.push('/admin');
             }}
             className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-bold"
           >
              <LogOut size={20} />
              <span>Sign Out</span>
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 md:p-12">
        <header className="flex justify-between items-center mb-12">
           <div>
              <h2 className="text-3xl font-black text-gray-900">
                {activeTab === 'create' ? 'Draft New Story' : 'News Dashboard'}
              </h2>
              <p className="text-gray-500 mt-1">Logged in as Administrator</p>
           </div>
           
           <div className="flex items-center space-x-4">
              <a href="/" target="_blank" className="flex items-center space-x-2 text-sm font-bold text-gray-600 hover:text-red-600 transition-colors">
                 <span>View Site</span>
                 <ExternalLink size={16} />
              </a>
           </div>
        </header>

        {/* Dashboard / List View */}
        {activeTab === 'list' && (
          <div className="space-y-6">
             {/* Stats Row */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                   <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-1">Total Stories</p>
                   <p className="text-4xl font-black text-gray-900">{articles.length}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                   <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-1">Status</p>
                   <div className="flex items-center text-green-600 font-black text-lg">
                      <CheckCircle size={18} className="mr-2" />
                      Live
                   </div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center border-dashed border-red-200">
                   <button onClick={() => setActiveTab('create')} className="text-red-600 font-black flex items-center">
                      <PlusCircle size={20} className="mr-2" />
                      Create New
                   </button>
                </div>
             </div>

             {/* Articles Table/List */}
             <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                   <h3 className="font-black text-gray-900">Recent Publications</h3>
                </div>
                
                <div className="divide-y divide-gray-50">
                   {articles.length > 0 ? articles.map((article: any) => (
                      <div key={article._id} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors group">
                         <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                               <img src={article.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                               <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">{article.title}</h4>
                               <div className="flex items-center space-x-4 mt-1 text-xs text-gray-400 font-medium">
                                  <span className="flex items-center"><User size={12} className="mr-1" /> {article.author}</span>
                                  <span className="flex items-center"><Calendar size={12} className="mr-1" /> {new Date(article.createdAt).toLocaleDateString()}</span>
                                  <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">{article.category}</span>
                               </div>
                            </div>
                         </div>
                         
                         <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                            <button onClick={() => alert("Edit mode coming soon!")} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                               <Edit size={18} />
                            </button>
                            <button onClick={() => deleteArticle(article._id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                               <Trash2 size={18} />
                            </button>
                            <a href={`/news/${article.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                               <ChevronRight size={18} />
                            </a>
                         </div>
                      </div>
                   )) : (
                      <div className="p-20 text-center text-gray-400 font-medium italic">
                         No articles found in the database.
                      </div>
                   )}
                </div>
             </div>
          </div>
        )}

        {/* Create Form View */}
        {activeTab === 'create' && (
          <div className="max-w-4xl">
            {message && (
              <div className={`p-4 mb-8 rounded-2xl font-bold flex items-center ${message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {message.includes('success') && <CheckCircle size={20} className="mr-2" />}
                {message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest px-1">Story Title</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter a compelling headline"
                      className="w-full bg-[#f8fafc] border-0 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-red-500/10 transition-all font-bold text-gray-900"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest px-1">Category</label>
                    <select
                      className="w-full bg-[#f8fafc] border-0 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-red-500/10 transition-all font-bold text-gray-900 appearance-none"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest px-1">Byline (Author)</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#f8fafc] border-0 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-red-500/10 transition-all font-bold text-gray-900"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-black text-gray-400 uppercase tracking-widest px-1">Featured Image URL</label>
                     <input
                      type="url"
                      required
                      placeholder="https://unsplash.com/..."
                      className="w-full bg-[#f8fafc] border-0 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-red-500/10 transition-all font-bold text-gray-900"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2 pb-10">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest px-1">Story Content</label>
                  <div className="h-96">
                    <ReactQuill 
                      theme="snow" 
                      value={content} 
                      onChange={setContent} 
                      className="h-full font-sans"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-grow bg-red-600 text-white py-5 rounded-[2rem] font-black text-xl hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-red-900/20 disabled:opacity-50"
                >
                  {loading ? 'Publishing...' : 'Publish Story Live'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('list')}
                  className="px-10 bg-gray-900 text-white py-5 rounded-[2rem] font-black text-xl hover:bg-black transition-all transform hover:-translate-y-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
