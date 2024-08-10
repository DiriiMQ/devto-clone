'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import DevToPost, { DevToPostProps } from '~/app/_components/devtoPost';
import { sampleDevToData } from '~/app/_components/sampleDevToData';
import SearchBar from '~/app/_components/searchBar';

import "../../style/default.css";

export default function Page({ params }: { params: { slug: string } }) {
  useEffect(() => {
    if (params.slug) {
      console.log(params.slug);
    }
  }, [params.slug]);

  const onSearch = (query: string) => {
    console.log('Search query:', query);
    // Add your search logic here
  };

  return( 
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>DEV Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <SearchBar onSearch={ onSearch } />

        <DevToPost {...sampleDevToData} />
      </div>
    </div>
  );
};

