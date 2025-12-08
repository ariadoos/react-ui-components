import { Icon } from '@src/components/Icon';
import { TextInput, type CustomIconProps } from '@src/components/TextInput';
import { RiMailLine, RiQuestionLine } from 'react-icons/ri';

const TEXT_INPUT_CONFIG = [
  {
    label: 'Email',
    hintText: 'This is a hint text.',
    placeholder: 'name@email.com',
    IconBack: (props: CustomIconProps) => (
      <Icon IconName={RiQuestionLine} {...props} />
    ),
  },
  {
    label: 'Email',
    hintText: 'This is a hint text.',
    placeholder: 'name@email.com',
    IconFront: (props: CustomIconProps) => (
      <Icon IconName={RiMailLine} {...props} />
    ),
    IconBack: (props: CustomIconProps) => (
      <Icon IconName={RiQuestionLine} {...props} />
    ),
  },
  {
    label: 'Email',
    hintText: 'This is a hint text.',
    placeholder: 'name@email.com',
    IconBack: (props: CustomIconProps) => (
      <Icon IconName={RiQuestionLine} {...props} />
    ),
    disabled: true,
  },
  {
    label: 'Email',
    placeholder: 'name@email.com',
    value: 'name@email.com',
    IconBack: (props: CustomIconProps) => (
      <Icon IconName={RiQuestionLine} {...props} />
    ),
    errorMessage: 'This is an error message.',
  },
];

const TxtInput = () => {
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <div className="flex flex-col w-[340px] justify-center gap-12">
        {TEXT_INPUT_CONFIG.map((config, index) => (
          <TextInput key={index} {...config}></TextInput>
        ))}
      </div>
    </div>
  );
};

export default TxtInput;
