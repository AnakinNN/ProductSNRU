# ProductSNRU

เว็บไซต์สาขาวิชาเครื่องกลการผลิตและอุตสาหการ มหาวิทยาลัยราชภัฏสกลนคร สร้างด้วย Astro แบบ static และ deploy ได้ทั้ง Vercel และ GitHub Pages

## Deploy บน Vercel

1. นำ repository นี้เข้า Vercel ผ่าน **Add New → Project**
2. เลือก repository และคงค่าที่ตั้งไว้ใน `vercel.json`:
   - Framework: Astro
   - Build command: `npm run build`
   - Output directory: `dist`
3. กด **Deploy**

Vercel จะติดตั้ง dependencies จาก `package-lock.json` และ deploy ใหม่เมื่อมีการ push commit ไปยัง branch ที่ตั้งเป็น Production Branch การตั้งค่า deploy นี้ไม่ต้องใช้ environment variables เพิ่ม

หากมี custom domain ให้เพิ่มโดเมนใน **Project Settings → Domains**; config จะใช้ production domain ของ Vercel สำหรับ Astro `site` โดยอัตโนมัติ

## รันและ build ในเครื่อง

```sh
npm install
npm run dev
```

สร้างไฟล์สำหรับ deploy ที่ `dist/` และดูตัวอย่าง build ในเครื่อง:

```sh
npm run build
npm run preview
```

## GitHub Pages

workflow ใน `.github/workflows/deploy.yml` ยัง deploy ไป GitHub Pages ได้ โดยใช้ `/ProductSNRU` เป็น base path เฉพาะใน GitHub Actions ส่วน Vercel และ local dev จะใช้ root path (`/`).
