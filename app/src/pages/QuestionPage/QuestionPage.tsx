import Log from '@/utils/log'
import Button from '@/components/Button'

import { useParams } from 'react-router-dom'
import { useQuestionList } from '@/hooks/useQuestion'
import { useState, useEffect } from 'react'
import { getImage } from '@/services/helper/helper.rest.ts'

export default function QuestionPage() {
  const log = Log("QuestionPage");
  const { id: quizId } = useParams();
  const { data: questions_data } = useQuestionList(quizId);
  const [answers, setAnswers] = useState([]);

  log.debug(JSON.stringify(questions_data));

  useEffect(() => {
    if (!questions_data) return;
    const arr = new Array(questions_data.length);
    setAnswers(arr);
  }, [questions_data]);

  return (
    <div className="flex items-center flex-col w-[60%] max-w-[46rem] mx-auto my-6">
      {questions_data?.map((item, index) => (
        <div key={index} className="w-[100%]">
          <p className="max_sm:text-lg sm:text-2xl tracking-wide font-semibold mb-2">Question {index + 1}</p>
          <p className="max_sm:text-[14px] sm:text-xl font-light">{item.description}</p>
          {item.imageUrl && <img src={getImage({ imageUrl: item.imageUrl })} alt={item.imageUrl}/>}
          <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 max_sm:flex max_sm:flex-col gap-4 w-[100%] py-2">
            {item.options.map((option, indexes) => (
              <div key={indexes} className="w-[100%] py-1">
                <Button
                  variant={"nofill"}
                  label={
                    `${String.fromCharCode('A'.charCodeAt(0) + indexes)}. ${option}`
                  }
                  color="text-default-alt"
                  style="text-[12px] font-thin max-sm:min-h-12 sm:min-h-14 rounded-none"
                  onClick={() => {
                    log.debug(`indexes ${index}, ${indexes}`);
                    
                    const arr = answers;
                    arr[index] = indexes;
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
  ); 
}
