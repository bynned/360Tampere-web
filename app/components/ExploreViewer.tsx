'use client';

import { useEffect, useRef } from 'react';
import * as PhotoSphereViewer from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';

export default function ExploreDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new PhotoSphereViewer.Viewer({
      container: containerRef.current,
      panorama: '/demopicture.png',
      defaultLat: 0,
      defaultLong: 0,
      mousewheel: true,
      moveSpeed: 1,
      touchmoveTwoFingers: false,
      useXmpData: false,
    });

    return () => viewer.destroy();
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
}