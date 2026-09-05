const VIDEOS = [
  // === 15 MINUTI ===
  {
    id: 1,
    youtubeId: 'M0o5bYUQG70',
    title: '15 Min Zumba Dance Workout Full Body Fitness',
    instructor: 'Mira Pham',
    duration: 15,
    level: 'principiante',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/M0o5bYUQG70/mqdefault.jpg'
  },
  {
    id: 2,
    youtubeId: 'mKDYAeKphLg',
    title: '15 Min Zumba Cardio Latin Dance per Principianti',
    instructor: 'Eva Fitness',
    duration: 15,
    level: 'principiante',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/mKDYAeKphLg/mqdefault.jpg'
  },
  {
    id: 3,
    youtubeId: '7riltpIqZv0',
    title: '15 Min Zumba Dance Party con Mamma',
    instructor: 'Fitness With Mommy',
    duration: 15,
    level: 'principiante',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/7riltpIqZv0/mqdefault.jpg'
  },
  {
    id: 4,
    youtubeId: '-iWNekNmVR4',
    title: '15 Min Zumba Cardio per Principianti - Brucia Calorie',
    instructor: 'growwithjo',
    duration: 15,
    level: 'principiante',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/-iWNekNmVR4/mqdefault.jpg'
  },
  {
    id: 5,
    youtubeId: 'kaBm4C7nGfc',
    title: '15 Min Cardio Zumba Trial Workout',
    instructor: 'Zumba Fitness',
    duration: 15,
    level: 'principiante',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/kaBm4C7nGfc/mqdefault.jpg'
  },
  {
    id: 6,
    youtubeId: 'lnaEqAZygdY',
    title: '15 Min Zumba con Giovanni Pernice',
    instructor: 'Giovanni Pernice',
    duration: 15,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/lnaEqAZygdY/mqdefault.jpg'
  },
  {
    id: 7,
    youtubeId: 'H5mjweR5iQY',
    title: '15 Min Esercizio per Dimagrire Velocemente',
    instructor: 'Mira Pham',
    duration: 15,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/H5mjweR5iQY/mqdefault.jpg'
  },
  {
    id: 8,
    youtubeId: 'mQhThoW5UtY',
    title: '15 Min Zumba Facile per Anziani - Low Impact',
    instructor: 'Dancing With Mark',
    duration: 15,
    level: 'principiante',
    type: 'gold',
    thumbnail: 'https://img.youtube.com/vi/mQhThoW5UtY/mqdefault.jpg'
  },
  {
    id: 9,
    youtubeId: 'm5WcHDarTyI',
    title: '15 Min Cardio Aerobica Facile a Casa',
    instructor: 'Dancing With Mark',
    duration: 15,
    level: 'principiante',
    type: 'gold',
    thumbnail: 'https://img.youtube.com/vi/m5WcHDarTyI/mqdefault.jpg'
  },
  // === 20 MINUTI ===
  {
    id: 10,
    youtubeId: 'YSxcLVgrgQI',
    title: '20 Min Zumba Fitness Party - Mix Canzoni',
    instructor: 'Official Deevy',
    duration: 15,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/YSxcLVgrgQI/mqdefault.jpg'
  },
  {
    id: 11,
    youtubeId: 'RgGYuYG7Q6M',
    title: '20 Min Esercizio per Pancia Piatta - Zumba Class',
    instructor: 'Mira Pham',
    duration: 15,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/RgGYuYG7Q6M/mqdefault.jpg'
  },
  {
    id: 12,
    youtubeId: 'bm4WZyH5p2I',
    title: '20 Min STRONG by Zumba - Cardio e Tonificazione',
    instructor: 'Ai Lee Syarief',
    duration: 15,
    level: 'avanzato',
    type: 'strong',
    thumbnail: 'https://img.youtube.com/vi/bm4WZyH5p2I/mqdefault.jpg'
  },
  // === 30 MINUTI ===
  {
    id: 13,
    youtubeId: 'zp8vpq-zhf0',
    title: '30 Min Non Stop Zumba Dance Workout',
    instructor: 'Work Out Like A Dancer',
    duration: 30,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/zp8vpq-zhf0/mqdefault.jpg'
  },
  {
    id: 14,
    youtubeId: 'QRZcZgSgSHI',
    title: '30 Min STRONG by Zumba - Cardio e Tonificazione Full Body',
    instructor: 'Aurelio Figari',
    duration: 30,
    level: 'avanzato',
    type: 'strong',
    thumbnail: 'https://img.youtube.com/vi/QRZcZgSgSHI/mqdefault.jpg'
  },
  {
    id: 15,
    youtubeId: 'KdIyjJWK5kY',
    title: '30 Min STRONG by Zumba - Workout Completo',
    instructor: 'STRONG Nation',
    duration: 30,
    level: 'avanzato',
    type: 'strong',
    thumbnail: 'https://img.youtube.com/vi/KdIyjJWK5kY/mqdefault.jpg'
  },
  {
    id: 16,
    youtubeId: 'BPrRnuYSVUM',
    title: '30 Min STRONG by Zumba - Allenamento Intenso',
    instructor: 'Aurelio Figari',
    duration: 30,
    level: 'avanzato',
    type: 'strong',
    thumbnail: 'https://img.youtube.com/vi/BPrRnuYSVUM/mqdefault.jpg'
  },
  {
    id: 17,
    youtubeId: '65GsFshIfNw',
    title: '30 Min Dance Workout a Casa - Zumba Class',
    instructor: 'Mira Pham',
    duration: 30,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/65GsFshIfNw/mqdefault.jpg'
  },
  {
    id: 18,
    youtubeId: 'r_H2R2-Wi68',
    title: '30 Min STRONG by Zumba - Tonificazione Totale',
    instructor: 'STRONG Nation',
    duration: 30,
    level: 'avanzato',
    type: 'toning',
    thumbnail: 'https://img.youtube.com/vi/r_H2R2-Wi68/mqdefault.jpg'
  },
  {
    id: 19,
    youtubeId: 'qycQUL_c1b8',
    title: '25 Min Zumba Senza Salti - Per Tutti',
    instructor: 'Kaji Prem',
    duration: 30,
    level: 'principiante',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/qycQUL_c1b8/mqdefault.jpg'
  },
  // === 45 MINUTI ===
  {
    id: 20,
    youtubeId: 'vtNMlNy8yAE',
    title: '45 Min Zumba per Dimagrire Velocemente',
    instructor: 'Mira Pham',
    duration: 45,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/vtNMlNy8yAE/mqdefault.jpg'
  },
  {
    id: 21,
    youtubeId: 'k5K15pKvLXA',
    title: '45 Min Zumba Full Body - Alta Energia',
    instructor: 'Zumba Fitness',
    duration: 45,
    level: 'avanzato',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/k5K15pKvLXA/mqdefault.jpg'
  },
  {
    id: 22,
    youtubeId: 'xcJqmnx4yAI',
    title: '45 Min Zumba en Casa - Tutti gli Stili',
    instructor: 'Entrena con Sergio',
    duration: 45,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/xcJqmnx4yAI/mqdefault.jpg'
  },
  {
    id: 23,
    youtubeId: 'tUlMiss3NDo',
    title: '40 Min Dance Workout Zumba - Brucia Grassi',
    instructor: 'Mira Pham',
    duration: 45,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/tUlMiss3NDo/mqdefault.jpg'
  },
  {
    id: 24,
    youtubeId: 'FSGWMzBU9eo',
    title: '40 Min Zumba a Casa - Esercizio Completo',
    instructor: 'Mira Pham',
    duration: 45,
    level: 'avanzato',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/FSGWMzBU9eo/mqdefault.jpg'
  },
  // === 60 MINUTI ===
  {
    id: 25,
    youtubeId: 'FYn9daUDoSI',
    title: '60 Min Routine Brucia Grassi - Zumba Class',
    instructor: 'Mira Pham',
    duration: 60,
    level: 'avanzato',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/FYn9daUDoSI/mqdefault.jpg'
  },
  {
    id: 26,
    youtubeId: 'IzxRBLMP_hY',
    title: '53 Min Zumba Workout - Latin Reggaeton Mix',
    instructor: 'Zumba Workout Music',
    duration: 60,
    level: 'avanzato',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/IzxRBLMP_hY/mqdefault.jpg'
  },
  {
    id: 27,
    youtubeId: 'o5OKXZ6j9f4',
    title: '58 Min Zumba Reggae - Cardio Party Nonstop',
    instructor: 'Zumba Workout Music',
    duration: 60,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/o5OKXZ6j9f4/mqdefault.jpg'
  },
  {
    id: 28,
    youtubeId: '1RYDn-3B3E8',
    title: '54 Min Zumba Reggae Dance - Vol. 39',
    instructor: 'Zumba Workout Music',
    duration: 60,
    level: 'intermedio',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/1RYDn-3B3E8/mqdefault.jpg'
  },
  {
    id: 29,
    youtubeId: 'TP2oysZH-gI',
    title: '60 Min Zumba con Corielle - Workout Completo',
    instructor: 'Corielle',
    duration: 60,
    level: 'avanzato',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/TP2oysZH-gI/mqdefault.jpg'
  },
  // === GOLD (Anziani) ===
  {
    id: 30,
    youtubeId: 'tuJpHwPWa8g',
    title: '25 Min Zumba Gold Facile per Tutti',
    instructor: 'Fitness With Scindy',
    duration: 30,
    level: 'principiante',
    type: 'gold',
    thumbnail: 'https://img.youtube.com/vi/tuJpHwPWa8g/mqdefault.jpg'
  },
  // === TONING ===
  {
    id: 31,
    youtubeId: 'dm_UTEC6HXI',
    title: 'Zumba Shake - Alta Energia Dance Fitness',
    instructor: 'Zin Lani',
    duration: 15,
    level: 'intermedio',
    type: 'toning',
    thumbnail: 'https://img.youtube.com/vi/dm_UTEC6HXI/mqdefault.jpg'
  },
  {
    id: 32,
    youtubeId: '3JmSDdf6E-s',
    title: 'Asi Es La Vida - Zumba Fitness Dance',
    instructor: 'Cruz Control Fitness',
    duration: 15,
    level: 'principiante',
    type: 'classic',
    thumbnail: 'https://img.youtube.com/vi/3JmSDdf6E-s/mqdefault.jpg'
  },
  {
    id: 33,
    youtubeId: '7KHAKfN5SDM',
    title: 'Ring My Bells - Zumba Dance Fitness Choreo',
    instructor: 'Bukz Nicholai',
    duration: 15,
    level: 'intermedio',
    type: 'toning',
    thumbnail: 'https://img.youtube.com/vi/7KHAKfN5SDM/mqdefault.jpg'
  },
  {
    id: 34,
    youtubeId: 'WFfrv8gtLYA',
    title: '25 Min Senior Cardio Workout - Cuore in Forma',
    instructor: 'Fitness With Scindy',
    duration: 30,
    level: 'principiante',
    type: 'gold',
    thumbnail: 'https://img.youtube.com/vi/WFfrv8gtLYA/mqdefault.jpg'
  },
  {
    id: 35,
    youtubeId: 'rAy6_C-RphA',
    title: 'Unbreak My Heart - Zumba Pop Choreo',
    instructor: 'Mitesh Tank',
    duration: 15,
    level: 'intermedio',
    type: 'toning',
    thumbnail: 'https://img.youtube.com/vi/rAy6_C-RphA/mqdefault.jpg'
  }
];
