import { motion } from 'framer-motion';

export default function ScoreBoard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{ height: `650px`, width: `$1000px` }}
        className="absolute w-fit py-8 px-10 bg-yellow-200 rounded-lg border-8 border-yellow-700 flex justify-center items-center"
      >
        <p>You Win! You Lose!</p>
        <p>Your Score 10</p>
        <p></p>
      </div>
    </motion.div>
  );
}
