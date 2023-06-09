import { Avatar } from '@material-tailwind/react';
import { useAuthContext } from '../context/AuthContext';
import { useBackgroundContext } from '../context/BackgroundContext';
import {
  getCalculateScore,
  getRoundArray,
  isRoundEnd,
  periodEnd,
} from '../api/agricola';
import { test, test2 } from '../api/websocket-test';
import { useWebSocketContext } from '../context/WebSocketContext';

export default function Profile({ img, name }) {
  const { setIsFbActive, setIsAbActive, setIsCsActive } = useAuthContext();
  const { setPrompt, openRoundCard } = useBackgroundContext();
  const { socket } = useWebSocketContext();
  return (
    // 임시 active 초기화 button
    <div
      className="text-center"
      onClick={async () => {
        setIsFbActive(false);
        setIsAbActive(true);
        setIsCsActive(false);
        setPrompt({ message: '', buttons: [] });
        openRoundCard();
        // getCalculateScore(1, socket).then(res => console.log(res));

        // periodEnd(socket).then(res => console.log(res));
        // getRoundArray().then(res => console.log(res));
        // const message = {
        //   type: 'get_player_resource',
        //   player_id: 1,
        //   resource_id: 1,
        // };
        // socket.send(JSON.stringify(message));

        // if (ready) send(JSON.stringify(message));
        // console.log(await isRoundEnd());
      }}
    >
      <Avatar src={img} alt="avatar" size="lg" variant="circular" />
      <p className="pt- text-sm font-bold">{name}</p>
    </div>
  );
}
