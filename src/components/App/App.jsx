// import { useState } from 'react';
import './App.css';
import 'modern-normalize';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';
import { useEffect, useState } from 'react';

const App = () => {
  const start = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedbacks, setFeedbacks] = useState(() => {
    const feedbackStatistic = window.localStorage.getItem('feedbackStatistic');
    return JSON.parse(feedbackStatistic) ?? start;
  });

  useEffect(() => {
    localStorage.setItem('feedbackStatistic', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    feedbackType !== 'resetAll'
      ? setFeedbacks({
          ...feedbacks,
          [feedbackType]: feedbacks[feedbackType] + 1,
        })
      : setFeedbacks({
          good: 0,
          neutral: 0,
          bad: 0,
        });
  }
  return (
    <div className="container">
      <Description />
      <Options
        options={['good', 'neutral', 'bad']}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback ? (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
