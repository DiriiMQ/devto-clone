'use client'

import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface Tag {
  id: string;
  name: string;
}

const PostEditor: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleEditorChange = (content: string, editor: any) => {
    setContent(content);
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagNames = e.target.value.split(',').map(tag => tag.trim());
    const newTags = tagNames.map(name => ({ id: name.toLowerCase(), name }));
    setTags(newTags.slice(0, 4));
  };

  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  const handlePublish = () => {
    console.log('Publishing:', { title, content, tags, coverImage });
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', { title, content, tags, coverImage });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Create Post</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Edit</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Preview</button>
        </div>
      </div>
      
      <div className="mb-4">
        <button 
          onClick={() => document.getElementById('coverImageUpload')?.click()}
          className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
        >
          Add a cover image
        </button>
        <input
          id="coverImageUpload"
          type="file"
          accept="image/*"
          onChange={handleCoverImageUpload}
          className="hidden"
        />
        {coverImage && <p className="mt-2 text-sm text-gray-600">Cover image: {coverImage.name}</p>}
      </div>
      
      <input 
        type="text" 
        placeholder="New post title here..." 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-5xl font-bold mb-4 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
      />
      
      <input 
        type="text" 
        placeholder="Add up to 4 tags..." 
        value={tags.map(tag => tag.name).join(', ')}
        onChange={handleTagChange}
        className="w-full mb-4 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
      />
      
      <Editor
        apiKey="trsv0y5pm8k4z77eh33w65bemecqcbfn2u2eqn2pxrlydom0"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'bold italic link bullist numlist h1 h2 blockquote code image',
          content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 16px; }'
        }}
        onEditorChange={handleEditorChange}
      />
      
      <div className="flex space-x-4 mt-6">
        <button 
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handlePublish}
        >
          Publish
        </button>
        <button 
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          onClick={handleSaveDraft}
        >
          Save draft
        </button>
      </div>
      
      <div className="mt-8 bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">Tagging Guidelines</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Tags help people find your post - think of them as the topics or categories that best describe your post.</li>
          <li>Add up to four comma-separated tags per post. Use existing tags whenever possible.</li>
          <li>Some tags have special posting guidelines - double check to make sure your post complies with them.</li>
        </ul>
      </div>
    </div>
  );
};

export default PostEditor;