import { useBackgroundContext } from "../context/BackgroundContext";

export function usePrompt() {

    const {setPrompt} = useBackgroundContext();
    const clearPromptMsg = time => {
      setTimeout(() => {
        setPrompt({ message: '', buttons: [] });
      }, time);
    };

    const prompt = (message, buttons) => {
        setPrompt({message: message, buttons: buttons})
    }
    return {
        clearPromptMsg,
        prompt,
      };
}