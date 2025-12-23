import InputBox from '@/components/InputBox'
import Badge from '@/components/Badge'
import Icon from '@/components/Icon'
import Log from '@/utils/log'

import { useState, useEffect } from 'react'
import { useMyQuizList } from '@/hooks/useCreate'
import { getImage } from  '@/services/helper/helper.api.ts'
import useNav from '@/hooks/useNav';
import TableCard from '@/components/TableCard'

export default function MyQuizPage() {
  const log = Log('MyQuizPage');

  const [input, setInput] = useState('');
  const quizMutation = useMyQuizList();
  const { setQuery } = useNav();

  useEffect(() => {
    quizMutation.mutate();
    log.debug(quizMutation.data);
  }, []);

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
          {<img
            src={getImage({imageUrl: quiz.image_url })}
            alt={quiz.image_url}
          /> ?? <Icon variant="image" color="text-default" />}
          <h2>{quiz.name ?? 'Not Applicable'}</h2>
          <h2>{quiz.metadata.author ?? 'Unknown'}</h2>
        </TableCard>
      ))}
    </div>
  )
}

