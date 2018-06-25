'use strict'

const express = require('express');
const _ = require('lodash');
const app = express();
const PORT = 3000;

const classes = ['ocelot', 'secret', 'seagal'];

const students = [
  { github: 'akibaki', className: 'seagal' },
  { github: 'juditcsokay', className: 'seagal' },
  { github: 'arvisura87', className: 'seagal' },
  { github: 'blueilla', className: 'seagal' },
  { github: 'miroszlv', className: 'seagal' },
  { github: 'krisztiankassai', className: 'seagal' },
  { github: 'kmarkus88', className: 'seagal' },
  { github: 'boldizsar4', className: 'seagal' },
  { github: 'zoldzebra', className: 'seagal' },
  { github: 'lugosidomotor', className: 'seagal' },
  { github: 'Dzsodie', className: 'seagal' },
  { github: 'maraevelin', className: 'seagal' },
  { github: 'matyoo111', className: 'seagal' },
  { github: 'attila-m', className: 'seagal' },
  { github: 'nagyfranciska', className: 'seagal' },
  { github: 'NLily22', className: 'seagal' },
  { github: 'ronai22', className: 'seagal' },
  { github: 'AdmiralFox', className: 'seagal' },
  { github: 'pitesy', className: 'seagal' },
  { github: 'JudgeFudge911', className: 'seagal' },

  { github: 'exitlol', className: 'secret' },
  { github: 'tundecsapo', className: 'secret' },
  { github: 'matecserven', className: 'secret' },
  { github: 'cszoltan', className: 'secret' },
  { github: 'gonbazsolt', className: 'secret' },
  { github: 'jsrath', className: 'secret' },
  { github: 'DianaKiss', className: 'secret' },
  { github: 'deeperdesign', className: 'secret' },
  { github: 'adam-kovacs', className: 'secret' },
  { github: 'lantos14', className: 'secret' },
  { github: 'paizsvirag', className: 'secret' },
  { github: 'LeventePoth', className: 'secret' },
  { github: 'TatianaPovalyaeva', className: 'secret' },
  { github: 'norlandia', className: 'secret' },
  { github: 'mr-jester', className: 'secret' },
  { github: 'MartonSkach', className: 'secret' },
  { github: 'Sorsi', className: 'secret' },
  { github: 'ks-ampersand', className: 'secret' },
  { github: 'vrsttl', className: 'secret' },
  { github: 'DownTownScarf7', className: 'secret' },

  { github: 'AlexThanasis', className: 'ocelot' },
  { github: 'MrBB7', className: 'ocelot' },
  { github: 'KingaBernhardt', className: 'ocelot' },
  { github: 'LiliBodor', className: 'ocelot' },
  { github: 'elekamate', className: 'ocelot' },
  { github: 'zynori', className: 'ocelot' },
  { github: 'jakabus', className: 'ocelot' },
  { github: 'Lokhajtasosmokus', className: 'ocelot' },
  { github: 'Zoznyak', className: 'ocelot' },
  { github: 'Plonee', className: 'ocelot' },
  { github: 'kovacsattila256', className: 'ocelot' },
  { github: 'kurtipeter', className: 'ocelot' },
  { github: 'lutoskin', className: 'ocelot' },
  { github: 'Trueszky', className: 'ocelot' },
  { github: 'Andras89', className: 'ocelot' },
  { github: 'szentgabor', className: 'ocelot' },
  { github: 'nikidobos', className: 'ocelot' },
]

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('classes', {
    classes,
  });
});

app.get('/classes/:className', (req, res) => {
  let classStudents = students.filter((student) => {
    return student.className === req.params.className
  });
  if (req.query.sortBy) {
    classStudents = _.sortBy(
      classStudents,
      [user => user.github.toLowerCase()],
      ['asc'],
    );
  }

  res.render('classProfile', {
    className: req.params.className,
    students: classStudents,
  });
});

app.listen(PORT, () => {
  console.log(`Up and running on port ${PORT}`);
});