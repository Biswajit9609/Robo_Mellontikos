import { useState } from 'react';
import { useConfig } from '../hooks/useConfig';
import ImageUpload from '../components/ImageUpload';

const EventsAdmin = () => {
  const { config, updateConfig } = useConfig();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('events');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  const EVENTS_ADMIN_PASSWORD = import.meta.env.VITE_EVENTS_ADMIN_PASSWORD;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === EVENTS_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const handleEdit = (section, item, subsection = null) => {
    setEditingItem({ section, item, subsection });
    setFormData(item);
  };

  const handleSave = () => {
    const newConfig = { ...config };
    const { section, item, isNew, subsection } = editingItem;

    if (subsection) {
      if (isNew) {
        newConfig[section][subsection].push(formData);
      } else {
        const index = newConfig[section][subsection].findIndex(i => i.id === item.id);
        if (index !== -1) {
          newConfig[section][subsection][index] = formData;
        }
      }
    }

    updateConfig(newConfig);
    setEditingItem(null);
    setFormData({});
  };

  const handleAdd = (section, subsection = null) => {
    const newId = Date.now().toString();
    const newItem = { id: newId };
    
    if (section === 'events') {
      newItem.title = '';
      newItem.date = '';
      newItem.description = '';
      newItem.status = 'upcoming';
      newItem.image = '';
      newItem.location = '';
    } else if (section === 'courses') {
      newItem.title = '';
      newItem.description = '';
      newItem.url = '';
      newItem.couponFormUrl = '';
      newItem.image = '';
      newItem.rating = '';
      newItem.students = '';
    }

    setEditingItem({ section, item: newItem, isNew: true, subsection });
    setFormData(newItem);
  };

  const handleDelete = (section, itemId, subsection = null) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    const newConfig = { ...config };
    newConfig[section][subsection] = newConfig[section][subsection].filter(item => item.id !== itemId);
    updateConfig(newConfig);
  };

  const renderForm = () => {
    if (!editingItem) return null;

    const { section } = editingItem;

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
        <div className="bg-slate-800 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <h3 className="text-xl font-bold mb-4">Edit {section}</h3>
          
          {Object.keys(formData).map(key => {
            if (key === 'id') return null;
            
            return (
              <div key={key} className="mb-4">
                <label className="block text-sm font-medium mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                {key === 'description' ? (
                  <textarea
                    value={formData[key] || ''}
                    onChange={(e) => setFormData({...formData, [key]: e.target.value})}
                    className="w-full p-2 bg-slate-700 rounded"
                    rows="3"
                  />
                ) : key === 'image' ? (
                  <ImageUpload
                    currentImage={formData[key] || ''}
                    onImageUpload={(url) => setFormData({...formData, [key]: url})}
                    folder={section === 'courses' ? 'courses' : 'events'}
                  />
                ) : (
                  <input
                    type="text"
                    value={formData[key] || ''}
                    onChange={(e) => setFormData({...formData, [key]: e.target.value})}
                    className="w-full p-2 bg-slate-700 rounded"
                  />
                )}
              </div>
            );
          })}

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setEditingItem(null)}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen cyber-grid-bg flex items-center justify-center">
        <div className="bg-slate-800 p-8 rounded-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Events Admin Panel</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter events admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-slate-700 rounded mb-4"
            />
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 p-3 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen cyber-grid-bg pt-24">
      <div className="container-max mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Events Admin Panel</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          {['events', 'courses'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded capitalize ${
                activeTab === tab ? 'bg-primary-600' : 'bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          {activeTab === 'events' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Events Management</h2>
              
              {['upcomingEvents', 'ongoingEvents', 'pastEvents'].map(eventType => (
                <div key={eventType} className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold capitalize">
                      {eventType.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <button
                      onClick={() => handleAdd('events', eventType)}
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                    >
                      Add Event
                    </button>
                  </div>
                  <div className="grid gap-4">
                    {config.events[eventType].map(event => (
                      <div key={event.id} className="bg-slate-700 p-4 rounded flex justify-between items-center">
                        <div>
                          <strong>{event.title}</strong> - {event.date}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit('events', event, eventType)}
                            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete('events', event.id, eventType)}
                            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Courses Management</h2>
                <button
                  onClick={() => handleAdd('courses', 'availableCourses')}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                >
                  Add Course
                </button>
              </div>
              <div className="grid gap-4">
                {config.courses?.availableCourses?.map(course => (
                  <div key={course.id} className="bg-slate-700 p-4 rounded flex justify-between items-center">
                    <div>
                      <strong>{course.title}</strong>
                      <div className="text-sm text-gray-300 mt-1">
                        Rating: {course.rating} | Students: {course.students}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit('courses', course, 'availableCourses')}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete('courses', course.id, 'availableCourses')}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )) || []}
              </div>
            </div>
          )}
        </div>
      </div>

      {renderForm()}
    </div>
  );
};

export default EventsAdmin;