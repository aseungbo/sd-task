interface HeadProps {
  params: {
    slug: number;
  };
}

/**
 * TODO
 * - title에 post.title 적용
 * @param props
 * @returns
 */
export default function Head(props: HeadProps) {
  const { params } = props;

  return (
    <>
      <title>{`Detail ${params.slug}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="게시글에 대한 상세정보를 볼 수 있는 페이지."
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
