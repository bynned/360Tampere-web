'use client';

import { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';

export default function ExploreDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new Viewer({
      container: containerRef.current,
      panorama: '/demopicture.png',
      mousewheel: true,
      moveSpeed: 1,
      touchmoveTwoFingers: false,
      plugins: [
        GyroscopePlugin,
      ],
    });

    return () => viewer.destroy();
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
}
