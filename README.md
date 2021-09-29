# Covid19 - Livecode 2 Phase 2

​

## Specs

Terdapat sebuah aplikasi yang dapat melihat jumlah kasus penyebaran virus yang terdapat pada negara di dunia, dan juga authenticated user dapat melaporkan kasus pada negara yang terdaftar.
​
Buatlah sebuah web app dengan fitur sebagai berikut:
- User Login 
- Show Countries 
- Show My Reports  (Menampilkan reports yang dilaporkan user yang sedang login)
- Add Reports  (Menambahkan reports yang dilaporkan user yang sedang login ke satu negara)
- Delete Reports  (Menghapus reports yang dilaporkan user yang sedang login ke satu negara)  ​
- Error handling, dan Notifikasi di client ketika berhasil / gagal melakukan action 
- Reusable components/functions (DRY, Don't repeat yourself!), 
- Mengimplementasikan state management di client, 
- Membuat user interface yang baik, 
  ​
  Untuk server mengacu pada file `api-doc.md`

## Here be dragons...

​
fitur tambahan ini pada halaman list Covid19:​
- Search filter countries wajib menggunakan debounce (boleh buatan atau pake lodash)
- menggunakan transaction (SQL) pada saat report cases dan delete cases
