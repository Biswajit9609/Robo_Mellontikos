import { useState, useEffect } from 'react';
import { useConfig } from '../hooks/useConfig';
import ImageUpload from '../components/ImageUpload';

const Admin = () => {
  const { config, updateConfig } = useConfig();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('general');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  const ADMIN_PASSWORD = 'rm-admin-2024';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
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
    console.log('💾 Saving data:', { editingItem, formData });
    const newConfig = { ...config };
    const { section, item, isNew, subsection } = editingItem;

    if (section === 'general') {
      newConfig[section] = formData;
    } else if (section === 'cta' && !subsection) {
      newConfig.cta.joinUsUrl = formData.joinUsUrl;
      newConfig.cta.subscribeUrl = formData.subscribeUrl;
    } else if (section === 'cta' && subsection?.startsWith('pages.')) {
      const pageName = subsection.replace('pages.', '');
      newConfig.cta.pages[pageName] = formData;
    } else if (subsection) {
      if (isNew) {
        newConfig[section][subsection].push(formData);
      } else {
        const index = newConfig[section][subsection].findIndex(i => i.id === item.id);
        if (index !== -1) {
          newConfig[section][subsection][index] = formData;
        }
      }
    } else if (Array.isArray(newConfig[section])) {
      if (isNew) {
        newConfig[section].push(formData);
      } else {
        const index = newConfig[section].findIndex(i => i.id === item.id);
        if (index !== -1) {
          newConfig[section][index] = formData;
        }
      }
    }

    console.log('💾 Updated config:', newConfig);
    updateConfig(newConfig);
    setEditingItem(null);
    setFormData({});
  };

  const handleAdd = (section, subsection = null) => {
    const newId = Date.now().toString();
    const newItem = { id: newId };
    
    if (section === 'team') {
      newItem.name = '';
      newItem.title = '';
      newItem.avatarUrl = '';
      newItem.linkedInUrl = '';
      newItem.instagramUrl = '';
    } else if (section === 'events') {
      newItem.title = '';
      newItem.date = '';
      newItem.description = '';
      newItem.status = 'upcoming';
      newItem.image = '';
      newItem.location = '';
    } else if (section === 'contact') {
      newItem.name = '';
      newItem.contact = '';
      newItem.description = '';
    } else if (section === 'home') {
      newItem.title = '';
      newItem.description = '';
      newItem.colorClass = 'border-primary';
    }

    setEditingItem({ section, item: newItem, isNew: true, subsection });
    setFormData(newItem);
  };

  const handleDelete = (section, itemId, subsection = null) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    const newConfig = { ...config };
    if (subsection) {
      newConfig[section][subsection] = newConfig[section][subsection].filter(item => item.id !== itemId);
    } else if (Array.isArray(newConfig[section])) {
      newConfig[section] = newConfig[section].filter(item => item.id !== itemId);
    }

    updateConfig(newConfig);
  };

  const renderForm = () => {
    if (!editingItem) return null;

    const { section, item } = editingItem;

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
                ) : key === 'avatarUrl' || key === 'image' ? (
                  <ImageUpload
                    currentImage={formData[key] || ''}
                    onImageUpload={(url) => setFormData({...formData, [key]: url})}
                    folder={section === 'team' ? 'team-members' : 'events'}
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
          <h1 className="text-2xl font-bold mb-6 text-center">RM Admin Panel</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
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
          <h1 className="text-3xl font-bold">RM Admin Panel</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          {['general', 'cta', 'team', 'events', 'contact', 'home'].map(tab => (
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
          {activeTab === 'general' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">General Settings</h2>
                <button
                  onClick={() => handleEdit('general', config.general)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong>Site Name:</strong> {config.general.siteName}
                </div>
                <div>
                  <strong>Tagline:</strong> {config.general.tagline}
                </div>
                <div className="col-span-2">
                  <strong>Description:</strong> {config.general.description}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cta' && (
            <div>
              <h2 className="text-xl font-bold mb-4">CTA Management</h2>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Global CTAs</h3>
                  <button
                    onClick={() => handleEdit('cta', { joinUsUrl: config.cta.joinUsUrl, subscribeUrl: config.cta.subscribeUrl })}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                  >
                    Edit Global CTAs
                  </button>
                </div>
                <div className="bg-slate-700 p-4 rounded">
                  <div><strong>Join Us URL:</strong> {config.cta.joinUsUrl}</div>
                  <div><strong>Subscribe URL:</strong> {config.cta.subscribeUrl}</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Page-specific CTAs</h3>
                <div className="grid gap-4">
                  {Object.entries(config.cta.pages).map(([pageName, pageCtAs]) => (
                    <div key={pageName} className="bg-slate-700 p-4 rounded flex justify-between items-center">
                      <div>
                        <strong className="capitalize">{pageName} Page</strong>
                        <div className="text-sm text-gray-300 mt-1">
                          Primary: {pageCtAs.primaryCta}<br/>
                          Secondary: {pageCtAs.secondaryCta}
                        </div>
                      </div>
                      <button
                        onClick={() => handleEdit('cta', pageCtAs, `pages.${pageName}`)}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                      >
                        Edit
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Team Management</h2>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Advisors</h3>
                  <button
                    onClick={() => handleAdd('team', 'advisors')}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                  >
                    Add Advisor
                  </button>
                </div>
                <div className="grid gap-4">
                  {config.team.advisors.map(advisor => (
                    <div key={advisor.id} className="bg-slate-700 p-4 rounded flex justify-between items-center">
                      <div>
                        <strong>{advisor.name}</strong> - {advisor.title}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit('team', advisor, 'advisors')}
                          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete('team', advisor.id, 'advisors')}
                          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Core Team</h3>
                  <button
                    onClick={() => handleAdd('team', 'coreTeam')}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                  >
                    Add Member
                  </button>
                </div>
                <div className="grid gap-4">
                  {config.team.coreTeam.map(member => (
                    <div key={member.id} className="bg-slate-700 p-4 rounded flex justify-between items-center">
                      <div>
                        <strong>{member.name}</strong> - {member.title}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit('team', member, 'coreTeam')}
                          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete('team', member.id, 'coreTeam')}
                          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

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

          {activeTab === 'contact' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Contact Departments</h2>
                <button
                  onClick={() => handleAdd('contact', 'departments')}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                >
                  Add Department
                </button>
              </div>
              <div className="grid gap-4">
                {config.contact.departments.map(dept => (
                  <div key={dept.id} className="bg-slate-700 p-4 rounded flex justify-between items-center">
                    <div>
                      <strong>{dept.name}</strong> - {dept.contact}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit('contact', dept, 'departments')}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete('contact', dept.id, 'departments')}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'home' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Home Features</h2>
                <button
                  onClick={() => handleAdd('home', 'features')}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                >
                  Add Feature
                </button>
              </div>
              <div className="grid gap-4">
                {config.home.features.map(feature => (
                  <div key={feature.id} className="bg-slate-700 p-4 rounded flex justify-between items-center">
                    <div>
                      <strong>{feature.title}</strong> - {feature.colorClass}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit('home', feature, 'features')}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete('home', feature.id, 'features')}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {renderForm()}
    </div>
  );
};

export default Admin;