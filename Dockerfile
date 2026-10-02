FROM nginx:alpine
COPY index.html app.js styles.css icon.png logo.png SensoryPass.svg /usr/share/nginx/html/
EXPOSE 80
