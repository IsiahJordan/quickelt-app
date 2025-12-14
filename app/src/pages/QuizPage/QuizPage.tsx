import InputBox from '@/components/InputBox'
import Badge from '@/components/Badge'
import Icon from '@/components/Icon'
import Log from '@/utils/log'

import { useState } from 'react'
import { useQuestionList } from '@/hooks/useQuestion'

export default function QuizPage() {
  const tags = ["Science", "Computer Science", "Art"];
  const log = Log("QuizPage");
  const [input, setInput] = useState<string>("");
  const { data, isLoading, error } = useQuestionList("q1"); 

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error...</h1>
  }
  
  data.forEach(item => {
    log.debug(item.quizId);
  })

  return (
    <div className="flex flex-col sm:px-18 sm:py-6 gap-y-2">
      <h1 className="text-default">Quizzes</h1>
      <div className="sm:max-w-[40%]">
        <InputBox 
          variant="outline"
          type="search"
          placeholder="Search..."
          rightChild={<Icon variant="search"/>}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-x-2 mt-1">
        {tags.map((item, index) => (
          <div key={index}>
            <Badge
              variant="inactive"
              label={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
