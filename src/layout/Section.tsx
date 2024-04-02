import type { ReactNode, RefObject } from 'react';

type ISectionProps = {
  title?: string;
  yPadding?: string;
  children: ReactNode;
  ref?: RefObject<HTMLDivElement>;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto max-w-screen-lg px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {props.title && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
