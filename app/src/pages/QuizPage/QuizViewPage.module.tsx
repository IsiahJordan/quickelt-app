import Log from '@/utils/log'
import Icon from '@/components/Icon'
import Badge from '@/components/Badge'
import Button from '@/components/Button'

import { useState, useEffect } from 'react'
import { useQuiz, useTags } from '@/hooks/useQuiz'
import { getImage } from  '@/services/helper/helper.api.ts'
import useNav from '@/hooks/useNav'

export default function QuizViewPage({ quizId }: { quizId: string }) {
  const log = Log("QuizViewPage");
  log.debug(quizId);
  
  const { goBack } = useNav();
  const { data: quiz_data, isLoading, error } = useQuiz(quizId);

  if (isLoading) {
    return <>Waiting...</>;
  }
  else if (error) {
    return <>Failed</>;
  }

  log.debug(JSON.stringify(quiz_data));

  const handleSubmit = () => {

  };
  
  return (
    <div className="fixed inset-0 z-50 bg-background/60">
      <div className="w-full h-[40vh] sm:px-18 sm:py-6 gap-y-2 bg-background overflow-auto">
        <div className="cursor-pointer float-right" onClick={() => goBack()}>
          <Icon variant="exit" color="text-default"/>
        </div>
        <br/>
        <div className="flex justify-center items-center gap-x-16 mr-8">
          {<img
            src={getImage({imageUrl: quiz_data.image_url })}
            alt={quiz_data.name}
            className="image-quiz"
          />}
          <div className="text-default h-[24vh]">
            <p className="font-semibold text-4xl">{quiz_data.name}</p>
            <p className="text-2xl font-[200]">Author by {quiz_data.metadata.author}</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-background-alt rounded-t-[25px] h-[100%] py-12 px-18 flex max-sm:flex-col">
        <div className="flex-[0.5]">
          <p className="mb-2 text-alt/30 text-2xl">Best Score: 40/100</p>
          <p className="my-1 text-2xl font-medium">About the quiz</p>
          <div className="tracking-wide text-md h-[35%]">
            {quiz_data.metadata.description}
          </div>
          <div className="flex w-[90%] gap-x-2 h-14">
            <Button
              variant="primary"
              label="Take Exam"
              style="flex-[1.5]"
              onClick={handleSubmit}
            /> 
            <Button
              variant="accent"
              label={<Icon variant="message" color="text-default"/>}
              style="flex-[0.2] flex justify-center items-center"
              onClick={handleSubmit}
            /> 
          </div>
        </div>
        <div className="flex-1 ml-16">
          <div className="cursor-pointer float-right opacity-40" onClick={() => log.debug("test")}>
            <Icon variant="noheart" color="text-alt"/>
          </div>
          <br className="mb-3"/>
          <div className="text-2xl font-medium my-2">
            Attempts
          </div>
        </div>
      </div>
    </div>
  );
}
