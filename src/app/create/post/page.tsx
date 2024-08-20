'use client'

import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { trpc } from '~/utils/trpc';

interface Tag {
  id: string;
  name: string;
}

const PostEditor: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const createPostMutation = trpc.post.create.useMutation();
  const router = useRouter();

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

  const handlePublish = async () => {
    try {
      await createPostMutation.mutateAsync({
        title,
        content,
        draft: false,
      });
      console.log('Post published successfully');
      router.push('/');
    } catch (error) {
      console.error('Failed to publish post', error);
    }
  };

  const handleSaveDraft = async () => {
    try {
      await createPostMutation.mutateAsync({
        title,
        content,
        draft: true,
      });
      console.log('Draft saved successfully');
    } catch (error) {
      console.error('Failed to save draft', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-10">
        <div className='flex items-center space-x-2'>
          <Link href="/">
            <Image src="/dev-logo.png" alt="DEV" width={50} height={40} />
          </Link>
          <h1 className="text-2xl font-bold">Create Post</h1>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-gray-700 rounded hover:bg-blue-50 hover:text-blue-800">Edit</button>
          <button className="px-4 py-2 text-gray-700 rounded hover:bg-blue-50 hover:text-blue-800">Preview</button>
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
        className="w-full text-5xl font-bold mb-3 p-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      
      <input 
        type="text" 
        placeholder="Add up to 4 tags..." 
        value={tags.map(tag => tag.name).join(', ')}
        onChange={handleTagChange}
        className="w-full mb-4 p-2 border-gray-300 focus:outline-none focus:border-blue-500"
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
    </div>
  );
};

export default PostEditor;