import { RadioCard, type RadioCardProps } from '@src/components/RadioCard';
import {
  RiArrowDownSLine,
  RiCalendarTodoLine,
  RiCalendarView,
} from 'react-icons/ri';

interface RadioCardConfigs {
  id: string;
  items: RadioCardProps[];
}

const radioCardConfigs: RadioCardConfigs[] = [
  {
    id: 'weekly',
    items: [
      {
        name: 'options',
        label: 'Weekly',
        cardSize: 'sm',
        value: '0',
        IconFront: RiCalendarView,
      },
      {
        name: 'options',
        label: 'Weekly',
        cardSize: 'md',
        value: '1',
      },
      {
        name: 'options',
        label: 'Weekly',
        cardSize: 'lg',
        value: '2',
        IconBack: RiCalendarView,
      },
      {
        name: 'options',
        label: 'Weekly',
        cardSize: 'lg',
        value: '3',
        IconFront: RiCalendarView,
        IconBack: RiArrowDownSLine,
      },
      {
        name: 'options',
        cardSize: '2xl',
        value: '4',
        Icon: RiCalendarView,
      },
    ],
  },
  {
    id: 'monthly',
    items: [
      {
        name: 'options2',
        label: 'Monthly',
        cardSize: 'sm',
        value: '0',
        defaultChecked: true,
        IconFront: RiCalendarTodoLine,
      },
      {
        name: 'options2',
        label: 'Monthly',
        cardSize: 'md',
        value: '1',
      },
      {
        name: 'options2',
        label: 'Monthly',
        cardSize: 'lg',
        value: '2',
        IconBack: RiCalendarTodoLine,
      },
      {
        name: 'options2',
        label: 'Monthly',
        cardSize: 'lg',
        value: '3',
        IconFront: RiCalendarTodoLine,
        IconBack: RiArrowDownSLine,
      },
      {
        name: 'options2',
        cardSize: '2xl',
        value: '4',
        Icon: RiCalendarTodoLine,
      },
    ],
  },
  {
    id: 'annually',
    items: [
      {
        name: 'options3',
        label: 'Annually',
        disabled: true,
        cardSize: 'sm',
        value: '0',
        IconFront: RiCalendarTodoLine,
      },
      {
        name: 'options3',
        label: 'Annually',
        disabled: true,
        cardSize: 'md',
        value: '1',
      },
      {
        name: 'options3',
        label: 'Annually',
        disabled: true,
        cardSize: 'lg',
        value: '2',
        IconBack: RiCalendarTodoLine,
      },
      {
        name: 'options3',
        label: 'Annually',
        disabled: true,
        cardSize: 'lg',
        value: '3',
        IconFront: RiCalendarTodoLine,
        IconBack: RiArrowDownSLine,
      },
      {
        name: 'options3',
        label: 'Annually',
        cardSize: '2xl',
        disabled: true,
        value: '4',
        Icon: RiCalendarTodoLine,
      },
    ],
  },
];

const RadioCards = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-[200px] w-[320px] md:w-md lg:w-full ml-auto mr-auto">
      {radioCardConfigs.map((config) => {
        return (
          <div className="flex flex-wrap justify-center items-center gap-6">
            {config.items.map((props, index) => {
              return (
                <RadioCard key={`${config.id}-${index}`} {...props}></RadioCard>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export { RadioCards };
