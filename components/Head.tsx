import Head from 'next/head';

interface customHeadProps {
  subpageTitle?: string;
}

const customHead = (props: customHeadProps) => {
  const { subpageTitle } = props;
  return (
    <Head>
      <title>
        Tony Li
        {subpageTitle ? ` - ${subpageTitle}` : ''}
      </title>
    </Head>
  );
};

export default customHead;
