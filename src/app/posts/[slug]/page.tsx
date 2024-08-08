'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import DevToPost, { DevToPostProps } from '~/app/_components/devtoPost';
import { sampleDevToData } from '~/app/_components/sampleDevToData';
import SearchBar from '~/app/_components/searchBar';

export default function Page({ params }: { params: { slug: string } }) {
  useEffect(() => {
    if (params.slug) {
      console.log(params.slug);
    }
  }, [params.slug]);

  return( 
    <div className="pl-8 pr-8 flex min-h-screen bg-gray-100">
      <Head>
        <title>DEV Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1">
        <SearchBar />

        <DevToPost {...sampleDevToData} />
      </div>
    </div>
  );
};

