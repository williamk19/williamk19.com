import pb from '@/lib/pocketbase';
import { Resume } from '@/types/resume.type';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const resume: Resume = await pb.collection('resumes').getFirstListItem('', {
    sort: '-created',
  });

  const pdfUrl = `${process.env.NEXT_PUBLIC_PB_URL}/api/files/${resume.collectionId}/${resume.id}/${resume.document}`;

  try {
    const response = await fetch(pdfUrl);

    if (!response.ok) {
      res.status(response.status).json({ message: 'Failed to fetch PDF' });
      return;
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'inline; filename="william_kurniawan-resume.pdf"',
    );
    res.setHeader('Content-Length', buffer.length);

    res.send(buffer);
  } catch (error) {
    console.error('Error fetching PDF:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
