import { Metadata } from 'next';
import EditBookForm from './EditBookForm';

export const metadata: Metadata = {
  title: '도서 수정 - Seanbooks',
  description: '도서 정보를 수정합니다.',
};

type Props = {
  params: {
    id: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

export default function EditBookPage({ params }: Props) {
  return <EditBookForm id={params.id} />;
} 