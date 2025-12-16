import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');
  const width = searchParams.get('width') || '1920';
  const height = searchParams.get('height') || '1080';

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  // List of screenshot services that return images directly (in order of preference)
  const screenshotServices = [
    // Service 1: Thum.io (free tier, most reliable)
    `https://image.thum.io/get/width/${width}/crop/${height}/noanimate/${encodeURIComponent(url)}`,
    
    // Service 2: ScreenshotOne (demo key)
    `https://api.screenshotone.com/take?access_key=demo&url=${encodeURIComponent(url)}&viewport_width=${width}&viewport_height=${height}&device_scale_factor=1&format=png&image_quality=80&block_ads=true&block_cookie_banners=true&block_trackers=true&delay=3000&timeout=30000`,
  ];

  // Try each service until one works
  for (let i = 0; i < screenshotServices.length; i++) {
    const screenshotUrl = screenshotServices[i];
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

      const response = await fetch(screenshotUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/png,image/jpeg,image/*,*/*',
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Check if response is an image
      const contentType = response.headers.get('content-type') || '';
      const isImage = contentType.includes('image') || 
                      contentType.includes('png') || 
                      contentType.includes('jpeg') ||
                      contentType.includes('jpg');

      if (response.ok && isImage) {
        const imageBuffer = await response.arrayBuffer();
        // Verify it's actually an image by checking size (at least 100 bytes)
        if (imageBuffer.byteLength > 100) {
          return new NextResponse(imageBuffer, {
            headers: {
              'Content-Type': contentType || 'image/png',
              'Cache-Control': 'public, max-age=604800', // Cache for 7 days
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }
    } catch (error: any) {
      // Continue to next service if this one fails
      if (error.name !== 'AbortError') {
        console.error(`Screenshot service ${i + 1} failed:`, error.message);
      }
      continue;
    }
  }

  // If all services fail, return a transparent 1x1 pixel PNG as fallback
  // This prevents broken image icons and allows client-side fallback
  const transparentPixel = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    'base64'
  );

  return new NextResponse(transparentPixel, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      'Access-Control-Allow-Origin': '*',
    },
  });
}


