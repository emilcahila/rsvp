type ICTABannerProps = {
  title: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div
    className="flex flex-col items-center justify-center rounded-md bg-primary-100 text-center sm:flex-row sm:items-start sm:justify-center sm:p-12 sm:text-left"
    style={{ paddingBottom: '0px', paddingTop: '2rem' }}
  >
    <div className=" flex flex-col items-center sm:mb-0 sm:w-full">
      <div className="text-center text-2xl font-semibold text-gray-900">
        {props.title}
      </div>
    </div>
  </div>
);

export { CTABanner };
