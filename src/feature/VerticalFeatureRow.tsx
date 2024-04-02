import className from 'classnames';

import ImageCarousel from './ImageCarousel';

type IVerticalFeatureRowProps = {
  title: string;
  description?: string;
  images?: string[];
  imageAlt?: string;
  reverse?: boolean;
  center?: boolean;
  withLink?: string;
  yPadding?: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
    { 'justify-center': props.center },
    props.yPadding ? 'mt-0' : 'mt-20',
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">
          {props.withLink ? (
            <a href={props.withLink}>{props.title}</a>
          ) : (
            props.title
          )}
        </h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>
      {props.images && <ImageCarousel images={props.images} />}
    </div>
  );
};

export { VerticalFeatureRow };
