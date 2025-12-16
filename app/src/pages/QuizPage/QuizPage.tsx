import InputBox from '@/components/InputBox'
import Badge from '@/components/Badge'
import Icon from '@/components/Icon'
import Log from '@/utils/log'

import { useState, useEffect } from 'react'
import { useQuizList, useTagList } from '@/hooks/useQuiz'
import { getImage } from  '@/services/helper/helper.api.ts'
import TableCard from '@/components/TableCard'

export default function QuizPage() {
  const log = Log('QuizPage');

  const [input, setInput] = useState('');
  const [tags, setTags] = useState<Record<string, 'active' | 'inactive'>>({});

  const { data: quiz_data } = useQuizList(0, 10);
  const { data: tag_data } = useTagList();

  useEffect(() => {
    if (!tag_data) return;

    const nextTags: Record<string, 'active' | 'inactive'> = {}
    
    for (const tag of tag_data) {
      nextTags[tag.name] = 'inactive';
    }

    setTags(nextTags);
  }, [tag_data])

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

      <div className="flex gap-x-2 mt-1">
        {Object.keys(tags).map((key) => (
          <Badge
            key={key}
            variant={tags[key]}
            label={key}
            onClick={() =>
              setTags((prev) => ({
                ...prev,
                [key]: prev[key] === 'inactive' ? 'active' : 'inactive',
              }))
            }
          />
        ))}
      </div>

      {quiz_data?.map((quiz) => (
        <TableCard
          key={quiz.id}
          styles={[
            'sm:w-24 max-sm:w-12 mt-8 mx-2',
            'max-sm:w-[35vw] sm:w-[40vw] mx-2',
            'max-sm:w-[20vw] sm:flex-1',
          ]}
          onClick={() => log.debug(quiz.id)}
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

