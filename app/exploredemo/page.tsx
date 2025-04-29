'use client';

import dynamic from 'next/dynamic';

const DynamicViewer = dynamic(() => import('../components/ExploreViewer'), { ssr: false });

export default function ExploreDemo() {
  return <DynamicViewer />;
}
