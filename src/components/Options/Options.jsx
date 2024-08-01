import clsx from 'clsx';
import css from './Options.module.css';
const Options = ({ options, updateFeedback, totalFeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => {
        return (
          <button
            className={clsx(css.optionBtn, css[option])}
            key={option}
            onClick={() => updateFeedback(option)}
          >
            {option}
          </button>
        );
      })}
      {totalFeedback > 0 && (
        <button
          className={css.optionBtn}
          type="button"
          onClick={() => updateFeedback('resetAll')}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
