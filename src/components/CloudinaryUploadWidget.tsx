import React, { useEffect, useRef } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

interface CloudinaryUploadWidgetProps {
  uwConfig: object;
  setPublicIds: any; // Function to append new public IDs
  setImageUrls: any; // Function to append new image URLs
}

declare global {
  interface Window {
    cloudinary?: {
      createUploadWidget: (
        config: object,
        callback: (error: any, result: any) => void
      ) => {
        open: () => void;
      };
    };
  }
}

const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({
  uwConfig,
  setPublicIds,
  setImageUrls,
}) => {
  const uploadWidgetRef = useRef<{ open: () => void } | null>(null);
  const uploadButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const initializeUploadWidget = () => {
      if (window.cloudinary && uploadButtonRef.current) {
        uploadWidgetRef.current = window.cloudinary.createUploadWidget(
          uwConfig,
          (error, result) => {
            if (!error && result && result.event === 'success') {
              // Directly set new image IDs and URLs
              setPublicIds((prevIds: any) => [
                ...prevIds,
                result.info.public_id,
              ]);
              setImageUrls((prevUrls: any) => [
                ...prevUrls,
                result.info.secure_url,
              ]);
            }
          }
        );

        const handleUploadClick = () => {
          if (uploadWidgetRef.current) {
            uploadWidgetRef.current.open();
          }
        };

        const buttonElement = uploadButtonRef.current;
        buttonElement.addEventListener('click', handleUploadClick);

        return () =>
          buttonElement.removeEventListener('click', handleUploadClick);
      }
    };

    initializeUploadWidget();
  }, [uwConfig, setPublicIds, setImageUrls]);

  
  return (
    <button
      ref={uploadButtonRef}
      id='upload_widget'
      type='button'
      className='cloudinary-button flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200'
    >
      <FaCloudUploadAlt className='text-lg' />
      Upload Images
    </button>
  );
};

export default CloudinaryUploadWidget;
