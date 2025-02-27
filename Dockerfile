# ใช้ Node.js เป็น Base Image
FROM node:18-alpine AS builder

# กำหนด Working Directory
WORKDIR /app

# คัดลอก package.json และติดตั้ง Dependencies
COPY package.json package-lock.json ./
RUN npm install

# คัดลอกโค้ดทั้งหมดและ Build Next.js
COPY . .
RUN npm run build

# ---- Production Image ----
FROM node:18-alpine

WORKDIR /app

# คัดลอกไฟล์ที่ Build เสร็จแล้วจาก Builder
COPY --from=builder /app ./

# ตั้งค่าพอร์ตที่ใช้
EXPOSE 3000

# คำสั่งเริ่มต้นให้รัน Next.js
CMD ["npm", "run", "start"]
