const CACHE_NAME = "v1-static-assets";

const ASSETS = [
    "/",
    "/index.html",
    "/style.css",
    "/offline.html",
    "/manifest.json",
    "/images/photo.png",
    "/images/Capture.PNG",
    "/images/Capture1.PNG",
    "/images/Capture2.PNG"
];


self.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))

    );

});

self.addEventListener("activate", (event) => {

    event.waitUntil(

        caches.keys()
            .then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if (key !== CACHE_NAME) {
                            return caches.delete(key);
                        }

                    })

                );

            })

    );

});

self.addEventListener("fetch", (event) => {

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                if (response) {
                    return response;
                }

                return fetch(event.request)

                    .catch(() => {

                        return caches.match("/offline.html");

                    });

            })

    );

});