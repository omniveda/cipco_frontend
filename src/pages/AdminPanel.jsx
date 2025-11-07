import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
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
      const response = await fetch(`http://localhost:4000/api/admin/${tab}/${id}`, {
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
  };

  const handleSave = async (tab) => {
    try {
      const token = localStorage.getItem('adminToken');
      const method = editingItem ? 'PUT' : 'POST';
      const url = editingItem
        ? `http://localhost:4000/api/admin/${tab}/${editingItem._id}`
        : `http://localhost:4000/api/admin/${tab}`;
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setEditingItem(null);
        setFormData({});
        fetchData(tab);
      } else {
        setError('Failed to save');
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
              <option value="Research">Research</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Innovation">Innovation</option>
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
      <button onClick={() => handleSave(tab)} style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '0.5rem 1rem' }}>Save</button>
      <button onClick={() => { setEditingItem(null); setFormData({}); }} style={{ marginLeft: '0.5rem', backgroundColor: '#4b5563', color: '#ffffff', padding: '0.5rem 1rem' }}>Cancel</button>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#ffffff', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Admin Panel</h1>
        <button onClick={handleLogout} style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '0.5rem 1rem' }}>Logout</button>
      </div>
      <div style={{ padding: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => setActiveTab('blogs')} style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', backgroundColor: activeTab === 'blogs' ? '#2563eb' : '#e5e7eb', color: activeTab === 'blogs' ? '#ffffff' : '#000000' }}>Blogs</button>
          <button onClick={() => setActiveTab('contacts')} style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', backgroundColor: activeTab === 'contacts' ? '#2563eb' : '#e5e7eb', color: activeTab === 'contacts' ? '#ffffff' : '#000000' }}>Contacts</button>
          <button onClick={() => setActiveTab('users')} style={{ padding: '0.5rem 1rem', backgroundColor: activeTab === 'users' ? '#2563eb' : '#e5e7eb', color: activeTab === 'users' ? '#ffffff' : '#000000' }}>Users</button>
        </div>
        {error && <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fca5a5', color: '#dc2626', padding: '0.75rem 1rem', borderRadius: '0.25rem', marginBottom: '1rem' }}>{error}</div>}
        {loading ? <div>Loading...</div> : (
          <>
            {activeTab === 'blogs' && (
              <>
                {renderForm(['title', 'content', 'author', 'category', 'summary', 'isPublished'], 'blogs')}
                {renderTable(blogs, 'blogs', ['title', 'author', 'category', 'isPublished', 'createdAt'])}
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
  );
};

export default AdminPanel;
