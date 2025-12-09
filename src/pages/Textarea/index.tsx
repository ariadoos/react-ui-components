import { Textarea } from '@src/components/Textarea';

const TEXTAREA_CONFIG = [
  {
    label: 'Description',
    placeholder: 'Write your message...',
    maxLength: 500,
  },
  {
    label: 'Description',
    placeholder: 'Enter a description...',
    errorMessage: 'This field is required',
  },
  {
    label: 'Description',
    placeholder: 'Write your message...',
    disabled: true,
    maxLength: 500,
  },
];

const TextArea = () => {
  return (
    <div className="min-w-[340px] max-w-screen min-h-screen flex justify-center items-center">
      <div className="flex flex-col w-[340px] justify-center gap-8">
        {TEXTAREA_CONFIG.map((config, index) => (
          <Textarea key={index} {...config} />
        ))}
      </div>
    </div>
  );
};

export default TextArea;
