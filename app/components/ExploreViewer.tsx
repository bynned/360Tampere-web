'use client';

import { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/video-plugin/index.css';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
import { EquirectangularVideoAdapter } from '@photo-sphere-viewer/equirectangular-video-adapter';
import { VideoPlugin } from '@photo-sphere-viewer/video-plugin';
export default function ExploreDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    const viewer = new Viewer({
      adapter: EquirectangularVideoAdapter,
      container: containerRef.current,
      panorama: videoRef.current,
      mousewheel: true,
      moveSpeed: 1,
      touchmoveTwoFingers: false,
      plugins: [GyroscopePlugin, VideoPlugin],
    });

    return () => viewer.destroy();
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src="https://www.360service.ilab.fi/uploads/680f94f7faf266d47c2211e7/Keskustori.mp4?apiKey=2d39e5b9-a07a-4be2-b700-9c38f4de5c36"
        crossOrigin="anonymous"
        muted
        loop
        autoPlay
        playsInline
        style={{ display: 'none' }}
      />
      <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />
    </>
  );
}
