import React, { useState } from 'react';
import { uploadToCloudinary } from '../utils/cloudinary';

const ImageUpload = ({ currentImage, onImageUpload, folder = 'rm-website' }) => {
  console.log('🎨 ImageUpload component props:', { currentImage, folder });
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage || '');

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    console.log('📁 File selected:', file);
    
    if (!file) {
      console.log('❌ No file selected');
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      console.log('❌ Invalid file type:', file.type);
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      console.log('❌ File too large:', file.size);
      alert('File size must be less than 5MB');
      return;
    }

    console.log('✅ File validation passed');

    try {
      setUploading(true);
      console.log('🔄 Starting upload process...');
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log('🖼️ Preview created');
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);

      // Upload to Cloudinary
      console.log('☁️ Uploading to Cloudinary...');
      const imageUrl = await uploadToCloudinary(file, folder);
      console.log('✅ Upload complete, calling onImageUpload with:', imageUrl);
      onImageUpload(imageUrl);
      setPreview(imageUrl);
    } catch (error) {
      console.error('💥 Upload process failed:', error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
      console.log('🏁 Upload process finished');
    }
  };

  return (
    <div className="image-upload">
      <div className="upload-preview">
        {preview && (
          <img 
            src={preview} 
            alt="Preview" 
            style={{ 
              width: '100px', 
              height: '100px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              marginBottom: '10px'
            }} 
          />
        )}
      </div>
      
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        disabled={uploading}
        style={{ marginBottom: '10px' }}
      />
      
      {uploading && (
        <div style={{ color: '#007bff', fontSize: '14px' }}>
          Uploading...
        </div>
      )}
    </div>
  );
};

export default ImageUpload;