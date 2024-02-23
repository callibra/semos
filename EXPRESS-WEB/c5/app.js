// mongodb+srv://aleksandar:<password>@cluster0.dle0u6v.mongodb.net/?retryWrites=true&w=majority
//tretchas
// YRzFP7MITu4YfYZo

//! npm install express-jwt
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('express-jwt');

const db = require('./pkg/db/index');

const movies = require('./handlers/moviehandler');
const auth = require('./handlers/authHandler');
const viewHanlder = require('./handlers/viewHandler');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.init();

app.use(
  jwt
    .expressjwt({
      algorithms: ['HS256'],
      secret: process.env.JWT_SECRET,
      getToken: (req) => {
        if (
          req.headers.authorization &&
          req.headers.authorization.split(' ')[0] === 'Bearer'
        ) {
          return req.headers.authorization.split(' ')[1];
        }
        if (req.cookies.jwt) {
          return req.cookies.jwt;
        }
        return null; //Vo ovaj slucaj ako nemame isprateno token
      },
    })
    .unless({
      path: ['/api/v1/signup', '/api/v1/login', '/movies/:id', '/login'],
    })
);

app.post('/api/v1/signup', auth.signup);
app.post('/api/v1/login', auth.login);

app.get('/movies', movies.getAll);
app.get('/movies/:id', movies.getOne);
app.post('/movies', movies.create);
app.patch('/movies/:id', movies.update);
app.delete('/movies/:id', movies.delete);

app.post('/me', movies.createByUser);
app.get('/me', movies.getByUser);

// View ruti
app.get('/login', viewHanlder.getLoginForm);
app.get('/viewMovies', viewHanlder.movieView);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log('Could not start service');
  }
  console.log(`Service started successfully on port ${process.env.PORT}`);
});

//! Da se kreira sistem celos so logiranje registrinjae
//! Za oglasi
//! Samo registrinai lica da mozat da kreiraat pregleduvaat i updejtiraat oglasi

// app.use(
//   jwt
//     .expressjwt({
//       algorithms: ['HS256'],
//       secret: process.env.JWT_SECRET,
//       getToken: (req) => {
//         if (
//           req.headers.authorization &&
//           req.headers.authorization.split(' ')[0] === 'Bearer'
//         ) {
//           return req.headers.authorization.split(' ')[1];
//         }
//         if (req.cookies.jwt) {
//           return req.cookies.jwt;
//         }
//         return null; //Vo ovaj slucaj ako nemame isprateno token
//       },
//     })
//     .unless({
//       path: ['/api/v1/signup', '/api/v1/login', '/movies/:id'],
//     })
// );

//! DA SE KREIRA TVITER APLIKACIJA KOJA STO KORISNICITE KJE MOZAT DA KREIRAAT SOPSTVENI POSTOVI
//! DA IMA NEWFEED RUTA KOJA KJE SE PRIKAZUVAAT SITE TVITA

// 1xx Informativen karakter
// 100 - continue
// 101 - switching protocols

// 2xx - Uspesni odgovori
// 200 - ok: Standarden odgovor za uspesni http baranja
// 201 - Created: Baranjeto e uspesno i kako rezultat bilo kreiran nov zapis
// 204 - No content: Baranjeto e uspesno, no nema sodrzina za vrakjanje nazad

// 3xx: Prenasocuvanja
// 301 - Moved Pemranently - Se koristi koga URL adresata na resursot se promeni
// 302 - found: se koristi za privremeno prenasocuvanje
// 304 - Not modified - Ne informira deka keshiranata verzija na baraniot resurs e uste validna

// 4xx: Greski na klientot
// 400 Bad request: Baranjeto ne moze da e obraboteno poradi sintaksicka greska
// 401: Unauthorized: Za pristap na ovaj resurs e potrebna avtentikacija
// 403: Forbidden: Serverot go razbira baranjeto, no odbiva da odgovori na istoto
// 404: not found: Serverit nemoze da go najde baraniot resurs
// 429: Too many request: Klientot ispratil premnogu baranja vo daden vremenski period

//5xx: Greski na serverot
// 500 Internal Server Error: Opsta greska koga serverot se soocil so situacija koja nemoze da ja obraboti
// 501: Not implemented: Ne e seushte implementirana funkcionalnosta za zadadenite baranja
// 503: Service Unavailable: Serverot vo momentot ne e dostapen
