const con = "beer";

const contacts = {
  'А': [
    {
      name: 'Александр',
      surname: 'Хекслетович',
    },
    {
      name: 'Андрей',
      surname: 'Верстальщиков',
    },
    {
      name: 'Артём',
      surname: 'Джаваскриптов',
    },
  ],
  'Б': [
    {
      name: 'Бахтияр',
      surname: 'Ученичников',
    },
    {
      name: 'Борис',
      surname: 'Рубинов',
    },
  ],
  'В': [
    {
      name: 'Вениамин',
      surname: 'Редакторович',
    },
  ],
  'Г': [],
  'Д': [
    {
      name: 'Джедай',
      surname: 'Падаванов',
    },
  ],
}
console.log(contacts.А[0].name);

/*const filePath = `${process.cwd()}/index.pug`;
const settings = {
  pretty: true,
  con,
}*/