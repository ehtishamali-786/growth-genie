"use client";

import { useState } from 'react';
import { Tab } from '@headlessui/react';
import  NewOutput  from "./NewOutput";
import  History  from "./history";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const OutputTab = () => {
  let [categories] = useState({
    NewOutput: <NewOutput />,
    History: <History />,
    
  });

  return (
    <div>
   
      <Tab.Group>
        <Tab.List className="flex gap-8 border-b-2 border-[#F6F7F9]">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  ' text-[#101010] text-[16px] font-[400] py-2 ',
                  selected
                    ? 'text-[#101010] text-[16px] font-[500] border-b-2 border-[#0070F4]'
                    : 'text-[#101010] text-[16px] font-[400] '
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((content, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                ' bg-white pt-2',
              )}
            >
              {content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default OutputTab;
