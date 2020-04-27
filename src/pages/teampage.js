import React from 'react';
import TeamMemberInfo from '../components/TeamMemberInfo';

export default function TeamPage() {
  // team member info list
  const teamMembers = [
    {
      img: 'https://i.ibb.co/cNtktWF/profile.jpg',
      name: 'Jonathan Picazo',
      title: 'Team Lead',
      linkedin: 'https://www.linkedin.com/in/macjabeth/',
      github: 'https://github.com/macjabeth',
    },
    {
      img: 'https://i.ibb.co/yqZpTgq/T4-JUEB3-ME-UJ11-F1-S13-799843608d4e-512.png',
      name: 'Bobby Hall',
      title: 'Team Lead',
      linkedin: 'https://www.linkedin.com/in/bobby-hall-jr-339091143/',
      github: 'https://github.com/bobbyhalljr',
    },
    {
      img: 'https://i.ibb.co/WfqQd49/T4-JUEB3-ME-UL03-FJADB-b54ed5bc71f5-512.png',
      name: 'Tyler Quinn',
      title: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/tyler-quinn-b78a41195/',
      github: 'https://github.com/Bangstry',
    },
    {
      img: 'https://i.ibb.co/f0tsXRk/T4-JUEB3-ME-UJG8-RLWKG-3766d295008c-512.png',
      name: 'Zachary Peasley',
      title: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/zachary-peasley-b8b057194/',
      github: 'https://github.com/zpallday',
    },
    {
      img: 'https://i.ibb.co/9bMB6H5/T4-JUEB3-ME-UHV013-MQF-3a9d77644b52-512.jpg',
      name: 'Jarvise Billups-Brown',
      title: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/jarvise-billups-brown-a41a44172/',
      github: 'https://github.com/Fullmetal235',
    },
    {
      img:
        'https://i.ibb.co/K7hpHWQ/5513859-s-400-u-052da10ccf63aee78fa180c37508b858dd63bf8c-v-4.jpg',
      name: 'Corey Gumbs',
      title: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/coreygumbs/',
      github: 'https://github.com/CoreyGumbs',
    },
    {
      img:
        'https://i.ibb.co/g4QFsM8/24205051-s-460-u-d408dd53d0177e38912d88fc92e0f5f978be47dc-v-4.png',
      name: 'Erica Ingram',
      title: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/aquocotrans/',
      github: 'https://github.com/evoingram',
    },
    {
      img:
        'https://i.ibb.co/vmZRsdT/29408647-s-400-u-0d3235b6c77700524e2c5ac60c99049153f8d7f1-v-4.jpg',
      name: 'Roberto D. Banbanaste',
      title: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/roberto-banbanaste-2a1627132/',
      github: 'https://github.com/Banbanaste',
    },
    {
      img:
        'https://i.ibb.co/5j1f2Cm/49458951-s-460-u-324e01b65df650dc68c8d1d4c2e7570fb597eecc-v-4.jpg',
      name: 'Sierra Curtis',
      title: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/sierra-curtis/',
      github: 'https://github.com/scurtis6',
    },
    {
      img: 'https://i.ibb.co/7yNvSFZ/57115535-s-460-v-4.png',
      name: 'Tristan Depew',
      title: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/tristan-depew-60a2b28/',
      github: 'https://github.com/tadepew',
    },
    {
      img: 'https://i.ibb.co/XDpNQJz/T4-JUEB3-ME-UHUR873-EV-d88881406d1d-512.jpg',
      name: 'Marlon Raskin',
      title: 'iOS Developer',
      linkedin: 'https://www.linkedin.com/in/marlon-raskin/',
      github: 'https://github.com/marlonjames71',
    },
    {
      img: 'https://i.ibb.co/0Xfz8G3/T4-JUEB3-ME-UHF67-A9-T9-a3fb05aba2cd-512.jpg',
      name: 'Michael Redig',
      title: 'iOS Developer',
      linkedin: 'http://www.linkedin.com/in/michael-redig',
      github: 'https://github.com/mredig',
    },
    {
      img:
        'https://i.ibb.co/XVRh6qJ/0-e-1591833600-v-beta-t-ae-Ox-Dwuq-Cwuta-Tfs9ew-Gm-Gg-BVYb-FJKRXbo-FKmrvr-Ys-E.jpg',
      name: 'Chad Rutherford',
      title: 'iOS Developer',
      linkedin: 'https://www.linkedin.com/in/chadarutherford/',
      github: 'https://github.com/chadarutherford',
    },
    {
      img: 'https://i.ibb.co/D78c7Jp/T4-JUEB3-ME-UJWG6-UZG8-b02f88fab9ce-512.jpg',
      name: 'Tyler Nishida',
      title: 'UX Designer',
      linkedin: 'https://www.linkedin.com/in/tyler-nishida/',
      github: 'https://github.com/tylernishida',
    },
    {
      img: 'https://i.ibb.co/vLwBkbX/T4-JUEB3-ME-UGVBY5-QK0-0322eb799fbf-512.jpg',
      name: 'Emily Arias',
      title: 'UX Designer',
      linkedin: 'https://www.linkedin.com/in/emily-arias-921924181/',
      github: 'https://github.com/Ehuntwork',
    },
  ];

  return (
    // container
    <div className="container mx-auto">
      <h2 className="text-4xl text-center font-sembold text-black-600" id="team">
        Team
      </h2>

      <div className="flex flex-wrap justify-center">
        {teamMembers.map((mem) => (
          <TeamMemberInfo
            img={mem.img}
            name={mem.name}
            title={mem.title}
            linkedin={mem.linkedin}
            github={mem.github}
          />
        ))}
      </div>
    </div>
  );
}
