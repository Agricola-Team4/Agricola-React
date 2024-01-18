import   {takeAction} from '../api/agricola';
export async function basicAction(actionId) {
    await takeAction(pid, actionId,1);

    queryClient.invalidateQueries(['actionBoard']);
    queryClient.invalidateQueries(['farmBoard', pid]);
    queryClient.invalidateQueries(['resource', pid]);

    checkIsEndRound();
  };
