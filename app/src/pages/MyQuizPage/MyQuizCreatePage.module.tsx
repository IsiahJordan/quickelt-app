import Log from '@/utils/log'
import Icon from '@/components/Icon'
import InputBox from '@/components/InputBox'
import InputArea from '@/components/InputArea'
import Button from '@/components/Button'
import Form from '@/components/Form'

import { useQuiz, useTags, useCreateQuizAccount, useFetchQuizAccount } from '@/hooks/useQuiz'
import { useState } from 'react'
import useNav from '@/hooks/useNav'

export default function MyQuizCreatePage({quizId}) {
  const log = Log("MyQuizCreatePage");

  const { data: quiz_data, isLoading, error } = useQuiz(quizId);
  const [inputArray, setInputArray] = useState<Array<string>>(Array(2));

  const createAttemptMutation = useCreateQuizAccount();
  const fetchAttemptMutation = useFetchQuizAccount();
  const { goTo } = useNav();

  if (isLoading) {
    return <>Waiting...</>;
  }
  else if (error) {
    return <>Failed</>;
  }

  const handleSubmit = () => {
    
  };

  log.debug(JSON.stringify(quiz_data));

  return (
    <div className="fixed flex inset-0 z-50 bg-background">
      <div className="flex-1 flex-col text-default bg-background sm:px-18 sm:py-16">
        <div className="flex items-center">
          <button className="cursor-pointer" type="button" onClick={() => log.debug("add image")}>
            <Icon variant="addimage" color="text-default"/>
          </button>
          <div className="text-default h-[24vh] pb-8 flex flex-col sm:ml-[54px] justify-center">
            <p className="font-semibold text-[42px]">{quiz_data.name}</p>
            <p className="text-2xl font-[200]">Author by {quiz_data.metadata.author}</p>
          </div>
        </div>
        <div className="font-lato flex ml-4 mt-2">
          <div className="flex-1 flex flex-col">
            <p className="font-medium text-2xl">
              Quiz Status
            </p>
            <ul className="list-none text-lg font-thin my-4 ">
              <li>
                Attempts <p className="inline ml-4">{quiz_data.attempts ? quiz_data.attempts : "0"}</p>
              </li>
              <li>
                Average  <p className="inline ml-6">{quiz_data.average ? quiz_data.average / quiz_data.average.length() : "0"}</p>
              </li>
              <li>
                Updated <p className="inline ml-5">{quiz_data.updated_at ? quiz_data.updated_at : "None"}</p>
              </li>
              <li>
                Total <p className="inline ml-12">{quiz_data.total ? quiz_data.total : "0"}</p>
              </li>
              <li>
                Created <p className="inline ml-5">{quiz_data.created_at}</p>
              </li>
              <li>
                Timed <p className="inline ml-9">{quiz_data.metadata.duration} mins</p>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col">
            <p className="font-medium text-2xl">
              Quiz Profile
            </p>
            <ul className="list-none text-lg font-thin my-4">
              <li>
                Feedback <p className="inline ml-4">{quiz_data.feedback ? quiz_data.feedback / quiz_data.feedback.length() : "0"}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-[0.5] flex flex-col bg-background-alt sm:py-3 sm:px-4">
        <div>
          <div className="cursor-pointer float-right" onClick={() => goBack()}>
            <Icon variant="exit" color="text-alt"/>
          </div>
          <p className="text-[32px] font-[500] pt-10">
            Create your quiz
          </p>
          <br/>
          <Form
            variant="small"
            labels={["Title"]}
            types={["text"]}
            bottomChild={(
              <>
                <div className="w-full mb-4">
                  <label className="label">Description</label>
                  <InputArea
                    placeholder={quiz_data.metadata.description}
                    scale={1.2}
                    maxlength={300}
                    style="w-full px-6"
                  />
                </div>
                <Button
                  variant="primary"
                  label="Update Quiz"
                  style="mb-[9px]"
                  onClick={handleSubmit}
                /> 
                <Button
                  variant="secondary"
                  label="View Question"
                  style="mb-[9px]"
                  onClick={() => goTo(`/create/question/id=${quizId}`)}
                /> 
              </>
            )}
            setter={setInputArray}
            style=""
          />
        </div> 
      </div>
    </div>
  );
}
