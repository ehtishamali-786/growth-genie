"use client";

import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Draft from '../pages/draft';
import Scheduled from '../pages/scheduled';
import Published from '../pages/published';
import Insight from '../pages/insight';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MyPosts = () => {
  let [categories] = useState({
    Draft: <Draft />,
    Scheduled: <Scheduled />,
    Published: <Published />,
    Insight: <Insight />,
  });

  return (
    <div>
      {/* <div className="flex justify-between items-center mb-4">
        <h1 className="text-[24px] font-[500] text-[#101010]">My Posts</h1>
        <Image src={Upgrade} width={390} height={40} alt="upgrade" />
      </div> */}
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

export default MyPosts;
