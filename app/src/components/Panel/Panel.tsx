import { PanelProps } from '@/services/panel.d.ts'
import Button from '@/components/Button/'
import Icon from '@/components/Icon'

import { useState } from 'react'

export default function Panel({ title, list, label, style="", onClick }: PanelProps) {
  const classes = style + " w-[10%] sm:min-h-24";
  const [selected, setSelected] = useState(0);

  return (
    <div className={classes}>
      <p className="text-2xl font-medium tracker-wider">{title}</p>
      <div className="sm:min-h-52 mt-2"> 
        {list.map((item, index) => (
          <p className={`
            text-lg 
            tracker-wider 
            font-extralight 
            flex gap-x-2
            items-center
            ${selected === index ? "text-green-500": "text-red-500"} 
            cursor-pointer mb-1`}

            onClick={() => { 
              setSelected(index);
            }}
          >
            {item}
            {selected == index && <Icon variant="target" color="text-accent"/>}
          </p>
        ))}
      </div>
      <Button
        variant="accent"
        label={label}
        onClick={onClick}
      />
    </div>
  );
}
