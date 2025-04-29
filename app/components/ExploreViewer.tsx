'use client';

import { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/video-plugin/index.css';
import { VideoPlugin } from '@photo-sphere-viewer/video-plugin';
import { EquirectangularVideoAdapter } from '@photo-sphere-viewer/equirectangular-video-adapter';

export default function ExploreDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new Viewer({
      container: containerRef.current,
      adapter: EquirectangularVideoAdapter,
      panorama: {
        source: 'https://www.360service.ilab.fi/uploads/680f94f7faf266d47c2211e7/Keskustori.mp4?apiKey=2d39e5b9-a07a-4be2-b700-9c38f4de5c36'
      },
      mousewheel: true,
      moveSpeed: 1,
      touchmoveTwoFingers: false,
      plugins: [
        GyroscopePlugin,
        VideoPlugin
      ],
    });

    return () => viewer.destroy();
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
}
