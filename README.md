# Landing Page DesignCamp

Membuat landing page situs Pelatilhan Desain sebagai tugas ke 6 dari sesi zoom Codepolitan. Berikut framework dan library yang digunakan :

- `NodeJS` : untuk install framework dan library cli
- `Webpack` : optimasi performa web. menambahkan plugin/loader `babel`, `css minification`, `image minimizer`
- `Tailwind` : styling web lebih praktis, menambahkan plugin `postcss`, `autoprefixer`
- `Flowbite` : styling components untuk tailwind
- `Animate.css` : styling animasi efek unik
- `Aos` : styling animasi saat scrolling
- `CountUp.js` : styling animasi efek angka
- `Tiny Slider 2` : styling component carousel
- `Eslint` : membantu clean code javascript
- `Install SSL` : update ssl certificate sehingga dapat diakses menggunakan https

# Features

- Modern Design: A sleek and stylish layout that highlights the key features of the design camp.
- Responsive Layout: Optimized for various devices including desktops, tablets, and mobile phones.
- Smooth Animations: Enhances user experience with smooth and engaging animations.
- Event Information: Provides detailed information about the event, schedule, and speakers.

# Deployment Web

Silahkan kunjungi **[http://designcamp.aribudiman.site](http://designcamp.aribudiman.site)** untuk melihat hasil jadi Website. Sebagai keterangan website di deploy di Amazon Web Services, lebih tepatnya Amazon S3 Bucket. Memngapa demikian? dikarenakan website hanya berisi landing page (statis) dan tidak ada kompleksitas fitur Website. (Update) menambahkan AWS CloudFront untuk CDN web kita sehingga web ter cache dan menjadi low latency untuk user.
