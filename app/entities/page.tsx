import NextLink from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <NextLink href="/entity/detail/1">Entity 1</NextLink>
        <NextLink href="/entity/detail/2">Entity 2</NextLink>
      </li>
    </ul>
  );
}
