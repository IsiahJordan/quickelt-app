import InputBox from '@/components/InputBox'
import Badge from '@/components/Badge'
import Icon from '@/components/Icon'
import Log from '@/utils/log'

import { useState, useEffect } from 'react'
import { useQuizList } from '@/hooks/useQuiz'
import TableCard from '@/components/TableCard'

export default function QuizPage() {
  const tags = ["Science", "Computer Science", "Art"];
  const log = Log("QuizPage");
  const [input, setInput] = useState<string>("");
  const [quizArr, setQuizArr] = useState([]);
  const { data, isLoading, error } = useQuizList(1, 10); 

  useEffect(() => {
    if (!data) return;
    const arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(
          <TableCard
            key={data[i].id}
            styles={[
              'sm:w-24 max-sm:w-12 mt-8 mx-2',
              'max-sm:w-[35vw] sm:w-[40vw] mx-2',
              'max-sm:w-[20vw] sm:flex-1',
            ]}
            onClick={() => log.debug(data[i].id) }
          >
            <Icon variant='image' color='text-default'/>
            <h2>Computer Science</h2>
            <h2>Isiah Jordan</h2>
          </TableCard>
      );
    }
    setQuizArr(arr);
  }, [data]);

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error...</h1>
  }


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
      {quizArr}
    </div>
  );
}
