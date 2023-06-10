import { Avatar } from '@material-tailwind/react';
import { useAuthContext } from '../context/AuthContext';
import { useBackgroundContext } from '../context/BackgroundContext';

export default function Profile({ img, name }) {
  const { setIsFbActive, setIsAbActive, setIsCsActive } = useAuthContext();
  const { setPrompt } = useBackgroundContext();
  return (
    // 임시 active 초기화 button
    <div
      onClick={() => {
        setIsFbActive(false);
        setIsAbActive(true);
        setIsCsActive(false);
        setPrompt({ message: '', buttons: [] });
      }}
    >
      <Avatar src={img} alt="avatar" size="md" variant="circular" />
      <p className="pt-2 text-xs font-bold">{name}</p>
    </div>
  );
}
