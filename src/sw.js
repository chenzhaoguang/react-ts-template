workbox.core.skipWaiting()
workbox.core.clientsClaim()

self.addEventListener('push', event => {
	const title = 'Get Started With Workbox'
	const options = {
		body: event.data.text()
	}
	event.waitUntil(self.registration.showNotification(title, options))
})

workbox.precaching.precacheAndRoute(self.__precacheManifest)
