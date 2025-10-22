// Cloudinary configuration
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your-cloud-name';
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'rm-uploads';

/**
 * Upload image to Cloudinary
 * @param {File} file - Image file to upload
 * @param {string} folder - Folder name in Cloudinary (optional)
 * @returns {Promise<string>} - Returns the secure URL of uploaded image
 */
export const uploadToCloudinary = async (file, folder = 'rm-website') => {
  try {
    console.log('🚀 Starting upload:', { fileName: file.name, fileSize: file.size, folder });
    console.log('📋 Config:', { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET });
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', folder);

    const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
    console.log('🌐 Upload URL:', uploadUrl);

    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    });

    console.log('📡 Response status:', response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Upload failed response:', errorText);
      throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Upload successful:', { secure_url: data.secure_url, public_id: data.public_id });
    return data.secure_url;
  } catch (error) {
    console.error('💥 Cloudinary upload error:', error);
    throw error;
  }
};

/**
 * Extract public ID from Cloudinary URL
 * @param {string} url - Cloudinary URL
 * @returns {string} - Public ID
 */
export const getPublicIdFromUrl = (url) => {
  if (!url || !url.includes('cloudinary.com')) return '';
  
  const parts = url.split('/');
  const uploadIndex = parts.findIndex(part => part === 'upload');
  if (uploadIndex === -1) return '';
  
  const pathAfterUpload = parts.slice(uploadIndex + 2).join('/');
  return pathAfterUpload.split('.')[0];
};