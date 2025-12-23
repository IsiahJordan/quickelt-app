import Log from '@/utils/log'
import Button from '@/components/Button'
import Panel from '@/components/Panel'
import useNav from '@/hooks/useNav'

import { useParams } from 'react-router-dom'
import { useQuestionList } from '@/hooks/useQuestion'
import { useState, useEffect } from 'react'
import { getImage } from '@/services/helper/helper.rest.ts'
import { useAnswerList } from '@/hooks/useAnswer'

export default function QuestionPage() {
  const log = Log("QuestionPage");
  const { id: quizId } = useParams();
  const { data: questions_data } = useQuestionList(quizId);
  const [answers, setAnswers] = useState([]);
  const answerMutation = useAnswerList();
  const { goBack } = useNav();

  log.debug(JSON.stringify(questions_data));

  useEffect(() => {
    if (!questions_data) return;
    const arr = new Array(questions_data.length).fill(-1);
    setAnswers(arr);
  }, [questions_data]);

  const handleSubmit = () => {
    log.debug("submitted"); 
    const isCompleted = answers.some(item => item === -1); 
    log.debug(JSON.stringify(answers));

    if (isCompleted) {
      log.warn("missing answers");
      return;
    }

    const score = 0;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === questions_data[i].answer) {
        score++;
      }
    }
    
    // send to answer api
    const payload = {
      questions: questions_data,
      answers: answers,
      score: score,
      total: answers.length
    };
    
    answerMutation.mutate(payload);
    goBack();
  };

  return (
    <div className="my-12">
      <div className="flex flex-col items-center flex-1 left-1/2 transform absolute -translate-x-1/2">
        {questions_data?.map((item, index) => (
          <div key={index} className="w-[100%] max-w-[46rem]">
            <p className="max_sm:text-lg sm:text-2xl tracking-wide font-semibold mb-2">Question {index + 1}</p>
            <p className="max_sm:text-[14px] sm:text-xl font-light">{item.description}</p>
            {item.imageUrl && <img src={getImage({ imageUrl: item.imageUrl })} alt={item.imageUrl}/>}
            <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 max_sm:flex max_sm:flex-col gap-4 w-[100%] py-2">
              {item.options.map((option, indexes) => (
                <div key={indexes} className="w-[100%] py-1">
                  <Button
                    variant={answers[index] === indexes ? "accent" : "nofill"}
                    label={
                      `${String.fromCharCode('A'.charCodeAt(0) + indexes)}. ${option}`
                    }
                    color={answers[index] === indexes ? "text-default" : "text-default-alt"}
                    style="text-[12px] font-thin max-sm:min-h-12 sm:min-h-14 rounded-none"
                    onClick={() => {
                      log.debug(`indexes ${index}, ${indexes}`);
                      
                      const arr = answers;
                      arr[index] = String(indexes);
                      setAnswers(arr);

                      log.debug(arr);
                    }}
                  />
                </div> 
              ))}
            </div>
          </div>
        ))} 
      </div>
      <div className="px-72 right-0 w-64 fixed max-sm:invisible">
        <Panel
          title='Quiz List'
          list={[
            "Question 1", 
            "Question 2"
          ]}
          style="min-w-32"
          label="Finished"
          onClick={handleSubmit}
        />
      </div>
    </div>
  ); 
}
