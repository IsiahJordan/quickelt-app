import InputBox from '@/components/InputBox'
import Badge from '@/components/Badge'
import Icon from '@/components/Icon'
import Log from '@/utils/log'
import Button from '@/components/Button'

import { useState, useEffect } from 'react'
import { useMyQuizList } from '@/hooks/useCreate'
import { useAccount } from '@/hooks/useAccount'
import { getImage } from  '@/services/helper/helper.api.ts'
import { useCreateQuiz } from '@/hooks/useQuiz'
import useNav from '@/hooks/useNav';
import TableCard from '@/components/TableCard'

export default function MyQuizPage() {
  const log = Log('MyQuizPage');

  const [input, setInput] = useState('');
  const quizMutation = useMyQuizList();
  const accountMutation = useAccount();
  const createMutation = useCreateQuiz();

  useEffect(() => {
    accountMutation.mutate();
    quizMutation.mutate();
    
    log.debug(quizMutation.data);
  }, []);

  const handleCreate = () => {
    log.debug("create called");
    log.debug(JSON.stringify(accountMutation.data.data)); 
    
    createMutation.mutate({
      name: "No Title",
      metadata: {
        author: accountMutation.data.data.email.split("@")[0],
        description: "No Description",
        duration: 60
      }
    });

  };

  return (
    <div className="flex flex-col sm:px-18 sm:py-6 gap-y-2">
      <h1 className="text-default">Quizzes</h1>

      <div className="sm:max-w-[40%]">
        <InputBox
          variant="outline"
          type="search"
          placeholder="Search..."
          rightChild={<Icon variant="search" />}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      
      <div className="sm:max-w-52 max-sm:max-w-46 pt-2">
        <Button
          variant="secondary"
          label={(
            <div className="text-default flex text-lg">
              Create Quiz
              <div className="pt-1 pl-1">
                <Icon variant="add" color="text-default"/>
              </div>
            </div>
          )}
          style="flex items-center sm:h-12 max-sm:h-10 max-sm:text-medium justify-center"
          onClick={handleCreate}
        />
      </div>


      {quizMutation.data?.map((quiz) => (
        <TableCard
          key={quiz.id}
          styles={[
            'sm:w-24 max-sm:w-12 mt-8 mx-2',
            'max-sm:w-[35vw] sm:w-[40vw] mx-2',
            'max-sm:w-[20vw] sm:flex-1',
          ]}
          onClick={() => setQuery({view: quiz.id})}
        >
          { quiz.image_url ?
            <img
            src={getImage({imageUrl: quiz.image_url })}
            alt={quiz.image_url}
          /> : <Icon variant="image" color="text-default" />}
          <h2>{quiz.name ?? 'Not Applicable'}</h2>
          <h2>{quiz.metadata.description ?? 'No Description'}</h2>
        </TableCard>
      ))}
    </div>
  )
}

