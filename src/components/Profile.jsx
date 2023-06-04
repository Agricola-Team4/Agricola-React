import { Avatar } from '@material-tailwind/react';

export default function Profile({ img, name }) {
  return (
    <>
      <Avatar src={img} alt="avatar" size="md" variant="circular" />
      <p className="pt-2 text-xs font-bold">{name}</p>
    </>
  );
}
