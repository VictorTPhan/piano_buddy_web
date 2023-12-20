'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c1a6ba2766588c1857a3605c5b94b776",
"assets/AssetManifest.json": "1ade739922ba83cd2b98582e674978bd",
"assets/assets/appicon.png": "5f5747669bf8def4fd2b595555fefc95",
"assets/assets/data/Concertbothaudio.mp3": "0a129b2c9ac3b6e0955ff992a3d23a18",
"assets/assets/data/Concertbothpdf.pdf": "fb4d679aff280ca26d6385a97f18ba5a",
"assets/assets/data/Concertobothaudio.mp3": "0a129b2c9ac3b6e0955ff992a3d23a18",
"assets/assets/data/Concertobothpdf.pdf": "fb4d679aff280ca26d6385a97f18ba5a",
"assets/assets/data/Concertoprimoaudio.mp3": "49d9d865b5b915a19b2b9a968c17e505",
"assets/assets/data/Concertoprimopdf.pdf": "fb4d679aff280ca26d6385a97f18ba5a",
"assets/assets/data/Concertosecondoaudio.mp3": "49d9d865b5b915a19b2b9a968c17e505",
"assets/assets/data/Concertosecondopdf.pdf": "fb4d679aff280ca26d6385a97f18ba5a",
"assets/assets/data/Concertprimoaudio.mp3": "49d9d865b5b915a19b2b9a968c17e505",
"assets/assets/data/Concertprimopdf.pdf": "fb4d679aff280ca26d6385a97f18ba5a",
"assets/assets/data/Concertsecondoaudio.mp3": "49d9d865b5b915a19b2b9a968c17e505",
"assets/assets/data/Concertsecondopdf.pdf": "fb4d679aff280ca26d6385a97f18ba5a",
"assets/assets/data/Easypianoduetbothaudio.mp3": "be3f28783a046197ff7d95853efea80c",
"assets/assets/data/Easypianoduetbothpdf.pdf": "30aba7858e0284149eb52ec07be16825",
"assets/assets/data/Easypianoduetprimoaudio.mp3": "be3f28783a046197ff7d95853efea80c",
"assets/assets/data/Easypianoduetprimopdf.pdf": "30aba7858e0284149eb52ec07be16825",
"assets/assets/data/Easypianoduetsecondoaudio.mp3": "be3f28783a046197ff7d95853efea80c",
"assets/assets/data/Easypianoduetsecondopdf.pdf": "30aba7858e0284149eb52ec07be16825",
"assets/assets/data/Menuetbothaudio.mp3": "d4deb2585ed8858cb2f8ea4bfc20528c",
"assets/assets/data/Menuetbothpdf.pdf": "e8339f388769bd64a61a0ff30db850fc",
"assets/assets/data/Menuetprimoaudio.mp3": "49d9d865b5b915a19b2b9a968c17e505",
"assets/assets/data/Menuetprimopdf.pdf": "80910e6a33add0e3c615f10c88401eb1",
"assets/assets/data/Menuetsecondoaudio.mp3": "39bf9d08e83a0dbe7f335aed384b50e3",
"assets/assets/data/Menuetsecondopdf.pdf": "adcfda143189efd3411f6721150fec32",
"assets/assets/data/Miniatureconcertobothaudio.mp3": "e99665910dba926c4e24eae4431608d4",
"assets/assets/data/Miniatureconcertobothpdf.pdf": "193862e16a03d17c419339d0596b280c",
"assets/assets/data/Miniatureconcertoprimoaudio.mp3": "09d35e4c55b54e956fbaa640a3721ffe",
"assets/assets/data/Miniatureconcertoprimopdf.pdf": "193862e16a03d17c419339d0596b280c",
"assets/assets/data/Miniatureconcertosecondoaudio.mp3": "11f33a9f6926028b014f5b1204208a84",
"assets/assets/data/Miniatureconcertosecondopdf.pdf": "193862e16a03d17c419339d0596b280c",
"assets/assets/data/Moderatobothaudio.mp3": "e0440e9d6f94f766bef51eca1f561d8d",
"assets/assets/data/Moderatobothpdf.pdf": "a8b68957ae01dbdf2c949aaa41451f98",
"assets/assets/data/Moderatoprimoaudio.mp3": "c61f5f85d3daf0be7eb03dff7686805c",
"assets/assets/data/Moderatoprimopdf.pdf": "a8b68957ae01dbdf2c949aaa41451f98",
"assets/assets/data/Moderatosecondoaudio.mp3": "0ab939243573c9f8b1c0999102c26f5d",
"assets/assets/data/Moderatosecondopdf.pdf": "a8b68957ae01dbdf2c949aaa41451f98",
"assets/assets/data/PreludeDefaunbothaudio.mp3": "e0440e9d6f94f766bef51eca1f561d8d",
"assets/assets/data/PreludeDefaunbothpdf.pdf": "0862426295de01a6a06e082bf2fe3fba",
"assets/assets/data/PreludeDefaunprimoaudio.mp3": "c61f5f85d3daf0be7eb03dff7686805c",
"assets/assets/data/PreludeDefaunprimopdf.pdf": "0862426295de01a6a06e082bf2fe3fba",
"assets/assets/data/PreludeDefaunsecondoaudio.mp3": "4f1646e1b52b8c4a6bfe774765d85a0c",
"assets/assets/data/PreludeDefaunsecondopdf.pdf": "0862426295de01a6a06e082bf2fe3fba",
"assets/assets/data/Rondinobothaudio.mp3": "edf3fdce0faf4dbec9f80bafc4b44765",
"assets/assets/data/Rondinobothpdf.pdf": "30c970a75e00acb47f6a66aeb6a65b9e",
"assets/assets/data/Rondinoprimoaudio.mp3": "b5cec6d8c3620b48e07f055153f58231",
"assets/assets/data/Rondinoprimopdf.pdf": "88646670b299be5ed9b6d10e3f708a3c",
"assets/assets/data/Rondinosecondoaudio.mp3": "31a8b5484b66eaf1fd845a18598c1692",
"assets/assets/data/Rondinosecondopdf.pdf": "f39f998a281356db3bcc44cd6aabf100",
"assets/assets/logo.png": "5da4de834219b137861c69df58e3e385",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9e22fdb5e212ffbc7f40740799be8240",
"assets/NOTICES": "476fab67f6cab58aec53383c43503c6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7f8c481189b9d3dd74c6e84e0084e29a",
"/": "7f8c481189b9d3dd74c6e84e0084e29a",
"main.dart.js": "6567b37aaedd8a553ed88251218cc781",
"manifest.json": "20fc90e3a02034b3c67af1e6579ec62a",
"version.json": "ac9cf6855ac2feddbc75921635ec72e0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
