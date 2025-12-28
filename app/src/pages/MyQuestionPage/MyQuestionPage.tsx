import Log from '@/utils/log'
import Button from '@/components/Button'
import InputArea from '@/components/InputArea'
import InputBox from '@/components/InputBox'
import useNav from '@/hooks/useNav'

import { useParams } from 'react-router-dom'
import { useQuestionList, useQuestionCreate } from '@/hooks/useQuestion'
import { useState, useEffect } from 'react'
import { getImage } from '@/services/helper/helper.rest.ts'

export default function MyQuestionPage() {
  const log = Log("MyQuestionPage");
  const { id: quizId } = useParams();
  log.debug(quizId);

  const { data: questions_data } = useQuestionList(quizId);
  const createMutation = useQuestionCreate();

  const { goBack } = useNav();
  const [inputArray, setInputArray] = useState<Array<string>>(Array(2));
  const [optionArray, setOptionArray] = useState<Array<string>>(Array(4));
  const [answer, setAnswer] = useState<number>(-1);

  log.debug(`question data: ${JSON.stringify(questions_data)}`);

  const handleSubmit = () => {
    log.info("submmited");
    
    if (answer === -1) {
      log.danger("answer is not set");
      return;
    }
    else if (!optionArray[0] || !optionArray[1] || !optionArray[2] || !optionArray[3]) {
      log.debug(`${optionArray[0]} ${optionArray[1]} ${optionArray[2]} ${optionArray[3]}`);
      log.danger("option wasn't set");
    }
    else if (!inputArray[1]){
      log.danger("question wasn't described");
    }

    createMutation.mutate({
      quizId: quizId,
      description: inputArray[1],
      options: optionArray,
      answer: answer,
      imageUrl: undefined
    });
  };

  return (
    <div className="">
      <div className="flex flex-col items-center w-full left-1/2 transform absolute -translate-x-1/2 mt-12">
        {questions_data?.map((item, index) => (
          <div key={index} className="w-[100%] max-w-[46rem]">
            <p className="max_sm:text-lg sm:text-2xl tracking-wide font-semibold mb-2">Question {index + 1}</p>
            <p className="max_sm:text-[14px] sm:text-xl font-light">{item.description}</p>
            {item.imageUrl && <img src={getImage({ imageUrl: item.imageUrl })} alt={item.imageUrl}/>}
            <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 max_sm:flex max_sm:flex-col gap-4 w-[100%] py-3">
              {item.options.map((option, indexes) => (
                <div key={indexes} className="w-[100%] py-1">
                  <Button
                    variant={item.answer === indexes ? "accent" : "nofill"}
                    label={
                      `${String.fromCharCode('A'.charCodeAt(0) + indexes)}. ${option}`
                    }
                    color={item.answer === indexes ? "text-default" : "text-default-alt"}
                    style="text-[12px] font-thin max-sm:min-h-12 sm:min-h-16 rounded-none"
                    onClick={() => {
                    }}
                  />
                </div> 
              ))}
            </div>
          </div>
        ))} 
      </div>
      <div className="
        px-3 py-10 right-0 w-104 fixed 
        max-sm:invisible flex flex-col 
        border-l-1 border-background/10 
        h-full overflow-y-scroll
      ">
        <p className="text-[22px] font-[600] mb-3">
          Create Question
        </p>
        <div className="w-full mb-4 mt-2">
          <label className="label mt-2">Description</label>
          <InputArea
            placeholder="Write your description..."
            scale={1.2}
            maxlength={300}
            style="w-full px-2"
            onChange={(e) => {
              const array = inputArray;
              inputArray[1] = e.target.value;
              setInputArray(array);
            }}
          />
        </div>
        <div className="">
          <p className="text-xl font-thin mb-0">Options - Answer: {
            answer >= 0 ? 
            String.fromCharCode('A'.charCodeAt(0) + answer) :
            "no answer chosen"
          } </p>
          <p className="text-sm mb-2 font-lato">click the letter to select answer</p>
          <div className="flex items-center py-2">
            <p className="font-semibold inline text-2xl mr-2 cursor-pointer" onClick={() => setAnswer(0)}>A.</p>
            <InputBox
              variant={"light"}
              type={"text"}
              color={"text-alt"}
              placeholder={"Write your options"}
              onChange={(e) => {
                const array = optionArray;
                array[0] = e.target.value;
                setOptionArray(array);
              }}
              style="inline w-full"
            />
          </div>
          <div className="flex items-center py-2">
            <p className="font-semibold inline text-2xl mr-2 cursor-pointer" onClick={() => setAnswer(1)}>B.</p>
            <InputBox
              variant={"light"}
              type={"text"}
              color={"text-alt"}
              placeholder={"Write your options"}
              onChange={(e) => {
                const array = optionArray;
                array[1] = e.target.value;
                setOptionArray(array);
              }}
              style="inline w-full"
            />
          </div>
          <div className="flex items-center py-2">
            <p className="font-semibold inline text-2xl mr-2 cursor-pointer" onClick={() => setAnswer(2)}>C.</p>
            <InputBox
              variant={"light"}
              type={"text"}
              color={"text-alt"}
              placeholder={"Write your options"}
              onChange={(e) => {
                const array = optionArray;
                array[2] = e.target.value;
                setOptionArray(array);
              }}
              style="inline w-full"
            />
          </div>
          <div className="flex items-center py-2">
            <p className="font-semibold inline text-2xl mr-2 cursor-pointer" onClick={() => setAnswer(3)}>D.</p>
            <InputBox
              variant={"light"}
              type={"text"}
              color={"text-alt"}
              placeholder={"Write your options"}
              onChange={(e) => {
                const array = optionArray;
                array[3] = e.target.value;
                setOptionrray(array);
              }}
              style="inline w-full"
            />
          </div>
        </div>
        <Button
          variant="primary"
          label="Update Quiz"
          style="mb-[9px] mt-4"
          onClick={handleSubmit}
        /> 
        <Button
          variant="secondary"
          label="Return to Quiz"
          style="mb-[9px]"
          onClick={() => goTo(`/create/quiz`)}
        /> 
      </div>
    </div>
  ); 
}
