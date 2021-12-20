'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "38dc629978d956cd2c8c3e1bd9de4370",
"index.html": "863e7299aa5d95232eaccc63fca066a9",
"/": "863e7299aa5d95232eaccc63fca066a9",
"main.dart.js": "c5f9f0d3d124240984ac8376cc7db34f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f25703ad630c79238e443b155feb4cbf",
"assets/AssetManifest.json": "14fdc4d23362bd58a8557d5963720f4c",
"assets/NOTICES": "8b49c5f93e6ef206597f3c6a2373f21d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/kavling_2.svg": "573a1d254b77042066927c8ed797c773",
"assets/assets/images/tahap1_canvas.svg": "3e8c30285502075b7618f73bb943292c",
"assets/assets/images/Site%2520plan%2520Wijaya%2520Kusuma-%2520tahap%25201_Vector_polygon.svg": "06a98c00ca2cea9878bbf4f951042751",
"assets/assets/images/Site%2520plan%2520Wijaya%2520Kusuma-%2520tahap%25202_Vector_polygon.svg": "004642b61c39e8d80f83f3314d42622f",
"assets/assets/images/Site%2520plan%2520Wijaya%2520Kusuma-%2520tahap%25202_Canvas_polygon.svg": "c715b381e621e44268e9ee05226ea695",
"assets/assets/images/less2_kavling_siteplan.svg": "37af7dc1e26363600c7709c029925ea0",
"assets/assets/images/Site%2520plan%2520Wijaya%2520Kusuma-%2520tahap%25201_Canvas_polygon.svg": "3e8c30285502075b7618f73bb943292c",
"assets/assets/images/imagenotfound.png": "15ffdca4da395b99352870a92397ded4",
"assets/assets/images/less_kavling_siteplan.svg": "6d3656faeede349b70fc2c5c9beb6fb9",
"assets/assets/images/casagandre_background_nocompass.svg": "a4453844e7cd0b02391854748d47345a",
"assets/assets/illustrations/authentication.svg": "0f8d295bb4ca30aeb9baaf766684afa2",
"assets/assets/illustrations/search_signal.svg": "214606e993cd1c9efe5c004824c96fe5",
"assets/assets/loading.gif": "8103e9c594d264295889452f62b68a3b",
"assets/assets/icon/house.svg": "d82908197e69d3a1edd3795baf147404",
"assets/assets/icon/bathroom.svg": "4629acd15169396fafabbe94a18a1164",
"assets/assets/icon/cleaning-room.svg": "27814870cb2ebf2f56bd8308f3e08594",
"assets/assets/icon/volt.svg": "01f2886a6af97cfe4e6794ecdb2a22d8",
"assets/assets/icon/bedroom.svg": "a42683552341eb86220acdf6fdd107a1",
"assets/assets/icon/user.png": "6f6bbb16aec97391aefe120ec5a4e6a2",
"assets/assets/icon/document.svg": "7990fe9bd28dead80f8ca2f0b7b527bb",
"assets/assets/icon/garage.svg": "b889e04adfaf04c8b9a0e55fa3470ebe",
"assets/assets/icon/plate.svg": "c336df341e39cf4daea6c5b16ca1c5e9",
"assets/assets/icon/arrow-up.png": "c73d858131d096e2d54824f86db0b3b3",
"assets/assets/icon/frame.svg": "fb52e34aeb0de69febca348ab953533d",
"assets/assets/icon/carport.svg": "ad492b5e3df9db604e43b0301d2d78b8",
"assets/assets/icon/water.svg": "3e4310644e565723555220c50c267581",
"assets/assets/icon/garden.svg": "c066c9d97ffc76b7efdaa362f6529a32",
"assets/assets/fonts/NunitoSans-LightItalic.ttf": "d395ff0f45e6b030608de646ec278a35",
"assets/assets/fonts/NunitoSans-BoldItalic.ttf": "655ce9395fcf8c21f45cfeca5bb280a4",
"assets/assets/fonts/NunitoSans-ExtraLight.ttf": "6aea75496b0ccb484d81a97920d2e64c",
"assets/assets/fonts/NunitoSans-Light.ttf": "74d36921be67fb8482bfd7324bd86790",
"assets/assets/fonts/NunitoSans-BlackItalic.ttf": "75ec9078a3f7472f3cdee1d312a390a2",
"assets/assets/fonts/NunitoSans-ExtraBold.ttf": "505a059580cfbeaccdcb7a489bb67ec9",
"assets/assets/fonts/NunitoSans-Regular.ttf": "4c8f447011eef80831b45edb1e5971e0",
"assets/assets/fonts/NunitoSans-SemiBoldItalic.ttf": "b16342e303cde3bafe2d8746be885ca2",
"assets/assets/fonts/NunitoSans-Italic.ttf": "2d517b40dabe232416b73e3a721dc950",
"assets/assets/fonts/OFL.txt": "5fa94515b0e07aa75de1465a1a673ddd",
"assets/assets/fonts/NunitoSans-Bold.ttf": "08e53a516d2ba719d98da46c49b3c369",
"assets/assets/fonts/NunitoSans-SemiBold.ttf": "bd318b58018198a57723f311627492ac",
"assets/assets/fonts/NunitoSans-Black.ttf": "d95152ab5a160491d28b3fce25bf4ff2",
"assets/assets/fonts/NunitoSans-ExtraBoldItalic.ttf": "2ae455ab84d04fec2d436151e712848f",
"assets/assets/fonts/NunitoSans-ExtraLightItalic.ttf": "cf8d9c6c81866d3bdfc1f08d6ea80d8d",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
