import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { format } from 'date-fns';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchData(activeTab);
  }, [activeTab, navigate]);

  const fetchData = async (tab) => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:4000/api/admin/${tab}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (tab === 'blogs') setBlogs(data);
        else if (tab === 'contacts') setContacts(data);
        else if (tab === 'users') setUsers(data);
      } else {
        setError('Failed to fetch data');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, tab) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`https://cipco-backend.onrender.com/api/admin/${tab}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        fetchData(tab);
      } else {
        setError('Failed to delete');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  const handleEdit = (item, tab) => {
    setEditingItem(item);
    setFormData(item);
    setSelectedImage(null);
  };

  const handleSave = async (tab) => {
    try {
      const token = localStorage.getItem('adminToken');
      const method = editingItem ? 'PUT' : 'POST';
      const url = editingItem
        ? `http://localhost:4000/api/admin/${tab}/${editingItem._id}`
        : `http://localhost:4000/api/admin/${tab}`;

      // Validation for blogs
      if (tab === 'blogs') {
        if (!formData.image || !formData.tags || !formData.heading || !formData.date || !formData.content) {
          setError('Please fill all required fields: image, tags, heading, date, content');
          return;
        }
      }

      let body;
      let headers = {
        'Authorization': `Bearer ${token}`,
      };

      if (tab === 'blogs' && selectedImage) {
        const formDataWithImage = new FormData();
        Object.keys(formData).forEach(key => {
          if (formData[key] !== null && formData[key] !== undefined) {
            formDataWithImage.append(key, formData[key]);
          }
        });
        formDataWithImage.append('image', selectedImage);
        body = formDataWithImage;
      } else {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(formData);
      }

      const response = await fetch(url, {
        method,
        headers,
        body,
      });
      if (response.ok) {
        setEditingItem(null);
        setFormData({});
        setSelectedImage(null);
        fetchData(tab);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to save');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const renderTable = (data, tab, columns) => (
    <table style={{ minWidth: '100%', backgroundColor: '#ffffff' }}>
      <thead>
        <tr>
          {columns.map(col => <th key={col} style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #e5e7eb' }}>{col}</th>)}
          <th style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #e5e7eb' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(col => <td key={col} style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #e5e7eb' }}>{item[col]}</td>)}
            <td style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #e5e7eb' }}>
              <button onClick={() => handleEdit(item, tab)} style={{ marginRight: '0.5rem', color: '#2563eb' }}>Edit</button>
              <button onClick={() => handleDelete(item._id, tab)} style={{ color: '#dc2626' }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderForm = (fields, tab) => (
    <div style={{ marginBottom: '1rem' }}>
      {tab === 'blogs' && (
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedImage(e.target.files[0])}
            style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem', border: '1px solid #d1d5db' }}
          />
          {selectedImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="Preview" style={{ maxWidth: '200px', marginBottom: '0.5rem' }} />
          )}
          {editingItem && formData.image && !selectedImage && (
            <img src={formData.image} alt="Current" style={{ maxWidth: '200px', marginBottom: '0.5rem' }} />
          )}
        </div>
      )}
      {fields.map(field => {
        if (field === 'category') {
          return (
            <select
              key={field}
              value={formData[field] || ''}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem', border: '1px solid #d1d5db' }}
            >
              <option value="">Select Category</option>
              <option value="Journey">Journey</option>
              <option value="Partnership">Partnership</option>
              <option value="Vision">Vision</option>
              <option value="Future">Future</option>
              <option value="Quality">Quality</option>
              <option value="Global Health">Global Health</option>
            </select>
          );
        } else if (field === 'isPublished') {
          return (
            <label key={field} style={{ display: 'block', marginBottom: '0.5rem' }}>
              <input
                type="checkbox"
                checked={formData[field] || false}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.checked })}
              />
              Published
            </label>
          );
        } else if (field === 'tags') {
          return (
            <input
              key={field}
              type="text"
              placeholder="Tags (comma separated)"
              value={formData[field] || ''}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem', border: '1px solid #d1d5db' }}
            />
          );
        } else if (field === 'date') {
          return (
            <input
              key={field}
              type="date"
              placeholder={field}
              value={formData[field] || ''}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem', border: '1px solid #d1d5db' }}
            />
          );
        } else {
          return (
            <input
              key={field}
              type="text"
              placeholder={field}
              value={formData[field] || ''}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem', border: '1px solid #d1d5db' }}
            />
          );
        }
      })}
      <button onClick={() => handleSave(tab)} className='rounded-[10px]' style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.5rem 1rem' }}>Save</button>
      <button onClick={() => { setEditingItem(null); setFormData({}); setSelectedImage(null); }} className='rounded-[10px]' style={{ marginLeft: '0.5rem', backgroundColor: '#4b5563', color: '#ffffff', padding: '0.5rem 1rem' }}>Cancel</button>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#ffffff', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Admin Panel</h1>
        <button onClick={handleLogout} className='rounded-[10px] hover:cursor-pointer' style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.5rem 1rem' }}>Logout</button>
      </div>
      {/* Main Layout */}
      <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
        {/* Left Navbar */}
        <div style={{ width: '220px', backgroundColor: '#f1f5f9', padding: '2rem 1rem 1rem 1rem', borderRight: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column' }}>
          <button onClick={() => setActiveTab('blogs')}
            style={{
              marginBottom: '1rem',
              padding: '0.75rem 1rem',
              backgroundColor: activeTab === 'blogs' ? '#2563eb' : '#e5e7eb',
              color: activeTab === 'blogs' ? '#ffffff' : '#000000',
              border: 'none',
              borderRadius: '0.375rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
            Blogs
          </button>
          <button onClick={() => setActiveTab('contacts')}
            style={{
              marginBottom: '1rem',
              padding: '0.75rem 1rem',
              backgroundColor: activeTab === 'contacts' ? '#2563eb' : '#e5e7eb',
              color: activeTab === 'contacts' ? '#ffffff' : '#000000',
              border: 'none',
              borderRadius: '0.375rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
            Contacts
          </button>
{/*           <button onClick={() => setActiveTab('users')}
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: activeTab === 'users' ? '#2563eb' : '#e5e7eb',
              color: activeTab === 'users' ? '#ffffff' : '#000000',
              border: 'none',
              borderRadius: '0.375rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
            Users
          </button> */}
        </div>
        {/* Right Content */}
        <div style={{ flex: 1, padding: '2rem 2rem', overflowY: 'auto' }}>
          {error && <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fca5a5', color: '#dc2626', padding: '0.75rem 1rem', borderRadius: '0.25rem', marginBottom: '1rem' }}>{error}</div>}
          {loading ? <div>Loading...</div> : (
            <>
              {activeTab === 'blogs' && (
                <>
                  {renderForm(['tags', 'heading', 'date', 'content'], 'blogs')}
                  {renderTable(blogs, 'blogs', ['heading', 'tags', 'date'])}
                </>
              )}
              {activeTab === 'contacts' && (
                <>
                  {renderTable(contacts, 'contacts', ['name', 'email', 'phone', 'subject', 'message', 'status', 'priority', 'createdAt'])}
                </>
              )}
              {activeTab === 'users' && (
                <>
                  {renderForm(['name', 'email', 'role'], 'users')}
                  {renderTable(users, 'users', ['name', 'email', 'role', 'createdAt'])}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
