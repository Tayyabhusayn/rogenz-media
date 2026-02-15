import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';

export async function GET() {
  try {
    if (!process.env.MONGODB_URI) {
        return NextResponse.json({ success: true, data: [] });
    }
    await connectToDatabase();
    const articles = await Article.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: articles });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    if (!process.env.MONGODB_URI) {
        return NextResponse.json({ success: false, message: 'Database not configured' }, { status: 500 });
    }
    await connectToDatabase();
    const body = await req.json();
    const article = await Article.create(body);
    return NextResponse.json({ success: true, data: article }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
