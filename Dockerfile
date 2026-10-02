FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html app.js styles.css sw.js manifest.webmanifest \
     icon.png logo.png SensoryPass.svg \
     icon-192.png icon-512.png icon-maskable-512.png apple-touch-icon.png \
     /usr/share/nginx/html/
EXPOSE 80
