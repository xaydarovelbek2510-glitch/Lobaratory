# ===== STAGE 1: Build Angular =====
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# ===== STAGE 2: Serve with Nginx =====
FROM nginx:alpine
# Angular build output papkasini Nginx'ga nusxalash
# Angular 17 application builder outputs to dist/<project-name>/browser
COPY --from=build /app/dist/botany-institute/browser /usr/share/nginx/html
# Fallback: agar browser papkasi bo'lmasa
COPY --from=build /app/dist/botany-institute/ /usr/share/nginx/html/
# Nginx konfiguratsiyasi (SPA routing uchun)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
