import {
  BsEmojiSmile,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiSmileUpsideDown,
} from 'react-icons/bs';
import { MdOutlineEmojiSymbols } from 'react-icons/md';
import css from './Feedback.module.css';
const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedbackContainer}>
      <p>
        <BsEmojiSmile className={css.iconGood} size="12" />
        Good: {good}
      </p>
      <p>
        <BsEmojiNeutral className={css.iconNeutral} size="12" />
        Neutral: {neutral}
      </p>
      <p>
        <BsEmojiFrown className={css.iconBad} size="12" />
        Bad: {bad}
      </p>
      <p>
        <MdOutlineEmojiSymbols className={css.iconTotal} size="12" />
        Total: {totalFeedback}
      </p>
      <p>
        <BsEmojiSmileUpsideDown className={css.iconGood} size="12" />
        Positive feedback: {positiveFeedback}%
      </p>
    </div>
  );
};

export default Feedback;
