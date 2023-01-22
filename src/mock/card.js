import { getRandomInteger, getRandomIndex, getRandomFloat } from './util.js';
import dayjs from 'dayjs';

const cardNames = [
  'Бриллиантовая рука',
  'Благославите женщину',
  'Анатомия Грей',
  'Реванш',
  'Железный человек',
  'Мстители',
  'Тот самый Мюнхгаузен',
  'Идентификация Борна',
  'Миссия невыполнима',
  'Обыкновенное чудо',
  'Экипаж',
  'Трое в лодке, не считая собаки',
  'Зеленая миля',
  'Летучая мышь',
  'Ведьма из Блэр',
  'Другие',
  'Шестое чувство',
  'Иван Васильевич меняет профессию',
];

const posters = [
  'made-for-each-other.png',
  'popeye-meets-sindbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

const filmDescriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const genres = [
  'comedy',
  'horror',
  'action',
  'drama',
  'thriller',
  'documental',
  'fantasy',
];

const emojies = [
  'angry.png',
  'puke.png',
  'sleeping.png',
  'smile.png',
];

const comments = [
  'Круто!',
  'Отстой!',
  'Странный фильм...пересмотрю',
  'Боже, я рыдала! Это великолепно!',
  'Я ожидал большего((',
  'Рекоменую к просмотру всем!!!',
  'Классика жанра!',
  'Не досмотрела, нудятина.',
  'Смотрела только из-за Бреда Питта!',
];

const directors = [
  'Л.Гайдай',
  'Р.Земекис',
  'Ф.Феллини',
  'А.Кончаловский',
  'Н.Михалков',
  'МюЗахаров',
];

const actors = [
  'Брэд Питт',
  'Людмила Гурченко',
  'Роберт Дауни мл.',
  'Джина Лоллабриджида',
  'Кларк Гейбл',
  'Леонид Куравлев',
  'Олег Меньшиков',
  'Джонни Депп',
  'Олег Даль',
  'Патрик Демпси',
  'Елена Яковлева',
  'Джулия Робертс',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const countries = [
  'Russia',
  'USA',
  'Germany',
  'Canada',
  'China',
  'Italy',
  'Great Britain',
  'Sweden',
];

const writers = ['Anne Wigton', 'Heinz Herald', 'Richard Weil'];

const days = {
  MIN: 1,
  MAX: 28,
};

const filmRating = {
  MIN: 1,
  MAX: 10,
};

const releaseYear = {
  MIN: 1945,
  MAX: 2023,
};

const ageRatings = ['0+', '18+', '16+', '6+'];

const MAX_COMMENTS = 5;

const MAX_GENRES = 3;

const generateCardName = () => {
  const index = getRandomIndex(0, cardNames.length - 1);

  return cardNames[index];
};

const generatePoster = () => {
  const index = getRandomIndex(0, posters.length - 1);

  return posters[index];
};

const generateFilmDescription = () => {
  const numberOfSentences = getRandomInteger(1, filmDescriptions.length);
  let description = '';
  for(let i = 0; i < numberOfSentences; i++) {
    const index = getRandomIndex(0, filmDescriptions.length - 1);
    if(i !== 0 && i !== numberOfSentences-1) {
      description = `${description} ${filmDescriptions[index]}`;
    }
    else {
      description = description + filmDescriptions[index];
    }
  }

  if(description.length > 140) {
    description = `${description.substring(139, -1)}...`;
  }

  return description;
};

const generateDuration = () => {
  const hour = {
    MIN: 0,
    MAX: 4,
  };
  const minute = {
    MIN: 0,
    MAX: 59,
  };
  const duration = `${getRandomInteger(hour.MIN, hour.MAX)}h ${getRandomInteger(minute.MIN, minute.MAX)}m`;
  return duration;
};

// const generateCommentDate = () => {
//   const maxDayGap = 30;
//   const daysGap = getRandomInteger(-maxDayGap, maxDayGap);

//   const date = dayjs().add(daysGap, 'day').format('YYYY/MM/DD hh:mm');
//   return date;
// };

const generateComments = (commentsNumber) => {
  const filmComments = [];
  for(let i = 0; i < commentsNumber; i++) {
    const comment = {
      emoji: emojies[getRandomInteger(0, emojies.length - 1)],
      commentText: comments[getRandomInteger(0, comments.length - 1)],
    };
    filmComments.push(comment);
  }

  return filmComments;
};

const generateWriters = () => {
  const numberOfWriters = getRandomInteger(1, writers.length);
  const result = [];
  for(let i = 0; i < numberOfWriters; i++) {
    const writer = writers[getRandomInteger(1, writers.length - 1)];
    result.push(writer);
  }
  return result;
};

const generateActors = () => {
  const numberOfActors = getRandomInteger(1, actors.length);
  const result = [];
  for(let i = 0; i < numberOfActors - 1; i++) {
    const actor = actors[getRandomInteger(1, actors.length - 1)];
    result.push(actor);
  }

  const uniqueActors =Array.from(new Set(result));
  return uniqueActors;
};

const generateReleaseDate = (year) => {
  const day = getRandomInteger(days.MIN, days.MAX);
  const month = months[getRandomInteger(months.MIN, months.MAX)];
  let result = '';
  if(day < 10) {
    result = `0${day} ${month} ${year}`;
  } else {
    result = `${day} ${month} ${year}`;
  }

  return result;
};

const generateGenres = () => {
  const result = [];
  const numberOfGenres = getRandomInteger(1, MAX_GENRES);
  for(let i = 0; i < numberOfGenres; i++) {
    const genre = genres[getRandomInteger(0, genres.length - 1)];
    result.push(genre);
  }
  return result;
};

const generateAgeRating = () => {
  const index = getRandomInteger(0, ageRatings.length - 1);
  return ageRatings[index];
};

export const generateCard = () => {
  const commentsNumber = getRandomInteger(0, MAX_COMMENTS);
  const filmName = generateCardName();
  const poster = generatePoster();
  const releaseFilmYear = getRandomInteger(releaseYear.MIN, releaseYear.MAX);
  const filmGenres = generateGenres();
  const filmDescription = generateFilmDescription();
  const getShortDescription = () => {
    let shortDescription = '';
    if(filmDescription.length > 140) {
      shortDescription = `${filmDescription.substring(139, -1)}...`;
    }
    return shortDescription;
  };
  const film = {
    name: filmName,
    originalName: `Original: ${filmName}`,
    poster,
    rating: getRandomFloat(filmRating.MIN, filmRating.MAX),
    fullSizeCover: poster,
    director: directors[getRandomInteger(0, directors.length - 1)],
    writers: generateWriters(),
    actors: generateActors(),
    filmDescription,
    shortDescription: getShortDescription(),
    releaseFilmYear,
    duration: generateDuration(),
    genres: filmGenres,
    mainGenre: filmGenres[0],
    commentsNumber,
    comments: generateComments(commentsNumber),
    releaseDate: generateReleaseDate(releaseFilmYear),
    country: countries[getRandomInteger(0, countries.length - 1)],
    ageRating: generateAgeRating(),
  };
  return film;
};
