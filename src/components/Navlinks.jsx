import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'products', text: 'products' },
];

const Navlinks = () => {
  return (
    <>
      {links.map(link => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink className="capitalize text-xl" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default Navlinks;
