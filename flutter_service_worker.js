'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2d183aa5db977cdeedb4e8f0debbe90a",
".git/config": "8f1388652297bd1bcbad1ce6b65c0cd6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5c1360849a20390a0ee0d21b34230214",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0b82b1bc1f1663362e9066b1786606c3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2894bda686b515e501d6d6ed9181f0d",
".git/logs/refs/heads/master": "d2894bda686b515e501d6d6ed9181f0d",
".git/logs/refs/remotes/origin/HEAD": "7b637fb058d2614e30f4911e764853fd",
".git/logs/refs/remotes/origin/master": "7424c1562aeaef786289f3dff9773a65",
".git/objects/10/287bccdffad44ad8f6f5b53399c708cbe17253": "f6b74a125d6a78370ae864709a7468bb",
".git/objects/19/b646d4443275ccbd25764a7b62a1883c400491": "d75d8a1f2252c17b9e5e2bbb2b8b5be6",
".git/objects/1c/f788e2223a73b72961c9b3a2abc710284af1f2": "d568db8ba69c4521cd02ee77b773ba99",
".git/objects/1f/53798bb4fe33c86020be7f10c44f29486fd190": "8440fbb1406ab1300c5f1cb4babfa37e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/3b/9cf12cd639d08ded4039be1a8bc1f7b7300c38": "666c7dbd19b111813b7eb7cb93a218c5",
".git/objects/40/38c83ba490dc870490ab51a422493a93d2de82": "e3a6dc36836b8780fea4f6ca2163d48d",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/02431f66dcc55ba5e34417119aae2713c55c5c": "d8a28a3c9a09531d2c13a1a1df01e66f",
".git/objects/58/3a238c12258f9559db2db15d5b10b72fad1a85": "03945646cccb5e67d74059fe18d4f4ec",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6b/fbadda7eac13731645568cc7a38bca56d9dfb1": "1ac4b0fd777fca22e05a7d5e0ca0943a",
".git/objects/72/92b232ab668a31c404bd0ed77642b9bc20de22": "ae6387ceaef00447b3a7eab3439d52c2",
".git/objects/7f/e58dacbea65642276a79c859ef207d733b64de": "4fd87431972847140bde37f877fa63c5",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/85/a00f5d76a366f8a8e3105608ddffbc96b0cfa4": "e450dfc548f11dbfcd29911dd095b350",
".git/objects/8b/82225921bb2ff8787614936b178f36cf253365": "92ea12b805af53fd4f75cddfe08182b9",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/ab/57866f092bf587aac401932e35adca250916fb": "8a8738cca0c6a29662c6e08ef6bd7b2c",
".git/objects/b0/0db8483233742a3128913700328575a0e2db73": "a7becbe7359d75dec2423aedaf0c2407",
".git/objects/c1/e3431b8bb61fb10caa95d67bafee445b0f8d2d": "d80bdfaf2fa7b95f3840785de17e67e3",
".git/objects/ce/cce9c8407b85030c13e15723cc9d6a1cab8544": "e8ec5e16ca020cd159fc8970d32f7619",
".git/objects/d3/f25c22384e71667674114875398afabd14b6da": "a3d73a25907c780fd987a712f3b01ca8",
".git/objects/d7/b0c53b357526766630e6dcae27884bc94a58a4": "69d2197acab8a42c089c1811d5658025",
".git/objects/dc/f0c9ebaeb3fbe6e6d4fd2ecfe7cc55885b5bc4": "cc403b881a1c52278d856f0f778032af",
".git/objects/e2/f67c9780920950846e1ec0a9cc8ecfb4af776c": "e605c1397d7514401d5523985430d246",
".git/objects/ee/ee8614f6ab49af1324c6d716e154c2a7a84302": "30f84a9a32d6b15688f3df8a282ef7c9",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/pack/pack-4bf7871077efc54c7845e8e92b9f3f6ff31a6112.idx": "d63f8c3c5e1242809adbf116810a6179",
".git/objects/pack/pack-4bf7871077efc54c7845e8e92b9f3f6ff31a6112.pack": "01e7387314f5705fbc55f729459955df",
".git/ORIG_HEAD": "38bfb188dbab59816c70c29f8943b8cb",
".git/packed-refs": "e1a78427274b0b9b361eede5e1d4a95a",
".git/refs/heads/master": "38bfb188dbab59816c70c29f8943b8cb",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "3e93de2c9e70186819757a7730a61ca6",
"assets/AssetManifest.json": "66faad2367b4221ba6ea4832e535ff43",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/img/add_goal.png": "53abc190d46cc3ffac180048b457f455",
"assets/img/image6.png": "6c8990b155b8c1b6946754d310599a57",
"assets/NOTICES": "504d3115b230ff44209542d6511da2a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ded777d41f5c32ba2a2bad7d0b5eb644",
"/": "ded777d41f5c32ba2a2bad7d0b5eb644",
"main.dart.js": "4092c50a009568e546b16af1bf688c7c",
"manifest.json": "d352ecfe7e8ac41f682300c2edc48f8e",
"version.json": "a55f655dc3b1529d0c6dea0604a0b653"
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
