import Head from 'next/head';

interface customHeadProps {
  subpageTitle?: string;
}

const customHead = (props: customHeadProps) => {
  const { subpageTitle } = props;
  const titleText = `Tony Li ${subpageTitle ? ` - ${subpageTitle}` : ''}`;
  return (
    <Head>
      <title>
        {titleText}
      </title>
    </Head>
  );
};

export default customHead;
